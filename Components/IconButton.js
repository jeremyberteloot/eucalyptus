import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../assets/Colors';

const BackButton = ({ icon, iconSize, color, styleOverride, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={() => onPress()}>
      <View style={{ ...styles.default, ...styleOverride }}>
        <Ionicons
          name={icon}
          size={iconSize || 22}
          color={color || Colors.neutral700} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BackButton

const styles = StyleSheet.create({
  default: {
    backgroundColor: Colors.neutral100,
    width: 40,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
