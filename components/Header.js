import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={ headerStyle.container }>
        <Text>
          header yay!!!
        </Text>
    </View>
  );
};

const headerStyle = StyleSheet.create ({
  container: {
    width: '100%',
    elevation: 1,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
