import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import Colors from '../assets/Colors';

const NewPlantSaveButton = () => {
  return (
    <TouchableWithoutFeedback onPress={() => { }}>
      <View style={styles.saveButton}>
        <Ionicons
          name="ios-save"
          size={30}
          color={Colors.neutral100} />
        <Text style={ styles.buttonLabel }>Enregistrer</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default NewPlantSaveButton

const styles = StyleSheet.create({
  saveButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 80,
    width: '100%',
    backgroundColor: Colors.brand,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: Colors.neutral100,
    fontFamily: 'inter-semibold',
    fontSize: 18,
    marginLeft: 20
  }
})
