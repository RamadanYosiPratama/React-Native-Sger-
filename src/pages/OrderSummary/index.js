import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { dummy1 } from '../../assets'
import { Button, Gap, Header, ItemValue, Loading } from '../../components'
import ItemListFood from '../../components/molecules/ItemListFood'
import { WebView } from 'react-native-webview';
import { getData } from '../../utils'
import Axios from 'axios'
import { API_HOST } from '../../config'

const OrderSummary = ({navigation, route}) => {
    const {item, transaction, userProfile} = route.params
    const [isPaymentOpen, setIsPaymentOpen] = useState(false)
    const [paymentURL, setPaymentUrl] = useState('http://ramaportofolio.netlify.com')

    const onChekcout = () => {
        const data = {
            food_id: item.id,
            user_id: userProfile.id,
            quantity: transaction.totalItem,
            total: transaction.total,
            status: 'PENDING'
        }
        getData('token').then((resToken) => {
            Axios.post(`${API_HOST.url}/checkout`,data, {
                headers: {
                    Authorization: resToken.value
                }
            })
            .then((res) => {
                console.log('checkout success :', res.data)
                setIsPaymentOpen(true);
                setPaymentUrl(res.data.data.payment_url)
            })
            .catch((err) => {
                console.log('error checkout: ', err)
            })
        })
    }
    const onNavChange = (state) => {
        const titleWeb = 'Example Domain'
        console.log('nav: ', state)
        if(state.title === titleWeb){
            navigation.reset({index: 0, routes: [{name: 'SuccessOrder'}]})
        }
    }
    if(isPaymentOpen){
        return (
            <>
            <Header title="payment"
            subtitle="Bayar dan segara dapatkan dengan mudah"
            onBack={() => setIsPaymentOpen(false)}/>
            <WebView
            source={{ uri: paymentURL}}
            onNavigationStateChange={onNavChange}
            startInLoadingState={true}
            renderLoading={() => <Loading />}/>
            </>
        )
    }
    return (

        <ScrollView>
            <Header
            title="Payment"
            subtitle="Bayar dengan sekali Klik"
            onBack={() => navigation.goBack()}/>
            <View style={styles.content}>
            <Text style={styles.label}>Item Ordered</Text>
            <ItemListFood
            type="order-summary"
            name={item.name}
            price={item.price}
            image={{ uri: item.picturePath }}
            items={transaction.totalItem}/>
            <Text>Details Transaction</Text>
            <Gap height={15}/>
            <ItemValue label={item.name} Value={transaction.totalPrice}  type="currency"/>
            <ItemValue label="Driver" Value={transaction.driver}  type="currency"/>
            <ItemValue label="Tax 10%" Value={transaction.tax} type="currency"/>
            <ItemValue label="Total Price" Value={transaction.total} valueColor='#1ABC9C'  type="currency"/>
            </View>
            <View style={styles.content}>
                <Text>Deliver To:</Text>
                <ItemValue label="Name" Value={userProfile.name}/>
                <ItemValue label="Nomor Handphone" Value={userProfile.phoneNumber}/>
                <ItemValue label="Alamat" Value={userProfile.address}/>
                <ItemValue label="Nomor Rumah" Value={userProfile.houseNumber}/>
                <ItemValue label="Kota" Value={userProfile.city}/>
            </View>
            <View style={styles.button}>
                <Button text="Checkout Now" onPress={onChekcout}/>
            </View>
            <Gap height={40}/>
        </ScrollView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor :'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontSize: 14,
        fontFamily: 'PoppinsLight-l4Zw',
        color: '#020202',
        marginBottom: 8
    },
    button: {
        paddingHorizontal: 24,
        marginTop: 24
    }
})
