import React, { useEffect, useState, useContext } from 'react'
import { Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Cart from '../Screens/Cart/CartScrenn'
import Phone from '../Screens/Home/Phone'
import ThongTinTaiKhoan from './../Screens/Home/ThongTinTaiKhoanScrenn'
import ShopPage from './../Screens/ShopPages/index'

import { MaterialIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import StackHome from './StackHome'
import StackCart from './StackCart'

import ThemeConText from '../../config/themeConText'

const Tab = createBottomTabNavigator()


export default function Tag({ navigation }) {
    const [customer, setCustomer] = useState([])
    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);

    const [refresh, setRefresh] = useState(0);

    console.log({ ordersLength })
    return (
        <Tab.Navigator
            initialRouteName="HomeTab"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'HomeTab') {
                        iconName = focused ? 'home' : 'home'
                    } else if (route.name === 'ShopPage') {
                        iconName = focused ? 'browsers-sharp' : 'browsers-sharp'
                    } else if (route.name === 'ThongTinTaiKhoan') {
                        iconName = focused ? 'people' : 'people'
                    } else if (route.name === 'Cart') {
                        iconName = focused ? 'cart' : 'cart'
                    }
                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: theme.color,
                tabBarStyle: {
                    backgroundColor: theme.background
                }
            })}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackHome}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="ShopPage"
                component={ShopPage}
                options={{
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Cart"
                component={StackCart}
                options={{
                    headerShown: false,
                    tabBarBadge: ordersLength,
                }}
                listeners={({ navigation, route }) => ({
                    tabPress: (e) => {
                        // Tăng giá trị refresh khi tab Cart được nhấn
                        setRefresh((prevRefresh) => prevRefresh + 1);
                    },
                })}
            />

            <Tab.Screen
                name="ThongTinTaiKhoan"
                component={ThongTinTaiKhoan}
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}