import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '../assets/Colors';

const PlantListItem = ({ plant }) => {

  const isOdd = () => {
    return plant.key % 2 ? styles.oddCard : {};
  }

  return (
    <View style={{ ...styles.wrapper, ...isOdd() }}>
      <View style={ styles.innerWrapper }>
        <Image
          style={styles.backgroundImage}
          source={require('../assets/images/plant1.jpg')}
          resizeMode="cover"
        />
        <Text style={styles.plantName}>{plant.name}</Text>
      </View>
    </View>
  )
};

export default PlantListItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '50%',
    height: 300,
    paddingLeft: 10,
    paddingRight: 20,
    paddingVertical: 5
  },
  oddCard: {
    paddingLeft: 20,
    paddingRight: 10
  },
  innerWrapper: {
    backgroundColor: Colors.neutral100,
    flex: 1,
    alignContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
    borderRadius: 15
  },
  plantName: {
    fontFamily: 'baskerville-regular',
    fontSize: 20,
    marginVertical: 5,
    textAlign: 'center'
  }
});
