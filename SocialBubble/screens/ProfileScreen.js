import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground  } from 'react-native';
import { getAuth } from "firebase/auth"

const ProfileScreen = ({navigation}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const displayName = user.displayName;


  return (
              <ImageBackground
              style={styles.backgroundImage}
              source={require('../assets/sb-nologo.png')}
            >
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
        
        {/*nickname name of the profile*/}
        <View style={styles.titlesContainer}>
          <Text style={styles.titles}>{displayName}</Text>
          <Text style={styles.subTitles}>@{displayName}</Text>
        </View>

        {/*profile picture of the profile*/}
        <Image
            source={{
            uri: 'https://konvajs.org/assets/yoda.jpg',
        }}
        style={styles.profilePictureContainer}
         />

        {/*interests of the profile*/}
        <View style={styles.interestsContainer}>
          <Text style={styles.bioTextS}>
               interests shown here
          </Text>
        </View>

        {/*bio of the profile*/}
        <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
               bio to be shown here
          </Text>
        </View>
          
        {/*back and edit buttons of the profile*/}
        <View style={styles.buttonsContainer}>
          {/*buttons themselves*/}
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("Home")}>
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
          <View  style={{flex:.7}}>
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("EditProfile")}>
            <Text style={styles.buttonText}> Edit </Text>
          </TouchableOpacity>
        </View>
      </View>

    </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
  
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlesContainer:{
    paddingHorizontal: 20,
    marginTop: 15,
    alignContent: 'center',
    flex: 1,
    paddingBottom:10,
  },
  titles:{
    color: 'grey',
    fontSize: 30,
    alignContent: 'center',
  },
  subTitles:{
    color: 'grey',
    fontSize: 15,
    alignContent: 'center',
  },
  profilePictureContainer:{
    color: 'white',
    backgroundColor: 'white',
    width: 330,
    borderRadius: 20,
    marginBottom: 7,
    flex: 5,
},
  interestsContainer:{
    color: 'white',
    backgroundColor: 'white',
    width: 330,
    borderRadius: 20,
    marginBottom: 7,
    flex: 1.5,
    padding:10,
},
  bioContainer:{
    color: 'white',
    backgroundColor: 'white',
    width: 330,
    borderRadius: 20,
    flex: 4,
    padding: 10,
  },
  bioText:{
    color:"black",
  },
  buttonsContainer:{
    flexDirection: 'row',
    flex: 1,
    marginBottom: 20,
  },
  button:{
    marginTop: 10,
    width: "40%",
    backgroundColor: "#9BD9F4",
    padding: 8,
    alignItems: "center",
    borderRadius: 20,
    flex:1,
  },
  buttonText:{
    color: "black",
    fontSize: 20,
  },
});

export default ProfileScreen;
