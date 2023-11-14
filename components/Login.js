import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import colors from '../globals/Colors';

// importing globals:
import { useLogged } from '../globals/Variables';

// Get the device's screen height and width
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { logged, updateLogged } = useLogged();

    useEffect(() => {
        if (logged) {
            navigation.navigate('HomePage');
        }
    }, [logged, navigation]);

    const handleLogin = () => {
        console.log('Email: ' + email);
        console.log('Password: ' + password);

        // Update the logged state
        console.log('updated the logged state NOB')
        updateLogged(true);
    };

    const goToSignup = () => {
        navigation.navigate('Signup');
    }

    return (
        <ImageBackground
            source={require('../assets/courthouse-building.jpg')}
            style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.signup}>Login</Text>
                <Text style={styles.provide_details_text}>
                    Please provide these details to login
                </Text>
                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Email</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.labelContainer}>
                        <Text style={styles.label}>Password</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <Button title="Login" onPress={handleLogin} />
                <Text
                    style={styles.signup_text}
                    onPress={() => goToSignup()}
                >
                    Don't have an account? Click to sign in.
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        height: screenHeight, 
        width: screenWidth,
    },
    signup: {
        fontSize: 36,
        textAlign: 'center',
        margin: 15,
        color: 'white',
        fontWeight: 'bold',
    },
    container: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 5,
        margin: 50,
    },
    inputContainer: {
        marginBottom: 16,
    },
    labelContainer: {
        width: '100%',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        color: 'white',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    
    provide_details_text: { 
        color: 'white', 
        margin: 5, 
        textAlign: 'center', 
        marginBottom: 15 
    },
    signup_text: { 
        color: 'white', 
        marginTop: 15,
        textDecorationLine: 'underline', 
        textAlign: 'center' 
    }
});

export default Login;
