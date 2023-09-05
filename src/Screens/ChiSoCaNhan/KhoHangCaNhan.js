import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import ThemeConText from '../../../config/themeConText';

export default function KhoHangCaNhan({ navigation }) {

    const theme = useContext(ThemeConText)

    const [apis, setApi] = useState([])

    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])
    const [id_users, setId_users] = useState('')
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('id_users')
        .then(res =>
            setId_users(res)
        )


    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.maunen
        }} >
            <View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 130,
                    marginLeft: 40,
                    marginRight: 40,
                    marginTop: 20,
                    backgroundColor: theme.background,
                    borderRadius: 7,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 7.27,

                    elevation: 10,

                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FontAwesome name="book" size={24} color="black" style={{
                            marginRight: 5,
                            marginTop: 5,
                            color: theme.color

                        }} />
                        <Text style={{
                            fontSize: 18,
                            lineHeight: 35,
                            color: theme.color
                        }}>
                            Tổng SL tồn:
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FontAwesome name="money" size={24} color="black" style={{
                            color: theme.color

                        }} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 5,
                            color: theme.color

                        }}>
                            Tổng Tiền tồn kho: 100.000đ
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: theme.background,
                flex: 1,
                marginTop: 20
            }}>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 5,
                        borderWidth: 0.4,
                        borderColor: 'gray',
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: theme.color
                        }}>
                            Tên Sản Phẩm
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: theme.color

                        }}>
                            Đơn Giá
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: theme.color

                        }}>
                            SL Tồn
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold',
                            color: theme.color

                        }}>
                            Tiêu Chuẩn
                        </Text>
                    </View>

                    <View style={{

                        // paddingVertical: 10
                    }}>

                    </View>

                </View>
            </View>
            <StatusBar style="auto" />
        </View>
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
