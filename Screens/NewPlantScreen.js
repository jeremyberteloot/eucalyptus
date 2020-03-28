import React from 'react'
import { StyleSheet, View, SafeAreaView, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native'
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
      behavior="padding"
      style={styles.keyboardAvoidingWrapper}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <View style={styles.wrapper}>
          <ImageBackground
            style={styles.topImage}
            source={require('../assets/images/plant1.jpg')}
          >
            <SafeAreaView>
              <View style={styles.header}>
                <IconButton
                  icon="ios-arrow-back"
                  onPress={() => handleBackPress()}
                />
                <IconButton
                  icon="ios-camera"
                  color={Colors.neutral100}
                  styleOverride={{ backgroundColor: Colors.brand }}
                  onPress={() => navigation.navigate('NewPlantCamera')}
                />
              </View>
            </SafeAreaView>
          </ImageBackground>
          <View style={styles.formWrapper}>
            <NewPlantForm />
          </View>
          <NewPlantSaveButton />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default NewPlantScreen

const styles = StyleSheet.create({
  keyboardAvoidingWrapper: {
    flex: 1
  },
  wrapper: {
    flex: 1,
    backgroundColor: Colors.neutral100
  },
  topImage: {
    alignSelf: 'stretch',
    flexGrow: 1,
    flexShrink: 3
  },
  formWrapper: {
    flexGrow: 1,
    flexShrink: 0,
    padding: 15
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
})
