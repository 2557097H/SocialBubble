import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './Screens/LoginScreen'
import Home from './Screens/HomeScreen'
import Settings from './Screens/SettingsScreen'
import BubbleChat from './Screens/ChatScreen'

const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
        return (
            <View style = {styles.container}>
            <View style = {styles.title}>
            <Text style = {styles.titleText}>SocialBubbleHome</Text>
            </View>

            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name ="Home" component={Home}/>
                    <Tab.Screen name ="Login" component={Login}/>
                    <Tab.Screen name ="Friends"/>
                    <Tab.Screen name ="Settings" component={Settings}/>
                    <Tab.Screen name ="OuterBubble" component={BubbleChat}/>
                </Tab.Navigator>
            </NavigationContainer>

            </View>
        );

      }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        width: windowWidth,
        backgroundColor: "blue",
        padding:20,
        marginTop:25,
        alignItems: 'center',
        flexDirection: 'row',
        
    
      },

      titleText:{
        color: "white",
        fontWeight: "600",
        fontSize: 25,
      },
      
    
    
  });
