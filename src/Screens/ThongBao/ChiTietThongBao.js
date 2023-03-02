import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


function ChiTietThongBao({ route, navigation }) {

    const { id } = route.params;
    const [apis, setApi] = useState([])
    const [sanphams, setSanPham] = useState([])
    const [khocanhans, setKhoCaNhan] = useState([])
    const [khonguoimuon, setKhoNguoiMuon] = useState([])
    const [nguoimuon, setNguoiMuon] = useState('')


    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])

    const [ids, setID] = useState()


    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('id_users')
        .then(res =>
            setId_users(res)
        )

    const [inventorys, setInventory] = useState([])
    const [products, setProduce] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/products/')
            .then(res => res.json())
            .then(res => res.map(api => {
                setInventory(pre => [...pre, api.inventory])
            }))
            .finally(() => {

            })
    }, [])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/products/')
            .then(res => res.json())
            .then(res => setProduce(res))

    }, [])


    useEffect(() => {
        inventorys.map(inventory => {
            inventory.map(api => {
                if (api.usersId == id_users) {
                    // return;
                    setKhoCaNhan(pre => [...pre, api])
                }

            })
        })
    }, [products])


    const [id_users, setId_users] = useState('')



    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + nguoimuon)
            .then(res => res.json())
            .then(res => setID(res[0].id))
            .finally(() => {

            })
    }, [taikhoan])

    const [orders, setOrder] = useState([]);

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/id/' + id)
            .then(res => res.json())
            .then(res => res.map(re => {
                setOrder(re.MuonHang)
            }))
            .catch((err) => console.log(err))

    }, [])



    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/id/' + id)
            .then(res => res.json())
            .then(res => setApi(res))
            .catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/id/' + id)
            .then(res => res.json())
            .then(res => setNguoiMuon(res[0].NguoiMuon))
            .catch((err) => console.log(err))

    }, [])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/id/' + id)
            .then(res => res.json())
            .then(res => setSanPham(res[0].MuonHang))
            .catch((err) => console.log(err))

    }, [])

    useEffect(() => {
        products.map(product => {

        })
    }, [])

    console.log(orders)


    const handerSubmit = () => {

        products.map(product => {
            orders.map(sanpham => {
                product.inventory.map(a => {
                    if (product.name == sanpham.TenHang && a.usersId == id_users) {
                        fetch('http://192.168.1.165:4000' + '/api/inventory/update/' + id_users + '/' + product.id, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                soluong: a.exist - sanpham.SoLuong
                            })

                        })
                        return;
                    }
                })
            })
        })


        products.map(product => {
            orders.map(sanpham => {
                product.inventory.map(a => {
                    if (product.name == sanpham.TenHang && a.usersId == ids) {
                        console.log('aaa')
                        fetch('http://192.168.1.165:4000' + '/api/inventory/update/' + ids + '/' + product.id, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                soluong: a.exist + sanpham.SoLuong
                            })
                        })
                        return;

                    }
                })
            })
        })

        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/update/trangthai/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

        })
        alert('Xác Nhận Thành Công');
        navigation.navigate('Thông Báo Công Ty')

    }


    return (
        <View>
            <View >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 20,


                }}>
                    {apis.map(api => (
                        <View key={api.id} style={{
                            width: '80%',
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 7,

                        }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Người Mượn: {api.NguoiMuon}
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Kho Hàng: {api.email}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                lineHeight: 30
                            }}>
                                Ngày Giờ: {api.date}
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Trạng Thái: {api.TrangThai}
                            </Text>
                        </View>
                    ))}
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 5,
                        borderWidth: 0.4,
                        borderColor: 'gray',
                        paddingVertical: 10
                    }}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            Tên Sản Phẩm
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            Số Lượng
                        </Text>

                    </View>
                    {sanphams.map(sanpham => (
                        <View
                            key={sanpham.id}
                        >

                            <View style={{

                                // paddingVertical: 10
                            }}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    // borderWidth: 0.4,
                                    // borderColor: 'gray',
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    paddingVertical: 6

                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        lineHeight: 30
                                    }}>
                                        {sanpham.TenHang}
                                    </Text>
                                    <Text style={{
                                        fontSize: 16,
                                        lineHeight: 30
                                    }}>
                                        {sanpham.SoLuong}
                                    </Text>

                                </View>


                            </View>
                        </View>
                    ))}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'red',
                            opacity: 0.7
                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Từ Chối
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'green',
                            opacity: 0.7
                        }}
                            onPress={() => handerSubmit()}
                        >
                            <Text style={{
                                color: 'white'
                            }}>
                                Xác Nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChiTietThongBao