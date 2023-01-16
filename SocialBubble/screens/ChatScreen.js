import {React,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Image, StyleSheet, Text, View, FlatList, Dimensions, Keyboard, KeyboardAvoidingView,TouchableWithoutFeedback } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';
import Chat from '../assets/dummy_data/Chat';
import { FontAwesome } from '@expo/vector-icons'; 



const windowWidth = Dimensions.get('window').width;

function LoginScreen(props) {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  

  
 
  const sendMessage = () => {
    Keyboard.dismiss();
    setOutput(input);
    setInput("");
  };
  
  return(

  
<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <KeyboardAvoidingView
    //behavior={Platform.OS === "android" ? "padding" : "height"}
    style={styles.container}>

    <View style = {styles.title}>
    <IonIcon style = {styles.backIcon} name="arrow-back-sharp" size={24} color="white" />
    <FontAwesome style = {styles.groupIcon} name="group" size={24} color="white" />
    <Text style = {styles.titleText}>Inner Bubble</Text>
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
    backgroundColor: "blue",
    padding:20,
    marginTop:25,
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

export default LoginScreen;