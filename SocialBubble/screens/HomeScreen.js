import {React} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground} from 'react-native';

export default function HomeScreen(props) {


  function degreesToRadians(d){
    return d * Math.PI/180;
  }

  function distBetweenCoords(lat1, lng1, lat2, lng2){

    var R = 6371; // km
    var distLat = degreesToRadians(lat2-lat1);
    var distLng = degreesToRadians(lng2-lng1);
    var lat1 = degreesToRadians(lat1);
    var lat2 = degreesToRadians(lat2);

    var a = Math.sin(distLat/2) * Math.sin(distLat/2) +
      Math.sin(distLng/2) * Math.sin(distLng/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    console.log(d);
    return d;

  }



  function ageDifference(dob1, dob2){

    /* First calculate the age of both users */

    dob1 = dob1.split("/");
    dob2 = dob2.split("/");

    var dob1TimeStamp = new Date(dob1[2], dob1[1]-1, dob1[0]);
    var dob2TimeStamp = new Date(dob2[2], dob2[1]-1, dob2[0]);

    var currentDate = new Date(); 

    dob1diff = currentDate - dob1TimeStamp;
    dob2diff = currentDate - dob2TimeStamp;

    var dob1Age = Math.floor(dob1diff/(1000*60*60*24*365.25));
    var dob2Age = Math.floor(dob2diff/(1000*60*60*24*365.25));

    diffInAge = Math.abs(dob1Age-dob2Age);
    console.log(diffInAge);

  }

  ageDifference("27/08/2001", "23/02/1970");
  distBetweenCoords(59.3293371, 13.4877472, 59.3225525, 13.4619422);




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
