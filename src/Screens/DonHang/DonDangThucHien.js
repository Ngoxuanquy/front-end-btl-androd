import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';

import React, {
    useEffect, useState,
    useContext
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemeConText from '../../../config/themeConText';
import { Feather } from '@expo/vector-icons';


export default function DonDangThucHien({ navigation }) {

    let theme = useContext(ThemeConText)

    const [isload, setIsLoad] = useState(false)

    const [taikhoan, setTaiKhoan] = useState([])
    const [customer, setCustomer] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    const [orders, setOrders] = useState([])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res.reverse()))
            .catch(err => console.log(err))
            .finally(() => {
                // setIsLoading(false)
            })
    }, [taikhoan])

    return (
        <ScrollView >
            <View style={{
                marginBottom: 10,
                marginTop: 10,
                padding: 10
            }}>
                <Text style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: 'green',
                    opacity: 0.8,
                    // color: theme.color
                }}>
                    Đơn Đang Thực Hiện
                </Text>
            </View>

            {orders && orders.map(order => (
                <View key={order.id
                }
                    style={{
                        marginBottom: 20
                    }}
                >
                    <View
                        style={[
                            {
                                borderColor: theme.color,
                                borderWidth: 0.4,
                                marginLeft: 10,
                                marginRight: 10,
                                borderRadius: 10,
                            }
                            , {
                                backgroundColor: theme.background
                            }]}
                    >
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: 'gray',
                                padding: 10,
                                color: 'green',
                                color: theme.color

                            }}>
                                Đơn Đang Thực Hiện
                            </Text>
                            <TouchableOpacity
                                onPress={() => Testphone(order.Number)}
                            >
                                <Feather name="phone" size={30} color="green" style={{
                                    padding: 10,
                                    marginRight: 20
                                }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            justifyContent: 'center',
                            // alignItems: 'center',
                            paddingHorizontal: 20,
                            marginBottom: 20,
                        }}>
                            <View style={{

                            }}>
                                <Text style={[
                                    {
                                        lineHeight: 30,

                                    }
                                    , {
                                        color: theme.color
                                    }]}>
                                    Mã Đơn: abc
                                </Text>
                                <Text style={[
                                    {
                                        lineHeight: 30,

                                    }
                                    , {
                                        color: theme.color
                                    }]}>
                                    Tên Khóa: {order.name}
                                </Text>
                                <Text style={[
                                    {
                                        lineHeight: 30,

                                    }
                                    , {
                                        color: theme.color
                                    }]}>
                                    Địa Chỉ: {order.Address}
                                </Text>
                            </View>
                        </View>
                        <View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginBottom: 10
                            }}>
                                <TouchableOpacity style={{
                                    borderColor: theme.color,
                                    borderWidth: 1,
                                    padding: 10,
                                    backgroundColor: '#DCDCDC',
                                    borderRadius: 6

                                }}
                                    onPress={() => navigation.navigate('ThanhToan', {
                                        name: order.name,
                                        id_chuyen: order.id,
                                        number: order.Number
                                    })}

                                >
                                    <Text style={{
                                        color: 'black'
                                    }}>
                                        Thanh Toán
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    borderColor: theme.color,
                                    borderWidth: 1,
                                    padding: 10,
                                    backgroundColor: '#DCDCDC',
                                    borderRadius: 6

                                }}
                                    onPress={() => navigation.navigate('Chup', {
                                        name: order.name,
                                        id: order.id
                                    })}
                                >
                                    <Text style={{
                                        color: 'black'
                                    }}>
                                        Chụp Ảnh
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    borderColor: theme.color,
                                    borderWidth: 1,
                                    padding: 10,
                                    backgroundColor: '#DCDCDC',
                                    borderRadius: 6


                                }}
                                    onPress={() => navigation.navigate("ChiTiet", {
                                        name: order.name,
                                        id: order.id
                                    })}
                                >
                                    <Text style={{
                                        color: 'black'
                                    }}>
                                        Chi Tiết
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            ))}


        </ScrollView >
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
