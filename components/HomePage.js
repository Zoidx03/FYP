import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import Login from './Login';

export default function HomePage() {
  return (
    <View>
      <Login />
    </View>

    // <View style={ homeStyle.container }>  
    //   {/* <Text>homepage yay!!!</Text> */}
    //   <View style={ homeStyle.scrollContainer }>
    //     <ScrollView style={ homeStyle.scrollView }>
    //       <Text style={ homeStyle.title }>
    //         Available Footage(s)
    //       </Text>
    //     </ScrollView>
    //   </View>
    // </View>
  );
};

const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },

  scrollContainer: {
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 12
  },

  scrollView: {
    flex: 1,
    padding: 20,
    borderRadius: 12
  },

  title: {
    textAlign: "center",
    fontFamily: "",
    fontWeight: "bold",
    fontSize: 30
  }
})
