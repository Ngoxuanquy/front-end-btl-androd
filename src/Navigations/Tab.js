import * as React from 'react';
import { Text, View } from 'react-native';
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

export default function Tag() {

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
                    headerShown: false
                }} />
                <Tab.Screen name="ThongTinTaiKhoan" component={ThongTinTaiKhoan} options={{
                    headerShown: false
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}