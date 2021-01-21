import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { getData, useForm } from '../../utils';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { signInAction } from '../../redux/action';

const SignIn = ({navigation}) => {
    const [form, setForm] = useForm({
        email: '',
        password: ''
    })

    const dispatch = useDispatch();


    const onSubmit = () => {

        dispatch(signInAction(form, navigation))
    }

    return (
        <View style={styles.page}>
            <Header
            title="Sign In"
            subtitle="Cari minuman yang segar untuk dahaga dan temukan lain - lain"/>
            <View style={styles.container}>
                <TextInput
                label="Email Address"
                placeholder="Masukkan Email anda dengan benar"
                value={form.email}
                onChangeText={(value) => setForm('email', value)}/>
                <Gap height={16}/>
                <TextInput
                label="Password"
                placeholder="Masukkan Password dengan benar"
                value={form.password}
                onChangeText={(value) => setForm('password', value)}
                secureTextEntry/>
                <Gap height={24}/>
                <Button
                text="Sign in" onPress={onSubmit}/>
                <Gap height={12}/>
                <Button
                text="Buat Akun Baru"
                color="#8D92A3"
                textColor="white"
                onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </View>
    )
}

export default SignIn

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1
    }
})
