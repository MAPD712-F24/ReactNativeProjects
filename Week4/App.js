import { StyleSheet } from 'react-native';
import UserListComponent from './Screens/UserListScreen';
import QuateComponent from './Screens/QuateScreen';
import LayoutModels from './Screens/layoutModelsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import UserDetailsScreen from './Screens/UserDetails';
import NamesScreen from './Screens/NamesScreen';
import AddNewNameScreen from './Screens/AddNewName';

export default function App() {

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

  const UserStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='UserList' component={UserListComponent} />
        <Stack.Screen name='UserDetails' component={UserDetailsScreen}/>
    </Stack.Navigator>
  )
}
    const NamesStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='NamesScreen' component={NamesScreen} />
        <Stack.Screen name='AddNewName' component={AddNewNameScreen}/>
    </Stack.Navigator>
  )
}
  return (
    <NavigationContainer>
       <Tab.Navigator>
          <Tab.Screen name='Home' component={UserStack} />
          <Tab.Screen name='Quate' component={QuateComponent} />
        <Tab.Screen name='Flex' component={LayoutModels} /> 
        <Tab.Screen name='Names' component={NamesStack}/>
      </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     marginTop: 50,
    // backgroundColor: '#fff',
    alignItems:'flex-start',
    justifyContent:'space-between',
  },
});
