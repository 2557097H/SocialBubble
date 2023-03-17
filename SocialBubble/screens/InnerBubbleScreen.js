import { React, useId, useState, useEffect, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, TouchableOpacity, StyleSheet, Text, View, FlatList, Dimensions, ImageBackground, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, TextInput, AsyncStorage } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons';
import { ReactNativeAsyncStorage } from 'firebase/auth';
import LoginScreen from './LoginScreen';
import { SimpleLineIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { child, getDatabase, set, update, ref, push, get, onValue, onChildAdded, onChildChanged } from "firebase/database";






const windowWidth = Dimensions.get('window').width;





function ChatScreen({ route }) {



  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [allMessages, setAllMessages] = useState([]);
  const [innerId, setInnerId] = useState("");
  const [checkID, setCheckID] = useState(false);
  const [initialRender, setInitialRender] = useState(0);
  const [isFirstEffectDone,setIsFirstEffectDone] = useState(false);

  



  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;
  const senderId = user.uid;
  const dbRef = ref(getDatabase());


  const [myVariable, setMyVariable] = useState(null);

  useEffect(() => {
    if (route.params && route.params.myVariable) {
      setMyVariable(route.params.myVariable);
    }
  }, [route.params]);




  useEffect(() => {
   
      // Obtain inner ID
      get(child(dbRef, `users/${senderId}/innerId`)).then((snapshot) => {
        //If exits user is in inner bubble already, if doesn't exists user will be assigned inner bubble in next useEffect
        if (snapshot.exists()) {
          console.log("User is in an inner bubble");
          setCheckID(true);
          setInnerId(snapshot.val());
          console.log("Entered 1");
          setIsFirstEffectDone(true);
        } else {
          setInitialRender(initialRender + 1);
          setCheckID(false);
          setIsFirstEffectDone(true);

        }

      })

      
  }, [route.params]);


    useEffect(() => {
     
      if (!isFirstEffectDone) {
        return}
    //If user not already in an inner bubble
   
    console.log(checkID);
    if (checkID == false) {
      console.log("User is not in an inner bubble");

      get(child(dbRef, `bubble/inner/`)).then((snapshot) => {
        if (snapshot.exists()) {

          const lastJoined = snapshot.val().lastJoined;
          get(child(dbRef, `bubble/inner/${lastJoined}/`)).then((snapshot) => {
            if (snapshot.exists()) {

              const count = snapshot.val().count;
              //if inner bubble has 6 people already (Count starts at 0 thats why count > 4)
              if (count > 4) {
                const id = push(ref(db, `bubble/inner/`), {
                  count: 0,
                }).key;
                const updates = {};
                updates[`/bubble/inner/lastJoined`] = id;
                update(ref(db), updates);

                set(ref(db, `users/${senderId}/`), {
                  innerId: id,
                  Name: "Bob",
                });
                setInnerId(id);
              }

              else {
                //If inner bubble exists with less than 6 people 
                get(child(dbRef, `bubble/inner/${lastJoined}/`)).then((snapshot) => {
                  if (snapshot.exists()) {

                    var count = snapshot.val().count + 1;
                    const updates = {};
                    updates[`/bubble/inner/${lastJoined}/count`] = count;
                    update(ref(db), updates);
                  }
                })

                set(ref(db, `users/${senderId}/`), {
                  innerId: lastJoined,
                  Name: "Bob",
                });

                setInnerId(lastJoined);
              }
            }
          });
        }
        else {
          //If no inner bubble exists (i.e: First user to create account)
          const id = push(ref(db, `bubble/inner/`), {
            count: 0,
          }).key;

          set(ref(db, `bubble/inner/`), {
            lastJoined: id,
          });

          set(ref(db, `bubble/inner/${id}/`), {
            count: 0,
          }).key;


          set(ref(db, `users/${senderId}/`), {
            innerId: id,
            Name: "Bob",
          });

          setInnerId(id);
        }
      });
      setCheckID(true);
      setIsFirstEffectDone(false);
    }
}, [isFirstEffectDone]);




  useEffect(() => {
    // Listen for new messages
    const messagesRef = ref(db, `bubble/inner/${innerId}/messages/`);
    onValue(messagesRef, (snapshot) => {
      const newMessages = [];
      snapshot.forEach((childSnapshot) => {
        const childData = childSnapshot.val();



        if (!messages.some(message => message.key === childSnapshot.key)) {
          // If the message ID is not in the messages array, add the message to the newMessages array

          newMessages.push({
            key: childSnapshot.key,
            message: childData.message,
            user: childData.senderId,
            time: childData.time,
            name: childData.name,
            
          });
        }
      });
      // Update the messages state with the new messages
      setMessages([...messages, ...newMessages]);


    });
  }, [innerId]);

  useEffect(() => {

    setAllMessages(messages.slice().reverse());

  }, [messages]);



   
  return (

  <KeyboardAvoidingView behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.keyboardContainer}>
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/sb-nologo.png')}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View
          style={styles.container}
        >
          <View style={styles.titlesContainer}>

            {/*title for chat*/}
            <View style={styles.titlesContainer}>
              <Text style={styles.titles}>InnerBubble Chat</Text>
            </View>

            <View style={styles.chat_container}>
              <FlatList
                data={allMessages}
                renderItem={({ item }) => <Message user={item.user} message={item.message} time={item.time} name = {item.name}

                />}

                inverted
              />
            </View>

            {/*back and edit buttons of the profile*/}
            <View style={styles.input_container}>
              <MessageInput input={input} setInput={setInput}>
              </MessageInput>
            </View>
          </View>

        </View>


      </TouchableWithoutFeedback>
    </ImageBackground>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlesContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 10,
  },
  titles: {
    color: 'grey',
    fontSize: 30,
    alignContent: 'center',
  },
  chat_container: {
    color: 'white',
    width: 330,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 6,
    flex: 13,
  },
  scroll: {
    backgroundColor: "white",
  },
  input_container: {
    width: 350,
    alignContent: 'center',
    flex: 2.2,
  },
});

export default ChatScreen;





