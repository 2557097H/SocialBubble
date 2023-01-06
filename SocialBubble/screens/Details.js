import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';

//details page where the user enters their personal details. Just a prototype.
//DOB field is just text input rather than date selector
//The form is no functional atm
export default function FirstScreen() {
        return (
          //Keyboard avoiding view so when entering details the keyboard doesn't cover the fields
          <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Social Bubble</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "First Name"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Surname"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Date of Birth"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
            </View>
          </KeyboardAvoidingView>
        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 0,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleContainer: {
      flex: 0,
      marginBottom: 100,
      marginTop: 100,
    },

    title: {
      color: 'dodgerblue',
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    inputContainer: {
      width: '80%'
    },

    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    

    },
  });