import { View, Text, Image, ScrollView } from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';

const LichSuDonHang = () => {

    const [theme, ordersLength] = useContext(ThemeConText);


    const [taikhoan, setTaiKhoan] = useState()
    const [token, setToken] = useState()
    const [id, setId] = useState()

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('id')
        .then(res =>
            setId(res)
        )

    AsyncStorage.getItem('token')
        .then(res =>
            setToken(res)
        )

    //khai báo apis thoogn tin đơn hàng
    const [apisTransaction, setApiTransaction] = useState()

    useEffect(() => {
        Call_Post_Api(
            null,
            token,
            id,
            '/transaction/getFullUseId/' + id
        )
            .then((data) => {
                if (data && data.metadata && data.metadata) {
                    setApiTransaction(data.metadata)
                }
                else {
                    setApiTransaction([])
                }
            })
    }, [ordersLength])

    console.log(apisTransaction)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Call_Post_Api(null, token, id, '/transaction/getFullUseId/' + id);
                if (data && data.metadata) {
                    const transactionProducts = data.metadata.flatMap(transaction => transaction.transaction_products);
                    setApiTransaction(transactionProducts);
                } else {
                    setApiTransaction([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setApiTransaction([]); // Xử lý lỗi bằng cách đặt mảng rỗng
            }
        };

        fetchData();
    }, [token]);

    const [dones, setDone] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Call_Post_Api(null, token, id, '/transaction/getFullOrder_doneUseId/' + id);
                if (data && data.metadata) {
                    const transactionProducts = data.metadata.flatMap(transaction => transaction.transaction_products);
                    setDone(transactionProducts);
                } else {
                    setDone([]);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setDone([]); // Xử lý lỗi bằng cách đặt mảng rỗng
            }
        };

        fetchData();
    }, [token]);

    return (
        <ScrollView>
            <View>
                <Text style={{
                    padding: 10,
                    fontSize: 20
                }}>
                    Đơn hàng đã đặt
                </Text>
                <View>
                    {
                        apisTransaction?.map((api => (
                            <View key={api._id} style={{
                                padding: 10
                            }}>
                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{
                                            uri: api.product_thumb
                                        }}
                                        style={{
                                            height: 100,
                                            width: 100
                                        }}
                                    />
                                    <View style={{
                                        width: '100%',

                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                        }}>
                                            {api.product_name}
                                        </Text>
                                        <View style={{
                                            display: 'flex',
                                            // justifyContent: 'flex-end',
                                            // alignItems: 'flex-end'
                                        }}>
                                            <Text style={{
                                                fontSize: 14
                                            }}>
                                                x{api.quantity}
                                            </Text>
                                            <Text style={{
                                                fontSize: 14
                                            }}>
                                                đ{api.product_price}.000
                                            </Text>
                                        </View>

                                    </View>
                                </View>
                                <View style={{
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 4
                                }}>
                                </View>
                                <View style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        padding: 5
                                    }}>
                                        {api.quantity} sản phẩm
                                    </Text>
                                    <Text style={{
                                        fontSize: 16,
                                        padding: 5
                                    }}>
                                        Thành Tiền : {api.quantity * api.product_price}
                                    </Text>
                                </View>
                            </View>
                        )))
                    }
                </View>
                <View>
                    <View>
                        <Text style={{
                            padding: 10,
                            fontSize: 20
                        }}>
                            Đơn hàng đã đóng
                        </Text>
                        <View>
                            {
                                dones?.map((api => (
                                    <View key={api._id} style={{
                                        padding: 10
                                    }}>
                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'row'
                                        }}>
                                            <Image
                                                source={{
                                                    uri: api.product_thumb
                                                }}
                                                style={{
                                                    height: 100,
                                                    width: 100
                                                }}
                                            />
                                            <View style={{
                                                width: '100%',

                                            }}>
                                                <Text style={{
                                                    fontSize: 17,
                                                }}>
                                                    {api.product_name}
                                                </Text>
                                                <View style={{
                                                    display: 'flex',
                                                    // justifyContent: 'flex-end',
                                                    // alignItems: 'flex-end'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 14
                                                    }}>
                                                        x{api.quantity}
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 14
                                                    }}>
                                                        đ{api.product_price}.000
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                        <View style={{
                                            borderBottomColor: 'gray',
                                            borderBottomWidth: 1,
                                            width: '100%',
                                            marginTop: 4
                                        }}>
                                        </View>
                                        <View style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row'
                                        }}>
                                            <Text style={{
                                                fontSize: 16,
                                                padding: 5
                                            }}>
                                                {api.quantity} sản phẩm
                                            </Text>
                                            <Text style={{
                                                fontSize: 16,
                                                padding: 5
                                            }}>
                                                Thành Tiền : {api.quantity * api.product_price}
                                            </Text>
                                        </View>
                                    </View>
                                )))
                            }
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default LichSuDonHang