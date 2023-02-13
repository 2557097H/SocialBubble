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
import ConfirmPasswordScreen from './screens/ConfirmPasswordScreen';
import DeleteAccountScreen from './screens/DeleteAccountScreen';
import AccountDeletedScreen from './screens/AccountDeletedScreen';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQGbg_k9aE5FxsPHB9FenzAONu4_yNfWE",
  authDomain: "socialbubble-ff070.firebaseapp.com",
  projectId: "socialbubble-ff070",
  storageBucket: "socialbubble-ff070.appspot.com",
  messagingSenderId: "426846827737",
  appId: "1:426846827737:web:58cdaded0ed89d490afac8",
  measurementId: "G-1EQTFQNESR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="Details" component={PersonalDetailsScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="PasswordChanged" component={PasswordChangedScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle:{display: 'none'},
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="ConfirmPassword" component={ConfirmPasswordScreen}
            options={{
              tabBarLabel: 'ChangePassword',
              tabBarVisible: false,
              tabBarButton: () => null,
            }}
            />
            <Tab.Screen name ="DeleteAccount" component={DeleteAccountScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />   
            <Tab.Screen name ="AccountDeleted" component={AccountDeletedScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none' },
              tabBarVisible: false, 
            }}
            />   
        </Tab.Navigator>
    </NavigationContainer>  
);
}
