import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';


class Timer extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.upper}>
                    <Text style={styles.text}>11:11</Text>
                </View>
                <View style={styles.lower}>
                    <Text>Button Here!</Text>
                </View>
            </View>
        );
    }
}

export default Timer;

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : "#CE0B24",
    },
    upper: {
        flex : 2,
        justifyContent : "center",
        alignItems : "center"

    },
    lower: {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    text: {
        color : "white",
        fontSize : 120,
        fontWeight : "100",
    },
});