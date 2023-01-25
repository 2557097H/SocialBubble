import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

import FinishedButton from '../components/FinishedButton';


//Basically the original App.js file
const DeleteAccountScreen = ({navigation}) => {
        return (
          <View style={styles.container}>

            <Text style={styles.titles}>Enter the Password for account</Text>

            <TextInput
             style={styles.passwordBox}
            />

            <Button 
              title='Delete' 
              onPress={() => navigation.navigate('AccountDeleted')} />

            <Text style={{marginLeft:20, fontSize: 10, color: 'red'}}>
              incorrect password
            </Text>

            <StatusBar style="auto" />
          </View>
        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      backgroundColor: '#ADD8E6',
    },
    titles:{
      fontWeight:"bold",
      fontSize:25,
      color: "Grey",
      paddingHorizontal:20,
      paddingTop:70,
      paddingBottom:30,
    },
    passwordBox:{
      height:40,
      marginHorizontal:20,
      marginVertical:10,
      borderWidth:1,
      borderColor:'grey',
    },
  });

export default DeleteAccountScreen;