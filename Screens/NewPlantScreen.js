import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Colors from '../assets/Colors';

const NewPlantScreen = () => {
  return (
    <View style={ styles.wrapper }>
      <Text>I'm the new plant screen</Text>
    </View>
  )
}

export default NewPlantScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.neutral100
  }
})
