import React, { useRef, useEffect, useState } from 'react';
import { Button, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-virtualized-view';

export default function DonChoThucHien({ navigation }) {

    const [customer, setCustomer] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setCustomer(res))
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
        <View style={{
            backgroundColor: '#eeeeee',
            flex: 1
        }} >
            <View>
                <LinearGradient
                    // Background Linear Gradient
                    colors={['#ADD8E6', '#B0E0E6', '#87CEFA', '#00BFFF']}
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
                        Đơn Chờ Thực Hiện
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
                                Tổng Số Đơn Chờ
                            </Text>
                            <Text style={{
                                fontSize: 20
                            }}>
                                {customer.length}
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
                                            color: 'blue',
                                            marginLeft: 20,
                                            marginTop: 20,
                                            borderColor: 'gray',
                                            borderWidth: 0.6,
                                            padding: 10,
                                            opacity: 0.5

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

                    {customer.map(cu => (
                        <TouchableOpacity
                            key={cu.id}
                            onPress={() => navigation.navigate('Chi Tiết Đơn Đang Thực Hiện', {
                                id_donhang: cu.id
                            })}

                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                backgroundColor: 'white',
                                width: '90%',
                                paddingVertical: 10,
                                marginTop: 10,
                                borderRadius: 10
                            }}>

                                <View>
                                    <Text style={{
                                        fontSize: 20,
                                        lineHeight: 30
                                    }}>
                                        Mã Kh: {cu.customer_code}
                                    </Text>
                                    <Text style={{
                                        fontSize: 20
                                    }}>
                                        Tên: {cu.customer_name}
                                    </Text>
                                </View>
                                <View>
                                    <Text style={{
                                        fontSize: 20
                                    }}>
                                        {cu.Address}
                                    </Text>
                                    <Text style={{
                                        fontSize: 20
                                    }}>
                                        {cu.phone_number}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}

                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({

});