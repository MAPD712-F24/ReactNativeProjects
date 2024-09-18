import React from "react";
import { View, StyleSheet, Button, Text} from "react-native";

const ColorCounter = ({color , moreColor, lessColor}) => {
    return (
        <View>
            <Text style={styles.text}> { color } </Text>
                 <View style={styles.rowView}>
                     <Button style={styles.text} title="++" onPress={moreColor}> </Button>
                     <Button style={styles.text} title="--" onPress={lessColor}> </Button>
                </View>
            </View>
          );
}



const styles = StyleSheet.create({
 rowView: {
        flexDirection: 'row'
    },
     text: {
        fontSize: 30
    },
});

export default ColorCounter;