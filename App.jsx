import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import MenuPage from './src/pages/MenuPage';


export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar hidden/>
        <MenuPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: "center"
  },
});
