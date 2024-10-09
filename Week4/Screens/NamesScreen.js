import React, { useState } from "react";
import { Text, FlatList ,View, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

const NamesScreen = ({navigation}) => {

    const [names, setNames] = useState(['Mary','John'])
    return (
        <View style={styles.viewStyle}>
            <FlatList
                data={names}
                keyExtractor={(item,i) => i.toString()}
                renderItem={({ item }) => <Text style={styles.textStyle}>{item}</Text> }
            ></FlatList>
            <TouchableOpacity style={styles.floatingActionButton} onPress={() => {
                navigation.navigate('AddNewName', {
                    addItem: (newName) => {
                    setNames((prevItems)=>[...prevItems, newName])
                }})
            }}>
                    <Ionicons name="add" size={50} color="black" />
            </TouchableOpacity>
        </View>
   )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
    , viewStyle: {
        flex: 1, 
        justifyContent: 'center',
        alignContent: 'stretch'
    },
    floatingActionButton: {
        position: 'absolute',
        right: 10,
        bottom: 10,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default NamesScreen;


