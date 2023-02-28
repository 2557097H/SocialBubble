import {React,useId,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, Text, View, FlatList, Dimensions, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback, AsyncStorage } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons';
import { ReactNativeAsyncStorage } from 'firebase/auth'; 
import LoginScreen from './LoginScreen';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";




const windowWidth = Dimensions.get('window').width;

export const SendMessage = async(senderId, receiverId, message) => {
  try{
    return await Firebase
      .database()
      .ref("messages/"+ senderId)
      child(receiverId)
      .push({
        senderId : senderId,
        recieverId : receiverId,
        message: message

      });
  } catch(error){
    return error;

  }
}

export const ReceiveMessage = async(senderId, receiverId, message) => {
  try{
    return await Firebase
      .database()
      .ref("messages/"+ receiverId)
      child(senderId)
      .push({
        senderId : senderId,
        receiverId : receiverId,
        message: message

      });
  } catch(error){
    return error;

  }
}






function ChatScreen(props) {

  state = {
    message: "",
    senderId: '',
    recieverId: ''
  }

  const auth = getAuth();
  const user = auth.currentUser;
  

  
  
      
  
  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
 

  
 
  sendMessage = async() => {
    Keyboard.dismiss();
    if(this.state.message){
      SendMessage(senderId,receiverId,this.state.message).
        then(()=>{
          this.setState({message: ''})
        }).catch((err) => {
          alert(err)
       })
       RecieveMessage(senderId,receiverId,this.state.message).
        then(()=>{
          this.setState({message: ''})
        }).catch((err) => {
          alert(err)
       })
    }

  };
  
  return(

  
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView
    style={styles.container}>

    <View style = {styles.title}>
    <IonIcon style = {styles.backIcon} name="arrow-back-sharp" size={24} color="white" />
    <FontAwesome style = {styles.groupIcon} name="group" size={24} color="white" />
    <Text style = {styles.titleText}>bubble</Text>
    </View>
   
    <FlatList style = {styles.scroll}
    data = {Chat.messages}
    renderItem = {({item}) => <Message message = {item}></Message>}
    inverted>
    </FlatList>   
    

    <View style = {styles.box}>
    <MessageInput>
    </MessageInput>
    </View>
    

    

 

  </KeyboardAvoidingView>
</TouchableWithoutFeedback>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 20,
    backgroundColor: "#fff",
    
  },
  box: {
    width: windowWidth,
    backgroundColor: "white",
    borderColor: "grey",
    borderWidth: 2,
    padding: 10,


  },
  title: {
    
    width: windowWidth,
    backgroundColor: "#9BD9F4",
    padding:20,
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleText:{
    color: "white",
    fontWeight: "600",
    fontSize: 25,
    
   
  },
  
  groupIcon:{
    marginHorizontal: 15,
    },
  backIcon: {
   marginRight: 40,
  },
  scroll:{
    //marginTop: 80,

  }
  

  
});

export default ChatScreen;