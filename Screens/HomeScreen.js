import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import Colors from '../assets/Colors';
import PlantList from '../Components/PlantList';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView  style={ styles.wrapper }>
      <PlantList />
      <Button
        title="Create a new plant"
        onPress={() => navigation.navigate('NewPlant')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.neutral100
  }
})
