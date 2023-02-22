import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
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
          }else{
            console.log("No user")
          }
        })

        const handleLogIn=() => {
          signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user; 
                console.log(user.email);
                navigation.navigate("Home");
            })
            .catch(error=>alert(error.message))   
        };

        return (
          <KeyboardAvoidingView
          style={styles.container}
          >
        
            <Image 
              style={styles.logo}
              source={require('../assets/sb.png')} />
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Your Email"
              style={styles.input}
              value={email}
              onChangeText={text=>setEmail(text)}
              />
              <TextInput
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
    },

    title: {
      color: 'grey',
      fontSize: 30,
    },

    inputContainer: {
      width: '80%',
      marginTop: 30,
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
      height: 40,
      backgroundColor: "lightgrey",
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
      flex: 1,
      width: "60%",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: 45,
      marginBottom: 20,
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
