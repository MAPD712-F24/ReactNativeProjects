// Building our ReactNative Component

// part 1 : import statments
// part 2: function/class ==> the return of this function is JSX
// part 3: style
// part 4: export the function

import React from "react";
import { Text, Button, TextInput , StyleSheet , View} from "react-native";
import { useState } from "react";

const CustomComponent = () => {

    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    var colors = ['red', 'blue', 'black'];
    var [color1, color2, color3] = colors;

    // var color1 = colors[0];
    // var color2 = colors[1];
    console.log(color1);
    console.log(color2);
     console.log(color3);

   // var counter = 100;
    return (
        <View>
            <TextInput style={styles.textinputStyle} placeholder="Enter Your Name"
                onChangeText={(value) => {
                setName(value);
             }}></TextInput>
            <Text style={styles.texStyle}>{ name }</Text>
            
            
            <Text style={styles.texStyle}>{counter}</Text>
            <Button title="Counter++ " onPress={() => {  
                setCounter(counter + 1);
                console.log(counter);
            }} ></Button>
            
            <Button title="Counter-- " onPress={() => { 
                setCounter(counter - 1);
                console.log(counter);
            }}></Button>
            
            

       </View>
    ); 
}

const styles = StyleSheet.create({
    textinputStyle : {
        fontSize: 30
    },
     texStyle : {
        fontSize: 30
    }

});

export default CustomComponent;