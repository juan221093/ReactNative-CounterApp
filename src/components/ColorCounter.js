import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => { //that 'color' comes from the property in SquareScreen.js this to use it instead of props
    return <View>
        <Text>{color}</Text>
        <Button onPress={()=> onIncrease()} title={`Increase ${color}`} /> 
        <Button onPress={()=> onDecrease()} title={`Decrease ${color}`} />

    </View>
}; //for tittle don't use "" to bring in the prop, use {`Something ${color}`} 

const styles = StyleSheet.create({

});

export default ColorCounter;