import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, Button, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Geocode from "react-geocode";
import { getDatabase, ref, set, } from "firebase/database";
import PreferencesScreen from './PreferencesScreen';
import GenderDropdown from '../components/GenderDropdown';

export default function PersonalDetailsScreen({ navigation }) {



  Geocode.setLanguage("en");
  Geocode.setRegion("uk");
  Geocode.setLocationType("ROOFTOP");
  Geocode.enableDebug();

  /* Regex below taken from  https://stackoverflow.com/questions/15491894/regex-to-validate-date-formats-dd-mm-yyyy-dd-mm-yyyy-dd-mm-yyyy-dd-mmm-yyyy */
  let validDOB = new RegExp(
    /(^(((0[1-9]|1[0-9]|2[0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/,
    "g"
  );
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [gender, setGender] = useState();
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [dob, setDOB] = useState(null);
  const [occupation, setOccupation] = useState(null);
  const [confirmEmail, setConfirmEmail] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [city, setCity] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const checkFields = () => {
    if ((email == null) || (password == null) || (name == null) || (dob == null) || (occupation == null) || (confirmEmail == null) || (confirmPassword == null) || (city == null)) {
      alert("Please fill in all fields");
    } else if (email != confirmEmail) {
      alert("Emails do not match!");
    } else if (password != confirmPassword) {
      alert("Passwords do not match!");
    } else if (!validDOB.test(dob)) {
      alert("Date of birth invalid. Please use format dd/mm/yyyy");
    } else {
      //handleSignUp();
      getLangLong();
    }
  }

  const clearForms = () => {
    if (username != null) {
      this.usernameInput.clear();
    }
    if (email != null) {
      this.emailInput.clear();
    }
    if (password != null) {
      this.passwordInput.clear();
    }
    if (name != null) {
      this.nameInput.clear();
    }
    if (dob != null) {
      this.dobInput.clear();
    }
    if (occupation != null) {
      this.occupationInput.clear();
    }
    if (confirmEmail != null) {
      this.confirmEmailInput.clear();
    }
    if (confirmPassword != null) {
      this.confirmPasswordInput.clear();
    }
    if (city != null) {
      this.cityInput.clear()
    }

  }

  const getLangLong = () => {
    Geocode.fromAddress(city).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
    handleSignUp();
  }


  const handleSignUp = () => {
    const auth = getAuth()
    const db = getDatabase()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email);
        console.log(gender);
        set(ref(db, 'users/' + user.uid), {
          Name: name,
          Username: username,
          Gender: gender,
          DateOfBirth: dob,
          Occupation: occupation,
          City: city,
          Longitude: longitude,
          Latitude: latitude,
          innerBubbleID: null,
          dateAddedToBubble: null,
          validationUploaded: null,
          validated: null
        });
        clearForms();
        navigation.navigate("Preferences");
      })
      .catch(error => alert(error.message))
  };


  return (<ImageBackground
    style={styles.backgroundImage}
    source={require('../assets/sb-nologo.png')}
  >
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Personal Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={text => setUsername(text)}
          ref={input => { this.usernameInput = input }}
          returnKeyType="next"
          onSubmitEditing={() => { this.nameTextInput.focus(); }}
          blurOnSubmit={false}
          autoCapitalize="none"
        />
        <TextInput
          ref={input => { this.nameInput = input; this.nameTextInput = input }}
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.dobTextInput.focus(); }}
          blurOnSubmit={false}
        />
        <GenderDropdown 
          onChange= {
            setGender
          }
        />
        <TextInput
          ref={input => { this.dobInput = input; this.dobTextInput = input }}
          placeholder="Date of Birth (dd/mm/yyyy)"
          value={dob}
          style={styles.input}
          onChangeText={text => setDOB(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.jobTextInput.focus(); }}
          blurOnSubmit={false}
        />
        <TextInput
          ref={input => { this.occupationInput = input; this.jobTextInput = input }}
          placeholder="Occupation"
          value={occupation}
          style={styles.input}
          onChangeText={text => setOccupation(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.cityTextInput.focus(); }}
          blurOnSubmit={false}
        />
        <TextInput
        ref={input => { this.cityInput = input; this.cityTextInput = input }}
        placeholder="City/Town"
        style={styles.input}
        value={city}
        onChangeText={text=>setCity(text)}
        returnKeyType="next"
        onSubmitEditing={() => { this.emailTextInput.focus(); }}
        blurOnSubmit={false}
        />
        <TextInput
          ref={input => { this.emailInput = input; this.emailTextInput = input }}
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={text => setEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.confirmEmailTextInput.focus(); }}
          blurOnSubmit={false}
          autoCapitalize="none"
        />
        <TextInput
          ref={input => { this.confirmEmailInput = input; this.confirmEmailTextInput = input }}
          placeholder="Confirm Email"
          style={styles.input}
          value={confirmEmail}
          onChangeText={text => setConfirmEmail(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.passwordTextInput.focus(); }}
          blurOnSubmit={false}
          autoCapitalize="none"
        />
        <TextInput
          ref={input => { this.passwordInput = input; this.passwordTextInput = input }}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          returnKeyType="next"
          onSubmitEditing={() => { this.confirmPasswordTextInput.focus(); }}
          blurOnSubmit={false}
          autoCapitalize="none"
        />
        <TextInput
          ref={input => { this.confirmPasswordInput = input; this.confirmPasswordTextInput = input }}
          placeholder="Confirm Password"
          secureTextEntry
          style={styles.input}
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
          autoCapitalize="none"
        />

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            clearForms();
            navigation.navigate("Login");
          }}

        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            checkFields();
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        

      </View>

    </KeyboardAvoidingView>
  </ImageBackground>


  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    marginBottom: 25,
  },

  title: {
    color: 'grey',
    fontSize: 30,
  },

  inputContainer: {
    width: '80%',
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonContainer: {
    marginTop: 15,
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  button: {
    width: "50%",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#9BD9F4",
    margin: 10,
  },

  buttonText: {
    color: "black",
    fontSize: 20,
  }
});
