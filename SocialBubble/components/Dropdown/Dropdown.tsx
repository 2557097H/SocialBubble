import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import MultiSelectComponent from 'react-native-element-dropdown/lib/typescript/components/MultiSelect';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getDatabase, ref, child, get, set, push, update, remove} from "firebase/database";
import { getAuth } from "firebase/auth";

var interestsRef = null;
var interests = [];

const DropdownComponent = () => {
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'interests/')).then((snapshot) => {
    if (snapshot.exists()){
      if (interestsRef==null){
        interestsRef = snapshot.val();
        for (let i = 0; i < interestsRef.length; i++){
        interests.push({label: interestsRef[i], value: i.toString()});
        };
      }
    }else{
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });

const db = getDatabase();
const auth = getAuth();

const handleInterests=(selection) => {
  const user = auth.currentUser;
  console.log(selection);
  update(ref(db, 'users/' + user.uid), {
    Interests: selection
  });
};

const deleteInterests=(selection) => {
  const user = auth.currentUser;
  console.log(selection);
  remove(ref(db, 'users/' + user.uid+ '/interests/' + selection))
};

const [selected, setSelected] = useState([]);

    return (
      <View style={styles.container}>
        <MultiSelect
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data = {interests}
          labelField="label"
          valueField="value"
          placeholder="Select Interests"
          search
          searchPlaceholder='Search...'
          value={selected}
          onChange={item => {
            handleInterests(item);
            setSelected(item);
          }}
          
          
          renderSelectedItem={(item, unSelect) => (
            <TouchableOpacity
              onPress={() => {
                unSelect && unSelect(item);
                deleteInterests(item['value']);
              }}>
              <View style={styles.selectedStyle}>
                <Text style={styles.textSelectedStyle}>{item.label}</Text>
                <AntDesign color="black" name="delete" size={17} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  };
  
  export default DropdownComponent;

  const styles = StyleSheet.create({
    container: { padding: 16 },
    dropdown: {
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: 'white',
      shadowColor: '#000',
      marginTop: 8,
      marginRight: 12,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
  });