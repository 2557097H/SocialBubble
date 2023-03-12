import {React,useId,useState, useEffect, Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, FlatList, Dimensions, ImageBackground,  Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback, TextInput, AsyncStorage } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons';
import { ReactNativeAsyncStorage } from 'firebase/auth'; 
import LoginScreen from './LoginScreen';
import {SimpleLineIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, set, update, ref, push, get, onValue, onChildAdded, onChildChanged } from "firebase/database";






const windowWidth = Dimensions.get('window').width; 





function ChatScreen(props) {

  

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [innerId, setInnerId] = useState("");
    const messagesRef = null;
    
    
    

    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const senderId = user.uid;
    const dbRef = ref(getDatabase());
    
    
  
    
    
    const messageIds = [];
    
    
    console.log("Obtaining inner id");
    useEffect(() => {
      // Obtain inner ID
      get(child(dbRef, `users/${senderId}/innerId`)).then((snapshot) => {
        if (snapshot.exists()){
          console.log("User is in an inner bubble");
          setInnerId(snapshot.val());
        }
      });
    }, []);

    useEffect(() => {
      // Listen for new messages
      const messagesRef = ref(db, `bubble/${innerId}/messages/`);
      onValue(messagesRef, (snapshot) => {
        const newMessages = [];
        snapshot.forEach((childSnapshot) => {
          const childData = childSnapshot.val();
          
          
          
          if (!messages.some(message => message.key === childSnapshot.key)) {
            // If the message ID is not in the messages array, add the message to the newMessages array
            newMessages.push({
              key: childSnapshot.key,
              message: childData.message,
              user: childData.senderId
            });
          }
        });
        // Update the messages state with the new messages
        setMessages([...messages, ...newMessages]);
      });
    }, [messagesRef]);

    
  console.log(messages);      
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
        <FlatList
  data={messages}
  renderItem={({ item }) => <Message message={item.message} />}
  keyExtractor={(item) => item.key}
  inverted
/>
        </View>
          
        {/*back and edit buttons of the profile*/}
        <View style={styles.input_container}>
        <MessageInput input = {input} setInput = {setInput}>
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

