import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//imports LoginScreen from the screens folder
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'

export default function App() {
  // when the app is open simply calls the login screen
  // later this can be changed to display the home page if the user is loged in
  // else the login screen
  return(
    <ChatScreen/>
  );
}
