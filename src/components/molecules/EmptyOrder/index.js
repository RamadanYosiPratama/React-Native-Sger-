import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICOrderEmpty } from '../../../assets'
import { Button, Gap } from '../../atoms'


const EmptyOrder = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.page}>
        <ICOrderEmpty/>
        <Gap height={15}/>
        <Text style={styles.text}>Masih Kosong ni.. !!!</Text>
        <Gap height={15}/>
        <Text style={styles.subtitle}>Sekarang Order Sger Sebanyak - banyak nya</Text>
        <Text style={styles.subtitle}>dan temukan minuman terbaik</Text>
        <Gap height={15}/>
        <View style={styles.ButtonContainer}>
        <Button text="Mari cari..!!" onPress={() => navigation.navigate('MainApp')}/>
        </View>
    </View>
    )
}

export default EmptyOrder

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#020202'
    },
    subtitle: {
        fontSize: 14,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#8D92A3'
    },
    ButtonContainer: {
        width: '100%',
        paddingHorizontal: 80
    }
})
