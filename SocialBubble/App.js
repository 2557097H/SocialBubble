import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//imports LoginScreen from the screens folder
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalDetailsScreen from './screens/PersonalDetailsScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    //Stack navigation that allows the user to navigate between login and details page
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Details"
          component={PersonalDetailsScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Preferences"
          component={PreferencesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
