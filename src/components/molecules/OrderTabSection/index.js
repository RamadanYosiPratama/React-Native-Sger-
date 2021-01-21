import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { useDispatch, useSelector } from 'react-redux';
import { getInProgress, getPastOrders } from '../../../redux/action';
import ItemListFood from '../ItemListFood';

const renderTabBar = props => (
    <TabBar
    {...props}
    indicatorStyle={styles.tabIndicator}
    style={styles.tabBarStyle}
    tabStyle={styles.tabStyle}
    renderLabel={({ route, focused}) => (
        <Text style={styles.tabText(focused)}>
        {route.title}
        </Text>
    )}
    />
);

const InProgress = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {inProgress} = useSelector(state => state.orderReducer)
    const [refreshing, setRefreshing] = useState(false)
    useEffect(() => {
        dispatch(getInProgress())
    }, [])

    const onRefresh = () => {
        setRefreshing(true)
        dispatch(getInProgress())
        setRefreshing(false)
    }
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }>
            <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            {inProgress.map(order => {
            return (
            <ItemListFood
            key={order.id}
            onPress={() => navigation.navigate('OrderDetail', order)}
            image={{ uri: order.food.picturePath }}
            items={order.quantity}
            name={order.food.name}
            type="in-progress"
            price={order.total}/>
            )
            })}

        </View>
        </ScrollView>

    )
};

const PastOrders = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {pastOrders} = useSelector((state) => state.orderReducer);
    const [refreshing, setRefreshing] = useState(false)

        useEffect(() => {
        dispatch(getPastOrders());
        }, []);

        const onRefresh = () => {
            setRefreshing(true)
            dispatch(getPastOrders())
            setRefreshing(false)
        }
    
    // console.log('data past order: ', pastOrders)
    return (
        <ScrollView refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            {pastOrders.map((order) => {
            return (
                <ItemListFood
                key={order.id}
                onPress={() => navigation.navigate('OrderDetail', order)}
                image={{ uri: order.food.picturePath }}
                items={order.quantity}
                name={order.food.name}
                type="past-orders"
                price={order.total}
                date={order.created_at}
                status={order.status}
                />
            )
            })}
        </View>
        </ScrollView>

    )
};

const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
    { key: '1', title: 'In Progress' },
    { key: '2', title: 'Past Order' },
    ]);

    const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
    });
    return (
            <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{ backgroundColor: 'white' }}
            />
    )
}

export default OrderTabSection
const styles = StyleSheet.create({
    tabIndicator: { backgroundColor: '#020202', height: 3, width: '15%', marginLeft: '3%'},
    tabBarStyle: { backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1},
    tabStyle: { width: 'auto' },
    tabText: (focused) => ({
        fontFamily: 'Poppins-Medium',
        color: focused ? '#020202' : '#8D92A3',
    }),
})
