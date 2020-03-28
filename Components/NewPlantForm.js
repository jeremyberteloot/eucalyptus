import React from 'react';
import { StyleSheet, Text, TextInput, SafeAreaView, View } from 'react-native';

const NewPlantForm = () => {
  return (
    <SafeAreaView>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Son petit nom</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => { }}
          placeholder="Janine"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Où est-elle située ?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => { }}
          placeholder="Salon"
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Informations importantes</Text>
        <TextInput
          style={{ ...styles.input, ...styles.multilineInput }}
          onChangeText={(text) => { }}
          placeholder={"Beaucoup de soleil et d'amour !"}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputWrapper: {
    marginVertical: 5
  },
  label: {
    fontFamily: 'inter-semibold'
  },
  input: {
    fontFamily: 'baskerville-regular',
    fontSize: 24,
    paddingVertical: 8
  },
  multilineInput: {
    fontSize: 20
  }
})

export default NewPlantForm
