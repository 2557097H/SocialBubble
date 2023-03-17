import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { getDatabase } from "firebase/database";
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
import ProfileScreen from './screens/ProfileScreen';
import LobbyScreen from './screens/LobbyScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import OtherUsersProfileScreen from './screens/OtherUsersProfileScreen';
import ValidationScreen from './screens/ValidationScreen';
import ValidationPendingScreen from './screens/ValidationPendingScreen';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyCQGbg_k9aE5FxsPHB9FenzAONu4_yNfWE",
  authDomain: "socialbubble-ff070.firebaseapp.com",
  projectId: "socialbubble-ff070",
  storageBucket: "socialbubble-ff070.appspot.com",
  messagingSenderId: "426846827737",
  appId: "1:426846827737:web:58cdaded0ed89d490afac8",
  measurementId: "G-1EQTFQNESR"
};


var myVariable = Math.random();



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Initialize Firebase
const Tab = createBottomTabNavigator();
export default function App() {
  return(

    //NavigationBar elements, WIll be updated with default routes and icons in later commits
    <NavigationContainer>
    <Tab.Navigator 
    screenOptions={{
    headerShown: false,
    tabBarStyle: {
      height: 60,
      paddingHorizontal: 5,
      backgroundColor: '#cfedf7',
  },
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
            initialParams={{ myVariable }}
            options={{
              tabBarLabel: 'ChatBubble',
              
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="chat" color={color} size={size} />
              ),
            }}
            />

            {/*profile screen on taskbar*/}
            <Tab.Screen name ="Profile" component={ProfileScreen}
            options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="user" size={24} color="grey" />
              ),
            }}
            />

            <Tab.Screen name ="Settings" component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Feather name="settings" size={24} color="grey" />
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
              tabBarButton: () => null,
              tabBarStyle:{display: 'none'},
              tabBarVisible: false, 
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

            {/*screens not being added to the taskbar*/}

            <Tab.Screen name ="Lobby" component={LobbyScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="OtherUsersProfile" component={OtherUsersProfileScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="EditProfile" component={EditProfileScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />
            <Tab.Screen name ="Validation" component={ValidationScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            />  
            <Tab.Screen name ="ValidationPending" component={ValidationPendingScreen}
            options={{
              tabBarButton: () => null,
              tabBarStyle: { display: 'none'},
              tabBarVisible: false, 
            }}
            /> 
        </Tab.Navigator>
    </NavigationContainer>  
);
}
