import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Number } from '..'

const ItemValue = ({label, Value, valueColor='#020202', type}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            {type === 'currency' ? <Number number={Value} style={styles.value(valueColor)}/>
            : <Text style={styles.value(valueColor)}>{Value}</Text>}
        </View>
    )
}

export default ItemValue

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    label: {
        fontSize: 14,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#8D92A3',
    },
    value: (valueColor) => ({
        fontSize: 14,
        fontFamily: 'PoppinsLight-l4Zw',
        color: valueColor
    })
})
