import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

//imported components
import FinishedButton from '../components/FinishedButton';

//Basically the original App.js file
function ConfirmPasswordScreen(props) {
        return (
          <View style={styles.container}>

            <Text style={styles.titles}>Reset Password</Text>

            <TextInput
                         style={styles.passwordBox}
             placeholder="  Old Password"
            />

            <TextInput
                         style={styles.passwordBox}
             placeholder="  New Password"
            />

            <TextInput
             style={styles.passwordBox}
             placeholder="  Confrim New Password"
            />

            <FinishedButton text="RESET"/>

            <Text style={{marginLeft:20, fontSize: 10, color: 'red'}}>
              New passwords don't match
            </Text>

            <StatusBar style="auto" />
          </View>
        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ADD8E6',
    },
    passwordBox:{
      height:40,
      marginHorizontal:20,
      marginVertical:10,
      borderWidth:1,
      borderColor:'grey',
    },
    titles:{
      fontWeight:"bold",
      fontSize:25,
      color: "Grey",
      paddingHorizontal:20,
      paddingTop:70,
      paddingBottom:15,
    },
  });

export default ConfirmPasswordScreen;