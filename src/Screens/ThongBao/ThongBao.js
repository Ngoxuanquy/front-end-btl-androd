import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, RefreshControl } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys
import { ScrollView } from 'react-native-virtualized-view'
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


function App({ navigation }) {

    const [sanphams, setSanPham] = useState([])
    const [taikhoan, setTaiKhoan] = useState()
    const [token, setToken] = useState([])


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.0.112:4000' + '/api/lichsumuonhang/khachhang/' + taikhoan + '/Chưa Xác Nhận')
            .then(res => res.json())
            .then(res => setSanPham(res))
    }, [taikhoan])


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetch('http://192.168.0.112:4000' + '/api/lichsumuonhang/khachhang/' + taikhoan + '/Chưa Xác Nhận')
                .then(res => res.json())
                .then(res => setSanPham(res))

            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);

    return (

        <ScrollView
            style={{
                backgroundColor: '#fff'
            }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#fff',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            <View style={{
                // padding: 10,
                backgroundColor: 'white',
                flex: 1,

            }}>
                {sanphams.map(sanpham => (
                    <View key={sanpham.id} >
                        {/* thông báo */}
                        <View style={{
                            backgroundColor: '#fff',
                            width: '100%',
                            marginTop: 15

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                marginRight: 20,
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    width: 70,
                                    height: 70,
                                    backgroundColor: '#66CC33',
                                    borderRadius: 200,
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <Feather name="phone" size={37} color="white" style={{

                                    }} />

                                </View>
                                <View style={{
                                    // flexDirection: 'row',
                                    marginRight: 56,
                                    marginLeft: 5,
                                    marginTop: 10,
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',

                                    }}>
                                        Phòng Điều Hành:
                                        <Text style={{
                                            fontWeight: '400'
                                        }}>
                                            {sanpham.NguoiMuon} có đơn hàng muốn mượn Của Bạn
                                        </Text>
                                    </Text>
                                    <View style={{
                                        position: 'absolute',
                                        right: 10,
                                        top: 30
                                    }}>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Chi Tiết Thông Báo', { id: sanpham.id })}
                                        >
                                            <Text >
                                                Xem Chi Tiết
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{
                                        fontSize: 13,
                                        marginTop: 5,
                                        opacity: 0.5
                                    }}>
                                        {sanpham.date}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </ScrollView >
    )
}

export default App
