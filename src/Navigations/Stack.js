import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import Tag from './Tab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QuenMatKhau from '../Screens/QuenMatKhau';


const Stack = createNativeStackNavigator();

function Stacks() {


    const [token, setToken] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [thongtin, setThongTin] = useState([])
    const [reset, setReset] = useState(false);
    // AsyncStorage.getItem('token')
    //     .then(res =>
    //         setToken(res)
    //     )

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => res.map(re => {
                setToken(re.token)
            }))
            .finally(() => {
                // console.log('a')
                // setReset(true);
                // setTimeout(() => {
                //     setReset(false);
                // }, 10);
            })
    }, [])

    // if (reset) {
    //     return null;
    // }

    // setTimeout(() => {
    //     fetch(URL_CT + '/api/users/' + taikhoan)
    //         .then(res => res.json())
    //         .then(res => res.map(re => {
    //             setToken(re.token)
    //         }))
    // }, 1000
    // )


    return (
        <NavigationContainer independent={true}>

            <Stack.Navigator>
                {/* {token != "" ? */}

                <Stack.Screen name="Login" component={Login} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Home" component={Tag} options={{
                    headerShown: false
                }} />

                <Stack.Screen name="QuenMatKhau" component={QuenMatKhau} options={{
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

                {/* :
                    <Stack.Screen name="Login" component={Login} options={{
                        headerShown: false
                    }} /> */}
                {/* } */}
            </Stack.Navigator>

        </NavigationContainer>
    );
}



export default Stacks;