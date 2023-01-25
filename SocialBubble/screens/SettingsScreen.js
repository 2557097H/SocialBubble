import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titles}>Settings</Text>
      <View style={styles.button} >
      <Button
        title="Logout"
        onPress={() => navigation.navigate('Login')}
      />
      </View>
      <View style={styles.button} >
      <Button
        title="Change Password"
        onPress={() => navigation.navigate('PasswordChanged')}
      />
      </View>
      <View style={styles.button} >
      <Button
        title="Delete Account"
        onPress={() => navigation.navigate('DeleteAccount')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: { 
    color: "grey",
    borderRadius:30,
    paddingVertical:10,
    paddingHorizontal: 20,

  },
  titles:{
    fontWeight:"bold",
    fontSize:35,
    color: "Grey",
    paddingHorizontal:45,
    paddingTop:70,
    paddingBottom:30,
    
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#9BD9F4',
  },
});

export default SettingsScreen;