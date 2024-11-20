import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

export default function CounterComponent({ name }) {
    
    const counter = useSelector(store => store)
    
  return (
    <View style={styles.container}>
          <Text style={styles.text}>{name} { counter }</Text>
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
    text: {
        fontSize: 30
    }
});