import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Colors from '../assets/Colors';
import PlantListItem from './PlantListItem';

const PlantList = () => {
  const [plants, setPlants] = useState([
    {
      key: 1,
      name: 'Janine',
      location: 'Chambre',
      description: 'Love her',
      acquiredAt: '2020-02-25',
      diedAt: null,
      pictures: ['plant1'],
      watering: {
        time: 4,
        type: 'days'
      },
      fertilizer: {
        time: 1,
        type: 'month'
      },
      repot: {
        time: 2,
        type: 'year'
      }
    },
    {
      key: 2,
      name: 'Robert',
      location: 'Salon',
      description: 'Was a gift from mum',
      acquiredAt: '2020-01-01',
      diedAt: null,
      pictures: ['plant2'],
      watering: {
        time: 4,
        type: 'days'
      },
      fertilizer: {
        time: 1,
        type: 'month'
      },
      repot: {
        time: 2,
        type: 'year'
      }
    },
    {
      key: 3,
      name: 'Martine',
      location: 'Salon',
      description: 'Test',
      acquiredAt: '2020-02-25',
      diedAt: null,
      pictures: ['plant3'],
      watering: {
        time: 4,
        type: 'days'
      },
      fertilizer: {
        time: 1,
        type: 'month'
      },
      repot: {
        time: 2,
        type: 'year'
      }
    }
  ]);

  return (
    <View style={ styles.wrapper }>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantListItem plant={item} />}
        numColumns={2}
        columnWrapperStyle={ styles.row }
      />
    </View>
  )
};

export default PlantList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row'
  },
  row: {
    flex: 1,
    justifyContent: 'space-between'
  }
});
