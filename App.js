import React, {useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MaterialIcons } from '@expo/vector-icons'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import Contact from './screens/Contacts.js'
import Profile from './screens/Profile.js'
import CreateContact from './screens/CreateContacts.js'
import SearchScreen from './screens/SearchScreen.js'

import * as SQLite from 'expo-sqlite' 

const db = SQLite.openDatabase('contacts.db')

export default function App() {
  useEffect(() => {
    db.transaction( tx => {
      tx.executeSql('create table contacts(id integer primary key autoincrement, name text, phone text, email text);', [], ()=>console.log("table created successfully"))
    })
  })
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contact} 
          options={({navigation}) => ({
            headerRight: () => (
              <TouchableOpacity style={{paddingRight: 20}} onPress={() => navigation.navigate("Search")}>
                <Text>
                  <MaterialIcons name="search" size={24} color="black" />
                </Text>
              </TouchableOpacity>
            )
          })}
        />
        <Stack.Screen name="CreateContact" component={CreateContact}/>
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="Search" component={SearchScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4"
  },
});
