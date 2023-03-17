import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref, update } from 'firebase/database';

const ValidationScreen = ({ navigation }) => {
  const auth = getAuth();
  const db = getDatabase();
  const user = auth.currentUser;
  const userId = user.uid;
  const userRef = ref(db, `users/${userId}`);

  const [passportImage, setPassportImage] = useState(null);
  const [headshotImage, setHeadshotImage] = useState(null);
  const [imagesUploaded, setImagesUploaded] = useState(false);

  const pickPassportImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPassportImage(result.uri);
      if (headshotImage) {
        setImagesUploaded(true);
      }
    }
  };

  const authenticate = () => {
    update(userRef, {
      validationUploaded: "yes",
    });
    navigation.navigate('ValidationPending');
  };
  
  const pickHeadshotImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  
    if (!result.canceled) {
      setHeadshotImage(result.uri);
      if (passportImage) {
        setImagesUploaded(true);
      }
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
    <Text style={styles.title}>Validate your account so people know it's really you!</Text>
    <View style={styles.imageUploadSection}>
    <Text style={styles.sectionTitle}>Passport Picture</Text>
    <TouchableOpacity onPress={pickPassportImage}>
    {passportImage ? (
    <Image source={{ uri: passportImage }} style={styles.imagePreview} />
    ) : (
    <Text style={styles.buttonText}>Upload Passport Picture</Text>
    )}
    </TouchableOpacity>
    </View>

    <View style={styles.imageUploadSection}>
    <Text style={styles.sectionTitle}>Headshot</Text>
    <TouchableOpacity onPress={pickHeadshotImage}>
    {headshotImage ? (
    <Image source={{ uri: headshotImage }} style={styles.imagePreview} />
    ) : (
    <Text style={styles.buttonText}>Upload Headshot</Text>
    )}
    </TouchableOpacity>
    </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={[styles.button, !imagesUploaded && styles.disabledButton]}
          onPress={() => {
          if (imagesUploaded) {
          authenticate();
          } else {
          Alert.alert("Please upload both images to continue.");
      }
  }}
  disabled={!imagesUploaded}
>
  <Text style={styles.buttonText}>Validate</Text>
  </TouchableOpacity>
  </View>
  </KeyboardAvoidingView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imagePreview: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
    borderColor: 'Blue',
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover',
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
  },
  title: {
    paddingTop:30,
    color: 'grey',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 20,
  },
  imageUploadSection: {
    marginVertical: 10,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonsContainer:{
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'space-evenly',
  },
  button:{
    backgroundColor: "#9BD9F4",
    padding: 8,
    alignItems: "center",
    borderRadius: 20,
    minWidth: 100,
  },
  buttonText:{
    color: "black",
    fontSize: 20,
  },
});

export default ValidationScreen;
