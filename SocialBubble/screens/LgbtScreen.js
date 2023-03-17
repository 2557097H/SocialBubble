import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import { getDatabase, ref, update } from "firebase/database"
import { getAuth} from "firebase/auth";

export default function LgbtScreen({navigation}) {

    const auth = getAuth()
    const user = auth.currentUser
    const db = getDatabase()
    const dbRef = ref(db, 'users/' + user.uid);
    const lgbtYes = () => {
        update(dbRef, {
            LGBT: true,
        });
        navigation.navigate("Home");    
    }

    const lgbtNo = () => {
        update(dbRef, {
            LGBT: false,
        });
        navigation.navigate("Home");    
    }

        return (
          <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-nologo.png')}
          >
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Would you like to be placed in LGBT only bubbles?</Text>
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    lgbtYes();
                }}
            >
              <Text style={styles.buttonText}>Yes</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.noButton]}
                onPress={() => {
                  lgbtNo();
                }}
            >
              <Text style={styles.buttonText}>No</Text>
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
      alignContent: "center",
      justifyContent: 'center',
    },

    title: {
      color: 'grey',
      fontSize: 25,
      alignContent: "center",
      justifyContent: 'center',
      textAlign: 'center'
    },

    buttonContainer:{
      marginTop: 15,
      width: "60%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
    },

    button: {
      width: "40%",
      backgroundColor: "#9BD9F4",
      padding: 5,
      borderRadius: 10,
      alignItems: "center",
      margin: 10,
    },

    noButton: {
        backgroundColor: "lightgray",
      },

    buttonText: {
      color: "black",
      fontSize: 20,
    }
  });