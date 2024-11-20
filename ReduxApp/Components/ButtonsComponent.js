import { StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { decrease, increase, setToZero, times } from '../Actions/actions';


export default function ButtonsComponent() {

    const dispatch = useDispatch();

  return (
    <View style={styles.container}>
          <Button title='+ 5' onPress={() => { dispatch(increase(5)) } } ></Button>
          <Button title='- 9' onPress={() => { dispatch(decrease(9)) }} ></Button>
          <Button title='* 3' onPress={() => { dispatch(times(3)) }} ></Button>
          <Button title='Set To Zero' onPress={() => { dispatch(setToZero(0)) }} ></Button>
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