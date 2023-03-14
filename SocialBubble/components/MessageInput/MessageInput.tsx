import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import Chat from '../../assets/dummy_data/Chat';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {SimpleLineIcons} from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, set, update, ref, push, get } from "firebase/database";



const MessageInput = ({input, setInput}) => { 


  
    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const senderId = user;
    const receiverId = "Hz6ha0zlMANIMIwfwsg2X3f7bDS2";
    const [output, setOutput] = useState("");
   
  
    const sendPressed = () =>{
    if(input){ 
        const message = input;
        SendMessage(message, user.uid, receiverId);
        setInput("");}
    else{
        console.warn("No text in message");
    }
    }

    
    const SendMessage = (message, senderId, receiverId) => {

        const dbRef = ref(getDatabase());
        //Check if user is in an inner bubble
        
        get(child(dbRef, `users/${senderId}/innerId`)).then((snapshot) => {
        if (snapshot.exists()){
            const innerId = snapshot.val();
            const messageKey = push(ref(db, `bubble/${innerId}/messages/`), {
                message: message,
                senderId: senderId,
              }).key;
        }


    });

      

        



        

        /*
        set(ref(db, `bubble/messages/message/`), {
          senderId: senderId})
       
        
        */
        }

        


      //}


  



    return(
        <View style = {styles.container} >
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
    )
}

const styles = StyleSheet.create({
    container:{
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

 export default MessageInput;