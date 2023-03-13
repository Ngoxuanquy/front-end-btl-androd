import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather } from '@expo/vector-icons';
import ThemeConText from '../../../config/themeConText';

export default function PhieuMuon({ navigation }) {

    const theme = useContext(ThemeConText)

    const [apis, setApi] = useState([])
    const [taikhoan, setTaiKhoan] = useState()
    const [token, setToken] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/khachhang/' + taikhoan + '/Đã Xác Nhận')
            .then(res => res.json())
            .then(res => setApi(res))
    }, [taikhoan])


    return (
        <ScrollView style={{
            backgroundColor: theme.maunen
        }}>
            {apis.map(sanpham => (
                <View key={sanpham.id} >
                    {/* thông báo */}
                    <View style={{
                        backgroundColor: theme.background,
                        width: '100%',
                        padding: 15,
                        marginTop: 5,
                        borderRadius: 10

                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginRight: 20,
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 70,
                                height: 70,
                                backgroundColor: '#66CC33',
                                borderRadius: 200,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}>
                                <Feather name="phone" size={37} color="white" style={{

                                }} />

                            </View>
                            <View style={{
                                // flexDirection: 'row',
                                marginRight: 56,
                                marginLeft: 5,
                                marginTop: 10,
                            }}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: 'bold',
                                    color: theme.color
                                }}>
                                    Phòng Điều Hành:
                                    <Text style={{
                                        fontWeight: '400'
                                    }}>
                                        {sanpham.NguoiMuon} Đã Mượn Bạn 1 Thứ Gì đó :)))
                                    </Text>
                                </Text>
                                <View style={{
                                    position: 'absolute',
                                    right: 10,
                                    top: 20
                                }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Xem Lại Chi Tiết', { id: sanpham.id })}
                                    >
                                        <Text style={{
                                            color: theme.color

                                        }}>
                                            Xem Chi Tiết
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{
                                    fontSize: 13,
                                    marginTop: 5,
                                    opacity: 0.5,
                                    color: theme.color

                                }}>
                                    {sanpham.date}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
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
