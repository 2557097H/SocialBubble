import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DropdownComponent = ({...props}) => {


const gender = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'}
]

const [value, setValue] = useState(null);

    return (
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data = {gender}
          labelField="label"
          valueField="value"
          placeholder="Select your Gender"
          search = {
            false
          }
          value={value}
          onChange={item => {
            setValue(item.value);
            props.onChange(item.label);
          }}
          
        />
      </View>
    );
  };
  export default DropdownComponent;

  const styles = StyleSheet.create({
    container:{ 
      padding: 0 
    },
    dropdown: {
      height: 48,
      backgroundColor: 'white',
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginTop: 10,
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
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    
  });