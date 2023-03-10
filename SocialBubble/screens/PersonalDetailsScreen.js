import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import PreferencesScreen from './PreferencesScreen';
 
export default function PersonalDetailsScreen({navigation}) {

        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [name, setName] = useState("");
        const [dob, setDOB] = useState("");
        const [occupation, setOccupation] = useState("");
        const [confirmEmail, setConfirmEmail] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("");


        const handleSignUp=() => {
          console.log(email);

          const auth = getAuth()
          createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user; 
                console.log(user.email);
                updateProfile(auth.currentUser, {
                  displayName: name
                }).then(() => {
                  
                  /* Clear inputs so that if the page is revisited in the same session they are gone */
                  this.nameInput.clear();
                  this.dobInput.clear();
                  this.occupationInput.clear();
                  this.emailInput.clear();
                  this.confirmEmailInput.clear();
                  this.passwordInput.clear();
                  this.confirmPasswordInput.clear();

                  navigation.navigate("Preferences");
                }).catch(error=>alert(error.message))
            })
            .catch(error=>alert(error.message))   
        };


        return (<ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-nologo.png')}
          >
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Personal Details</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              ref={input => {this.nameInput = input}}
              placeholder = "Name"
              style={styles.input}
              value={name}
              onChangeText={text=>setName(text)}
              />
              <TextInput
              ref={input => {this.dobInput = input}}
              placeholder = "Date of Birth"
              value={dob}
              style={styles.input}
              onChangeText={text=>setDOB(text)}
              />
              <TextInput
              ref={input => {this.occupationInput = input}}
              placeholder = "Occupation"
              value={occupation}
              style={styles.input}
              onChangeText={text=>setOccupation(text)}
              />
              <TextInput
              ref={input => {this.emailInput = input}}
              placeholder = "Email"
              style={styles.input}
              value={email}
              onChangeText={text=>setEmail(text)}
              />
              <TextInput
              ref={input => {this.confirmEmailInput = input}}
              placeholder = "Confirm Email"
              style={styles.input}
              value={confirmEmail}
              onChangeText={text=>setConfirmEmail(text)}
              />
              <TextInput
              ref={input => {this.passwordInput = input}}
              placeholder = "Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={text=>setPassword(text)}
              />    
              <TextInput 
              ref={input => {this.confirmPasswordInput = input}}
              placeholder = "Confirm Password"
              secureTextEntry
              style={styles.input}
              value={confirmPassword}
              onChangeText={text=>setConfirmPassword(text)}
              />                       
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleSignUp();
                }}
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

    title: {
      color: 'grey',
      fontSize: 30,
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

    buttonContainer:{
      marginTop: 15,
      width: "60%",
      justifyContent: "center",
      alignItems: "center",
    },

    button: {
      width: "80%",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
      backgroundColor: "#9BD9F4",
    },

    buttonText: {
      color: "black",
      fontSize: 20,
    }
  });