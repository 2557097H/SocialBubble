import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//imports LoginScreen from the screens folder
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'
import Details from './screens/Details'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    //Stack navigation that allows the user to navigate between login and details page
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
