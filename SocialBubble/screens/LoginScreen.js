import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import { createUserAPI } from '../api/createUser';


//details page where the user enters their personal details. Just a prototype.
//DOB field is just text input rather than date selector
//The form is no functional at

export default function LoginScreen({navigation}) {
        return (
          //Keyboard avoiding view so when entering details the keyboard doesn't cover the fields
          <ScrollView>
          <KeyboardAvoidingView
          style={styles.container}
          //behavior="padding"
          >
        
            <Image 
              style={styles.logo}
              source={require('../assets/sb.png')} />
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Your Email"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
              <TextInput
              placeholder = "Your Password"
              //value={ }
              //onChangeText={text => }
              style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Details")}
            >
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Details")}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            </View>

            
            
            <View style={styles.socialButtonContainer}>
            <TouchableOpacity
                style={[styles.googleButton, styles.socialButton]}
                onPress={() => navigation.navigate("Details")}
            >
              <Image 
              style={styles.image}
              source={require('../assets/google.png')} />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.facebookButton, styles.socialButton]}
                onPress={() => navigation.navigate("Details")}
            >
              <Image 
              style={styles.image}
              source={require('../assets/facebook.png')} />
              <Text style={styles.facebookButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            </View>

            
          </KeyboardAvoidingView>
          </ScrollView>

        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },

    logo: {
      marginTop: 50,
    },

    titleContainer: {
      marginBottom: 25,
      //marginTop: 200,
    },

    title: {
      color: 'grey',
      fontSize: 30,
      //alignItems: 'center',
      //justifyContent: 'center',
    },

    inputContainer: {
      width: '80%',
      marginTop: 30,
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
      backgroundColor: "lightgrey",
      padding: 5,
      borderRadius: 10,
      margin: 5,
      alignItems: "center",
    },

    buttonText: {
      color: "black",
      fontSize: 20,
    },

    socialButtonContainer: {
      flex: 1,
      width: "60%",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 150,
    },

    socialButton: {
      width: "120%",
      padding: 10,
      borderRadius: 10,
      margin: 5,
      alignItems: "center",
      flexDirection: "row",
    },

    facebookButton: {
      backgroundColor: "#4267B2",
    },

    facebookButtonText: {
      paddingLeft: 50,
      color: "white",
    },

    googleButton: {
      backgroundColor: "white",
    },

    googleButtonText: {
      paddingLeft: 50,
      color: "grey",
    },

    image: {
      width: 30,
      height: 30,
      backgroundColor: "transparent",
    }
  });
