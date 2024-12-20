import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Alert, TouchableOpacity,Button } from "react-native";
import * as SQLite from 'expo-sqlite';

const FavoriteCitiesScreen = () => {
   
    const [list, setList] = useState([''])
    const [deleteRow, setDeleteRow] = useState(null);
    const confirmDelete = (city) => {
        Alert.alert("Confirm Delete",
            "Are you sure you want to delete this city form DB?",
            [
                { text: "Cancel", onPress: () => { setDeleteRow(null) } },
                {text :   "Delete", onPress : handelDelete(city)  }
            ])
    }


    const handelDelete = async(city) => {
        var  db = await SQLite.openDatabaseSync('favoriteCities.db');
        await db.runAsync("Delete From cities WHERE city = $city" , {$city : city} )
        getData()
        setDeleteRow(null)
    }

    const getData = async() => {
     var   db = await SQLite.openDatabaseSync('favoriteCities.db');
           console.log("get all cities")
       var favcities =  await db.getAllAsync(`SELECT * FROM cities`);
        var dblist = []
       for (const row of favcities) {
             console.log(row);
             dblist.push(row.city)
        }
        setList(dblist)
    }



    useEffect(() => { 
        console.log("In Use Effect")
       getData()
    }, [])
    userRow = (city) => 
        <View style={styles.viewStyle}>
                 <View>
                <Text style={styles.textStyle}>{city} </Text>
                <TouchableOpacity onPress={() => {
                    (city) => {
                        confirmDelete(city) 

                    }
                }}>
                    <Text>Delete</Text>
                </TouchableOpacity>
                </View>
        </View>
    return (
        <View>
           <Button title="Update" onPress = {()=>{
            getData()
           }}/>
            <FlatList
                data={list}
                keyExtractor={(item,i) => i}
                renderItem={ (listItem) => 
                    userRow(listItem.item)
                }
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

export default FavoriteCitiesScreen;



