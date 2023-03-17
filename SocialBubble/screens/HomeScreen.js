import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground} from 'react-native';

export default function HomeScreen(props) {
        return (
          <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-nologo.png')}
          >
            <View style = {styles.container}>
            
            <StatusBar style='auto'></StatusBar>
            </View>    
          </ImageBackground>
        );

      }

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    backgroundImage:{
      flex:1,
      resizeMode:'cover',
    },
    container:{
        flex:0,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });
