import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// importing globals:
import colors from '../globals/Colors'

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        console.log('Email: ' + email);
        console.log('Password: ' + password);
    };
    return (
        <View style = {styles.main}>
            <Text style = {styles.signup}>
                Login
            </Text>
            <Text style = {{color: 'white', margin: 5}}>
                please provide these details to login
            </Text>

            <View style={styles.container}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                onChangeText={text => setEmail(text)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />

            <Button title="Login" onPress={handleLogin} />

            <Text style = {{color: 'white', margin: 5}}>
                don't have an account? click to sign in.
            </Text>
            
            </View>
    </View>
    )
}


const styles = StyleSheet.create({
    main: {
      flex: 1,
      backgroundColor: colors.black,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    signup: {
      fontSize: 36,
      textAlign: 'center',
      margin: 15,
      color: 'white'
    },
    container: {
      padding: 16,
      backgroundColor: colors.orange,
      borderRadius: 5,
      margin: 50
    },
    label: {
      fontWeight: 'bold',
      marginBottom: 8,
      textAlign: 'center'
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 10,
      borderRadius: 5,
      backgroundColor: 'white'
    },
  });

export default Login;