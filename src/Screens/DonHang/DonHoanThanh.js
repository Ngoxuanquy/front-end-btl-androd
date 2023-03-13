import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';

export default function DonHoanThanh() {

    const [orders, setOrders] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res))
            .catch(err => console.log(err))
            .finally(() => {

            })
    }, [taikhoan])


    const buttons = [


        {
            id: 3, icon: 'notifications',
        },

        {
            id: 5, icon: 'history',
        },
        {
            id: 6, icon: 'trending-up',
        },
        {
            id: 7, icon: 'compare-arrows',
        },
        {
            id: 8, icon: 'account-balance',
        },

    ]

    return (
        <ScrollView style={{
            backgroundColor: '#eeeeee',
            flex: 1
        }} >
            <View>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#8FBC8F', '#20B2AA', '#008B8B', '#008080']}
                    style={{
                        width: "100%",
                        height: 150,
                        borderBottomEndRadius: 20,
                        borderBottomRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        position: 'relative'
                    }}
                />

                <View style={{
                    position: 'absolute',
                    left: '22%',
                    top: '45%'
                }}>
                    <Text style={{
                        fontSize: 25,
                        color: 'white'
                    }}>
                        Đơn Đã Hoàn Thành
                    </Text>
                </View>

            </View>
            <View>
                <View>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            width: '90%',
                            backgroundColor: 'white',
                            padding: 20,
                            borderRadius: 10,
                            marginTop: 20
                        }}>
                            <Text style={{
                                fontSize: 20
                            }}>
                                Tổng Số Đơn
                            </Text>
                            <Text style={{
                                fontSize: 20
                            }}>
                                {orders.length}
                            </Text>
                        </View>
                    </View>
                </View>

                <View>
                    <View>
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            {buttons.map(button => (
                                <ScrollView
                                    key={button.id}
                                    horizontal
                                >
                                    <View >
                                        <MaterialIcons name={button.icon} style={{
                                            fontSize: 40,
                                            color: '#33CC33l',
                                            marginLeft: 20,
                                            marginTop: 20,
                                            borderColor: 'gray',
                                            borderWidth: 0.6,
                                            padding: 10,
                                            // opacity: 0.8
                                        }} />
                                    </View>
                                </ScrollView>
                            ))}
                        </View>
                    </View>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    {orders.map(cu => (
                        <View
                            key={cu.id}
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                backgroundColor: 'white',
                                width: '90%',
                                paddingVertical: 10,
                                marginTop: 10,
                                borderRadius: 10
                            }}>
                            <View style={{
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 18,
                                    lineHeight: 30
                                }}>
                                    Mã HD: {cu.code_bill}
                                </Text>
                                <Text style={{
                                    fontSize: 18
                                }}>
                                    Người Làm: {cu.nguoithuchien}
                                </Text>
                                <Text style={{
                                    fontSize: 18
                                }}>
                                    Ngày : {cu.order_date}
                                </Text>
                                <Text style={{
                                    fontSize: 18
                                }}>
                                    Trạng Thái: {cu.status}
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 18
                                }}>
                                    {cu.Address}
                                </Text>
                                <Text style={{
                                    fontSize: 18
                                }}>
                                    {cu.phone_number}
                                </Text>
                            </View>
                        </View>
                    ))}

                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

});