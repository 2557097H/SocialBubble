import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from 'firebase/database';



export default function OtherUserScreen(props) {
  const otherUser = navigation.getParam('otherUser', null);
        return (
            <KeyboardAvoidingView
                style={styles.container}
            >
            <View style={styles.userContainer}>
              <Text style={styles.title}>otherUser</Text>

            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleUserSearch();
                  navigation.navigate("ChatScreen",{
                    otherUser: otherUser,
                  });
                }}
            >
              <Text style={styles.buttonText}>Start Chat</Text>
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
    
        userContainer: {
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
    
        },
    });