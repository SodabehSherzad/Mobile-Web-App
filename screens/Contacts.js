import React from 'react'
import{ View, Text, StyleSheet, FlatList, Button } from 'react-native'
import colors from '../utils/colors.js' 
import ContactListItem from '../components/ContactListItem.js'
import {Feather} from '@expo/vector-icons'
const contacts = [
    {id: '1', name: 'Sodabeh', phone: '0999888', email: 'sodabeh@gmail.com'},
    {id: '2', name: 'Ali', phone: '0999888', email: 'ali@gmail.com'},
    {id: '3', name: 'Ahmad', phone: '0999888', email: 'ahmad@gmail.com'},
    {id: '4', name: 'Sara', phone: '0999888', email: 'sara@gmail.com'},
    {id: '5', name: 'Ahmad', phone: '0999888', email: 'sara@gmail.com'},
    {id: '6', name: 'Ali', phone: '0999888', email: 'sara@gmail.com'},
    {id: '7', name: 'Sodabeh', phone: '0999888', email: 'sara@gmail.com'},
    {id: '8', name: 'Sara', phone: '0999888', email: 'sara@gmail.com'},
    {id: '9', name: 'Ahmad', phone: '0999888', email: 'sara@gmail.com'},
]

export default function Contacts(){
    return (
        <View>
            <FlatList 
            data={contacts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <ContactListItem name={item.name} phone={item.phone} />
            }}
            />
            <View style={styles.floatButton}>
                <Text>
                    <Feather name="plus" size={28} color="white"/>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    floatButton: {
        backgroundColor: 'orange',
        padding: 20,
        borderRadius: '50%',
        position: 'absolute',
        right: 40,
        bottom: 40
    }
})