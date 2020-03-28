import React, { useState, useEffect, createRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { Camera } from 'expo-camera';
import Colors from '../assets/Colors';
import { useCamera } from 'react-native-camera-hooks';

import IconButton from '../Components/IconButton';

const NewPlantCameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [{ cameraRef, type }, { toggleFacing, recordVideo }] = useCamera();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [])

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>Pas d'accès à la caméra</Text>;
  }

  const setCamera = () => {
    setType(type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back)
  };

  const takePicture = async () => {
    console.log('TAKE PICTURE');
    const available = await cameraRef.isAvailableAsync();
    if (!available) return;
    const picture = await cameraRef.takePictureAsync();

    console.log(picture);
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.wrapper}>
      <Camera
        style={styles.cameraWrapper}
        type={type}
        ref={cameraRef}
      >
        <SafeAreaView style={styles.actionsWrapper}>
          <View style={styles.header}>
            <IconButton
              icon="ios-arrow-back"
              onPress={() => handleBackPress()}
            />
          </View>
          <View style={styles.cameraActions}>
            <IconButton
              icon="ios-flash"
              iconSize={32}
              color={Colors.neutral700}
              styleOverride={{
                backgroundColor: Colors.neutral100,
                height: 60,
                width: 60,
                borderRadius: 45
              }}
              onPress={() => setCamera()}
            />
            <IconButton
              icon="ios-camera"
              iconSize={46}
              color={Colors.neutral100}
              styleOverride={{
                backgroundColor: Colors.brand,
                height: 90,
                width: 90,
                borderRadius: 45
              }}
              onPress={() => takePicture()}
            />
            <IconButton
              icon="ios-swap"
              iconSize={32}
              color={Colors.neutral700}
              styleOverride={{
                backgroundColor: Colors.neutral100,
                height: 60,
                width: 60,
                borderRadius: 45
              }}
              onPress={() => setCamera()}
            />
          </View>
        </SafeAreaView>
      </Camera>
    </View>
  );
}

export default NewPlantCameraScreen

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  cameraWrapper: {
    flex: 1
  },
  actionsWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    flexDirection: 'column'
  },
  cameraActions: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  flipCamera: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  }
})
