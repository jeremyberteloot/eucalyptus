import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import HomeScreen from './Screens/HomeScreen';
import NewPlantScreen from './Screens/NewPlantScreen';

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'baskerville-bold': require('./assets/fonts/LibreBaskerville-Bold.ttf'),
    'baskerville-italic': require('./assets/fonts/LibreBaskerville-Italic.ttf'),
    'baskerville-regular': require('./assets/fonts/LibreBaskerville-Regular.ttf'),
    'inter-regular': require('./assets/fonts/Inter-Regular.ttf'),
    'inter-medium': require('./assets/fonts/Inter-Medium.ttf'),
    'inter-semibold': require('./assets/fonts/Inter-SemiBold.ttf'),
    'inter-extrabold': require('./assets/fonts/Inter-ExtraBold.ttf'),
    'inter-black': require('./assets/fonts/Inter-Black.ttf')
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Mes plantes' }} />
        <Stack.Screen
          name="NewPlant"
          component={NewPlantScreen}
          options={{ title: 'Create a new plant', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};