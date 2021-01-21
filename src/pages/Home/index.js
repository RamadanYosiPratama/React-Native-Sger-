import React, { useEffect } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'
import { getFoodData } from '../../redux/action'

const Home = ({navigation}) => {
    const dispatch = useDispatch();
    const {food} = useSelector((state) => state.homeReducer)

    useEffect(() => {
        dispatch(getFoodData())
    },[])
    return (
    <ScrollView>
    <View style={styles.page}>
            <HomeProfile/>
            <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodContainer}>
                <Gap width={24}/>
                {food.map((itemFood) => {
                    return  <FoodCard
                    onPress={() => navigation.navigate('FoodDetail', itemFood)}
                    key={itemFood.id}
                    name={itemFood.name}
                    image={{uri: itemFood.picturePath}}
                    rating={itemFood.rate}/>
                })}
            </View>
            </ScrollView>
            </View>
            <View style={styles.tabContainer}>
            <HomeTabSection/>
            </View>
        </View>
      </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({

    foodContainer: {
        flexDirection: 'row',
        marginVertical: 24,

    },
    page: {
        flex: 1,

    },
    tabContainer: {
        flex: 1
    }
})
