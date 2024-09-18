import React from "react";
import { View, Image, TextInput, StyleSheet, Button, Text, FlatList, TouchableOpacity } from "react-native";

export default function MyList() {

const friendList = [
        { name: 'John',age: 20 , key: 123},
        { name: 'Mary' , age: 34, key: 111},
        { name: 'Lee' ,age : 22 , key: 922},
        { name: 'Frad' ,age: 21, key: 134},
        { name: 'Sam' , age : 40, key: 888 },
        {name: 'Smith', age: 33, key: 1244},
    ];

    return (
        <FlatList
         
            key={friendList.key}
            data={friendList}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity>
                        <View style={styles.rowView} >
                            <Text style={styles.text}>Name : {item.name} Age: { item.age} </Text>
                            <Image source={require("../assets/forest.jpg")}/>

                        </View>
                    </TouchableOpacity>
                )
            }
        }
        />
          );
    



}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    rowView: {
        flexDirection: 'row'
    }
});
