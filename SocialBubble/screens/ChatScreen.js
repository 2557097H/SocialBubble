import {React,useId,useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, FlatList, Dimensions, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback, TextInput, AsyncStorage } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons';
import { ReactNativeAsyncStorage } from 'firebase/auth'; 
import LoginScreen from './LoginScreen';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, set, update, ref, push } from "firebase/database";
import {SimpleLineIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';





const windowWidth = Dimensions.get('window').width; 





function ChatScreen(props) {

    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const senderId = user;
    const receiverId = "Hz6ha0zlMANIMIwfwsg2X3f7bDS2";
   
    
  

  
  
  

  
  
      
  
  
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  
 

  
 /*
  const sendMessage = async() => {
    Keyboard.dismiss();
    if(this.state.message){
      SendMessage(this.state.senderId,this.state.receiverId,this.state.message).
        then(()=>{
          this.setState({message: ''})
        }).catch((err) => {
          alert(err)
       })
       ReceiveMessage(this.state.senderId,this.state.receiverId,this.state.message).
        then(()=>{
          this.setState({message: ''})
        }).catch((err) => {
          alert(err)
       })
    }

  };*/
  

  const sendPressed = () =>{

    if(input){
        const message = input;
        SendMessage(message, user.uid, receiverId);}
    else{
        console.warn("No text in message");
    }
    }

    
    const SendFirstMessage = (message, senderId, receiverId) => {

    
      console.log(user.email);
      set(ref(db, 'messages/' + user.uid), {
          message: message,
          senderId: senderId,
          receiverId: receiverId})} 

      const SendMessage = (message, senderId, receiverId) => {

    
            console.log(user.email);
            push(ref(db, 'messages/' + user.uid), {
                message: message,})} 
  
  return(

  
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView
    style={styles.container}>

    <View style = {styles.title}>
    <IonIcon style = {styles.backIcon} name="arrow-back-sharp" size={24} color="white" />
    <FontAwesome style = {styles.groupIcon} name="group" size={24} color="white" />
    <Text style = {styles.titleText}>Bubble</Text>
    </View>
   
    <FlatList style = {styles.scroll}
    data = {Chat.messages}
    renderItem = {({item}) => <Message message = {item}></Message>}
    inverted>
    </FlatList>   
    

    <View style = {styles.box}>
    <View style = {styles.container2} >
            <View style = {styles.containerInput}>
                <SimpleLineIcons name ="emotsmile" size={24} color="grey" style ={styles.inputEmotes} />
                <TextInput
                value = {input} 
                onChangeText = {(text) => setInput(text)} 
                placeholder = "type your message..." 
                style = {styles.input}> 

                </TextInput>
                <Feather name="mic" size={24} color="grey" style ={styles.inputEmotes}/>
                <AntDesign name="camerao" size={24} color="grey" style ={styles.inputEmotes}/>
                

            </View>

            <View style = {styles.containerButton}>
            <TouchableOpacity 
            onPress = {sendPressed}
            activeOpacity = {0.5}
            >
            <IonIcon  name = "send" size = {26} color="blue" ></IonIcon>
            </TouchableOpacity>
            
            </View>
            
        </View>
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

  },
  

  
  container2:{
    flexDirection: "row",
    padding: 10,
    

},
containerButton:{
    marginRight: 10,
    marginTop: 8,

    

},
containerInput:{
    
    flex: 1,
    backgroundColor: "white", 
    marginRight: 25, 
    borderRadius: 20,
    borderWidth: 2,
    borderColor:"grey",
    alignItems: 'center',
    flexDirection: 'row',
    padding:5,


},

inputEmotes: {
    
    marginHorizontal: 5,
    
},
input: {
    flex: 1,
    marginLeft: 5,

}



});

export default ChatScreen;



