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
    <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-nologo.png')}
          >


    <View
      style={styles.container}
    >
      <View style={styles.titlesContainer}>
        <Text style={styles.titles}>Settings</Text>
      </View>

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

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Validation")}
        >
          <Text style={styles.buttonText}>Validate Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("LGBT")}
        >
          <Text style={styles.buttonText}>Change LGBT Preferences</Text>
        </TouchableOpacity>
        
      </View>
    </View>
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
  button: {
    width: "80%",
    backgroundColor: "#9BD9F4", 
    padding: 5,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
  },
  titles:{
    color: 'grey',
    fontSize: 30,
  },
  buttonContainer:{
    width: "80%",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default SettingsScreen;
