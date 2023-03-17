import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';
import { EmailAuthProvider, getAuth, reauthenticateWithCredential, deleteUser} from "firebase/auth";
import { getDatabase, ref, onValue, remove } from "firebase/database"



const DeleteAccountScreen = ({navigation}) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const deletesAccount=() => {
    const auth = getAuth();
    const user = auth.currentUser;
    const userId = user.uid;
    const db = getDatabase();

    const cred = EmailAuthProvider.credential(email,password)
    reauthenticateWithCredential(user, cred)
      .then(() => {
        deleteUser(user).then(() => {
          remove(ref(db, 'users/' + userId));
          navigation.navigate("AccountDeleted")
        }).catch((error) => {
          console.log(error);
        });
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
      <View style={styles.titleContainer}>
          <Text style={styles.titles}>Confirm Login Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
        placeholder = "Email"
        style={styles.input}
        value={email}
        onChangeText={text=>setEmail(text)}
        />
      </View> 
      <View style={styles.inputContainer}>
        <TextInput
        placeholder = "Password"
        style={styles.input}
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry
        />
      </View>  
      <View style={styles.buttonContainer}>
      <TouchableOpacity
          style={styles.button}
          onPress={
            () => {
              deletesAccount();
            }}
            //() => navigation.navigate("AccountDeleted")}
      >
        <Text style={styles.buttonText}>Delete</Text>
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