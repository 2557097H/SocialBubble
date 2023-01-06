import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button} from 'react-native';


//Displays Socialbubble with a button leading to the details page
//The button's only function is to go to the next page and can't actually log in yet
export default function LoginScreen({ navigation }) {
    return (
          <View style={styles.container}>
            <Text style={styles.title}>Social Bubble</Text>
            <Button
              title="Login"
              onPress={() => navigation.navigate("Details")}
            />
            <StatusBar style="auto" />
          </View>
        );
      }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center', },

    title: {
      flex: 0,
      color: 'dodgerblue',
      fontSize: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },
<<<<<<< HEAD
  });

export default LoginScreen;
=======
  });
>>>>>>> a0e0ffa (Created a basic frontend for the login/signup page where when the button is clicked it takes the user toa page where they can type in their details. Everything is just a frontend and there is no functionality)
