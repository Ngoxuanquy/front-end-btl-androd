import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Screens/Home'
import Login from '../Screens/Login'
import Tab from './Tab'
import AsyncStorage from '@react-native-async-storage/async-storage'

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

    // useEffect(() => {
    //     fetch(URL_CT + '/api/users/' + taikhoan)
    //         .then(res => res.json())
    //         .then(res => res.map(re => {
    //             setToken(re.token)
    //         }))
    //         .finally(() => {
    //             // console.log('a')
    //             // setReset(true);
    //             // setTimeout(() => {
    //             //     setReset(false);
    //             // }, 10);
    //         })
    // }, [])

    // if (reset) {
    //     return null;
    // }

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                {/* {token != "" ?
                    <> */}
                <Stack.Screen
                    name="Login"
                    component={Login}
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