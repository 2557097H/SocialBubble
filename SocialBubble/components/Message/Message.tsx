import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import Chat from '../../assets/dummy_data/Chat';
import { getAuth} from "firebase/auth";



const Message = ({ message, user, time }) => {

    const auth = getAuth();
    const sender = auth.currentUser;
    const senderId = sender.uid;

    const isItMe = user == senderId;

    
    

    return(
        <View>
        <View style = {[
            styles.container, {
            backgroundColor: isItMe ? "#9BD9F4": "lightgrey",
            marginLeft: isItMe ? 'auto': 10,
            marginRight: isItMe? 10 : 'auto',
        }
        ]}>
            <Text style = {[styles.chatBubble,{
            }
            ]}>{message}</Text>

        </View>
        <View style = {styles.time}>
            <Text style = {[styles.timeText,{
               

            }]}> {time} </Text>
        </View>


        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "blue",
        padding:10,
        margin: 12,
        borderRadius: 20,
        maxWidth: '75%',

    },
    chatBubble:{
        color: "black",
     
      },

    time: {

       flexDirection: "row",
       alignItems: "flex-end",
       justifyContent: "flex-end",
       bottom: 10,
        
    }
    ,
    timeText: {
        color: "grey",
        fontSize: 8,
    }


});

 export default Message;