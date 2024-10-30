import { View, StyleSheet, Image, Text } from "react-native";
import React, { useState, useEffect } from "react";

const WeatherForCityScreen = ({ route }) => {
    
const { city } = route.params;
const [temp, setTemp] = useState(0)
const [description, setDescription] = useState("")
const [icon,SetIcon] = useState("")
const [name, setName] = useState("")
    
   useEffect(() => { 
      fetchWeatherForCity(city)
   }, [])
  
  const fetchWeatherForCity = async (city) => { 
    await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city + "&appid=ecf5553cc5b15522aea8026824cb8085&units=metric")
      .then((response) => response.json().
        then((json) => {
          setName(json.name)
          setDescription(json.weather[0].description)
          setTemp(json.main.temp)
          SetIcon(json.weather[0].icon)
        })).catch((error) => {
        console.log(error)
      })
  }

    return (
      <View style={styles.weatherView}>
          <Text style={styles.textView}>{ name} </Text>
        <Image style={styles.imageView} source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}></Image>
        <Text style={styles.textView}> { temp} c </Text>
        <Text style={styles.textView}>{description} </Text>
       
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
      flexDirection:'column',
    justifyContent: 'center',
  },
  map: {
    flex: 1
  },
  
  textView: {
    fontSize: 40
  },
  locationView: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
  weatherView: {
    flex: 1,
     alignItems: 'center',
    justifyContent:'center'
  },
  imageView: {
    width: 100,
    height: 100
  }
});

export default WeatherForCityScreen;