import {React,useId,useState, useEffect} from 'react';
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






const windowWidth = Dimensions.get('window').width; 





function ChatScreen(props) {

    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const senderId = user;
    console.log(senderId);
    const dbRef = ref(getDatabase());
/*
      get(child(dbRef, `users/${senderId}/innerId/`)).then((snapshot) => {
      if (snapshot.exists()){
          console.log("Obtaining inner id");
          const innerId = snapshot.val();
          useEffect (() =>{

            var messagesRef = null;
            var messages = [];
          
            
            get(child(dbRef, `bubble/${innerId}/messages/`)).then((snapshot) => {
            if (snapshot.exists()){
                if (messagesRef==null){
                    messagesRef = snapshot.val();
                    for (let i = 0; i < messagesRef.length; i++){
                        messages.push(messagesRef[i]);
                    };
                }
            }
            else{
                console.log("No data available");
            }
          }).catch((error) => {
          console.error(error);
          });
        });}
      else{
        console.log("User does not have innerId");
      }});
    
    
    

      console.log(messagesRef);  */    
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

