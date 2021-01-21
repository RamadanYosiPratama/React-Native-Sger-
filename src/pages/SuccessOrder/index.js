import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button, Gap} from '../../components/atoms/index';
import {ILSuccessOrder} from '../../assets/Illustration/index';

const SuccessOrder = ({navigation}) => {
    return (
        <View style={styles.page}>
        <ILSuccessOrder/>
        <Gap height={15}/>
        <Text style={styles.text}>Berhasil.. !!!</Text>
        <Gap height={15}/>
        <Text style={styles.subtitle}>Anda Berhasil Order</Text>
        <Text style={styles.subtitle}>cari lagi minuman terbaik</Text>
        <Gap height={15}/>
        <View style={styles.ButtonContainer}>
        <Button text="Order yang lainnya" onPress={() => navigation.replace('MainApp')}/>
        </View>
        <Gap height={12}/>
        <View style={styles.ButtonContainer}>
        <Button text="Lihat Transaksi Order" color="#8D92A3" textColor="white" onPress={() => navigation.replace('MainApp', {screen: 'Order'})}/>
        </View>
    </View>
    )
}

export default SuccessOrder

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
