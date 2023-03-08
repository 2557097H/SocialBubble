import {React,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, Text, View, FlatList, Dimensions, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback, ImageBackground } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons'; 



const windowWidth = Dimensions.get('window').width;

function ChatScreen(props) {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  

  
 
  const sendMessage = () => {
    Keyboard.dismiss();
    setOutput(input);
    setInput("");
  };
  
  return(
    <ImageBackground
              style={styles.backgroundImage}
              source={require('../assets/sb-nologo.png')}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

  <KeyboardAvoidingView
    style={styles.container}
    >
      <View style={styles.titlesContainer}>
        
        {/*title for chat*/}
        <View style={styles.titlesContainer}>
          <Text style={styles.titles}>Bubble Chat</Text>
        </View>

        <View style={styles.chat_container}>
        <FlatList style = {styles.scroll}
          data = {Chat.messages}
          renderItem = {({item}) => <Message message = {item}></Message>}
          inverted/>
        </View>
          
        {/*back and edit buttons of the profile*/}
        <View style={styles.input_container}>
        <MessageInput>
        </MessageInput>
        </View>
      </View>

    </KeyboardAvoidingView>


</TouchableWithoutFeedback>
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
    alignItems:'center',
    flex: 1,
    paddingBottom:10,
  },
  titles:{
    color: 'grey',
    fontSize: 30,
    alignContent: 'center',
  },
  chat_container:{
    color: 'white',
    width:330,
    backgroundColor: 'white',
    borderRadius: 20,
    padding:6,
    flex: 15,
  },
  scroll:{
    backgroundColor: "white",
  },
  input_container:{
      width: 350,
      alignContent: 'center',
      flex: 1.8,
  },
});

export default ChatScreen;