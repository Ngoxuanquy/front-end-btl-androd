import { View, Text, TextInput, ScrollView, RefreshControl, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LichSuDonHang({ navigation }) {
    const [lichSuCTT, setLichSuCTT] = useState([]);
    const [lichSuDTT, setLichSuDTT] = useState([]);
    const [lichSuDCK, setLichSuDCK] = useState([]);
    const [Nos, setNo] = useState([])

    const [apis, setApi] = useState([])
    const [Value, setValue] = useState('')
    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])

    const [isLoading, setIsLoading] = useState(true)


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Đã Thanh Toán')
            .then(res => res.json())
            .then(res => setLichSuDTT(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })

    }, [taikhoan])



    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Chưa Thanh Toán!!!')
            .then(res => res.json())
            .then(res => setLichSuCTT(res))
            .catch(err => console.log(err))
    }, [taikhoan])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Nợ')
            .then(res => res.json())
            .then(res => setNo(res))
            .catch(err => console.log(err))
    }, [taikhoan])

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {

            fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Chưa Thanh Toán!!!')
                .then(res => res.json())
                .then(res => setLichSuCTT(res))
                .catch(err => console.log(err))


            fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Đã Thanh Toán')
                .then(res => res.json())
                .then(res => setLichSuDTT(res))
                .catch(err => console.log(err))

            fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Nợ')
                .then(res => res.json())
                .then(res => setNo(res))
                .catch(err => console.log(err))

            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);

    function handerChiTiec(id, name) {
        navigation.navigate('Chi Tiết Đơn', { id_sua: id, name: name });
    }

    function handerChiTietDaTT(id, name) {
        navigation.navigate('Chi Tiết Đơn', { id_sua: id, name: name });

    }

    const [number, setNumber] = useState([])

    function handerSearch() {
        setIsLoading(true)
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/sdt/' + Value)
            .then(res => res.json())
            .then(res => setLichSuDTT(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLichSuCTT([]);
                setNo([])
                setIsLoading(false)
            })
    }

    return (
        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#eeeeee',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            <View>
                <View>
                    <View>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row'
                        }}>
                            <View>
                                <AntDesign name="search1" size={29} color="black" style={{
                                    position: 'absolute',
                                    top: 10,
                                    left: 10
                                }} />
                                <TextInput
                                    style={{
                                        borderColor: 'gray',
                                        borderWidth: 0.3,
                                        height: 50,
                                        paddingLeft: 50,
                                        paddingRight: 20,
                                        fontSize: 20,
                                        color: 'black',
                                        width: 300
                                    }}
                                    placeholder="Nhập Mã Đơn..."
                                    onChangeText={(e) => setValue(e)}
                                />
                            </View>
                            <TouchableOpacity style={{
                                width: 70,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'gray',
                                borderWidth: 0.4,
                                backgroundColor: 'green',
                                opacity: 0.5
                            }}
                                onPress={() => handerSearch()}
                            >
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Tìm
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <Text style={{
                                padding: 10,
                                fontSize: 20
                            }}>
                                Hôm Nay, 14/01/2022
                            </Text>
                        </View>
                    </View>

                    {isLoading ? <ActivityIndicator /> :
                        <>
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    padding: 10,
                                    color: 'red',
                                    fontWeight: '600'
                                }}>
                                    Chưa Thanh Toán
                                </Text>
                            </View>
                            {/* Thông tin */}
                            {lichSuCTT.map(lichSu => (

                                <View
                                    key={lichSu.id}
                                    style={{
                                        backgroundColor: '#eeeeee',
                                        borderColor: 'gray',
                                        borderWidth: 0.4,
                                        marginLeft: 10,
                                        marginRight: 10,
                                        borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 8,
                                        },
                                        shadowOpacity: 0.14,
                                        shadowRadius: 3.32,

                                        elevation: 1,
                                        marginBottom: 10
                                    }}>
                                    <View style={{
                                        marginTop: 10,
                                        paddingHorizontal: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 15
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <FontAwesome name="money" size={24} color="black" />
                                            <Text style={{
                                                fontSize: 18
                                            }}>
                                                {lichSu.TongTienSauGiam}
                                                1
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 16,
                                                marginTop: 5
                                            }}>
                                                9h:30
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        paddingHorizontal: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            Lõi Lọc Kang, Vòi nước, Bảo dưỡng
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            {lichSu.KhachHang}
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            Mã Đơn Hàng: QQQQ
                                        </Text>
                                        <Text style={{
                                            fontSize: 18

                                        }}>
                                            Ngày Giờ: 10:15 - 14/01/2022
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 10,
                                            marginTop: 5,
                                            marginBottom: 15
                                        }}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: 'bold'

                                            }}>
                                                (Chưa Thanh Toán)
                                            </Text>
                                            <TouchableOpacity>
                                                <Text style={{
                                                    fontSize: 16,
                                                    textDecorationLine: 'underline'
                                                }}
                                                    onPress={() => handerChiTiec(lichSu.id, lichSu.KhachHang)}
                                                >
                                                    Xem Chi Tiết
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}

                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'coral',
                                    padding: 10,
                                    marginTop: 10,
                                    fontWeight: '600'
                                }}>
                                    Khách Nợ
                                </Text>
                            </View>

                            {/* Thông tin */}
                            {Nos.map(lichSu => (
                                <View
                                    key={lichSu.id}
                                    style={{
                                        backgroundColor: '#eeeeee',
                                        borderColor: 'black',
                                        borderWidth: 0.4,
                                        marginLeft: 10,
                                        marginRight: 10,
                                        borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 8,
                                        },
                                        shadowOpacity: 0.44,
                                        shadowRadius: 2.32,

                                        elevation: 1,
                                        opacity: 0.6,
                                        marginTop: 10

                                    }}>
                                    <View style={{
                                        marginTop: 10,
                                        paddingHorizontal: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 15,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <FontAwesome name="money" size={24} color="black" />
                                            <Text style={{
                                                marginLeft: 10,
                                                fontSize: 18
                                            }}>
                                                {lichSu.TongTienSauGiam}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 16,
                                                marginTop: 5
                                            }}>
                                                9h:30
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        paddingHorizontal: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            {lichSu.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            {lichSu.KhachHang}
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            Mã Đơn Hàng: QQQQ
                                        </Text>
                                        <Text style={{
                                            fontSize: 18

                                        }}>
                                            Ngày Giờ: 10:15 - 14/01/2022
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 10,
                                            marginTop: 5,
                                            marginBottom: 15
                                        }}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: 'bold'

                                            }}>
                                                {lichSu.TrangThai}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => handerChiTietDaTT(lichSu.id, lichSu.KhachHang)}
                                            >
                                                <Text style={{
                                                    fontSize: 16,
                                                    textDecorationLine: 'underline'

                                                }}>
                                                    Xem Chi Tiết
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            ))}
                            <View>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'green',
                                    padding: 10,
                                    marginTop: 10,
                                    fontWeight: '600'
                                }}>
                                    Đã Thanh Toán
                                </Text>
                            </View>
                            {/* Thông tin */}
                            {lichSuDTT.map(lichSu => (
                                <View
                                    key={lichSu.id}
                                    style={{
                                        backgroundColor: '#eeeeee',
                                        borderColor: 'black',
                                        borderWidth: 0.4,
                                        marginLeft: 10,
                                        marginRight: 10,
                                        borderRadius: 10,
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 8,
                                        },
                                        shadowOpacity: 0.44,
                                        shadowRadius: 2.32,

                                        elevation: 1,
                                        opacity: 0.6,
                                        marginTop: 10

                                    }}>
                                    <View style={{
                                        marginTop: 10,
                                        paddingHorizontal: 10,
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 15,

                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                        }}>
                                            <FontAwesome name="money" size={24} color="black" />
                                            <Text style={{
                                                marginLeft: 10,
                                                fontSize: 18
                                            }}>
                                                {lichSu.TongTienSauGiam}
                                            </Text>
                                        </View>
                                        <View>
                                            <Text style={{
                                                fontSize: 16,
                                                marginTop: 5
                                            }}>
                                                9h:30
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{
                                        paddingHorizontal: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            {lichSu.name}
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            {lichSu.KhachHang}
                                        </Text>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            Mã Đơn Hàng: QQQQ
                                        </Text>
                                        <Text style={{
                                            fontSize: 18

                                        }}>
                                            Ngày Giờ: 10:15 - 14/01/2022
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            paddingHorizontal: 10,
                                            marginTop: 5,
                                        }}>
                                            <Text style={{
                                                fontSize: 16,
                                                fontWeight: 'bold'

                                            }}>
                                                {lichSu.TrangThai}
                                            </Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => handerChiTietDaTT(lichSu.id, lichSu.KhachHang)}
                                            style={{
                                                marginBottom: 25

                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 16,
                                                textDecorationLine: 'underline',
                                                position: 'absolute',
                                                right: 0

                                            }}>
                                                Xem Chi Tiết
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            ))}


                        </>
                    }


                </View>
            </View>
        </ScrollView>
    )
}