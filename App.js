import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Contacts from './screens/Contacts'
export default function App() {
  return (
    <View style={styles.container}>
      <Contacts name="sodabeh" phone="0777888999"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
