import React from "react";
import { View, StyleSheet, Button, Text, TouchableOpacity} from "react-native";
import ColorCounter from "./ColorCounter";

export default function ColorGenerator() {
    const [v, setV] = React.useState(false);
    const [red, setRed] = React.useState(0);
    const [green, setGreen] = React.useState(0);
    const [blue, setBlue] = React.useState(0);
    return (
        <View>
            <ColorCounter
                color="Red"
                moreColor={() =>      
                    setRed(red + 10)
                }
                lessColor={() => {
                    if (red -10 < 0)
                        setRed(0);
                    else 
                        setRed(red - 10);
                }}
            />
            <ColorCounter
                color="Blue"
                moreColor={() => {
                    setBlue(blue + 10)
                }}
                lessColor={() => {
                     if (blue -10 < 0)
                       setBlue(0)
                    else 
                        setBlue(blue - 10);
                    
                }}
            />
            <ColorCounter
                color="Green"
                moreColor={() =>   setGreen(green + 10)
              }
                lessColor={()=> setGreen(green - 10)}
            />
            <TouchableOpacity onPress={()=> setV(!v)} >
            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red}, ${green},${blue})`
            }}>
            </View>
            </TouchableOpacity>
            { 
                v && <Text style={styles.text}>The Color is {red} , {green}, {blue}</Text>
            }
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
