import Axios from 'axios'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { dummy1 } from '../../assets'
import { Button, Gap, Header, ItemValue } from '../../components'
import ItemListFood from '../../components/molecules/ItemListFood'
import { API_HOST } from '../../config'
import { getData } from '../../utils'
import {showMessage} from '../../utils/ShowMessage/index';


const OrderDetail = ({route , navigation}) => {
    const order = route.params;
    const data = {
        status: 'CANCELLED'
    }

    const onCancel = () => {
        getData('token').then((resToken) => {
            Axios.post(`${API_HOST.url}/transaction/${order.id}`, data, {
                headers: {
                    Authorization: resToken.value,
                }
                })
                .then((res) => {
                    // console.log('success cancel order', res)
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'MainApp'}],
                    });
                })
                .catch((err) => {
                    showMessage(`${err?.response?.data?.message} on Cancel Order API` ||
                    'Terjadi Kesalahan di Cancel Order API',)
                })
        })
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
        name={order.food.name}
        price={order.food.price}
        image={{ uri: order.food.picturePath }} items={order.quantity}/>
        <Text>Details Transaction</Text>
        <Gap height={15}/>
        <ItemValue label={order.food.name} Value={order.food.price * order.quantity} type="currency"/>
        <ItemValue label="Driver" Value="10.000"/>
        <ItemValue label="Tax 10%" Value="1.000"/>
        <ItemValue label="Total Price" Value={order.total} valueColor='#1ABC9C' type="currency "/>
        </View>
        <View style={styles.content}>
            <Text>Deliver To:</Text>
            <ItemValue label="Name" Value={order.user.name}/>
            <ItemValue label="Nomor Handphone" Value={order.user.phoneNumber}/>
            <ItemValue label="Alamat" Value={order.user.address}/>
            <ItemValue label="Nomor Rumah" Value={order.user.houseNumber}/>
            <ItemValue label="Kota" Value={order.user.city}/>
        </View>
        <View style={styles.content}>
            <Text>Order Status:</Text>
            <ItemValue label={`#${order.id}`} Value={order.status} valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}/>
        </View>
        <View style={styles.button}>
            {order.status === 'PENDING' && (
        <Button text="Batalkan Order" color="#D9435E" textColor="white" onPress={onCancel}/>
            )}
        </View>
        <Gap height={40}/>
    </ScrollView>
    )
}

export default OrderDetail

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
