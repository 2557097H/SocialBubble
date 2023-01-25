import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import ChatScreen from './screens/ChatScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import PersonalDetailsScreen from './screens/PersonalDetailsScreen';
import PreferencesScreen from './screens/PreferencesScreen';
import PasswordChangedScreen from './screens/PasswordChangedScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';
import AccountDeletedScreen from './screens/AccountDeletedScreen';
const Tab = createBottomTabNavigator();

export default function App() {
  return(

    //NavigationBar elements, WIll be updated with default routes and icons in later commits
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
    headerShown: false
    }}>
            <Tab.Screen name ="Login" component={LoginScreen}
            options={{
              tabBarLabel: 'Login',
              tabBarStyle: { display: 'none' },
              tabBarButton: () => null,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="login" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name ="Home" component={HomeScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name ="OuterBubble" component={ChatScreen}
            options={{
              tabBarLabel: 'ChatBubble',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name ="Settings" component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="star-settings" color={color} size={size} />
              ),
            }}
            />
            <Tab.Screen name ="Preferences" component={PreferencesScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
            />
            <Tab.Screen name ="Details" component={PersonalDetailsScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
            />
            <Tab.Screen name ="PasswordChanged" component={PasswordChangedScreen}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
            />
            <Tab.Screen name ="DeleteAccount" component={DeleteAccountScreen}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
            />   
            <Tab.Screen name ="AccountDeleted" component={AccountDeletedScreen}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false, // if you don't want to see the tab bar
            }}
            />   
        </Tab.Navigator>
    </NavigationContainer>  
);
}
