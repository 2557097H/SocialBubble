import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, get, child } from 'firebase/database';

const db = getDatabase();
const auth = getAuth();

var userRef = [];
var otherUser = "";

const handleUserSearch=(userID) => {
    const dbRef = ref(getDatabase());
  get(child(dbRef, 'users/')).then((snapshot) => {
    if (snapshot.exists()){
        userRef=snapshot.val();
    }else{
        console.log("No data available");
    };
    for (let i = 0; i < userRef.length; i++){
        if(userRef[i] == userID){
            otherUser = userRef[i];
            break;
        };
    };
    }).catch((error) => {
      console.error(error);
    });
};

export default function ChatLobbyScreen(props) {
    const [search, setSearch] = useState("");
        return (
            <KeyboardAvoidingView
                style={styles.container}
            >
            <View style={styles.inputContainer}>
                

                <TextInput
                    placeholder = "Username"
                    style={styles.input}
                    onChangeText={text=>setSearch(text)}
                />


            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  handleUserSearch(search);
                  navigation.navigate("OtherUser", {
                    otherUser: otherUser,
                  });
                }}
            >
              <Text style={styles.buttonText}>Search</Text>
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
    
        },
    });