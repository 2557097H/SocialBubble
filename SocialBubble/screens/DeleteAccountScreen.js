import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, TouchableOpacity} from 'react-native';



const DeleteAccountScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titleContainer}>
          <Text style={styles.titles}>Enter password to delete:</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder = "Password"
        style={styles.input}
        />
      </View>  
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AccountDeleted")}
      >
        <Text style={styles.buttonText}>Delete</Text>
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
    marginBottom: 5,
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
    marginHorizontal: 20,
  },
  });

export default DeleteAccountScreen;