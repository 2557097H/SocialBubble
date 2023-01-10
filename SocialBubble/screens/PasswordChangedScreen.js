import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

//component imports
import FinishedButton from '../components/FinishedButton';

//Basically the original App.js file
function PasswordChangedScreen(props) {
        return (
          <View style={{backgroundColor: '#ADD8E6'}}>
            <View style={styles.container}>
            <Text style={styles.titles}>Password Changed! </Text>

              <FinishedButton text='Done' />

            </View>
          </View>
        );
      }

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      height: 800,
      padding: 20,
    },
    titles:{
      fontWeight:"bold",
      fontSize:25,
      color: "Grey",
      paddingHorizontal:20,
      paddingTop:70,
      paddingBottom:30,
    },
  });

export default PasswordChangedScreen;