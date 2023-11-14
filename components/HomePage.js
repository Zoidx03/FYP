import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importing components:
import Login from './Login';
import Signup from './Signup';
import HomeScreen from './HomeScreen';

// Importing globals:
import { useLogged } from '../globals/Variables';

const Stack = createNativeStackNavigator();

export default function HomePage() {
  const { logged } = useLogged();

  return (
    <>
      {logged ? (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      )}
    </>
  );
}

const homeStyle = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  scrollContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 12,
  },

  scrollView: {
    flex: 1,
    padding: 20,
    borderRadius: 12,
  },

  title: {
    textAlign: "center",
    // fontFamily: "",
    fontWeight: "bold",
    fontSize: 30,
  }
});
