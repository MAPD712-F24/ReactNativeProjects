import { StyleSheet, Text, View, Image } from 'react-native';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import WeatherForLocationComponent from "../Components/WeatherForLocationComponent";
 
export default function LocationAndWeather() {

  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [temp, setTemp] = useState(0)
  const [description, setDescription] = useState("")
  const [icon,SetIcon] = useState("")
  const [name,setName] = useState("")


const getLocation = async () => {
   let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
  await Location.watchPositionAsync({
    accuracy: Location.Accuracy.BestForNavigation,
    distanceInterval: 10,
    timeInterval: 1000
  }, (location) => { 
    setLatitude(location.coords.latitude)
    setLongitude(location.coords.longitude)
    fetchWeather(latitude,longitude)
  })
}
  
  const fetchWeather = async (lat,lon) => { 
    await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=ecf5553cc5b15522aea8026824cb8085&units=metric")
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
  
  useEffect(() => {
    getLocation();
  },[])

  return (
    <View style={styles.container}>
        <View style={styles.locationView}>
        <Text style={styles.textView}> Latitude: {latitude}</Text>
         <Text style={styles.textView}>Longitude: {longitude}</Text>
       </View>
          <WeatherForLocationComponent
              icon={icon}
              temp={temp}
              description={description}
            name ={name}
          /> 
    </View>
  );
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
    fontSize: 30
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
