import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput, ActivityIndicator, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SuaThanhToan({ route, navigation }) {

    const { id, name } = route.params;

    const [cliedId, setCliedID] = useState(0);
    const [Apis, setApi] = useState([])
    const [sanphams, setSanPham] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const Arrays = [
        {
            id: 1,
            name: 'Lọc Nước'
        },
        {
            id: 2,
            name: 'Kangaroo'
        },
        {
            id: 3,
            name: 'Cá'
        },
        {
            id: 4,
            name: 'Voi'
        },
        {
            id: 5,
            name: 'Khủng Long'
        },
        {
            id: 6,
            name: 'All'
        },
    ]


    const [xoa, setXoa] = useState();
    const [products, setProducts] = useState([]);
    const [orders, setOrder] = useState([]);
    const [customer_name, setCustomer_name] = useState([]);

    const URL_ON = 'http://192.168.0.114:4000'
    const URL1_ON = 'http://192.168.0.114:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    const getConten = () => {
        if (isLoading) {
            return <ActivityIndicator />
        }

    }

    useEffect(() => {
        fetch(URL_ON + '/api/products/')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    const [product, setProduct] = useState(products);
    const [customer, setCustomer] = useState([])

    useEffect(() => {
        setProduct(products)
    }, [products])

    function handerProperties(name, id) {
        setCliedID(id);
        let data;
        if (name === 'All') {
            data = products;
            setProduct(data);
            return;
        }
        data = products.filter((item) => {
            return item.properties == name;
        });
        setProduct(data);
    }


    useEffect(() => {
        fetch(URL_ON + '/api/customer_re/')
            .then(res => res.json())
            .then(res => setCustomer(res))
            .catch(err => console.log(err))
            .finally(() => {
                // setReset(true);
                // setTimeout(() => {
                //     setReset(false);
                // }, 1000);
            })
    }, [])

    useEffect(() => {
        fetch(URL_ON + '/api/orders/' + name)
            .then(res => res.json())
            .then(res => setOrder(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [])



    useEffect(() => {
        setApi(products)
    }, [taikhoan])

    function handerCong(id1) {
        // products.map(Product => {
        //     if (Product.id == id) {
        //         setSanPham([...sanphams, Product])
        //     }
        // })
        products.map(Product => {
            if (Product.id == id1) {
                customer.map(custome => {
                    if (custome.id == id) {

                        fetch(URL_ON + '/api/orders/create/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: id,
                                name: custome.name,
                                taikhoan: taikhoan,
                                date: new Date(),
                                number: custome.Number,
                                address: custome.Address,
                                img: Product.img,
                                price: Product.price,
                                tenhang: Product.name,
                                idDonHang: id1
                            })
                        })
                            .then(() => {
                                fetch(URL_ON + '/api/orders/' + name)
                                    .then(res => res.json())
                                    .then(res => setOrder(res))
                                    .catch(err => console.log(err))
                                    .finally(() => {
                                    })
                            })
                            .then(() => {

                            })
                    }
                })
            }
        })
    }


    var TT = 0;
    const [tongtien, setTongTien] = useState()


    function handerDetele(id) {

        fetch(URL_ON + '/api/orders/delete/' + id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then(() => {
                fetch(URL_ON + '/api/orders/' + name)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))

            })
    }


    useEffect(() => {
        orders.map(sanpham => {
            TT += sanpham.price * sanpham.SoLuong
        })
        setTongTien(TT)
    })

    function handerSoLuong(id, soluong) {
        fetch(URL_ON + '/api/orders/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong + 1
            })
        })
            .then(() => {
                fetch(URL_ON + '/api/orders/' + name)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))
            })
    }

    function handerTru(id, soluong) {
        if (soluong <= 1) {
            alert('Số Lượng Phải Lớn Hơn 1')
            return;
        }

        fetch(URL_ON + '/api/orders/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong - 1
            })
        })
            .then(() => {
                fetch(URL_ON + '/api/orders/' + name)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))
            })

    }

    function handerTTTienMat() {
        return Alert.alert(
            "Are your sure?",
            "Bạn Muốn Sửa Thanh Toán Này?",
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
                        orders.map(order => {
                            fetch(URL_ON + '/api/thanhtoan/update/' + id, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    trangthai: "Tiền Mặt",
                                    tongtien: tongtien
                                })
                            })
                                .then(() => {
                                    return Alert.alert(
                                        "Are your sure?",
                                        "Bạn Đã Hoàn Thành Đơn?",
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
                                                    navigation.navigate('Lịch Sử Đơn Hàng');
                                                },
                                            },
                                        ]
                                    );
                                })
                        })
                    },
                },
            ]
        );

    }

    const [thanhtoans, setThanhToan] = useState([])

    useEffect(() => {
        fetch(URL_ON + '/api/thanhtoan/id/' + id)
            .then(res => res.json())
            .then(res => setThanhToan(res))
            .catch(err => console.log(err))
    }, [])

    console.log(thanhtoans)

    return (
        <View style={{
            flex: 1,
        }}>
            <View style={{
                position: 'absolute',
                bottom: 0,
                zIndex: 1,
                backgroundColor: '#DDDDDD'
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    zIndex: 1
                }}>
                    <TouchableOpacity style={{
                        width: '50%',
                        alignItems: 'center',
                        borderColor: 'black',
                        borderWidth: 0.3,
                        paddingVertical: 15
                    }}
                        onPress={() => handerTTTienMat()}
                    >
                        <Text>
                            Sửa Thanh Toán
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '50%',
                        alignItems: 'center',
                        borderColor: 'black',
                        borderWidth: 0.3,
                        paddingVertical: 15
                    }}>
                        <Text>
                            Nợ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            <ScrollView >
                <ScrollView horizontal>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',


                    }}>
                        {Arrays.map((Array, index) => (
                            <View key={Array.id}>
                                <TouchableOpacity
                                    onPress={() => handerProperties(Array.name, Array.id)}
                                    style={{
                                        borderRadius: 10
                                    }}
                                >
                                    <Text style={
                                        [
                                            index + 1 === cliedId ? styles.buttonAction : styles.butonUn,
                                            // styles.butonUn
                                        ]}>
                                        {Array.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View>
                    <View style={{

                    }}>
                        <Text style={{
                            padding: 10,
                            fontSize: 23,
                            color: 'coral',
                            marginTop: 10
                        }}>
                            Danh Sách Sản Phẩm
                        </Text>
                        {getConten()}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            {
                                product.map((Api, index) => (
                                    <View
                                        key={Api.id}
                                        style={{
                                            marginTop: 20,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                        <TouchableOpacity style={{
                                            flexDirection: 'row',

                                        }}>
                                            <Image
                                                style={{
                                                    width: 100,
                                                    height: 100,
                                                    marginLeft: 10
                                                }}
                                                source={{
                                                    uri: Api.img
                                                }}
                                            />
                                            <View style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                textAlign: 'center',
                                                alignItems: 'center',
                                                marginLeft: 20,
                                            }}>
                                                <View style={{
                                                    width: 80

                                                }}>
                                                    <Text>
                                                        {Api.name}
                                                    </Text>
                                                    <Text>
                                                        {Api.price} $
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginLeft: 30
                                                }}>
                                                    <TouchableOpacity style={{
                                                        width: 65, height: 35,
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderRadius: 6,
                                                        backgroundColor: 'green',
                                                        opacity: 0.7
                                                    }}
                                                        onPress={() => handerCong(Api.id)}
                                                    >
                                                        <Text style={{
                                                            color: 'white'
                                                        }}>Mua</Text>
                                                    </TouchableOpacity>
                                                </View>


                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))

                            }
                        </View>
                    </View>
                </View>

                {/* San Pham */}
                <View>
                    <View>
                        <View>
                            <TouchableOpacity>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'coral',
                                        padding: 10,
                                        marginTop: 10
                                    }}>
                                        Sản Phẩm Đã Chọn
                                    </Text>
                                    <Text style={{
                                        padding: 10,
                                        marginTop: 17,
                                        fontSize: 13
                                    }} >
                                        (Chưa Thanh Toán)
                                    </Text>
                                </View>
                                {
                                    orders.map((Api, index) => (

                                        <View
                                            key={Api.id}
                                            style={{
                                                marginTop: 20
                                            }}>

                                            <TouchableOpacity style={{
                                                flexDirection: 'row',

                                            }}>
                                                <Image
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        marginLeft: 10
                                                    }}
                                                    source={{
                                                        uri: Api.img
                                                    }}
                                                />
                                                <View style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                    textAlign: 'center',
                                                    alignItems: 'center',
                                                    marginLeft: 20,
                                                }}>
                                                    <View style={{
                                                        width: 80

                                                    }}>
                                                        <Text>
                                                            {Api.name}
                                                        </Text>
                                                        <Text>
                                                            {Api.price} $
                                                        </Text>
                                                    </View>

                                                    <View style={{
                                                        flexDirection: 'row',
                                                        marginLeft: -10
                                                    }}>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: 'black',
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                            onPress={() => handerTru(Api.id, Api.SoLuong)}
                                                        >
                                                            <Text>-</Text>
                                                        </TouchableOpacity>
                                                        <TextInput style={{
                                                            width: 50,
                                                            height: 35,
                                                            borderColor: 'black',
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            textAlign: 'center'
                                                        }}

                                                        >
                                                            {Api.SoLuong}

                                                        </TextInput>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: 'black',
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                            onPress={() => handerSoLuong(Api.id, Api.SoLuong)}
                                                        >
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <TouchableOpacity style={{
                                                        width: 40,
                                                        height: 40,
                                                        backgroundColor: '#BB0000',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginLeft: 10,
                                                        borderRadius: 5
                                                    }}
                                                        onPress={() => handerDetele(Api.id)}
                                                    >
                                                        <Text style={{
                                                            textAlign: 'center',
                                                            color: 'white'
                                                        }}>
                                                            Xóa
                                                        </Text>
                                                    </TouchableOpacity>

                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    ))

                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                </View >

                {/* Tổng Tiền  */}
                <View View style={{
                    marginBottom: 100
                }
                }>

                    <View style={{
                        borderColor: 'black',
                        borderWidth: 1,
                        marginLeft: 10,
                        marginRight: 10,
                        marginTop: 30,
                        padding: 10,
                        borderRadius: 6
                    }}>

                        <TouchableOpacity >
                            <View style={{
                                flexDirection: 'row',
                                lineHeight: 23,
                            }}>
                                <View>
                                    <Text style={{
                                        width: 210,
                                        lineHeight: 23,
                                        fontSize: 20
                                    }}>
                                        Người Phụ Trách:
                                    </Text>
                                </View>
                                <View>
                                    {thanhtoans.map(thanhtoan => (
                                        <View key={thanhtoan.id}>
                                            <Text style={{
                                                lineHeight: 23,
                                                fontSize: 20
                                            }}>
                                                {thanhtoan.NguoiLam}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                lineHeight: 23,
                            }}>
                                <View>
                                    <Text style={{
                                        width: 210,
                                        lineHeight: 23,
                                        fontSize: 20
                                    }}>
                                        Tên Khách Hàng:
                                    </Text>
                                </View>
                                <View>
                                    {thanhtoans.map(thanhtoan => (
                                        <View key={thanhtoan.id}>
                                            <Text style={{
                                                lineHeight: 23,
                                                fontSize: 20
                                            }}>
                                                {thanhtoan.KhachHang}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                lineHeight: 23,
                            }}>


                                <Text style={{
                                    width: 210,
                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    Tổng Tiền:
                                </Text>
                                <Text style={{

                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    {tongtien}
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    width: 210,
                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    VAT:
                                </Text>
                                <Text style={{
                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    {(tongtien * 10) / 100}

                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    width: 210,
                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    Giảm Giá:
                                </Text>
                                <Text style={{
                                    lineHeight: 23,
                                    fontSize: 20
                                }}>
                                    10
                                </Text>
                            </View>
                            <View style={{
                                borderColor: 'black',
                                borderWidth: 0.4,
                                marginVertical: 10
                            }}>

                            </View>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <Text style={{
                                    lineHeight: 23,
                                    fontSize: 20,
                                    width: 210,

                                }}>
                                    Tổng cần thanh toán:
                                </Text>
                                <Text style={{
                                    color: 'red',
                                    lineHeight: 23,
                                    fontSize: 20,
                                    fontWeight: "bold"
                                }}>
                                    {tongtien == 0 ? 0 : tongtien + ((tongtien * 10) / 100) - 10}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >


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
    butonUn: {
        // backgroundColor: 'gray',
        width: 110,
        height: 50,
        borderColor: 'black',
        borderWidth: 0.4,
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#DDDDDD',
        // borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 2.27,
        elevation: 10,
        borderRadius: 100,
        marginLeft: 10

    },
    buttonAction: {
        backgroundColor: '#CC3333',
        width: 120,
        height: 50,
        borderColor: 'black',
        borderWidth: 0.3,
        marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // borderRadius: 10,
        color: 'gold',
        fontWeight: 'bold',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.27,
        elevation: 10,
        borderRadius: 100,
        marginLeft: 10

    }
});


