import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';



// importing components:
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <HomePage />
      {/* <Footer /> */}
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
