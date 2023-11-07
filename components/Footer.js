import { Text, View, StyleSheet } from 'react-native';

export default function Footer() {

    var date = new Date();
    var year = date.getFullYear();

    return (
        <View style = { footerStyle.container }>
            <Text>
                © {year} All rights reserved by ITSS
            </Text>
        </View>
    )
};

const footerStyle = StyleSheet.create ({
    container: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        borderTopColor: "black",
        minWidth: "100%"
    }
})