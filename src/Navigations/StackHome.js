import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Chart from '../Components/Char';
import Home from './../Screens/Home/HomeScrem';
import DangNhap from '../Screens/DangNhap/DangNhap';
import Detail from '../Screens/Detail/Index';
import LichSuDonHang from '../Screens/Home/LichSuDonHang';
import Sreach from '../Screens/ShopPages/Search';

const Stack = createNativeStackNavigator();

function StackHomes() {
    return (
        <Stack.Navigator
            options={{
                headerStyle: {
                    backgroundColor: '#262626',
                    height: 150,
                    // title: 'My home',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Lịch Sử Đơn Hàng"
                component={LichSuDonHang}
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
                name="Tìm Kiếm"
                component={Sreach}
                options={{
                    headerShown: false,
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
    );
}

export default StackHomes;
