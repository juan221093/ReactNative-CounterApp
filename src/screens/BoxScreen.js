import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const BoxScreen = () => { 
    return <View style={styles.viewStyle}>
        <View style={styles.boxStyle1} />
        <View style={styles.boxStyle2} />
        <View style={styles.boxStyle3} />

    </View>

};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 200,
        flexDirection:'row',
        justifyContent:'space-around'
        
        
    },

    boxStyle1: {
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'green',
        height: 100,
        width: 100,


    },

    boxStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        height: 100,
        width: 100,
        alignSelf:'flex-end'
    },

    boxStyle3: {
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'blue',
        height: 100,
        width: 100,



    }

});

export default BoxScreen