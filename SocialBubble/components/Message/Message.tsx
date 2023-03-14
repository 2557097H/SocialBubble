import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import Chat from '../../assets/dummy_data/Chat';
import { getAuth} from "firebase/auth";

/*
        <View style = {styles.time}>
            <Text style = {[styles.timeText,{
                color: isItMe ? "green" : "green",

            }]}> Time </Text>
        </View>
        */

const Message = ({ message, user }) => {

    const auth = getAuth();
    const sender = auth.currentUser;
    const senderId = sender.uid;

    const isItMe = user == senderId;

    console.log(isItMe);

    

    return(
        <View style = {[
            styles.container, {
            backgroundColor: isItMe ? "#9BD9F4": "lightgrey",
            marginLeft: isItMe ? 'auto': 10,
            marginRight: isItMe? 10 : 'auto',
        }
        ]}>
            <Text style = {[styles.chatBubble,{
                color: isItMe ? "black" : "black",
            }
            ]}>{message}</Text>
      
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
        color: "white",
     
      },

    time: {

        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
        
    }
    ,
    timeText: {
        color: "grey",
        fontSize: 12,
    }


});

 export default Message;