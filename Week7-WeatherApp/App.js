import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LocationAndWeather from './Screens/LocationAndWeatherScreen';
import UserListComponent from './Screens/UserListScreen';
import { createStackNavigator} from '@react-navigation/stack';
import WeatherForCityScreen from './Screens/WeatherForCityScreen';
import FavoriteCitiesScreen from './Screens/FavoriteCitiesScreen';

export default function App() {

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


      const WeatherStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='citiesList' component={UserListComponent} />
        <Stack.Screen name='weatherInCity' component={WeatherForCityScreen}/>
    </Stack.Navigator>
  )
}
  return (
    <NavigationContainer>
       <Tab.Navigator>
        <Tab.Screen name='Home' component={LocationAndWeather} /> 
        <Tab.Screen name='Cities' component={WeatherStack} />
        <Tab.Screen name='Favorit Cities' component={FavoriteCitiesScreen} />
      </Tab.Navigator>
      </NavigationContainer>
  );
}
