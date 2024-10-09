import React ,{useState} from "react";
import {  View, StyleSheet, TextInput, Button } from "react-native";

const AddNewNameScreen = ({ navigation, route}) => {
    const [newName, setNewName] = useState('');

    const addNewItemToList = () => {
        const { addItem } = route.params;
        if (newName.trim !== '') {
            addItem(newName)
            navigation.goBack()
        }
    }

    return (
        <View>
            <TextInput 
                style={styles.textStyle}
                placeholder="Enter a New Name"
                value={newName}
                onChangeText={setNewName}
            >
            </TextInput>
            <Button title="Save"
                onPress={ addNewItemToList }></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
    , viewStyle: {
        backgroundColor: 'gray',
        margin: 10
    },
})

export default AddNewNameScreen;


