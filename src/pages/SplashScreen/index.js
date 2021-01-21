import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { Logo } from '../../assets'
import { getData } from '../../utils'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            getData('token').then((res) => {
                console.log('token: ', res);
                if(res){
                    navigation.reset({index: 0, routes: [{name: 'MainApp'}]})
                } else {
                    navigation.replace('SignIn')
                }
            })
        }, 3000)
    }, [])
    useEffect(() => {

    }, [])
    return (
        <View style={styles.view}>
            <Logo/>
            <Text style={styles.text}>from</Text>
            <Text style={styles.textTwo}>sgerdrinks.com</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    view : {
        backgroundColor: '#FFC700',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        // fontsSize: 32,
        color: '#020202',
        fontSize: 15,
        marginTop: 140,
        fontFamily: 'BatikWorldwidePersonalUse-jEW7R'
    },
    textTwo: {
        // fontsSize: 32,
        color: '#020202',
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'BatikWorldwidePersonalUse-jEW7R'
    }
})
