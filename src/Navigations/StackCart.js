import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Cart from '../Screens/Cart/CartScrenn'
import ChiTiet from '../Screens/Cart/ChiTiet'
import Map from '../Screens/Cart/Map'
import ChupAnh from '../Components/chup'
import ThanhToan from '../Screens/Cart/ThanhToan'
import ThuNhap from '../Screens/ChiSoCaNhan/ThuNhap'
import Cart_Them from '../Screens/Cart/Cart_Them'

const Stack = createNativeStackNavigator()

function StackCart() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cart_home"
                component={Cart}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ChiTiet"
                component={ChiTiet}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Map"
                component={Map}
                options={{
                    headerShown: true,
                }}
            />
            {/* <Stack.Screen
                name="Chup"
                component={ChupAnh}
                options={{
                    headerShown: false,
                }}
            /> */}
            <Stack.Screen
                name="ThanhToan"
                component={ThanhToan}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="ThuNhap"
                component={ThuNhap}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Cart_Them"
                component={Cart_Them}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}

export default StackCart