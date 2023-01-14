import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';

//details page where the user enters their personal details. Just a prototype.
//DOB field is just text input rather than date selector
//The form is no functional atm
export default function PersonalDetailsScreen({navigation}) {
        return (
          //Keyboard avoiding view so when entering details the keyboard doesn't cover the fields
          <KeyboardAvoidingView
          style={styles.container}
          //behavior="padding"
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Personal Details</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Name"
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
              <TextInput
              placeholder = "Occupation"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Email"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Confirm Email"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Password"
              secureTextEntry
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />    
              <TextInput 
              placeholder = "Confirm Password"
              secureTextEntry
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />                       
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Preferences")}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            </View>
          </KeyboardAvoidingView>


        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleContainer: {
      marginBottom: 25,
    },

    title: {
      color: 'grey',
      fontSize: 30,
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    inputContainer: {
      width: '80%',
      //marginTop: 150,
      //alignContent: 'flex-start',
    },

    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },

    buttonContainer:{
      marginTop: 15,
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
    },

    button: {
      width: "80%",
      backgroundColor: "dodgerblue",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
    },

    buttonText: {
      color: "white",
      fontSize: 20,

    }
  });