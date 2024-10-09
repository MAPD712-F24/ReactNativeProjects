import React, { useState, useEffect } from "react";
import { Text ,View, StyleSheet, Button } from "react-native";

const QuateComponent = () => {
  
    const [quote, setQuote] = useState('')
    const [author, setAuthor] = useState('')

    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
      }
   };
    const fetchQuote = async() => {
        fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',options).
            then(response => response.json()).then(data => {
                setQuote(data[0].quote)
                setAuthor(data[0].author)
            } )
    }
    useEffect(() => { 
        fetchQuote()
    },[]) 
    return (
        <View>
            <Text style={styles.textStyle}> { quote} </Text>
            <Text style={styles.textStyle}> { author} </Text>
            <Button title="Get New Quote" onPress={fetchQuote}> </Button>
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
    imageStyle: {
        width: 50,
        height: 50
    }
})

export default QuateComponent;


