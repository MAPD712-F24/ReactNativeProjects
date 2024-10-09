import React from "react";
import { Text ,View, StyleSheet } from "react-native";

const UserDetailsScreen = ({ route }) => {
    const user = route.params.toUserDetail;
    return (
        <View>
            <Text style={styles.textStyle}>{user.name.first}'s Address</Text>
            <Text style={styles.textStyle}> City: {user.location.city} </Text>
            <Text style={styles.textStyle}> Country: {user.location.country}</Text>
            <Text style={styles.textStyle}> PostalCode: {user.location.postcode} </Text>
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

export default UserDetailsScreen;


