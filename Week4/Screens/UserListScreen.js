import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image, TouchableOpacity } from "react-native";
import SearchBar from "../Components/SearchBar";

const UserListComponent = ({navigation}) => {
  
    const [searchTerm, setSearchTerm] = useState('')
    const [list,setList] = useState([])
    const fetchUser = async() => {
        fetch('https://randomuser.me/api?results=40').
            then(response => response.json()).then(data => { 
                setList(data.results)
            } )
    } 
    useEffect(() => { 
        console.log("In Use Effect")
        fetchUser()
    }, [])
    
    const filterUsers = (nameToSearch) => {
        if (nameToSearch == '') {
            console.log("The search term is empty")
            fetchUser()
        } else {
            var resultList = list.filter((user) => {
                return user.name.first == nameToSearch
            })
            console.log(resultList)
            if (resultList.length > 0) {
                setList(resultList)
            }
        }
        
    }
    userRow = (user) => 
        <TouchableOpacity onPress={() => {
           navigation.navigate('UserDetails', {toUserDetail: user})
        }}>
        <View style={styles.viewStyle}>
                 <View>
                     <Text style={styles.textStyle}>{user.name.first +" "} {user.name.last}</Text>
                     <Text style={styles.textStyle}>{user.email}</Text>
                </View>
            <Image style={styles.imageStyle} source={{
                uri: user.picture.medium
            }}></Image>
            </View>
        </TouchableOpacity>

    return (
        <View>
            <SearchBar term={searchTerm}
                onTermChange={(newTerm) => {
                    setSearchTerm(newTerm)
                    filterUsers(newTerm)
            }} />
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

export default UserListComponent;


