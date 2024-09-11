import { StyleSheet, Text, View } from 'react-native';
import CustomComponent from './Components/CustomComponent';
import ColorComponent from './Components/ColorComponent';

export default function App() {
  var greeting = 'JS var';
  var jstextcomponent = <Text style={ {fontSize: 50} }> Text in JS variable </Text>

  return (// html --- xml ==> JSX
    <View style={styles.container}>
        <ColorComponent/>
        <CustomComponent/>
      {/* <Text style={ styles.textStyle}>Hello Week 2</Text>
      <Text style={styles.text2Style}>Hello {greeting}</Text>
      { jstextcomponent } */}
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 30
  },
  text2Style: {
    fontSize: 40,
    backgroundColor: 'gray'
  }
});
