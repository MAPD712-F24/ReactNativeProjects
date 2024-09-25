import { StyleSheet, View } from 'react-native';
import UserListComponent from './Components/UserListComponent';
import QuateComponent from './Components/QuateComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <QuateComponent />
       <UserListComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems:'flex-start',
    justifyContent:'space-between',
  },
});
