import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native';
import DropDown from '../components/Dropdown';

const interests = [
  { label: 'Sports', value: '1' },
  { label: 'Gaming', value: '2' },
  { label: 'Art', value: '3' },
  { label: 'Music', value: '4' },
  { label: 'Travel', value: '5' },
  { label: 'Cooking', value: '6' },
];

export default function PreferencesScreen({navigation}) {
        return (
          <KeyboardAvoidingView
          style={styles.container}
          >
            <View style={styles.titleContainer}> 
              <Text style={styles.title}>Interests</Text>
            </View>
            <View style={styles.inputContainer}>
              <DropDown
              data={interests}
              />
            </View>

            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Home")}
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