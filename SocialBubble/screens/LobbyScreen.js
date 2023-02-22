import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, TouchableOpacity, KeyboardAvoidingView  } from 'react-native';

const LobbyScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Hold tight! We'll have you in a bubble soon</Text>
      </View>

    </KeyboardAvoidingView>
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
