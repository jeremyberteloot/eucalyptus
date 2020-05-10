import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import Colors from '../assets/Colors';
import { useCamera } from 'react-native-camera-hooks';

import IconButton from '../Components/IconButton';

const NewPlantCameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(false);
  const [flashEnabled, setFlashEnabled] = useState(true);
  const [{ cameraRef, type }, { toggleFacing, toggleFlash, takePicture, pausePreview }] = useCamera();

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

  const handleCameraChangeType = () => {
    setCameraType(!cameraType);
    toggleFacing(cameraType);
    // setCameraType(cameraType === Camera.Constants.Type.back
    //   ? Camera.Constants.Type.front
    //   : Camera.Constants.Type.back)
  };

  const handleUseFlash = () => {
    setFlashEnabled(!flashEnabled);
    toggleFlash(flashEnabled);
  };

  const handleTakePicture = async () => {
    console.log('TAKE PICTURE');
    // const available = await takePicture();
    // if (!available) return;
    const picture = await takePicture();
    // handlePausePreview();
    console.log(picture);
  };

  const handlePausePreview = async () => {
    const preview = await pausePreview();
    console.log(preview);
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
              onPress={() => handleUseFlash()}
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
              onPress={() => handleTakePicture()}
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
              onPress={() => handleCameraChangeType()}
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
