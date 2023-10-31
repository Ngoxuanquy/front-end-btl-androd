import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Stacks from './src/Navigations/Stack.js';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners';

import ThemeConText from './config/themeConText.js';
import theme from './config/theme.js';
import { Call_Post_Api } from './src/Call_post_api/Call_Post_Api.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
    const [mode, setMode] = useState(false);

    useEffect(() => {
        let b = EventRegister.addEventListener('chaneLength', (data) => {
            setOrderLength(data);
        });

        let a = EventRegister.addEventListener('changeTheme', (data) => {
            setMode(data);
        });
        return () => {
            EventRegister.removeEventListener(a);
            EventRegister.removeEventListener(b);
        };
    }, []);

    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    useEffect(() => {
        const getTokenFromStorage = async () => {
            try {
                const res = await AsyncStorage.getItem('token');
                setToken(res);
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        };

        getTokenFromStorage();
    }, []);

    //set order
    const [ordersLength, setOrderLength] = useState(0);
    useEffect(() => {
        if (token) {
            Call_Post_Api(
                {
                    userId: id,
                },
                token,
                id,
                '/cart/getlist',
            )
                .then((data) => {
                    if (data && data.metadata && data.metadata.cart_products) {
                        setOrderLength(data.metadata.cart_products.length);
                    } else {
                        setOrderLength(0);
                    }
                })
                .catch((err) => console.log({ err }));
        }
    }, [token]);

    return (
        <ThemeConText.Provider
            value={[mode === true ? theme.dark : theme.ligth, ordersLength]}
        >
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Stacks />
            </GestureHandlerRootView>
        </ThemeConText.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
