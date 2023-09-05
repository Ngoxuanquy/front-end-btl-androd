import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Logins from '../Screens/DangNhap/DangNhap'
import Tab from './Tab'
import AsyncStorage from '@react-native-async-storage/async-storage'
import DangKy from '../Screens/DangKy/Index'
import Home_Admin from '../Screens/Admin/Home_Admin/Home_Admin'
import Drawer from './Drawer'

const Stack = createNativeStackNavigator()

function Stacks() {

    const [token, setToken] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [thongtin, setThongTin] = useState([])
    const [reset, setReset] = useState(false)
    // AsyncStorage.getItem('token')
    //     .then(res =>
    //         setToken(res)
    //     )

    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res))

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                {/* {token != "" ?
                    <> */}
                <Stack.Screen
                    name="Login"
                    component={Logins}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="DangKy"
                    component={DangKy}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="BottomTab"
                    component={Tab}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="Admin_Home"
                    component={Drawer}
                    options={{
                        headerShown: false,
                    }}
                />
                {/* </>
                    :
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }} />
                } */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Stacks