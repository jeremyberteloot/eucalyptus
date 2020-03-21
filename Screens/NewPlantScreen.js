import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, KeyboardAvoidingView } from 'react-native'
import Colors from '../assets/Colors';

import NewPlantForm from '../Components/NewPlantForm';
import IconButton from '../Components/IconButton';
import NewPlantSaveButton from '../Components/NewPlantSaveButton';

const NewPlantScreen = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding">
      <View style={ styles.wrapper }>
        <ImageBackground
          style={ styles.topImage }
          source={require('../assets/images/plant1.jpg')}
        >
          <SafeAreaView>
            <View style={styles.header}>
              <IconButton
                icon="ios-arrow-back"
                onPress={() => handleBackPress()} />
              <IconButton
                icon="ios-camera"
                color={Colors.neutral100}
                styleOverride={{ backgroundColor: Colors.brand }} />
            </View>
          </SafeAreaView>
        </ImageBackground>
        <NewPlantForm />
        <NewPlantSaveButton />
      </View>
    </KeyboardAvoidingView>
  )
}

export default NewPlantScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.neutral100
  },
  topImage: {
    alignSelf: 'stretch',
    height: 450
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
})
