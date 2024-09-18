import React from "react";
import { View, Image, TextInput, StyleSheet, Button, Text, TouchableOpacity } from "react-native";

export default function TextsComponent() {

    const [userName, setName] = React.useState("");
    const sayHello = () => { 
        alert(`Hello ${userName} You will be logged in soon `);
        setName("");
    };

    return (
        <TouchableOpacity onPress={sayHello}>
        <View>
            <TextInput 
                 style={styles.text}
                placeholder="Enter Your Name"
                value={userName}
                onChangeText={(v) => {
                    setName(v)
                }}
            /> 

                <Image source={require("../assets/beach.jpg")}/>
            <Button title="Log In" onPress={sayHello} ></Button>
            
                <Text style={styles.text}>{userName}</Text>
           
            </View>
            </TouchableOpacity>
    );
    



}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});
