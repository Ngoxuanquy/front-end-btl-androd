import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ChiTietDonDangThucHien = ({ route, navigation }) => {

    const { id_donhang } = route.params;

    const [oders, setOrder] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [customer, setCustomer] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer/id/' + id_donhang)
            .then(res => res.json())
            .then(res => setCustomer(res))
            .catch(err => console.log(err))
            .finally(() => {

            })
    }, [taikhoan])

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


                                        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/create/', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({
                                                id: id,
                                                taikhoan: taikhoan,

                                            })
                                        })
                                    })
                                    .then(() => {
                                        fetch('http://192.168.1.165:4000' + '/api/customer_history/create/', {
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
                                                navigation.navigate('Đơn Hàng')

                                            })
                                    })

                            }
                        })

                    },
                },

            ]
        );

    }


    return (
        <View>
            <View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        {
                            customer.map(oder => (
                                <View
                                    key={oder.id}
                                    style={{
                                        width: '90%',
                                        marginTop: 50,
                                        backgroundColor: '#eeeeee',
                                        padding: 20,
                                        borderRadius: 10

                                    }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 20,
                                            lineHeight: 30
                                        }}>
                                            Mã Đơn : {
                                                oder.customer_code
                                            }
                                        </Text>
                                        <Text style={{
                                            fontSize: 19,
                                            lineHeight: 30

                                        }}>
                                            Tên:
                                            {oder.customer_name}
                                        </Text>
                                        <Text style={{
                                            fontSize: 19,
                                            lineHeight: 30

                                        }}>
                                            Địa Chỉ:
                                            {oder.Address}
                                        </Text>
                                        <Text style={{
                                            fontSize: 19,
                                            lineHeight: 30

                                        }}>
                                            Số Điện Thoại:
                                            {
                                                oder.phone_number
                                            }
                                        </Text>

                                    </View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        marginTop: 40
                                    }}>
                                        <TouchableOpacity style={{
                                            borderWidth: 1,
                                            padding: 10,
                                            backgroundColor: 'coral',
                                            borderRadius: 6,
                                            marginLeft: 50
                                        }}>
                                            <Text>
                                                Từ Chối
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{
                                            borderWidth: 1,
                                            padding: 10,
                                            backgroundColor: 'green',
                                            borderRadius: 6,
                                            marginLeft: 50
                                        }}
                                            onPress={() => handerNhanDon(oder.id)}

                                        >
                                            <Text>
                                                Nhận Đơn
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}


                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChiTietDonDangThucHien