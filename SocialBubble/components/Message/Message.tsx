import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LoginScreen from '../../screens/LoginScreen';
import Chat from '../../assets/dummy_data/Chat';
import { getAuth} from "firebase/auth";



const Message = ({ message, user, time, name }) => {

    const auth = getAuth();
    const sender = auth.currentUser;
    const senderId = sender.uid;

    const isItMe = user == senderId;
    const [containerWidth, setContainerWidth] = useState(0);

    const onContainerLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
    }


    
    

    return(
        <View>
            <View style = {[styles.name, {
            marginLeft: isItMe? 'auto': 10,
            marginRight: isItMe?  containerWidth : 'auto',
            
        }
        ]}>
            <Text style = {[styles.nameText,{
               

            }]}> {name} </Text>
        </View>
            
        <View style = {[
            styles.container, {
            backgroundColor: isItMe ? "#9BD9F4": "lightgrey",
            marginLeft: isItMe ? 'auto': 10,
            marginRight: isItMe? 10 : 'auto',
        }
        ]} onLayout={onContainerLayout}>
            <Text style = {[styles.chatBubble,{
            }
            ]}>{message}</Text>

        </View>
        <View style = {[styles.time, {
            marginLeft: isItMe ? 'auto': containerWidth,
            marginRight: isItMe? 10 : 'auto',
        }
        ]}>
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
    },
    name: {

        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        top: 10,
        
       
         
     }
     ,
     nameText: {
         color: "grey",
         fontSize: 8,
     },


});

 export default Message;