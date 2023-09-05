import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Call_Post_Api } from '../../../Call_post_api/Call_Post_Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { AntDesign } from '@expo/vector-icons';
const List_Product = () => {

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

    // khai báo list product
    const [apiProducts, setApiProduct1] = useState([])
    useEffect(() => {
        Call_Post_Api(null,
            null,
            null,
            '/product/getAll'
        )
            .then((data) => {
                setApiProduct1(data.metadata)
            })
    }, [id])

    const [isModalVisible, setIsModalVisible] = useState(false)

    const handelModel = () => {
        setIsModalVisible(true)
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            Call_Post_Api(null,
                null,
                null,
                '/product/getAll'
            )
                .then((data) => {
                    setApiProduct1(data.metadata)
                })

            setRefreshing(false);
        }, 1000);
    }, []);



    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            <View>
                <View>
                    <View>
                        <Text>
                            Tất cả sản phẩm
                        </Text>

                    </View>
                    <Modal isVisible={isModalVisible}>
                        <View style={{
                            backgroundColor: 'white',
                            flex: 1,
                            width: '100%',
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                position: 'absolute',
                                right: 10,
                                top: 10
                            }}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <AntDesign name="close" size={30} color="gray" />

                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <View>
                        {apiProducts && apiProducts.map(apiProduct => (
                            <TouchableOpacity key={apiProduct._id}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onPress={() => handelModel()}
                            >

                                <View style={{
                                    backgroundColor: '#eeeeee',
                                    // height: 100,
                                    width: "90%",
                                    marginTop: 10,
                                    padding: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <Image source={{
                                        uri: apiProduct.product_thumb
                                    }}
                                        style={{
                                            width: 100,
                                            height: 100
                                        }}
                                    />
                                    <View style={{
                                        padding: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                        }}>
                                            {apiProduct.product_name}
                                        </Text>
                                        <Text>
                                            {apiProduct.product_price}.000đ
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default List_Product