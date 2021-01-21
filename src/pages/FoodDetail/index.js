import React, { useEffect, useState } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { dummy10, ICBackWhite } from '../../assets'
import { Button, Counter, Number, Rating } from '../../components'
import { getData } from '../../utils'

const FoodDetail = ({navigation, route}) => {
    const {name, picturePath, price, description, rate, ingredients, id} = route.params;
    const [totalItem , setTotalItem] = useState(1);
    const [userProfile, setUseprofile] = useState({})

    const onCounterChange = (value) => {
        console.log('counter: ', value)
        setTotalItem(value)
    }
    useEffect(() => {
        getData('userProfile').then(res => {
        setUseprofile(res)
        })
    }, [])


    const onOrder = () => {
        const totalPrice = totalItem * price;
        const driver = 10000;
        const tax = 10 / 100 * totalPrice;
        const total = totalPrice + driver + tax;


        const data = {
            item: {
                name: name,
                price: price,
                picturePath: picturePath,
                id: id
            },
            transaction: {
                totalItem: totalItem,
                totalPrice: totalPrice,
                driver: driver,
                tax: tax,
                total: total
            },
            userProfile,
        }
        console.log('data checkout :', data)
       navigation.navigate('OrderSummary', data)
    }


    return (
        <View style={styles.page}>
            <ImageBackground source={{ uri: picturePath }} style={styles.cover}>
                <TouchableOpacity style={styles.back}
                onPress={() => navigation.goBack()}>
                    <ICBackWhite/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                <View style={styles.productContainer}>
                <View>
                        <Text style={styles.title}>{name}</Text>
                        <Rating number={rate}/>
                    </View>
                    <Counter
                    onValueChange={onCounterChange}/>
                </View>
                <Text style={styles.Description}>{description}</Text>
                <Text style={styles.label}>Ingredients:</Text>
                <Text style={styles.Description}>{ingredients}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.labelTotal}>Total Price:</Text>
                        <Number number={totalItem * price} style={styles.priceTotal}/>
                        {/* <Text style={styles.PriceTotal}>IDR {totalItem * price}</Text> */}
                    </View>
                    <View style={styles.button}>
                    <Button text="Order Now" onPress={onOrder}/>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default FoodDetail

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    cover: {
        height: 330,
        paddingTop: 24,
        paddingLeft: 22
    },
    back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    content: {
        backgroundColor: 'white',
        borderTopRightRadius:40,
        borderTopLeftRadius: 40,
        marginTop: -40,
        paddingTop: 26,
        paddingHorizontal: 16,
        flex:1
    },
    title: {
        fontSize: 16,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#020202'
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14
    },
    Description: {
        fontSize: 14,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#8D92A3',
        marginBottom: 16
    },
    label: {
        fontSize: 14,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#020202',
        marginBottom: 4
    },
    mainContent: {
        flex: 1
    },
    footer: {
        flexDirection: 'row',
        paddingVertical: 16,
        alignItems: 'center'
    },
    button: {
        width: 163
    },
    priceContainer: {
        flex: 1
    },
    labelTotal: {
        fontSize: 13,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#8D92A3'
    },
    PriceTotal: {
        fontSize: 18,
        fontFamily: 'PoppinsRegular-B2Bw',
        color: '#020202'
    }
})
