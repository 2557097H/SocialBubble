import React, { useState}  from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button,BackgroundImage, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { getAuth, updateProfile } from "firebase/auth"

const EditProfileScreen = ({navigation}) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const email = user.email;
  const displayName = user.displayName;
  const [name, setName] = useState("")  
  

  const changeName=() => {
    updateProfile(user, {
      displayName: name
    }).then(() => {
      navigation.navigate("Profile")
      user.reload()
    })
    .catch(error=>alert(error.message))
  };



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
          <Text style={styles.subTitles}>Edit nickname: </Text>
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
            value={name}
            onChangeText={text=>setName(text)}
            placeholder= {displayName}
            />
        </View>

        {/*profile picture of the profile*/}
        <View style={styles.profilePictureContainer}>
        <Image source={{uri: 'https://konvajs.org/assets/yoda.jpg'}} style={{
          flex:1,
          borderRadius: 20,
        }} />
         <TouchableOpacity style={styles.editButtonContainer}>
         <FontAwesome name="edit" size={35} color="grey"/>
         </TouchableOpacity>
         </View>

        {/*interests of the profile*/}
        <View style={styles.interestsContainer}>
          <Text style={{
            color: "grey",
          }}>
               Interests (tap to remove):
          </Text>
          <TouchableOpacity style={styles.addInterestButton}>
          <Ionicons name="add" size={35} color="grey" />
          </TouchableOpacity>
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
            placeholder = {"Current Profile"}
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
            changeName();
          }}>
            <Text style={styles.buttonText}> Save </Text>
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
    marginTop: 15,
    alignContent: 'center',
    flex: 1,
    paddingBottom:10,
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
    backgroundColor: 'white',
    height: 100,
    width: 330,
    borderRadius: 20,
    marginBottom: 7,
    flex: 1.5,
    padding: 10,
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
  addInterestButton:{
    alignItems: "center",
    justifyContent: 'center',
    position: 'absolute',
    right: 20,
    top: 20,
    height: 42,
    width: 45,
    backgroundColor: "#9BD9F4",
    borderRadius: 8,
  }
});
export default EditProfileScreen;
