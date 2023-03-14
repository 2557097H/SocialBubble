import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, ImageBackground, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { EmailAuthCredential, EmailAuthProvider, getAuth, reauthenticateWithCredential, sendPasswordResetEmail, updatePassword} from "firebase/auth";

const ConfirmPasswordScreen = ({navigation}) => {
      const [email, setEmail] = useState(null);
      const [password, setPassword] = useState(null);
      const [newPassword, setNewPassword] = useState(null);


        const checkFields=()=>{
          if((email == null) || (password == null) || (newPassword == null)){
            alert("Please fill in all fields!");
          
          }else if(password == newPassword){
            alert("New password cannot be the same as the old password");
          }else{
            changesPassword();
            
          }
        }


        const changesPassword=() => {
          const auth = getAuth();
          const user = auth.currentUser;
          const cred = EmailAuthProvider.credential(email,password)
          reauthenticateWithCredential(user, cred)
            .then(() => {
              updatePassword(user, newPassword)
                .then(() => {
                  /* Clear inputs so that if the page is revisited in the same session the form is empty */
                  this.emailInput.clear();
                  this.currentPasswordInput.clear();
                  this.newPasswordInput.clear();
                  navigation.navigate("PasswordChanged")
                })
            }) 
        }

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
              ref={input => {this.emailInput = input}}
              placeholder = "Email"
              style={styles.input}
              value={email}
              onChangeText={text=>setEmail(text)}
              />
              <TextInput
              ref={input => {this.currentPasswordInput = input}}
              placeholder = "Current Password"
              style={styles.input}
              value={password}
              onChangeText={text=>setPassword(text)}
              secureTextEntry
              />
              <TextInput
              ref={input => {this.newPasswordInput = input}}
              placeholder = "New Password"
              style={styles.input}
              value={newPassword}
              onChangeText={text=>setNewPassword(text)}
              secureTextEntry
              />    
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                //onPress={() => navigation.navigate("PasswordChanged")}
                onPress={() => {
                  checkFields();
                }}
            >
              <Text style={styles.buttonText}>Change Password</Text>
            </TouchableOpacity>

            </View>


            <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Settings");
              }}

            >
              <Text style={styles.buttonText}>Back</Text>
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