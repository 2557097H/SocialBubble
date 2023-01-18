import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

export default function HomeScreen(props) {
        return (
            <View style = {styles.title}>
            <Text style = {styles.titleText}>SocialBubbleHome</Text>
            <StatusBar style='auto'></StatusBar>
            </View>    
        );

      }

const windowWidth = Dimensions.get('window').width;
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
