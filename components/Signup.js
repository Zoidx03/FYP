import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
// importing globals:
import colors from '../globals/Colors';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [employeeId, setEmployeeId] = useState('');

  const handleSignup = () => {
    console.log('First Name: ' + firstName);
    console.log('Last Name: ' + lastName);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('Designation: ' + designation);
    console.log('Phone Number: ' + phoneNumber);
    console.log('Employee ID: ' + employeeId);
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/signup_bg.jpg')}
      style={{ ...styles.main, width: screenWidth, height: screenHeight }}
    >
      <View style={styles.container}>
        <Text style={styles.signup}>Sign Up</Text>
        <Text style={styles.normal_text}>
          Please provide these details to create an account
        </Text>

        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your first name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />

        <Text style={styles.label}>Last Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your last name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Text style={styles.label}>Designation</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your designation"
          value={designation}
          onChangeText={(text) => setDesignation(text)}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <Text style={styles.label}>Employee ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your employee ID"
          value={employeeId}
          onChangeText={(text) => setEmployeeId(text)}
        />

        <Button title="Sign Up" onPress={handleSignup} />
        <Text style={styles.login_text} onPress={() => goToLogin()}>
          Already have an account? Click to login.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  signup: {
    fontSize: 36,
    textAlign: 'center',
    margin: 15,
    color: 'white',
  },
  normal_text: {
    color: 'white',
    margin: 10,
    textAlign: 'center',
  },
  container: {
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 5,
    margin: 50,
    width: screenWidth,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  login_text: {
    color: 'white',
    marginTop: 15,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default Signup;
