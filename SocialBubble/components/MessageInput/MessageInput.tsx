import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, set, update, ref, push, get } from "firebase/database";
import { useRoute } from '@react-navigation/native';

const MessageInput = ({ input, setInput }) => {

    const [name, setName] = useState("");
  

    const db = getDatabase();
    const auth = getAuth();
    const user = auth.currentUser;
    const senderId = user.uid;
    const [output, setOutput] = useState("");

    const route = useRoute();
    




    useEffect(() => {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `users/${senderId}/Name`)).then((snapshot) => {
            if (snapshot.exists()) {
                setName(snapshot.val());
            } else {
                setName("Undefined");
            }
        });
    }, [senderId]);


    const sendPressed = () => {
        if (input) {
            const message = input;
            SendMessage(message, user.uid);
            setInput("");
        }
        else {
            console.warn("No text in message");
        }
    }


    const SendMessage = (message, senderId) => {

        const dbRef = ref(getDatabase());
        //Check if user is in an inner bubble
        var today = new Date();
        if (today.getMinutes().toString().length == 1) {
            var time = today.getHours() + ":0" + today.getMinutes();
        } else if (today.getHours().toString().length == 1) {
            var time = "0" + today.getHours() + ":" + today.getMinutes();

        }
        else {
            var time = today.getHours() + ":" + today.getMinutes();
        }
        if (route.name == "InnerBubbleScreen") {
        get(child(dbRef, `users/${senderId}/innerId`)).then((snapshot) => {
            if (snapshot.exists()) {
             
                const messageKey = push(ref(db, `bubble/inner/${snapshot.val()}/messages/`), {
                    message: message,
                    senderId: senderId,
                    time: time,
                    name: name,
    
                }).key;
            }
        });}
        if (route.name == "OuterBubbleScreen") {
        get(child(dbRef, `users/${senderId}/outerId`)).then((snapshot) => {
            if (snapshot.exists()) {
             
                const messageKey = push(ref(db, `bubble/outer/${snapshot.val()}/messages/`), {
                    message: message,
                    senderId: senderId,
                    time: time,
                    name: name,
    
                }).key;
            }
        });}


        
    
    }








return (
    <View style={styles.container} >
        <View style={styles.containerInput}>

            <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder="type your message..."
                style={styles.input}>

            </TextInput>
            


        </View>

        <View style={styles.containerButton}>
            <TouchableOpacity
                onPress={sendPressed}
                activeOpacity={0.5}
            >
                <IonIcon name="send" size={26} color="blue" ></IonIcon>
            </TouchableOpacity>

        </View>

    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,


    },
    containerButton: {
        marginRight: 10,
        marginTop: 8,



    },
    containerInput: {

        flex: 1,
        backgroundColor: "white",
        marginRight: 25,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "grey",
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,


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
