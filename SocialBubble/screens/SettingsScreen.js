import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { getAuth, signOut} from "firebase/auth";


const SettingsScreen = ({ navigation }) => {

  const auth = getAuth()
  const handleSignOut=() => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch(error=>alert(error.message))   
  };


  return (
    <View
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleSignOut();
          }}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ConfirmPassword")}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("DeleteAccount")}
        >
          <Text style={styles.buttonText}>Delete Account</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: "80%",
    backgroundColor: "lightgrey",
    padding: 5,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
  },
  titles:{
    fontWeight:"bold",
    fontSize:35,
    color: "black",
    paddingHorizontal:45,
    paddingTop:70,
    paddingBottom:30,
    
  },
  
  buttonContainer:{
    width: "80%",
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
});

export default SettingsScreen;
