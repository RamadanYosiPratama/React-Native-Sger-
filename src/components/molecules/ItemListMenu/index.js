import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICNext } from '../../../assets'

const ItemListMenu = ({text, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
         <View style={styles.container}>
            <Text>{text}</Text>
            <ICNext/>
        </View>
        </TouchableOpacity>

    )
}

export default ItemListMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical:7
    }
})
