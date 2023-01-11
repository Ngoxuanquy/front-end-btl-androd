import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Cart from '../Screens/CartScrenn';
import ChiTiet from '../Screens/ChiTiet';
import Map from '../Screens/Map'
import ChupAnh from './../Screens/chup';
import ThanhToan from '../Screens/ThanhToan';
import ThuNhap from '../Screens/ThuNhap';
import Cart_Them from '../Screens/Cart_Them';

const Stack = createNativeStackNavigator();

function StackCart() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Cart" component={Cart} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ChiTiet" component={ChiTiet} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Map" component={Map} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Chup" component={ChupAnh} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ThanhToan" component={ThanhToan} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="ThuNhap" component={ThuNhap} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Cart_Them" component={Cart_Them} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackCart;