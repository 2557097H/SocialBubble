import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, ImageBackground  } from 'react-native';
import { getAuth } from "firebase/auth"
import { getDatabase, ref, onValue } from "firebase/database"



const LobbyScreen = ({navigation}) => {

  const auth = getAuth();
  // const user = auth.currentUser;
  // const userId = user.uid
  // const displayName = user.displayName;
  const db = getDatabase();


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


  distBetweenCoords(59.3293371, 13.4877472, 59.3225525, 13.4619422)




  





  return (
    <ImageBackground
          style={styles.backgroundImage}
          source={require('../assets/sb-logo.png')}
    >

    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Hold tight! We'll have you in a bubble soon</Text>
      </View>

    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlesContainer:{
    paddingHorizontal: 20,
  },
  titles:{
    color: 'grey',
    fontSize: 30,
    alignContent: 'center',
  },
});

export default LobbyScreen;
