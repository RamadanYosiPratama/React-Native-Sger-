import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ILSignUpSuccess } from '../../assets'
import { Button, Gap } from '../../components'

const SignUpSuccess = ({navigation}) => {
    return (
        <View style={styles.page}>
            <ILSignUpSuccess/>
            <Gap height={15}/>
            <Text style={styles.text}>Berhasil.. !!!</Text>
            <Gap height={15}/>
            <Text style={styles.subtitle}>Sekarang Order Sger Sebanyak - banyak nya</Text>
            <Text style={styles.subtitle}>dan temukan minuman terbaik</Text>
            <Gap height={15}/>
            <View style={styles.ButtonContainer}>
            <Button text="Mari cari..!!" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    )
}

export default SignUpSuccess

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
