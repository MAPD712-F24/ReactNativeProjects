import React, { useState, useEffect } from "react";
import { Text ,View, StyleSheet, Button } from "react-native";

const LayoutModels = () => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textFourStyle}>Text 4</Text>
            <Text style={styles.textOneStyle}>Text 1</Text>
            <Text style={styles.textTwoStyle}>Text 2</Text>
            <Text style={styles.textThreeStyle}>Text 3</Text>
        </View>
    )

}
 
const styles = StyleSheet.create({
    viewStyle: {
        height: 300,
        backgroundColor: '#0F0EEEE',
        paddingTop: 50,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },
    textOneStyle: {
       flex: 2,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,    
    },
    textTwoStyle: {
      flex: 2,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,    
        alignSelf: 'center'
    },
    textThreeStyle: {
             flex: 2,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 15,    
    }
    ,  textFourStyle: {
            
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 15,  
        flex: 2,
        position: 'absolute'
    }
})

export default LayoutModels;

