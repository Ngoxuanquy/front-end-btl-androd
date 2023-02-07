import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Cart from '../Screens/CartScrenn';
import Phone from '../Screens/Phone';
import ThongTinTaiKhoan from './../Screens/ThongTinTaiKhoanScrenn';

import { MaterialIcons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import StackHome from './StackHome'
import StackCart from './StackCart';

const Tab = createBottomTabNavigator();

export default function Tag({ navigation }) {

    const [customer, setCustomer] = useState([]);
    const URL_ON = 'http://192.168.0.112:4000'
    const URL1_ON = 'http://192.168.0.112:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    useEffect(() => {
        fetch(URL_FPT + '/api/customer/')
            .then(res => res.json())
            .then(res => setCustomer(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    })

    const handleBackButton = () => {
        console.log('a')
    }

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'Phone') {
                        iconName = focused ? 'call' : 'call';
                    }
                    else if (route.name === 'ThongTinTaiKhoan') {
                        iconName = focused ? 'people' : 'people';
                    }
                    else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}>
                <Tab.Screen name="Home" component={StackHome} options={{
                    headerShown: false
                }} />
                <Tab.Screen name="Phone" component={Phone} options={{
                    headerShown: false
                }} />

                <Tab.Screen name="Cart" component={StackCart} options={{
                    headerShown: false,
                    tabBarBadge: customer.length
                }}
                    listeners={{
                        focus: () => BackHandler.addEventListener('hardwareBackPress', handleBackButton)
                        , blur: () => BackHandler.removeEventListener('hardwareBackPress', handleBackButton)
                    }}
                />

                <Tab.Screen name="ThongTinTaiKhoan" component={ThongTinTaiKhoan} options={{
                    headerShown: false
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}