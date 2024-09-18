import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TextsComponent from './Components/TextsComponent';
import MyList from './Components/MyList';
import ColorGenerator from './Components/ColorGenerator';

export default function App() {
  return (
    <View style={styles.container}>
     <ColorGenerator/>
      {/* <TextsComponent/> 
     <MyList/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
