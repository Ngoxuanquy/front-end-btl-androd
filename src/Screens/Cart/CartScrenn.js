//thông tin thanh toán: tổng tiền chưa giảm giá, thuế, giảm giá, giảm giá combo, tổng tiền sau giảm giá, 
// thêm bảng : danh sách sp mua => thông tin thanh toán 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions, ActivityIndicator, Alert, RefreshControl, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, {
    useEffect, useState
} from 'react';
import { AntDesign } from '@expo/vector-icons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicon } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Cart({ navigation }) {

    const [isload, setIsLoad] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [customer, setCustomer] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [orders, setOrders] = useState([])
    const [reset, setReset] = useState(false);

    const getConten = () => {
        if (isLoading) {
            return <ActivityIndicator />
        }
    }

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer/')
            .then(res => res.json())
            .then(res => setCustomer(res))
            .catch(err => console.log(err))
            .finally(() => {
                // setReset(true);
                // setTimeout(() => {
                //     setReset(false);
                // }, 1000);
            })
    }, [taikhoan])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
                // setReset(true);
                // setTimeout(() => {
                //     setReset(false);
                // }, 10);
            })
    }, [taikhoan])

    // console.log(orders)

    function handerNhanDon(id) {

        return Alert.alert(
            "Are your sure?",
            "Bạn Nhận Đơn Này?",
            [

                // The "No" button
                // Does nothing but dismiss the dialog when tapped
                {
                    text: "No",
                },

                // The "Yes" button
                {
                    text: "Yes",
                    onPress: () => {
                        customer.map(custome => {
                            if (custome.id == id) {
                                fetch('http://192.168.1.165:4000' + '/api/customer_re/create/', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        id: id,
                                        name: custome.customer_name,
                                        taikhoan: taikhoan,
                                        number: custome.phone_number,
                                        address: custome.Address,
                                        note: custome.Note,
                                    })
                                })
                                    .then(() => {
                                        fetch('http://192.168.1.165:4000' + '/api/customer/delete/' + id,
                                            {
                                                method: 'POST',
                                                headers: { 'Content-Type': 'application/json' },
                                            }
                                        )
                                            .then(() => {
                                                fetch('http://192.168.1.165:4000' + '/api/customer/')
                                                    .then(res => res.json())
                                                    .then(res => setCustomer(res))
                                                    .finally(() => {
                                                        alert('Nhận Đơn Thành Công!!!')

                                                    })
                                            })
                                        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/create/', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                id: id,
                                                taikhoan: taikhoan,

                                            })
                                        })

                                            .then(() => {
                                                fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
                                                    .then(res => res.json())
                                                    .then(res => setOrders(res))
                                                    .catch(err => console.log(err))
                                            })
                                            .catch(err => console.log(err))
                                            .finally(() => {

                                            })
                                    })
                            }
                        })

                    },
                },

            ]
        );

    }


    function handerLamMoi() {
        setIsLoading(true)
        fetch('http://192.168.1.165:4000' + '/api/customer/')
            .then(res => res.json())
            .then(res => {
                setCustomer(res)
            })
            .then(() => {
                setIsLoading(false)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })

        fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res))
            .catch(err => console.log(err))
    }


    // useEffect(() => {
    //     const a = setTimeout(() => {
    //         fetch('http://192.168.1.165:4000' + '/api/customer/')
    //             .then(res => res.json())
    //             .then(res => setCustomer(res))
    //             .catch(err => console.log(err))
    //     }, 10000
    //     )
    // })


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        const timeout = setTimeout(() => {
            fetch('http://192.168.1.165:4000' + '/api/customer/')
                .then(res => res.json())
                .then(res => {
                    setCustomer(res)
                })
                .then(() => {
                    setIsLoading(false)
                })
                .catch(err => console.log(err))
                .finally(() => {
                    setIsLoading(false)
                })

            fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
                .then(res => res.json())
                .then(res => setOrders(res))
                .catch(err => console.log(err))
            setRefreshing(false);
        }, 1000);


    }, [taikhoan]);



    return (
        <View style={{
            flex: 1
        }} >
            <ScrollView
                contentContainerStyle={{
                    color: 'black'
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                        tintColor: 'black',
                        backgroundColor: '#FF6666',
                        size: 10,
                        marginBottom: 0,
                    }} />
                }>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    // marginTop: 50,
                    marginBottom: 20,
                    height: 160,
                    backgroundColor: '#FF6666',
                    // textAlign: 'center',
                    borderBottomLeftRadius: 70,
                    borderBottomRightRadius: 70,
                    position: 'relative',

                }}>
                    <View style={{
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        // height: 300
                    }}>
                        <View style={{
                            // position: 'relative'

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: -30
                            }}>
                                <View style={{
                                }}>
                                    <Ionicons name='menu' style={{
                                        fontSize: 30,
                                        color: 'white',
                                        // marginTop: -100

                                    }} />
                                </View>
                                <View style={{

                                }}>
                                    <Ionicons name='notifications-outline' style={{
                                        fontSize: 30,
                                        color: 'white',
                                        // marginTop: -100,
                                        marginRight: -30


                                    }} />
                                </View>
                            </View>
                            <View style={{
                                alignItems: 'center',
                                marginTop: 20,

                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    color: 'white'
                                }}>
                                    Danh Sách Đơn Hàng
                                </Text>
                            </View>
                            <Image
                                style={{
                                    width: 50, height: 50,
                                    position: 'absolute',
                                    marginTop: 80,
                                    marginLeft: Dimensions.get('window').width - 150

                                }}
                                source={{
                                    uri: 'https://cdn.pixabay.com/photo/2015/12/11/06/37/santa-hat-1087709_960_720.png'
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    borderColor: 'black',
                    borderWidth: 1,
                    paddingVertical: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    borderRadius: 10,
                    backgroundColor: '#CCCCCC',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 2.27,

                    elevation: 10,
                }}>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',


                    }}>
                        <View style={{
                            borderColor: 'black',

                        }}>
                            <Text style={{
                                color: 'black'
                            }} >
                                Tổng Đơn
                            </Text>
                            <Text style={{
                                textAlign: 'center'
                            }}>
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>
                                Đi Được
                            </Text>
                            <Text style={{
                                textAlign: 'center'
                            }}>
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>
                                Hủy
                            </Text>
                            <Text style={{
                                textAlign: 'center'
                            }}>
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text>
                                Sai Máy
                            </Text>
                            <Text style={{
                                textAlign: 'center'
                            }}>
                                10
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{
                    marginBottom: 60
                }}>
                    <View style={{
                        position: 'absolute',
                        right: 10,
                        top: 10
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            padding: 7,
                        }}
                            onPress={() => handerLamMoi()}
                        >
                            <Text style={{
                                fontSize: 17
                            }}>
                                Làm Mới
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 22,
                        color: 'red',
                        padding: 10,
                        fontWeight: '600'
                    }}>
                        Đơn Chưa Xác Thực
                    </Text>
                </View>
                {getConten()}

                {/* Đơn Chưa Xác Thực */}
                {customer && customer.map(custome => (
                    <View
                        key={custome.id}
                        style={{
                            marginBottom: 30
                        }}>

                        <View style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            position: 'relative',
                            borderRadius: 10,

                        }}>
                            <Text style={{
                                fontSize: 23,
                                padding: 10,
                                color: 'coral',
                                textAlign: 'center'
                            }}>
                                Đơn Chưa Xác Thực
                            </Text>
                            <View
                                style={{
                                    justifyContent: 'center',
                                    // alignItems: 'center',
                                    paddingHorizontal: 20,
                                    marginBottom: 20,

                                }}>
                                <View style={{

                                }}>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <AntDesign name="key" size={24} color="black" />
                                        <Text style={{
                                            lineHeight: 30,
                                            fontSize: 18,
                                            marginLeft: 10
                                        }}>
                                            Mã Đơn: abc
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Ionicons name="people" size={24} color="black" />
                                        <Text style={{
                                            lineHeight: 30,
                                            fontSize: 18,
                                            marginLeft: 10

                                        }}>
                                            Tên Khóa: {custome.customer_name}
                                        </Text>
                                    </View>
                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Entypo name="address" size={24} color="black" />
                                        <Text style={{
                                            lineHeight: 30,
                                            fontSize: 18,
                                            // marginBottom: 20,
                                            marginLeft: 10
                                        }}>
                                            Địa Chỉ: {custome.Address}
                                        </Text>
                                    </View>

                                    <View style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Entypo name="address" size={24} color="black" />
                                        <Text style={{
                                            lineHeight: 30,
                                            fontSize: 18,
                                            marginBottom: 20,
                                            marginLeft: 10
                                        }}>
                                            Số Điện Thoại: {custome.Phone_Number}
                                        </Text>
                                    </View>
                                </View>

                                <View style={{
                                    position: 'absolute',
                                    bottom: -50,
                                    // marginBottom: 50
                                    // justifyContent: 'space-around'
                                }}>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginBottom: 10,
                                    }}>
                                        <TouchableOpacity style={{
                                            borderColor: 'black',
                                            borderWidth: 1,
                                            padding: 10,
                                            backgroundColor: 'coral',
                                            borderRadius: 6,
                                            marginLeft: 50

                                        }}
                                            onPress={() => handerNhanDon(custome.id)}
                                        >
                                            <Text style={{
                                                color: 'white'
                                            }}>
                                                Nhận Đơn
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            borderColor: 'black',
                                            borderWidth: 1,
                                            padding: 10,
                                            backgroundColor: '#FF9999',
                                            borderRadius: 6,
                                            marginLeft: 100
                                            // right: 0

                                        }}>
                                            <Text style={{
                                                color: 'white'
                                            }}>
                                                Từ Chối
                                            </Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                            </View>
                        </View>
                    </View>
                ))}

                {/* don hang */}
                <View style={{
                    marginBottom: 10,
                    marginTop: 10,
                    padding: 10
                }}>
                    <Text style={{
                        fontSize: 22,
                        fontWeight: 'bold',
                        color: 'green'
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
                        <View style={{
                            borderColor: 'black',
                            borderWidth: 0.4,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 10,
                            // shadowOffset: {
                            //     width: 0,
                            //     height: 5,
                            // },
                            // shadowOpacity: 0.34,
                            // shadowRadius: 6.27,
                            // elevation: 10,


                        }}>
                            <Text style={{
                                fontSize: 18,
                                color: 'gray',
                                padding: 10,
                                color: 'green',
                                opacity: 0.6
                            }}>
                                Đơn Đang Thực Hiện
                            </Text>

                            <View style={{
                                justifyContent: 'center',
                                // alignItems: 'center',
                                paddingHorizontal: 20,
                                marginBottom: 20,
                            }}>
                                <View style={{

                                }}>
                                    <Text style={{
                                        lineHeight: 30
                                    }}>
                                        Mã Đơn: abc
                                    </Text>
                                    <Text style={{
                                        lineHeight: 30
                                    }}>
                                        Tên Khóa: {order.name}
                                    </Text>
                                    <Text style={{
                                        lineHeight: 30
                                    }}>
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
                                        borderColor: 'black',
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
                                        borderColor: 'black',
                                        borderWidth: 1,
                                        padding: 10,
                                        backgroundColor: '#DCDCDC',
                                        borderRadius: 6

                                    }}
                                        onPress={() => navigation.navigate('Chup')}
                                    >
                                        <Text style={{
                                            color: 'black'
                                        }}>
                                            Chụp Ảnh
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{
                                        borderColor: 'black',
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


            </ScrollView>

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
