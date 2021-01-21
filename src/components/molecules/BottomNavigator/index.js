import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { IChomeoff, IChomeon, ICOrderoff, ICOrderon, ICProfileoff, ICProfileon } from '../../../assets';

const Icon = ({label, focus}) => {
    switch(label){
        case 'Home':
            return focus ? <IChomeon /> : <IChomeoff/>
        case 'Order':
            return focus ? <ICOrderon/> : <ICOrderoff/>
        case 'Profile':
            return focus ? <ICProfileon/> : <ICProfileoff/>
        default:
        return <IChomeon />
            }
    }


const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
    return null;
    }

    return (
    <View style={styles.container}>
        {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
            const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
            }
        };

        const onLongPress = () => {
            navigation.emit({
            type: 'tabLongPress',
            target: route.key,
            });
        };

        return (
            <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            >
            <Icon label={label} focus={isFocused}/>
            <Text style={{ color: isFocused ? 'yellow' : '#222' }}>
                {label}
            </Text>
            </TouchableOpacity>
        );
        })}
    </View>
    );
}


export default BottomNavigator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 13,
        paddingHorizontal: 50,
        justifyContent: 'space-between'
    }
})
