import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { createUserAPI } from '../api/createUser';
import { createTestUserAPI } from '../api/testUser';
//details page where the user enters their personal details. Just a prototype.
//DOB field is just text input rather than date selector
//The form is no functional atm
const PersonalDetailsScreen = () => {

      const[email, setEmail] = useState('')
      const[date_of_birth, setDOB] = useState('')
      const[occupation, setOccupation] = useState('')
      const[name, setName] = useState('')
      const[confirmEmail, setConfirmEmail] = useState('')
      const[password, setPassword] = useState('')
      const[confirmPassword, setConfirmPassword] = useState('')

      const submitUser = () => {
        console.log("this works")
        if(!email || !date_of_birth || !occupation || !name || !confirmEmail || !password || !confirmPassword) {
          alert("Some information is missing, please re-enter")
          return;
        }
        if(email != confirmEmail){
          alert("emails don't match")
          return;
        }
        if(password != confirmPassword){
          alert("passwords don't match")
          return;
        }
        //Hash password and compare comfirmemailsandpasswords
        console.log("about to call API..")
        //api call here
        createTestUserAPI(email, date_of_birth, occupation, name, password)
      }

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
              value={name}
              onChangeText={text => setName(text)}
              style={styles.input}
              />
              <TextInput
              placeholder = "Date_of_Birth"
              value={date_of_birth}
              onChangeText={text => setDOB(text)}
              style={styles.input}
              />
              <TextInput
              placeholder = "Occupation"
              value={occupation}
              onChangeText={text => setOccupation(text)}
              style={styles.input}
              />
              <TextInput
              placeholder = "Email"
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
              />
              <TextInput
              placeholder = "Confirm Email"
              value={confirmEmail}
              onChangeText={text => setConfirmEmail(text)}
              style={styles.input}
              />
              <TextInput
              placeholder = "Password"
              secureTextEntry
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              />    
              <TextInput 
              placeholder = "Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={text => setConfirmPassword(text)}
              style={styles.input}
              />                       
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress = {submitUser}
            >
              <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>

            </View>
          </KeyboardAvoidingView>


        );
      }


      export default PersonalDetailsScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      marginTop: 20,
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
      backgroundColor: "#9BD9F4",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
    },

    buttonText: {
      color: "black",
      fontSize: 20,

    }
  });