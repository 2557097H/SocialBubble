import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground} from 'react-native';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

//details page where the user enters their personal details.
//DOB field is just text input rather than date selector

export default function LoginScreen({navigation}) {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")


        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
          if(user) {
            const uid = user.uid;
            console.log(uid,"Signedin")
            navigation.navigate("Home")
            this.emailInput.clear();
            this.passwordInput.clear();
            
          }else{
            console.log("No user")
          }
        })

        const handleLogIn=() => {
          signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user; 
                console.log(user.email);
                /* Clear inputs so that if the page is revisited in the same session the form is empty */
                this.emailInput.clear();
                this.passwordInput.clear();
                navigation.navigate("Home");
            })
            .catch(error=>alert(error.message))   
        };

        return (
          <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-logo.png')}
          >
          <KeyboardAvoidingView
          style={styles.container}
          >

            <View style={styles.inputContainer}>
              <View style={styles.gap}/>
              <TextInput
              ref={input => {this.emailInput = input}}
              placeholder = "Your Email"
              style={styles.input}
              value={email}
              onChangeText={text=>setEmail(text)}
              />
              <TextInput
              ref={input => {this.passwordInput = input}}
              placeholder = "Your Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={text=>setPassword(text)}
              />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleLogIn();
                }}
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
          </ImageBackground>
        );
      }

const styles = StyleSheet.create({
  gap: {
    height: '48%',
  },
    container: {
      marginTop: 20,
      alignItems: 'center',
    },

    inputContainer: {
      width: '80%',
      marginTop: 20,
      marginBottom: 40,
      justifyContent: 'flex-end',
    },
    input: {
      backgroundColor: "white",
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 10,
    },

    buttonContainer:{
      width: "60%",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    button: {
      width: "80%",
      height: 40,
      backgroundColor: "#9BD9F4",
      padding: 5,
      borderRadius: 10,
      margin: 5,
      alignItems: "center",
    },
    buttonText: {
      padding: "1%",
      color: "black",
      fontSize: 20,
    },

    socialButtonContainer: {
      width: "60%",
      alignItems: "center",
      marginTop: 45,
      marginBottom: 10,
      justifyContent: "flex-start",
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
