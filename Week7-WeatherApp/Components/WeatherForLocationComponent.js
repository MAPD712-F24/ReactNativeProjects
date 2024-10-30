import { View, StyleSheet, Image, Text } from "react-native";

const WeatherForLocationComponent = ({icon, temp, description, name }) => {
    return (
       <View style={styles.weatherView}>
        <Image style={styles.imageView} source={{uri: `https://openweathermap.org/img/wn/${icon}@2x.png`}}></Image>
        <Text style={styles.textView}> { temp} c </Text>
        <Text style={styles.textView}>{description} </Text>
         <Text style={styles.textView}>{ name} </Text>
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

export default WeatherForLocationComponent;