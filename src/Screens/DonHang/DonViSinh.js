import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';
export default function DonViSinh() {

    const [apis, setApi] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [customer, setCustomer] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )



    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/donvesinh/' + taikhoan + '/Đã Thanh Toán')
            .then(res => res.json())
            .then(res => {
                setApi(res)
                // res.map(re => {
                //     setCustomer(re.customer_history)
                // })
            })
            .catch(err => console.log(err))
            .finally(() => {
            })

    }, [taikhoan])


    const [visible4, setVisible4] = useState(false);

    const toggleDialog4 = (id) => {
        apis.map(sanpham => {
            if (sanpham.id == id) {
                setCustomer(sanpham.customer_history)
            }
        })
        setVisible4(!visible4);

    };


    return (
        <View>
            <View>
                <View>
                    {apis.map(api => (
                        <View key={api.id} style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            borderWidth: 0.6,
                            borderColor: 'gray',
                            paddingVertical: 20,
                            paddingHorizontal: 10
                        }}>
                            <View style={{
                                width: '70%'
                            }}>
                                <Text>
                                    Mã Hóa Đơn:
                                    {api.code_bill}
                                </Text>
                                <Text>
                                    Ngày: {api.order_date}
                                </Text>
                                <Text>
                                    Trạng Thái: {api.status}
                                </Text>
                            </View>

                            <View style={{
                                width: '30%'
                            }}>
                                <Button
                                    title="Xem Chi Tiết"
                                    onPress={() => toggleDialog4(api.id)}
                                    buttonStyle={[styles.button]}
                                />
                            </View>

                        </View>
                    ))}




                    <Dialog
                        isVisible={visible4}
                        onBackdropPress={toggleDialog4}

                    >
                        <Dialog.Title title="Chi Tiết Khách Hàng" />
                        <View >
                            <View>
                                {customer.map(cu => (
                                    <View key={cu.id}>
                                        <Text>
                                            Name: {cu.name}
                                        </Text>
                                        <Text>
                                            Địa Chỉ: {cu.Address}
                                        </Text>
                                        <Text>
                                            Điện Thoại: {cu.Number}
                                        </Text>
                                    </View>
                                ))}
                            </View>

                        </View>
                    </Dialog>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    buttonContainer: {
        paddingTop: 20,
    },
});