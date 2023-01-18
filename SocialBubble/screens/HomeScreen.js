import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image} from 'react-native';

export default function HomeScreen(props) {
        return (
            <View style = {styles.container}>
            <View style = {styles.title}>
            <Text style = {styles.titleText}>SocialBubbleHome</Text>
            </View>
            <View>
            <Image
              source={require('../assets/sb.png')} />
            </View>
            <StatusBar style='auto'></StatusBar>
            </View>    
        );

      }

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:0,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title:{
        width: windowWidth,
        backgroundColor: "#9BD9F4",
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
