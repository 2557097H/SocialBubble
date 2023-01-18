import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import PersonalDetailsScreen from './screens/PersonalDetailsScreen';
import PreferencesScreen from './screens/PreferencesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return(

    //NavigationBar elements, WIll be updated with default routes and icons in later commits
    <NavigationContainer>
    <Tab.Navigator>
            <Tab.Screen name ="Home" component={HomeScreen}/>
            <Tab.Screen name ="Login" component={LoginScreen}/>
            <Tab.Screen name ="OuterBubble" component={ChatScreen}/>
            <Tab.Screen name ="Settings" component={SettingsScreen}/>
            <Tab.Screen name ="Preferences" component={PreferencesScreen}/>
            <Tab.Screen name ="Details" component={PersonalDetailsScreen}/>          
        </Tab.Navigator>
    </NavigationContainer>  
);
}
