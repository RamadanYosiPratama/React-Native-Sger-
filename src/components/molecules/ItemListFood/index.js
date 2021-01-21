import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Number } from '..';
import { dummy1 } from '../../../assets';
import Rating from '../Rating';



// jenis type:
//  product
// ordersummary
// in progress
// pastorder
const ItemListFood = ({image, onPress, items, rating, price, type, name, date, status}) => {

    const renderContent = () => {
        switch (type) {
        case 'product':
            // item list product seperti ke homepage
            return (
            // dikasi fragment karena return hanya bisa return 1 doang
                <>
                <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Number number={price} style={styles.price}/>
                {/* <Text style={styles.price}>IDR {price}</Text> */}
                </View>
                <Rating number={rating} style={styles.numberRating}/>
                </>
            )
        case 'order-summary':
            // item list order summary
            return (
            <>
            <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                {/* <Text style={styles.price}>IDR {price}</Text> */}
                <Number number={price} style={price}/>
            </View>
            <Text style={styles.items} >{items} items</Text>
            </>
            )

        case 'in-progress':
            //  item in progress
            return (
                <>
                <View style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot}/>
                <Number number={price} style={styles.price}/>
                </View>
            </View>
            </>
            )
        case 'past-orders':
            //  item past orders
            const formatedDate = new Date(date).toLocaleDateString()
            return (
                <>
    <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.row}>
                <Text style={styles.price}>{items} items</Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.price} />
            </View>
            </View>
            <View>
            <Text style={styles.date}>{formatedDate}</Text>
            <Text style={styles.status(status)}>{status}</Text>
            </View>
        </>
            )
        default:
            // item product
            return (
            <>
            <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.price}>IDR {price}</Text>
            <Rating/>
        </View>
            </>
            )
    }
}

    return (
        <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
        <Image source={image} style={styles.image}/>
        {renderContent()}
        </View>
        </TouchableOpacity>
    )
}

export default ItemListFood

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingVertical: 8,
        alignItems: 'center',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 8,
        overflow: 'hidden',
        marginRight: 12,
    },
    content: {flex: 1},
    title: {
        fontFamily: 'Poppins-Regular',
        fontSize: 16,
        color: '#020202',
    },
    price: {
        fontFamily: 'Poppins-Regular',
        fontSize: 13,
        color: '#8D92A3',
      },
      items: {fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
      date: {fontSize: 10, fontFamily: 'Poppins-Regular', color: '#8D92A3'},
      status: (status) => ({
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        color: status === 'CANCELLED' ? '#D9435E' : '#1ABC9C',
      }),
      row: {flexDirection: 'row', alignItems: 'center'},
      dot: {
        width: 3,
        height: 3,
        borderRadius: 3,
        backgroundColor: '#8D92A3',
        marginHorizontal: 4,
      },
    });
    