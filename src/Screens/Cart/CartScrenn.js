//thông tin thanh toán: tổng tiền chưa giảm giá, thuế, giảm giá, giảm giá combo, tổng tiền sau giảm giá,
// thêm bảng : danh sách sp mua => thông tin thanh toán

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ScrollView,
    Image,
    Dimensions,
    ActivityIndicator,
    Alert,
    RefreshControl,
    SafeAreaView,
    Linking,
    Pressable
    
} from 'react-native';

import React, { useEffect, useState, useContext } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import ThemeConText from '../../../config/themeConText';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';
// import * as Notifications from 'expo-notifications';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native-elements';
import Modal from 'react-native-modal';

export default function Cart({ navigation }) {
    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);
    const [isChecked, setChecked] = useState(false);

    const [isload, setIsLoad] = useState(false);
    // const [isLoading, setIsLoading] = useState(true);
    const [customer, setCustomer] = useState([]);
    const [taikhoan, setTaiKhoan] = useState([]);
    const [reset, setReset] = useState(false);
    const [selectedIndex, setIndex] = useState(0);
    const [selectedIndexVouche, setIndexVouche] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);
 const [modalVisible, setModalVisible] = useState(false);
    const getConten = () => {
        if (isLoading) {
            return <ActivityIndicator />;
        }
    };

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

    const checkContact = async () => {
        try {
            const data = await Call_Post_Api(
                null,
                token,
                id,
                '/contact/get/' + id,
            );
            const metadata = data.metadata;

            // Sử dụng giá trị metadata ở đây hoặc trả về nó nếu cần
            return metadata;
        } catch (error) {
            console.error(error);
            // Xử lý lỗi nếu có
        }
    };

    const [refreshing, setRefreshing] = React.useState(false);

   

    //khai báo api cart
    const [orders, setOrder] = useState([]);
    const [tong, setTong] = useState(0);

    const getApi = () => {
        Call_Post_Api(
            {
                userId: id,
            },
            token,
            id,
            '/cart/getlist',
        )
            .then((data) => {
                setIsLoading(false);
                if (data && data.metadata && data.metadata.cart_products) {
                    setOrder(data.metadata.cart_products);
                    // EventRegister.emit(
                    //     'chaneLength',
                    //     data.metadata.cart_products.length,
                    // );
                    // let total = data.metadata.cart_products?.reduce(
                    //     (acc, current) =>
                    //         acc + current.product_price * current.quantity,
                    //     0, // Giá trị khởi tạo
                    // );
                    // setTong(total);
                } else {
                    setOrder([]);
                }
            })
            .catch((err) => console.log({ err }));
    };

    useEffect(() => {
        getApi();
    }, [token]);

    useEffect(() => {
        getApi();
    }, [ordersLength]);

    const handleDelete = (procutId) => {
        Call_Post_Api(
            {
                userId: id,
                productId: procutId,
            },
            token,
            id,
            '/cart/delete',
        ).then(() => {
            setOrder([]);
            getApi();
            EventRegister.emit('chaneLength', ordersLength - 1);
        });
    };

    const [tokenTest, setTokenTest] = useState([]);

    // async function getToken() {
    //     const { status } = await Notifications.getPermissionsAsync();
    //     if (status !== 'granted') {
    //         const { status } = await Notifications.requestPermissionsAsync();
    //         if (status !== 'granted') {
    //             alert('Looix');
    //             return;
    //         }
    //     }

    //     const tokenData = await Notifications.getExpoPushTokenAsync();
    //     const token = tokenData.data;
    //     console.log({ token });
    //     setTokenTest(token);
    // }

    // useEffect(() => {
    //     getToken();
    // }, []);

    //xử lý khi nhân thanh toán
    //+ Kiểm tra có thông tin tài khoản
    //+ cho đặt hàng
    //+ chuyển thành đơn đã đăth

    //Tính tổng tiền

    const handelSubmit = async () => {
        const result = await checkContact();
        setIsLoading(true);

        if (result === null) {
            // alert('')

            return Alert.alert(
                'Vui lòng nhập thông tin tài khoản!!?',
                'Chuyển sang trang thông tin?',
                [
                    // The "No" button
                    // Does nothing but dismiss the dialog when tapped
                    {
                        text: 'No',
                    },

                    // The "Yes" button
                    {
                        text: 'Yes',
                        onPress: () => {
                            navigation.navigate('ThongTinTaiKhoan');
                        },
                    },
                ],
            );
        } else {
            if (selectedIndex == 0) {
              //  newOrder = newOrder.map(order => ({ ...order, voucher: 10 }));
                Call_Post_Api(
                    {
                        user: result,
                        product: newOrder.length > 0 ? newOrder : orders,
                        notifications: tokenTest,
                        voucher: 10 
                    },
                    token,
                    id,
                    '/transaction',
                ).then((data) => {
                    Call_Post_Api(
                        {
                            userId: id,
                            newCartData:
                                newOrder.length > 0 ? newOrder : orders,
                        },
                        token,
                        id,
                        '/cart/updateTransaciton',
                    ).then(() => {
                        setIsLoading(false);
                        // setOrder([]);
                        setNewOrder([]);
                       Call_Post_Api(
            {
                userId: id,
            },
            token,
            id,
            '/cart/getlist',
        )
            .then((data) => {
                setIsLoading(false);
                if (data && data.metadata && data.metadata.cart_products) {
                    setOrder(data.metadata.cart_products);
                    EventRegister.emit(
                        'chaneLength',
                        data.metadata.cart_products.length,
                    );
                
                } else {
                    setOrder([]);
                }
            })
            .catch((err) => console.log({ err }));
                        alert('Đặt hành thành công!!!');
                    });
                });
            } else {
                Call_Post_Api(
                    {
                        amount: tong,
                        language: 'vn',
                        bankCode: '',
                    },
                    token,
                    id,
                    '/vnpay/create_payment_url',
                ).then((data) => {
                    Linking.openURL(data.data);
                    console.log(data.data);
                    // alert('Đặt hành thành công!!!');
                });
            }
        }
    };

    const [checkedOrders, setCheckedOrders] = useState({});
    const [newOrder, setNewOrder] = useState([]);

    const handleCheckboxChange = (selectedOrder) => {
        // Check if the order is in checkedOrders
        if (checkedOrders[selectedOrder._id]) {
            // If it's checked, uncheck it and remove it from newOrder
            setCheckedOrders((prevCheckedOrders) => ({
                ...prevCheckedOrders,
                [selectedOrder._id]: false,
            }));
            setNewOrder((prevNewOrder) =>
                prevNewOrder.filter((order) => order._id !== selectedOrder._id),
            );
        } else {
            // If it's unchecked, check it and add it to newOrder
            setCheckedOrders((prevCheckedOrders) => ({
                ...prevCheckedOrders,
                [selectedOrder._id]: true,
            }));
            setNewOrder((prevNewOrder) => [...prevNewOrder, selectedOrder]);
        }
    };

    useEffect(() => {
        let total = newOrder?.reduce(
            (acc, current) => acc + current.product_price * current.quantity,
            0, // Giá trị khởi tạo
        );
        if(selectedIndexVouche == 3) {
            setTong((total * 90)/100);
        }
        else {
            setTong(total);
        }
    }, [newOrder, selectedIndexVouche]);

     const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        const timeout = setTimeout(() => {
            Call_Post_Api(
            {
                userId: id,
            },
            token,
            id,
            '/cart/getlist',
        )
            .then((data) => {
                setIsLoading(false);
                if (data && data.metadata && data.metadata.cart_products) {
                    setOrder(data.metadata.cart_products);
                    EventRegister.emit(
                        'chaneLength',
                        data.metadata.cart_products.length,
                    );
                   
                } else {
                    setOrder([]);
                }
            })
            .catch((err) => console.log({ err }));
            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);

    return (
        <View
            style={[
                {
                    flex: 1,
                },
                {
                    backgroundColor: theme.maunen,
                },
            ]}
        >
            {isLoading && (
                <Modal isVisible={isModalVisible} backdropOpacity={0.5}>
                    <View>
                        <ActivityIndicator />
                    </View>
                </Modal>
            )}
            <ScrollView
                contentContainerStyle={{
                    color: 'black',
                }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        style={{
                            tintColor: 'black',
                            backgroundColor: theme.maunen,
                            size: 10,
                            marginBottom: 0,
                        }}
                    />
                }
            >
                <View
                    style={{
                        marginBottom: 30,
                    }}
                >
                    <LinearGradient
                        // Background Linear Gradient
                        colors={['#E6E6FA', '#D8BFD8', '#DDA0DD', '#DA70D6']}
                        style={{
                            width: '100%',
                            borderBottomRightRadius: 40,
                            borderBottomLeftRadius: 40,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: 170,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 25,
                                    color: theme.color,
                                    textAlign: 'center',
                                }}
                            >
                                Cart
                            </Text>
                            <View
                                style={{
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 0,
                                }}
                            >
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        marginLeft:
                                            Dimensions.get('window').width -
                                            150,
                                    }}
                                    source={{
                                        uri: 'https://cdn.pixabay.com/photo/2015/12/11/06/37/santa-hat-1087709_960_720.png',
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
                        },
                        {
                            backgroundColor: theme.background,
                        },
                    ]}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                borderColor: 'black',
                            }}
                        >
                            <Text
                                style={[
                                    {},
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                Voucher
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                    },
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text
                                style={[
                                    {},
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                Đơn Hàng
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                    },
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                10
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text
                                style={[
                                    {},
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                Đơn Đang Giao
                            </Text>
                            <Text
                                style={[
                                    {
                                        textAlign: 'center',
                                    },
                                    {
                                        color: theme.color,
                                    },
                                ]}
                            >
                                10
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        marginBottom: 60,
                    }}
                >
                    <View
                        style={{
                            position: 'absolute',
                            right: 10,
                            top: 10,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#99CCFF',
                                padding: 7,
                                borderRadius: 8,
                            }}
                        >
                              <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() => setModalVisible(true)}>
                            <Text style={styles.textStyle}>  Voucher</Text>
                        </Pressable>
                          
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View>
                    <Text
                        style={{
                            fontSize: 22,
                            padding: 10,
                            fontWeight: '600',
                            opacity: 0.6,
                            color: theme.color,
                        }}
                    >
                        Đơn Hàng
                    </Text>
                </View>
                {getConten()}

                {/* Đơn hàng */}
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                        borderWidth: 1,
                        borderColor: 'gray',
                        alignItems: 'center',
                        width: '100%',
                    }}
                >
                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            #
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            Name
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            Ảnh
                        </Text>
                    </View>

                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            Số Lượng
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            Thành Tiền
                        </Text>
                    </View>
                    <View
                        style={{
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1, // Thêm flex để các ô có cùng chiều rộng
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                                textAlign: 'center',
                                color: theme.color,
                            }}
                        >
                            Xóa
                        </Text>
                    </View>
                </View>

                {/* Đơn Chưa Xác Thực */}
                {orders &&
                    orders.map((order) => (
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
                                paddingVertical: 10,
                            }}
                        >
                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Checkbox
                                    value={checkedOrders[order._id] || false}
                                    onValueChange={() =>
                                        handleCheckboxChange(order)
                                    }
                                    color={
                                        checkedOrders[order._id]
                                            ? '#4630EB'
                                            : undefined
                                    }
                                />
                            </View>
                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        color: theme.color,
                                    }}
                                >
                                    {order.product_name}
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Image
                                    source={{
                                        uri: order.product_thumb,
                                    }}
                                    style={{
                                        width: 80,
                                        height: 80,
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        color: theme.color,
                                    }}
                                >
                                    {order.quantity}
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 18,
                                        textAlign: 'center',
                                        color: theme.color,
                                    }}
                                >
                                    {order.product_price * order.quantity}
                                </Text>
                            </View>
                            <View
                                style={{
                                    borderRightWidth: 1,
                                    borderRightColor: 'gray',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flex: 1, // Thêm flex để các ô có cùng chiều rộng
                                }}
                            >
                                <Button
                                    style={{
                                        backgroundColor: 'white',
                                    }}
                                    onPress={() => handleDelete(order._id)}
                                    title={
                                        <AntDesign
                                            name="delete"
                                            size={23}
                                            color={theme.color}
                                        />
                                    }
                                ></Button>
                            </View>
                        </View>
                    ))}

                {/* Tổng Tiền */}
                <View>
                    <View>
                        <Text
                            style={{
                                fontSize: 20,
                                marginTop: 10,
                                position: 'absolute',
                                right: 20,
                                color: theme.color,
                            }}
                        >
                            Tổng tiền: {tong}
                        </Text>
                    </View>
                </View>

                {/* Thanh toán */}
                <View
                    style={{
                        marginTop: 60,
                    }}
                >
                    <CheckBox
                        title="Vousche 10%"
                        checked={selectedIndexVouche === 3}
                        onPress={() => setIndexVouche(3)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title="Thanh toán khi nhận hàng"
                        checked={selectedIndex === 0}
                        onPress={() => setIndex(0)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <CheckBox
                        title="Thanh toán qua VnPay"
                        checked={selectedIndex === 2}
                        onPress={() => setIndex(2)}
                        checkedIcon="dot-circle-o"
                        uncheckedIcon="circle-o"
                    />
                    <TouchableOpacity
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => handelSubmit()}
                    >
                        <LinearGradient
                            // Background Linear Gradient
                            colors={[
                                '#E6E6FA',
                                '#C2F0E1',
                                '#A4E6EB',
                                '#DA70D6',
                            ]}
                            style={{
                                width: 220,
                                borderRadius: 10,
                            }}
                            start={{ x: 0, y: 0 }} // Start from the left
                            end={{ x: 1, y: 0 }} // End at the right
                        >
                            <View
                                style={{
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: theme.color,
                                        textAlign: 'center',
                                    }}
                                >
                                    Đặt Hàng
                                </Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
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
