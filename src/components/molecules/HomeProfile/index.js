import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { sger } from '../../../assets'
import { getData } from '../../../utils'

const HomeProfile = () => {
    // const [photo, setPhoto] = useState(sger)
    // useEffect(() => {
    //     getData('userProfile').then((res) =>{
    //         console.log('user profile: ', res)
    //         setPhoto({uri: res.profile_photo_url})
    //     })
    // }, [])
    return (
        <View style={styles.profileContainer}>
        <View>
        <Text style={styles.Title}>Minum dan Makan</Text>
        <Text style={styles.subtitle}>dengan sekali Klik</Text>
        </View>
        <Image source={sger} style={styles.prof}/>
    </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white',
    },
    prof: {
        width: 110,
        height: 50,
        borderRadius: 8
    },
    Title: {
        fontSize: 15,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#020202'
    },
    subtitle: {
        fontSize: 13,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#8D92A3'
    },
})
