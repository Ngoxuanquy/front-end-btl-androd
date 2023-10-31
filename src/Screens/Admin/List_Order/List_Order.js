import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Call_Post_Api } from '../../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
// import { Button } from '@rneui/themed';
import Axios from 'axios';
import { Button } from 'react-native-elements';

const List_Order = () => {
    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    AsyncStorage.getItem('token').then((res) => setToken(res));

    const [apis, setApi] = useState([]);

    const [Apimodals, setApiModal] = useState([]);

    const getApi = () => {
        Call_Post_Api(null, token, id, '/transaction/getFull/').then((data) => {
            if (data && data.metadata && data.metadata) {
                const transactionUserIds = data.metadata.flatMap(
                    (item) => item.transaction_userId,
                );
                setApiModal(data.metadata);
                setApi(transactionUserIds);
            } else {
                setApi([]);
            }
        });
    };

    useEffect(() => {
        getApi();
    }, [token]);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productApi, setProductApi] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const handeModal = (index) => {
        setIsModalVisible(true);
        if (index >= 0) {
            setProductApi(Apimodals[index]);

            const totalAmount = Apimodals[index]?.transaction_products.reduce(
                (total, product) => {
                    return total + product.product_price * product.quantity;
                },
                0,
            );

            setTotalAmount(totalAmount);
        } else {
            setProductApi([]);
        }
    };

    const handelDongDon = () => {
        Call_Post_Api(
            {
                userId: productApi?.userId,
                product: productApi?.transaction_products,
            },
            token,
            id,
            '/transaction/updateStatus',
        ).then((data) => {
            setIsModalVisible(false);
            getApi();
            Gui();
            alert('Bạn đã hoàn thành đơn!!!');
        });
    };

    const Gui = async () => {
        const message = {
            to: productApi.notifications,
            title: 'Đơn hàng của bạn đã được gửi đi!!',
            body: 'Nhấn Vào Để Xem Chi Tiết!!',
        };

        try {
            const response = await Axios.post(
                'https://api.expo.dev/v2/push/send',
                message,
            );
            console.log('Push notification sent successfully:', response.data);
        } catch (err) {
            console.error('Error sending push notification:', err);
        }
    };

    return (
        <View>
            <Modal isVisible={isModalVisible} backdropOpacity={0.5}>
                <View
                    style={{
                        backgroundColor: 'white',
                        flex: 1,
                        marginTop: 30,
                    }}
                >
                    <View>
                        <TouchableOpacity
                            onPress={() => setIsModalVisible(false)}
                        >
                            <Text>Đóng</Text>
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{
                            padding: 10,
                        }}
                    >
                        <View>
                            {productApi?.transaction_products?.map(
                                (Apimodal) => (
                                    <View
                                        key={Apimodal._id}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginTop: 20,
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: Apimodal.product_thumb,
                                            }}
                                            style={{
                                                width: 120,
                                                height: 120,
                                            }}
                                        />
                                        <View>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-between',
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 18,
                                                    }}
                                                >
                                                    {Apimodal.product_name}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 10,
                                                        marginTop: 5,
                                                        marginLeft: 10,
                                                    }}
                                                >
                                                    {Apimodal.createdAt}
                                                </Text>
                                            </View>
                                            <Text
                                                style={{
                                                    fontSize: 15,
                                                }}
                                            >
                                                x{Apimodal.quantity}
                                            </Text>
                                            <Text>
                                                {Apimodal.product_price}
                                            </Text>
                                        </View>
                                    </View>
                                ),
                            )}
                        </View>
                    </View>

                    <View
                        style={{
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            padding: 10,
                        }}
                    ></View>

                    <View
                        style={{
                            padding: 10,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 18,
                            }}
                        >
                            Thành tiền: {totalAmount}.000đ
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                        }}
                    >
                        <Button onPress={() => handelDongDon()}>
                            <Text>Đóng đơn</Text>
                        </Button>
                    </View>
                </View>
            </Modal>
            <View>
                <Text
                    style={{
                        padding: 10,
                        fontSize: 20,
                    }}
                >
                    Thông tin các đơn hàng
                </Text>
                <View>
                    {apis.map((api, index) => (
                        <TouchableOpacity
                            key={index}
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={() => handeModal(index)}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    backgroundColor: '#eeeeee',
                                    marginTop: 10,
                                    paddingVertical: 10,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 6,
                                    },
                                    shadowOpacity: 0.37,
                                    shadowRadius: 7.49,

                                    elevation: 12,
                                    width: '95%',
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <AntDesign
                                            name="shoppingcart"
                                            size={30}
                                            color="coral"
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginLeft: 20,
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                            }}
                                        >
                                            name: {api.name}
                                        </Text>
                                        <Text>Địa chỉ: {api.address}</Text>
                                        <Text>Số điện thoại {api.phone}</Text>
                                    </View>
                                    <View>
                                        <LottieView
                                            source={require('../../../../assets/animation_lm4yzux7.json')}
                                            autoPlay
                                            loop
                                            style={{
                                                height: 100,
                                                width: 100,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default List_Order;
