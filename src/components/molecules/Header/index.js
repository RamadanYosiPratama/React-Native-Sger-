import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IcBack } from '../../../assets'


const Header = ({title, subtitle, onBack, }) => {
    return (
        <View style={styles.container}>
            {onBack && (
            <TouchableOpacity activeOpacity={0.7} onPress={onBack}>
            <View style={styles.back}>
            <IcBack/>
            </View>
            </TouchableOpacity>
            )}
            <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
    </View>
    )
}

export default Header

const styles = StyleSheet.create({
    title : {
        fontSize: 22,
        fontFamily: 'PoppinsMedium-1JPv',
        color: '#020202'
    },
    subtitle : {
            fontSize: 14,
            fontFamily: 'PoppinsLight-l4Zw',
            color: '#8D92A3'
        
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 30,
        paddingBottom: 24,
        flexDirection: 'row',
        alignItems: 'center'
    },
    back: {
        padding: 16,
        marginRight: 16,
        marginLeft: -10,
    }
})

