import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Feather } from '@expo/vector-icons'

export default function PhieuMuon({ navigation }) {
    const [apis, setApi] = useState([])
    const [taikhoan, setTaiKhoan] = useState()
    const [token, setToken] = useState([])

    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res))

    useEffect(() => {
        fetch(
            'http://192.168.1.165:4000' + '/api/lichsumuonhang/khachhang/' + taikhoan + '/Đã Xác Nhận'
        )
            .then((res) => res.json())
            .then((res) => setApi(res))
    }, [taikhoan])

    return (
        <View>
            {apis.map((sanpham) => (
                <View key={sanpham.id}>
                    {/* thông báo */}
                    <View
                        style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            padding: 15,
                            marginTop: 5,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                marginRight: 20,
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    width: 70,
                                    height: 70,
                                    backgroundColor: '#66CC33',
                                    borderRadius: 200,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Feather name="phone" size={37} color="white" style={{}} />
                            </View>
                            <View
                                style={{
                                    // flexDirection: 'row',
                                    marginRight: 56,
                                    marginLeft: 5,
                                    marginTop: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Phòng Điều Hành:
                                    <Text
                                        style={{
                                            fontWeight: '400',
                                        }}
                                    >
                                        {sanpham.NguoiMuon} Đã Mượn Bạn 1 Thứ Gì đó :)))
                                    </Text>
                                </Text>
                                <View
                                    style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 20,
                                    }}
                                >
                                    <TouchableOpacity
                                        onPress={() =>
                                            navigation.navigate('Chi Tiết Thông Báo', {
                                                id: sanpham.id,
                                            })
                                        }
                                    >
                                        <Text>Xem Chi Tiết</Text>
                                    </TouchableOpacity>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 13,
                                        marginTop: 5,
                                        opacity: 0.5,
                                    }}
                                >
                                    {sanpham.date}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
