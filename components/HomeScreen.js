import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={ styles.main }>
            <Text>
                Home Screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    main_text: {

    }
})

export default HomeScreen;