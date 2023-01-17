import React from 'react';
import { View, Text, StyleSheet, Button, ImageBackground } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    //<View style.titles>

    //</View>
    <View style={styles.container}>
      <Text style={styles.titles}>Settings</Text>
      <View style={styles.button} >
      <Button
        title="Logout"
        //onPress={() => navigation.navigate('ChangePassword')}
      />
      </View>
      <View style={styles.button} >
      <Button
        title="Change Password"
        //onPress={() => navigation.navigate('ChangePassword')}
      />
      </View>
      <View style={styles.button} >
      <Button
        title="Delete Account"
        //onPress={() => navigation.navigate('ChangePassword')}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
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
    backgroundColor: '#ADD8E6',
  },
});

export default SettingsScreen;