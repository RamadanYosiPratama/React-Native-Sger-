import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { showMessage, useForm } from '../../utils'
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';
import { setLoading, signUpAction } from '../../redux/action';


const SignAddress = ({navigation}) => {
    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: ''
    })

    const dispatch = useDispatch();
    const {registerReducer, photoReducer} = useSelector((state) => state)

    const onSubmit = () => {
        console.log('form : ', form);
        const data = {
            ...form,
            ...registerReducer
        }
        dispatch(setLoading(true))
        dispatch(signUpAction(data,photoReducer, navigation))
        }

    return (
        <View style={styles.page}>
        <Header
        title="Sign Up Address"
        subtitle="Masukkan Alamat Anda Dengan Benar"
        onBack={() => navigation.goBack()}/>
        <ScrollView>
        <View style={styles.container}>
        <TextInput
            label="Nomor Handphone"
            placeholder="Masukkan Nomor Handphone anda dengan benar"
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}/>
            <Gap height={16}/>
            <TextInput
            label="Alamat"
            placeholder="Masukkan Alamat anda dengan benar"
            value={form.address}
            onChangeText={(value) => setForm('address', value)}/>
            <Gap height={24}/>
            <TextInput
            label="Nomor Rumah"
            placeholder="Masukkan nomor Rumah anda dengan benar"
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}/>
            <Gap height={24}/>
            <TextInput
            label="Kota"
            placeholder="Masukkan Kota anda dengan benar"
            value={form.city}
            onChangeText={(value) => setForm('city', value)}/>
            <Gap height={24}/>
            <Button
            text="Lanjutkan"
            textColor="white"
            onPress={onSubmit}/>
        </View>
        </ScrollView>
    </View>
    )
}

export default SignAddress

const styles = StyleSheet.create({
    page: {
        flex: 1,
        flexGrow: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    },
    photo: {
        alignItems: 'center',
        marginTop: 26,
        marginBottom: 16
    },
    addPhoto: {
        fontSize: 14,
        fontFamily:'PoppinsLight-l4Zw',
        color: '#8D92A3'
    },
    photoContainer: {
        width: 90,
        height: 90,
        borderRadius: 90,
        backgroundColor: '#F0F0F0',
        padding: 24,
        textAlign: 'center',

    },
    borderPhoto: {
        borderWidth: 1,
        borderColor: '#8D92A3',
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
