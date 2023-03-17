import React, { useState, useEffect}  from 'react';
import { StatusBar } from 'expo-status-bar';
import {Keyboard, TouchableWithoutFeedback, StyleSheet, Text, TextInput, View, Button,BackgroundImage, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground, FileReader} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { getAuth, updateProfile } from "firebase/auth"
import { getDatabase, ref, child, push, update, onValue} from "firebase/database"
import * as MediaLibrary from "expo-media-library";
import ProfileDropDown from '../components/ProfileDropdown';

const EditProfileScreen = ({navigation}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const displayName = user.displayName;
  const userId = user.uid;
  const db = getDatabase();
  const [bio, setBio] = useState("")
  const [interests, setInterests] = useState("")
  const [username, setUsername] = useState(null)
  const [imageToSave, setImageToSave] = useState(null);

  const [profilePicture, setProfilePicture] = useState('../assets/sb-nologo.png');
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    if (!result.canceled){
      setProfilePicture(result.assets[0].uri);
      setImageToSave(result.uri);
    }

  }
  const saveImage = async(uri) => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status === "granted") {
      if(
        MediaLibrary.getAlbumAsync("profilePics")){
        MediaLibrary.addAssetsToAlbumAsync(uri, "profilePics", false)
        update(ref(db, 'users/' + userId), {
          ProfilePic: profilePicture,
        })
        } else {
        const asset = await MediaLibrary.createAssetAsync(picture.uri);
        await MediaLibrary.createAlbumAsync("profilePics", asset, false);
        update(ref(db, 'users/' + userId), {
          ProfilePic: profilePicture,
        })
        }
        console.log("Image successfully saved");
      }
    } catch (error) {
      console.log(error);
    }

    setProfilePicture(snapshot.val().ProfilePic);
  };

  useEffect (() => {
    const dbRef = ref(db, 'users/' + userId);
    onValue(dbRef, (snapshot) => {
      setUsername(snapshot.val().Username);
      setBio(snapshot.val().Bio);
      setInterests(snapshot.val().Interests);
    });
  }, [])

  const changeName=() => {
      if (username != ""){
        update(ref(db, 'users/' + userId), {
          Username: username,
        })
        if (bio != null){
          update(ref(db, 'users/' + userId), {
            Bio: bio,
          })
        }else{
          update(ref(db, 'users/' + userId), {
            Bio: "",
          })
        }
        navigation.navigate("Profile")
        user.reload()
      }else{
        alert("Your username can't be empty");
      }
      
  };

  return (
    <ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/sb-nologo.png')}
  >
    <KeyboardAvoidingView
    style={styles.container}
    >
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss()}>
      <View style={styles.titlesContainer}>
        
        {/*nickname name of the profile*/}
        <View style={styles.titlesContainer}>
          <Text style={styles.subTitles}>Edit username: </Text>
          <TextInput multiline={true}
            style={{
            placeholderTextColor: 'grey',
            multiline: true,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius:8,
            paddingHorizontal: 5,
           }}
            value = {username}
            onChangeText = {
              text=>setUsername(text)
            }
            />
        </View>
        
        {/*profile picture of the profile*/}
        <View style={styles.profilePictureContainer}>
        <Image source={{uri : profilePicture}} style={{
          flex:1,
          borderRadius: 20,
        }} />
        <TouchableOpacity style={styles.editButtonContainer} onPress={pickImage}>
        <FontAwesome name="edit" size={35} color="grey"/>
        </TouchableOpacity>
         </View>

        {/*interests of the profile*/}
        <View style={styles.interestsContainer}>
          <Text style={{
            color: "grey",
          }}
          value={interests}
          onChangeText={text=>setInterests(text)}
          >
               Interests:
          </Text>
          <View style={styles.inputContainer}>
            <ProfileDropDown/>
          </View>
        </View>

        {/*bio of the profile*/}
        <View style={styles.bioContainer}>
        <Text style={{
          color:"grey",
        }}>
               About me:
          </Text>
          <TextInput
            multiline={true}
            placeholderTextColor="grey"
            style={{
            height: "85%",
            borderWidth: 1,
            borderRadius:8,
            textAlignVertical: 'top',
            padding: 10,
           }}
            value={bio}
            onChangeText={text=>setBio(text)}
            />
        </View>
          
        {/*back and edit buttons of the profile*/}
        <View style={styles.buttonsContainer}>
          {/*buttons themselves*/}
          <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.buttonText}> Back </Text>
          </TouchableOpacity>
          <View  style={{flex:.7}}>
          </View>
          <TouchableOpacity 
          style={styles.button}
          onPress={() => {
            saveImage(imageToSave);
            changeName();
          }}>
            <Text style={styles.buttonText}> Save </Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
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
    marginTop: 15,
    alignContent: 'center',
    flex: 1,
    paddingBottom:10,
  },

  inputContainer: {
    width: '80%',
  },

  titles:{
    borderColor: "grey",
    color: 'grey',
    fontSize: 30,
    alignContent: 'center',
  },
  subTitles:{
    color: 'grey',
    fontSize: 15,
    alignContent: 'center',
  },
  editBox:{
    borderColor:"grey",
  },
  profilePictureContainer:{
    color: 'white',
    backgroundColor: 'white',
    height: 330,
    width: 330,
    borderRadius: 20,
    marginBottom: 7,
    flex: 5,
},
  interestsContainer:{
    color: 'white',
    backgroundColor: 'transparent',
    height: 100,
    width: 330,
    borderRadius: 20,
    marginBottom: 7,
    flex: 1.5,
    padding: 10,
    alignItems: 'center',
},
  bioContainer:{
    color: 'white',
    backgroundColor: 'white',
    height: 170,
    width: 330,
    borderRadius: 20,
    flex: 4,
    padding: 10,
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
  editButtonContainer:{
    alignItems: "center",
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: "15%",
    width:"14%",
    backgroundColor: "#9BD9F4",
    borderRadius: 8,
  },
});
export default EditProfileScreen;
