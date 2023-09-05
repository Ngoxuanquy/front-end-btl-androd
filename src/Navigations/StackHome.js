import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LinearGradient from 'react-native-linear-gradient';
import QRCode from '../Screens/Home/QRCode'
import KhoHang from './../Screens/Home/KhoHang'
import Chart from '../Components/Char'
import ThongBao from '../Screens/ThongBao/ThongBao'
import Cart_Them from '../Screens/Cart/Cart_Them'
import ChiSoCaNhan from '../Screens/ChiSoCaNhan/ChiSoCaNhan'
import DonHang from '../Screens/Home/DonHang'
import KhoHangCaNhan from '../Screens/ChiSoCaNhan/KhoHangCaNhan'
import ChiTietThongBao from '../Screens/ThongBao/ChiTietThongBao'
import XemLaiChiTiet from './../Screens/ThongBao/XemLaiChiTiet';
import Home from './../Screens/Home/HomeScrem'
import Home_Copy from './../Screens/Home/HomeScrem_copy'
import DangNhap from '../Screens/DangNhap/DangNhap';
import Detail from '../Screens/Detail/Index'
import LichSuDonHang from '../Screens/Home/LichSuDonHang';
import Sreach from '../Screens/ShopPages/Search';



const Stack = createNativeStackNavigator()

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
                name="Đơn Hàng"
                component={DonHang}
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
                name="QRCode"
                component={QRCode}
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
                name="KhoHang"
                component={KhoHang}
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
                name="Duyệt Chi"
                component={Chart}
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
                name="Thông Báo Công Ty"
                component={ThongBao}
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
                name="Kho Hàng Cá Nhân"
                component={KhoHangCaNhan}
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
                name="Chỉ Số Cá Nhân"
                component={ChiSoCaNhan}
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
                name="Chi Tiết Thông Báo"
                component={ChiTietThongBao}
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
                name="Xem Lại Chi Tiết"
                component={XemLaiChiTiet}
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
    )
}

export default StackHomes