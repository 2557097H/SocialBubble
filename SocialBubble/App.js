import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PersonalDetailsScreen from './screens/PersonalDetailsScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>

    <Tab.Navigator>
            <Tab.Screen name ="Home" component={HomeScreen}/>
            <Tab.Screen name ="Login" component={LoginScreen}/>
            <Tab.Screen name ="Friends" component={HomeScreen}/>
            <Tab.Screen name ="Settings" component={SettingsScreen}/>
            <Tab.Screen name ="OuterBubble" component={ChatScreen}/>
        </Tab.Navigator>

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
