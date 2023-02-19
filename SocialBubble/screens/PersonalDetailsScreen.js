import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';
import PreferencesScreen from './PreferencesScreen';
 
export default function PersonalDetailsScreen({navigation}) {

        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")
        const [name, setName] = useState("")
        const [dateOfBirth, setDateOfBirth] = useState("")
        const [occupation, setOccupation] = useState("")

        const auth = getAuth();
        const db = getDatabase();
        const handleSignUp=() => {
          createUserWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user.email);
                set(ref(db, 'users/' + user.uid), {
                  Name: name,
                  DateOfBirth: dateOfBirth,
                  Occupation: occupation
                });
            })
            .catch(error=>alert(error.message))
        };


        return (
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Personal Details</Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput
              placeholder = "Name"
              style={styles.input}
              onChangeText={text=>setName(text)}
              />
              <TextInput
              placeholder = "Date of Birth"
              style={styles.input}
              onChangeText={text=>setDateOfBirth(text)}
              />
              <TextInput
              placeholder = "Occupation"
              style={styles.input}
              onChangeText={text=>setOccupation(text)}
              />
              <TextInput
              placeholder = "Email"
              style={styles.input}
              value={email}
              onChangeText={text=>setEmail(text)}
              />
              <TextInput
              placeholder = "Confirm Email"
              style={styles.input}
              />
              <TextInput
              placeholder = "Password"
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={text=>setPassword(text)}
              />    
              <TextInput 
              placeholder = "Confirm Password"
              secureTextEntry
              style={styles.input}
              />                       
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleSignUp();
                  navigation.navigate("Preferences");
                }}
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