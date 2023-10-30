import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home_Admin from '../Screens/Admin/Home_Admin/Home_Admin';
import List_Order from '../Screens/Admin/List_Order/List_Order';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import List_Product from '../Screens/Admin/LIst_Product/List_Product';
import Create_Product from '../Screens/Admin/Create_Product/Create_Product';
import Login from '../Screens/DangNhap/DangNhap';

const Drawer = () => {
    const Drawer = createDrawerNavigator();

    return (
        // <NavigationContainer>
        <Drawer.Navigator initialRouteName="home">
            <Drawer.Screen
                name="home"
                component={Home_Admin}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 110,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Drawer.Screen
                name="Tạo sản phẩm"
                component={Create_Product}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 110,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Drawer.Screen
                name="Danh sách sản phẩm"
                component={List_Product}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 110,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Drawer.Screen
                name="Danh sách đơn hàng"
                component={List_Order}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 110,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Drawer.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
        // </NavigationContainer>
    );
};

export default Drawer;
