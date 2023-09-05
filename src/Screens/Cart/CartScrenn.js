//thông tin thanh toán: tổng tiền chưa giảm giá, thuế, giảm giá, giảm giá combo, tổng tiền sau giảm giá, 
// thêm bảng : danh sách sp mua => thông tin thanh toán 

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions, ActivityIndicator, Alert, RefreshControl, SafeAreaView } from 'react-native';

import React, {
    useEffect, useState,
    useContext
} from 'react';
import { AntDesign } from '@expo/vector-icons';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicon } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ThemeConText from '../../../config/themeConText';
import { Feather } from '@expo/vector-icons';
import Testphone from '../../Components/Testphone'
import { Button } from '@rneui/themed';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners'
import * as Notifications from 'expo-notifications';

export default function Cart({ navigation }) {

    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);

    const [isload, setIsLoad] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [customer, setCustomer] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [reset, setReset] = useState(false);

    const getConten = () => {
        if (isLoading) {
            return <ActivityIndicator />
        }
    }

    console.log({ ordersLength })

    const [token, setToken] = useState()
    const [id, setId] = useState()

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )



    useEffect(() => {
        const getIdFromStorage = async () => {
            try {
                const res = await AsyncStorage.getItem('id');
                setId(res);
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        };

        getIdFromStorage();
    }, []);

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

    // function handerNhanDon(id) {


    //     return Alert.alert(
    //         "Are your sure?",
    //         "Bạn Nhận Đơn Này?",
    //         [

    //             // The "No" button
    //             // Does nothing but dismiss the dialog when tapped
    //             {
    //                 text: "No",
    //             },

    //             // The "Yes" button
    //             {
    //                 text: "Yes",
    //                 onPress: () => {


    //                 },
    //             },

    //         ]
    //     );

    // }


    const checkContact = async () => {
        try {
            const data = await Call_Post_Api(null, token, id, '/contact/get/' + id);
            const metadata = data.metadata;

            // Sử dụng giá trị metadata ở đây hoặc trả về nó nếu cần
            return metadata;
        } catch (error) {
            console.error(error);
            // Xử lý lỗi nếu có
        }
    };



    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        const timeout = setTimeout(() => {
            getApi()
            setRefreshing(false);
        }, 1000);


    }, [taikhoan]);


    //khai báo api cart
    const [orders, setOrder] = useState([])

    const getApi = () => {
        Call_Post_Api(
            {
                userId: id
            },
            token,
            id,
            '/cart/getlist'
        )
            .then((data) => {
                setIsLoading(false)
                if (data && data.metadata && data.metadata.cart_products) {
                    setOrder(data.metadata.cart_products)
                    EventRegister.emit('chaneLength', data.metadata.cart_products.length)
                }
                else {
                    setOrder([])
                }

            }).catch((err) => console.log({ err }))
    }

    useEffect(() => {
        getApi()

    }, [token])

    useEffect(() => {
        getApi()
    }, [ordersLength])


    const handleDelete = (procutId) => {

        Call_Post_Api(
            {
                userId: id,
                productId: procutId
            },
            token,
            id,
            '/cart/delete'
        )
            .then(() => {
                EventRegister.emit('chaneLength', false)
                setOrder([])
                getApi()
            })

        console.log("abc")

    }

    console.log({ orders })

    const [tokenTest, setTokenTest] = useState([])

    async function getToken() {

        const { status } = await Notifications.getPermissionsAsync()
        if (status !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync()
            if (status !== 'granted') {
                alert('Looix')
                return;
            }
        }

        const tokenData = await Notifications.getExpoPushTokenAsync()
        const token = tokenData.data
        console.log({ token })
        setTokenTest(token);
    }

    useEffect(() => {
        getToken()
    }, [])

    //xử lý khi nhân thanh toán 
    //+ Kiểm tra có thông tin tài khoản
    //+ cho đặt hàng
    //+ chuyển thành đơn đã đăth
    const handelSubmit = async () => {
        const result = await checkContact();
        console.log({ result })
        if (result === null) {
            // alert('')

            return Alert.alert(
                "Vui lòng nhập thông tin tài khoản!!?",
                "Chuyển sang trang thông tin?",
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
                            navigation.navigate("ThongTinTaiKhoan")


                        },
                    },

                ]
            );
        }
        else {
            Call_Post_Api(
                {
                    user: result,
                    product: orders,
                    notifications: tokenTest
                },
                token,
                id,
                '/transaction'
            )
                .then((data) => {
                    console.log({ data })

                    Call_Post_Api(
                        null,
                        token,
                        id,
                        '/cart/updateTransaciton/' + id
                    )
                        .then(() => {
                            getApi()
                            EventRegister.emit('chaneLength', 0)
                            alert('Đặt hành thành công!!!')

                        })

                })
        }
    }

    return (
        <View
            style={[
                {
                    flex: 1,
                }
                , {
                    backgroundColor: theme.maunen
                }]}
        >
            <ScrollView
                contentContainerStyle={{
                    color: 'black'
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                        tintColor: 'black',
                        backgroundColor: theme.maunen,
                        size: 10,
                        marginBottom: 0,
                    }} />
                }>
                <View style={{
                    marginBottom: 30
                }}>
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#E6E6FA', '#D8BFD8', '#DDA0DD', '#DA70D6']}
                        style={{
                            width: "100%",
                            borderBottomRightRadius: 40,
                            borderBottomLeftRadius: 40,
                        }}
                    >

                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            height: 170,

                        }}>

                            <Text style={{
                                fontSize: 25,
                                color: theme.color,
                                textAlign: 'center'
                            }}>
                                Cart
                            </Text>
                            <View style={{
                                position: 'absolute',
                                right: 10,
                                bottom: 0
                            }}>
                                <Image
                                    style={{
                                        width: 50, height: 50,
                                        marginLeft: Dimensions.get('window').width - 150

                                    }}
                                    source={{
                                        uri: 'https://cdn.pixabay.com/photo/2015/12/11/06/37/santa-hat-1087709_960_720.png'
                                    }}
                                />
                            </View>
                        </View>

                    </LinearGradient>



                </View>
                <View
                    style={[
                        {
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            borderColor: theme.color,
                            borderWidth: 0.4,
                            paddingVertical: 10,
                            marginLeft: 10,
                            marginRight: 10,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 2.27,

                            elevation: 10,
                        }
                        , {
                            backgroundColor: theme.background
                        }]}
                >
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',


                    }}>
                        <View style={{
                            borderColor: 'black',

                        }}>
                            <Text
                                style={[
                                    {
                                    }
                                    , {
                                        color: theme.color
                                    }]}
                            >
                                Voucher
                            </Text>
                            <Text style={[
                                {
                                    textAlign: 'center'
                                }
                                , {
                                    color: theme.color
                                }]}>
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text
                                style={[
                                    {
                                    }
                                    , {
                                        color: theme.color
                                    }]}
                            >
                                Đơn Hàng
                            </Text>
                            <Text style={[
                                {
                                    textAlign: 'center'
                                }
                                , {
                                    color: theme.color
                                }]}>
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text
                                style={[
                                    {
                                    }
                                    , {
                                        color: theme.color
                                    }]}
                            >
                                Đơn Đang Giao
                            </Text>
                            <Text style={[
                                {
                                    textAlign: 'center'
                                }
                                , {
                                    color: theme.color
                                }]}>
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
                            backgroundColor: '#99CCFF',
                            padding: 7,
                            borderRadius: 8
                        }}
                            onPress={() => handerLamMoi()}
                        >
                            <Text style={{
                                fontSize: 17,
                                color: theme.color,

                            }}>
                                Làm Mới
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Text style={{
                        fontSize: 22,
                        padding: 10,
                        fontWeight: '600',
                        opacity: 0.6,
                        color: theme.color,

                    }}>
                        Đơn Hàng
                    </Text>
                </View>
                {getConten()}

                {/* Đơn hàng */}
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    borderWidth: 1,
                    borderColor: 'gray',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Name
                        </Text>
                    </View>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Ảnh
                        </Text>
                    </View>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Giá
                        </Text>
                    </View>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Số Lượng
                        </Text>
                    </View>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Thành Tiền
                        </Text>
                    </View>
                    <View style={{
                        borderRightWidth: 1,
                        borderRightColor: 'gray',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1, // Thêm flex để các ô có cùng chiều rộng
                    }}>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            color: theme.color,

                        }}>
                            Xóa
                        </Text>
                    </View>
                </View>


                {/* Đơn Chưa Xác Thực */}
                {orders && orders.map(order => (
                    <View
                        key={order._id}
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            alignItems: 'center',
                            width: '100%',
                            paddingVertical: 10
                        }}>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,

                            }}>
                                {order.product_name}
                            </Text>
                        </View>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Image source={{
                                uri: order.product_thumb
                            }}
                                style={{
                                    width: 80,
                                    height: 80
                                }}
                            />
                        </View>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,

                            }}>
                                {order.product_price}
                            </Text>
                        </View>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,

                            }}>
                                {order.quantity}
                            </Text>
                        </View>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Text style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,

                            }}>
                                {order.product_price * order.quantity}
                            </Text>
                        </View>
                        <View style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}>
                            <Button style={{
                                backgroundColor: 'white'
                            }}
                                onPress={() => handleDelete(order._id)}
                            >
                                <AntDesign name="delete" size={23} color={theme.color} />
                            </Button>
                        </View>
                    </View>
                ))}

                {/* Tổng Tiền */}
                <View>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            marginTop: 10,
                            position: 'absolute',
                            right: 20,
                            color: theme.color

                        }}>
                            Tổng tiền: 300
                        </Text>
                    </View>
                </View>

                {/* Thanh toán */}
                <View style={{
                    marginTop: 60,

                }}>
                    <TouchableOpacity style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}
                        onPress={() => handelSubmit()}
                    >
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['#E6E6FA', '#C2F0E1', '#A4E6EB', '#DA70D6']}
                            style={{
                                width: 220,
                                borderRadius: 10,

                            }}
                            start={{ x: 0, y: 0 }} // Start from the left
                            end={{ x: 1, y: 0 }}   // End at the right
                        >

                            <View style={{
                                height: 50,
                                justifyContent: 'center',
                                alignItems: 'center',

                            }}
                            >
                                <Text style={{
                                    fontSize: 20,
                                    color: theme.color,
                                    textAlign: 'center',

                                }}>
                                    Đặt Hàng
                                </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </ScrollView >

        </View >
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
