import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground } from 'react-native';

const PasswordChangedScreen = ({navigation}) => {
        return (
          <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-logo.png')}
          >
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.titlesContainer}>
                <Text style={styles.titles}>Password Changed!</Text>
            </View>
           
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Settings")}
            >
              <Text style={styles.buttonText}>Done</Text>
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
    titles:{
      color: 'grey',
      fontSize: 30,
    },
    buttonContainer:{
      width: "80%",
      alignItems: "center",
      paddingHorizontal: 15,
      borderRadius: 10,
      marginTop: 10,
    },
  });

export default PasswordChangedScreen;