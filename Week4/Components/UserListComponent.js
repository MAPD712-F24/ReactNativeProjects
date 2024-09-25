import React, { useState, useEffect } from "react";
import { Text, FlatList ,View, StyleSheet, Image } from "react-native";

const UserListComponent = () => {
    const [list,setList] = useState([])
    const fetchUser = async() => {
        fetch('https://randomuser.me/api?results=20').
            then(response => response.json()).then(data => {
                setList(data.results)
            } )
    } 
    useEffect(() => { 
        fetchUser()
    },[])
    userRow = (user) => 
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{user.name.first +" "} {user.name.last}</Text>
            <Text style={styles.textStyle}>{user.email}</Text>
            <Image style={styles.imageStyle} source={{
                uri: user.picture.medium
            }}></Image>
        </View>

    return (
            <FlatList
                data={list}
                 keyExtractor={(item,i) => i}
                renderItem={ (listItem) => 
                    userRow(listItem.item)
                }
            ></FlatList>
   )

}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 20
    }
    , viewStyle: {
        backgroundColor: 'gray',
        margin: 10,
    },
    imageStyle: {
        width: 50,
        height: 50
    }
})

export default UserListComponent;


