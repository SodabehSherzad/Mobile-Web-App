import React from 'react'
import{ View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utils/colors.js' 
import Avatar from './Avatar.js'

export default function ContatcListItem({name, phone, onPress}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Avatar name={name} size={40}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{phone}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }, 

    contactInfo: {
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        backgroundColor: colors.secondary
    },

    detail: {
        marginLeft: 20
    },

    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.primary
    }
})