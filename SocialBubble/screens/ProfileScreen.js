import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground  } from 'react-native';
import { getAuth } from "firebase/auth"
import { getDatabase, ref, onValue } from "firebase/database"

const ProfileScreen = ({navigation}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid
  const displayName = user.displayName;
  const db = getDatabase();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [interests, setInterests] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect (() => {
    const dbRef = ref(db, 'users/' + userId);
    const interestRef = ref(db, 'interests/');
    var interestsName = []

    onValue(dbRef, (snapshot) => {
      if(!snapshot.val().ProfilePic){
        setProfilePicture(require('../assets/Default.jpg'))
      } else {
        setProfilePicture({uri : snapshot.val().ProfilePic});
      }
      
      setName(snapshot.val().Name);
      setUsername(snapshot.val().Username);
      setBio(snapshot.val().Bio);
      if (snapshot.val().Interests != null){
      onValue(interestRef, (interestSnapshot) => {
        interestsName = []
        interestsName.push("My Interests are ")
        for(let i=0; i<snapshot.val().Interests.length; i++){
          if(i != snapshot.val().Interests.length-1){
            interestsName.push(interestSnapshot.val()[snapshot.val().Interests[i]] + ", ")
          }
          else{
            interestsName.push(interestSnapshot.val()[snapshot.val().Interests[i]])
          }
        }
        setInterests(interestsName);
      });
    }
      
    });
  }, [])

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
          <Text
          style={styles.titles}>
            {name}
          </Text>
          <Text style={styles.subTitles}>@{username}</Text>
        </View>

        {/*profile picture of the profile*/}
        <Image
            source={profilePicture}
            style={styles.profilePictureContainer}
         />

        {/*interests of the profile*/}
        <View style={styles.interestsContainer}>
          <Text style={styles.bioTextS}>
               {interests}
          </Text>
        </View>

        {/*bio of the profile*/}
        <View style={styles.bioContainer}>
        <Text style={styles.bioText}>
               {bio}
          </Text>
        </View>
          
        {/*back and edit buttons of the profile*/}
        <View style={styles.buttonsContainer}>
          {/*buttons themselves*/}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button:{
    width: "60%",
    backgroundColor: "#9BD9F4",
    justifyContent: 'center',
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
