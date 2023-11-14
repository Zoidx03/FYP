import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// importing components:
import HomePage from './components/HomePage';
import colors from './globals/Colors';

const Stack = createStackNavigator()

function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.replace("HomePage")
  }, 3000)

  return (
    <View style = {styles.splash_view}>
      {/* <Image
      source = {require("")}
      style = {{}}
    /> */}
    <Text style = {styles.splash_text}>
      ITSS
    </Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      initialRouteName = "SplashScreen" 
      headerMode = "none"
    >

      <Stack.Screen 
        name = "SplashScreen" 
        component={SplashScreen} 
        />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splash_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  splash_text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.orange
  }
});
