
import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FinishedButton({ text }){
    return(
        <View style={Style.buttonShape}>
        <Button title ={text} />
        </View>
    )
}


const Style = StyleSheet.create({
    buttonShape: {
        paddingRight:200,
        paddingTop:15,
        paddingHorizontal: 20,
        backgoundColour: 'black',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    }
})