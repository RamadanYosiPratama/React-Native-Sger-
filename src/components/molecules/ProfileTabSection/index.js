import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { ItemListMenu } from '..';



const renderTabBar = props => (
    <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#020202', height: 3, width: '15%', marginLeft: '3%'}}
    style={{ backgroundColor: 'white', elevation: 0, shadowOpacity: 0, borderBottomColor: '#F2F2F2', borderBottomWidth: 1}}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
        <Text style={{ fontFamily: 'PoppinsMedium-1JPv', color: focused ? '#020202' : '#8D92A3'}}>
        {route.title}
        </Text>
    )}
    />
);

const Account = () => {
    const navigation = useNavigation();
    const signOut = () => {
      AsyncStorage.multiRemove(['userProfile', 'token']).then(() => {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      });
    };
    return (
        <View style={{ paddingTop: 8, paddingHorizontal: 24 }}>
            <ItemListMenu text="Profile"/>
            <ItemListMenu text="Alamat Rumah"/>
            <ItemListMenu text="History Pembayaran"/>
            <ItemListMenu text="Keluar" onPress={signOut}/>
        </View>
    )
};


const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
    { key: '1', title: 'Account' },
    ]);

    const renderScene = SceneMap({
    1: Account,

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

export default ProfileTabSection
const styles = StyleSheet.create({})
