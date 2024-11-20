import { StyleSheet, View } from 'react-native';
import CounterComponent from './Components/CounterComponent';
import ButtonsComponent from './Components/ButtonsComponent';
import { Provider } from 'react-redux';
import store from './Store/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <CounterComponent name="Component A"></CounterComponent>
        <ButtonsComponent></ButtonsComponent>
        <CounterComponent name="Component B"></CounterComponent>
      </View> 
      </Provider>
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