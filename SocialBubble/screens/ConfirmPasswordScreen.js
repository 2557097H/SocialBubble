import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';

const ConfirmPasswordScreen = ({navigation}) => {
        return (
          <ImageBackground
              style={styles.backgroundImage}
              source={require('../assets/sb-nologo.png')}
            >
          <KeyboardAvoidingView
          style={styles.container}
          >




            <View style={styles.titlesContainer}>
                <Text style={styles.titles}>Change Password</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Password"
              style={styles.input}
              />
              <TextInput
              placeholder = "New Password"
              style={styles.input}
              />
              <TextInput
              placeholder = "Confirm New Password"
              style={styles.input}
              />                     
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("PasswordChanged")}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            </View>
            

          </KeyboardAvoidingView>

          </ImageBackground>
        );
      }

const styles = StyleSheet.create({
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
    container: {
      flex: 1,
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleContainer: {
      marginBottom: 25,
    },
    
    inputContainer: {
      width: '80%',
    },   
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },

    button: {
      marginTop: 20,
      width: "80%",
      backgroundColor: "#9BD9F4",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
    },

    buttonText: {
      color: "black",
      fontSize: 20,

    }
    ,
    buttonContainer:{
      width: "80%",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 10,
    },
    titles:{
      color: 'grey',
      fontSize: 30,
    },
  });

export default ConfirmPasswordScreen;