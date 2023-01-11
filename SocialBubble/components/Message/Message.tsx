import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import Chat from '../../assets/dummy_data/Chat';

const myID = 'u2';

const Message = ({ message }) => {

    const isItMe = message.user.id == myID;

    return(
        <View style = {[
            styles.container, {
            backgroundColor: isItMe ? "blue": "lightgrey",
            marginLeft: isItMe ? 'auto': 10,
            marginRight: isItMe? 10 : 'auto',
        }
        ]}>
            <Text style = {[styles.chatBubble,{
                color: isItMe ? "white" : "black",
            }
            ]}>{message.content}</Text>
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


});

 export default Message;