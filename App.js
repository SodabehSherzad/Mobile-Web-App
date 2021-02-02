import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './screens/Profile.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Profile name="sodabeh" phone="0777888999" email="sodabeh@gmail.com"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
