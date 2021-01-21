import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICadd, ICMin } from '../../../assets'

const Counter = ({onValueChange}) => {
    const [value, setValue] = useState(1);

    useEffect(() => {
        onValueChange(value)
    }, [])
    const onCount = (type) => {
        let result = value
        if(type === 'plus') {
            result = value + 1;
        }
        if(type === 'minus') {
            if (value > 1 ) {
            result = value - 1;
            };
        }
        setValue(result)
        onValueChange(result)
    }
    return (
        <View style={styles.containter}>
            <TouchableOpacity onPress={() => onCount('minus')}>
            <ICMin/>
            </TouchableOpacity>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity onPress={() => onCount('plus')}>
            <ICadd/>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    containter: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    value: {
        fontSize: 16,
        fontFamily: 'PoppinsMedium-1JPv',
        color: '#020202',
        marginHorizontal: 10
    }
})
