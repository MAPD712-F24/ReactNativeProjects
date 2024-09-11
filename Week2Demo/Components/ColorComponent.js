import React from "react";
import { Text, Button, TextInput , StyleSheet , View} from "react-native";
import { useState } from "react";

const ColorComponent = () => {

    const randomColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        
        return `rgb(${red},${green},${blue})`;
    };
    const [color, setColor] = useState('rgb(255,255,0)');
    return (
        <View>
            <Button title="Change color"
                onPress={() => {
                setColor(randomColor());
            }}></Button>
            <View style ={ {height: 100, width: 100, backgroundColor: color} }></View>
        </View>
    );
}


const styles = StyleSheet.create({
    textinputStyle : {
        fontSize: 30
    },
     texStyle : {
        fontSize: 30
    },
    viewStyle: {
        height: 100,
        width: 100,
         backgroundColor: 'red'
     }
     

});

export default ColorComponent;