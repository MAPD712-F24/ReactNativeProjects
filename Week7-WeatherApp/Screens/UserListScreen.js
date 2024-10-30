import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import SearchBar from "../Components/SearchBar";
import * as SQLite from 'expo-sqlite';

const UserListComponent = ({navigation}) => {

const [searchTerm, setSearchTerm] = useState('')
const [selectedCity, setSelectedCity] = useState('')
const [list, setList] = useState([''])
    const [db, setDb] = useState(null);

 const initializeDb = async () => {
    try {
      const database = await SQLite.openDatabaseAsync('favoriteCities.db');
      setDb(database);

      await db.execAsync(`
         CREATE TABLE IF NOT EXISTS cities (id INTEGER PRIMARY KEY NOT NULL, city TEXT NOT NULL); 
          
         `);
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  };

  const insertCityToDb = async (city) => {
    if (!db) {
      console.error('Database not initialized');
      return;
    }
    try {
    const result =  await db.runAsync(`INSERT INTO cities (city) VALUES (?)`,city);
   
      console.log("City inserted successfully:", city);
    } catch (error) {
      console.error('Error inserting city:', error);
    }
  };

    const fetchCities = async (query) => {
        
        fetch('http://gd.geobytes.com/AutoCompleteCity?&q='+query).
            then(response => response.json()).then(data => { 
                setList(data)
            } )
    } 
    useEffect(() => { 
        console.log("In Use Effect")
        fetchCities("")
      
       initializeDb()
    }, [])

  const createThreeButtonAlert = (c) =>
    Alert.alert('Add To Favorait', 'Do you want to save this city in DB?', [
      {
        text: 'Yes, Save it in DB and Go To Weather',
            onPress: () =>{
                console.log("Inserting city:", c); // Log the city being inserted

             if (!selectedCity) {
                  setSelectedCity("")
                  console.error("Selected city is undefined");
                  return;
             }
                 insertCityToDb(c)
                navigation.navigate('weatherInCity', { city: c });
        },
      },
      {
        text: 'Yes, Save it to Async',
          onPress: () =>
              console.log('Save to Async'),
      },
        {
            text: 'No, Only Go to weather',
            onPress:async () => {
               await navigation.navigate('weatherInCity', { city: c })
            }  
        },
    ]);
    return (
        <View>
            <SearchBar term={searchTerm}
                onTermChange={(newTerm) => {
                     setSearchTerm(newTerm)
                    fetchCities(newTerm)
            }} />
            <FlatList
                data={list}
                keyExtractor={(item,i) => i}
                renderItem = {({item})=>{
                    console.log(item)
                    return (
                  <TouchableOpacity 
                  onPress = {() => {
                     setSelectedCity(item)
                     console.log("new selected city " + item)
                    createThreeButtonAlert(item)
                }}>
                <View style={styles.viewStyle}>
                         <View>
                            <Text style={styles.textStyle}>{item} </Text>
                    </View>
                </View>
            </TouchableOpacity>
                   
                )}}
            ></FlatList>
        </View>
   )

}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 20
    }
    , viewStyle: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent:'space-between',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 10
    },
    imageStyle: {
        width: 50,
        height: 50
    }
})

export default UserListComponent;



