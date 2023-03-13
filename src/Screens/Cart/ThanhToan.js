import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput, ActivityIndicator, Alert, RefreshControl } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SearchBar } from '@rneui/themed';
import ThemeConText from '../../../config/themeConText';


export default function ThanhToan({ route, navigation }) {

    const theme = useContext(ThemeConText)

    const { name, id_chuyen, number } = route.params;


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
        fetch('http://192.168.1.165:4000' + '/api/products/')
            .then(res => res.json())
            .then(res => setProducts(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }, [taikhoan])

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

    console.log(product)

    const [trungbinhs, setTrungBinh] = useState()

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setTrungBinh(res[0].gia_tri_TB_hien_tai))
            .catch((err) => console.log(err))
    }, [taikhoan])

    const [soluongs, setSoLuong] = useState()

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan + '/Đã Thanh Toán')
            .then(res => res.json())
            .then(res => setSoLuong(res))
            .catch(err => console.log(err))
            .finally(() => {
            })

    }, [taikhoan])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/customer_re/')
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
        fetch('http://192.168.1.165:4000' + '/api/transaction_lines/oderhistory_id/' + id_chuyen)
            .then(res => res.json())
            .then(res => setOrder(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [])


    useEffect(() => {
        setApi(products)
    }, [])


    function handerCong(id1) {
        fetch('http://192.168.1.165:4000' + '/api/orders/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id_chuyen,
                idDonHang: id1
            })
        })

        // products.map(Product => {
        //     if (Product.id == id) {
        //         setSanPham([...sanphams, Product])
        //     }
        // })
        products.map(Product => {
            if (Product.id == id1) {
                customer.map(custome => {
                    if (custome.id == id_chuyen) {
                        fetch('http://192.168.1.165:4000' + '/api/transaction_lines/create/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                id: id_chuyen,
                                name: Product.name,
                                price: Product.price,
                                img: Product.img,
                                total_sale: 0,
                                idDonHang: id1
                            })
                        })


                            .then(() => {
                                fetch('http://192.168.1.165:4000' + '/api/transaction_lines/oderhistory_id/' + id_chuyen)
                                    .then(res => res.json())
                                    .then(res => {
                                        getConten()
                                        setIsLoading(true)

                                        setOrder(res)
                                    })
                                    .catch(err => console.log(err))
                                    .finally(() => {
                                        setIsLoading(false)
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



        fetch('http://192.168.1.165:4000' + '/api/transaction_lines/delete/' + id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/transaction_lines/oderhistory_id/' + id_chuyen)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))
            })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/orders/delete/' + id,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                    }
                )
            })

    }


    useEffect(() => {
        orders.map(sanpham => {
            TT += sanpham.price * sanpham.number_of
        })
        setTongTien(TT)
    })

    function handerSoLuong(id, soluong) {
        fetch('http://192.168.1.165:4000' + '/api/transaction_lines/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong + 1
            })
        })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/transaction_lines/oderhistory_id/' + id_chuyen)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))
            })
    }




    function handerTru(id, soluong) {
        console.log(soluong)
        if (soluong <= 1) {
            alert('Số Lượng Phải Lớn Hơn 1')
            return;
        }

        fetch('http://192.168.1.165:4000' + '/api/transaction_lines/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong - 1
            })
        })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/transaction_lines/oderhistory_id/' + id_chuyen)
                    .then(res => res.json())
                    .then(res => setOrder(res))
                    .catch(err => console.log(err))
            })

    }
    const [khocanhans, setKhoCaNhan] = useState([])
    const [idCaNhan, setIdCaNhan] = useState()

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setIdCaNhan(res[0].id))
            .finally(() => {

            })
    }, [taikhoan])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setKhoCaNhan(res[0].khohangcanhan))
            .finally(() => {

            })
    }, [taikhoan])

    useEffect(() => {

    }, [taikhoan])


    function handerTTTienMat() {
        return Alert.alert(
            "Are your sure?",
            "Đơn Này Đã Thanh Toán Bằng Tiền Mặt?",
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

                        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/update/' + id_chuyen, {
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
                                                products.map((product, index) => {
                                                    orders.map(sanpham => {
                                                        product.inventory.map(a => {
                                                            if (product.name == sanpham.name && a.usersId == 1) {
                                                                fetch('http://192.168.1.165:4000' + '/api/inventory/update/' + 1 + '/' + product.id, {
                                                                    method: 'POST',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    body: JSON.stringify({
                                                                        soluong: a.exist - sanpham.number_of
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    })
                                                })

                                                fetch('http://192.168.1.165:4000' + '/api/customer_re/delete/' + id_chuyen,
                                                    {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                    }
                                                )
                                                    .then(() => {
                                                        if (tongtien > 0) {
                                                            fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/giatritb/' + taikhoan, {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({
                                                                    giatrittb: ((trungbinhs + tongtien) / (soluongs.length + 1)).toFixed(2)
                                                                })
                                                            })
                                                        }
                                                        navigation.replace('Cart_home');
                                                    })
                                            },
                                        },
                                    ]
                                );
                            })
                    },
                },
            ]
        );

    }

    function handerTTChuyenKhoan() {
        return Alert.alert(
            "Are your sure?",
            "Đơn Này Đã Thanh Toán Bằng Chuyển Khoản?",
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

                        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/update/' + id_chuyen, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                trangthai: "Chuyển Khoản",
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
                                                products.map((product, index) => {
                                                    orders.map(sanpham => {
                                                        product.inventory.map(a => {
                                                            if (product.name == sanpham.name && a.usersId == 1) {
                                                                fetch('http://192.168.1.165:4000' + '/api/inventory/update/' + 1 + '/' + product.id, {
                                                                    method: 'POST',
                                                                    headers: { 'Content-Type': 'application/json' },
                                                                    body: JSON.stringify({
                                                                        soluong: a.exist - sanpham.number_of
                                                                    })
                                                                })
                                                            }
                                                        })
                                                    })
                                                })

                                                fetch('http://192.168.1.165:4000' + '/api/customer_re/delete/' + id_chuyen,
                                                    {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                    }
                                                )
                                                    .then(() => {
                                                        if (tongtien > 0) {
                                                            fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/giatritb/' + taikhoan, {
                                                                method: 'POST',
                                                                headers: { 'Content-Type': 'application/json' },
                                                                body: JSON.stringify({
                                                                    giatrittb: ((trungbinhs + tongtien) / (soluongs.length + 1)).toFixed(2)
                                                                })
                                                            })
                                                        }
                                                        navigation.replace('Cart_home');
                                                    })
                                            },
                                        },
                                    ]
                                );
                            })
                    },
                },
            ]
        );

    }

    function handerNo() {
        return Alert.alert(
            "Are your sure?",
            "Đơn Này Nợ ?",
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

                        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/update/' + id_chuyen, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                trangthai: "Nợ",
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
                                                fetch('http://192.168.1.165:4000' + '/api/customer_re/delete/' + id_chuyen,
                                                    {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                    }
                                                )
                                                    .then(() => {
                                                        navigation.replace('Cart');
                                                    })
                                            },
                                        },
                                    ]
                                );
                            })
                    },
                },
            ]
        );
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetch('http://192.168.1.165:4000' + '/api/orders/authorId/' + id_chuyen)
                .then(res => res.json())
                .then(res => {
                    setOrder(res)
                })
                .catch(err => console.log(err))
                .finally(() => {
                })
            setRefreshing(false);
        }, 1000);
    }, []);


    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    // console.log(search)

    useEffect(() => {
        if (search != "") {
            fetch('http://192.168.1.165:4000' + '/api/products/name/' + search)
                .then(res => res.json())
                .then(res => setProducts(res))
                .catch((err) => console.log(err))
        }
        else {
            fetch('http://192.168.1.165:4000' + '/api/products/')
                .then(res => res.json())
                .then(res => setProducts(res))
                .catch((err) => console.log(err))
        }
    }, [search])


    return (
        <View style={{
            flex: 1,
            backgroundColor: theme.maunen
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
                        borderColor: theme.color,
                        borderWidth: 0.3,
                        paddingVertical: 15,
                        backgroundColor: theme.background

                    }}
                        onPress={() => handerTTTienMat()}
                    >
                        <Text style={{
                            color: theme.color
                        }}>
                            Tiền Mặt
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '50%',
                        alignItems: 'center',
                        borderColor: theme.color,
                        borderWidth: 0.3,
                        paddingVertical: 15,
                        backgroundColor: theme.background

                    }}
                        onPress={() => handerTTChuyenKhoan()}

                    >
                        <Text style={{
                            color: theme.color
                        }}>
                            Chuyển Khoản
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>


            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#eeeeee',
                    size: 10,
                    marginBottom: 0,
                }} />
            }>
                <ScrollView horizontal>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        alignItems: 'center',

                    }}>
                        {Arrays.map((Array, index) => (
                            <View key={Array.id} style={{
                                backgroundColor: theme.background

                            }}>
                                <TouchableOpacity
                                    onPress={() => handerProperties(Array.name, Array.id)}
                                    style={{
                                        borderRadius: 10,
                                        backgroundColor: theme.background
                                    }}
                                >
                                    <Text style={
                                        [
                                            index + 1 === cliedId ? styles.buttonAction : styles.butonUn,
                                            {
                                                color: theme.color
                                            }
                                            // styles.butonUn
                                        ]

                                    }>
                                        {Array.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                </ScrollView>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 15
                }}>
                    <SearchBar
                        placeholder="Type Here..."
                        onChangeText={updateSearch}
                        value={search}
                        lightTheme={true}
                        containerStyle={{
                            borderRadius: 30,
                            backgroundColor: "none"
                        }}
                        inputContainerStyle={{
                            borderRadius: 10,
                            backgroundColor: theme.background,
                            height: 40,
                            width: '90%',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                        searchIcon={true}
                        showCancel={true}
                    // showLoading={true}

                    />
                </View>
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

                        }}>
                            <View style={{
                                backgroundColor: '#fff',
                                backgroundColor: theme.background


                            }}>
                                <View>
                                    <View style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly',
                                        marginBottom: 5,
                                        borderWidth: 0.4,
                                        borderColor: 'gray',
                                        paddingVertical: 10,


                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            color: theme.color
                                        }}>
                                            Tên Sản Phẩm
                                        </Text>
                                        {/* <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Số Lượng
                                        </Text> */}

                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold',
                                            color: theme.color

                                        }}>
                                            Trạng Thái
                                        </Text>
                                    </View>

                                    <View style={{

                                        // paddingVertical: 10
                                    }}>
                                        {product.map((product, index) => (
                                            <View
                                                key={product.id}
                                                style={{
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-around',
                                                    // borderWidth: 0.4,
                                                    // borderColor: 'gray',
                                                    borderBottomColor: 'gray',
                                                    borderBottomWidth: 1,
                                                    paddingVertical: 6

                                                }}>
                                                <View style={{
                                                    width: '40%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Text style={{
                                                        fontSize: 16,
                                                        lineHeight: 30,
                                                        textAlign: 'center',
                                                        color: theme.color

                                                    }}>
                                                        {product.name}
                                                    </Text>
                                                </View>
                                                {/* <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'
                                                }}>
                                                </Text> */}

                                                <View style={{
                                                    width: '40%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <TouchableOpacity style={{
                                                        backgroundColor: 'green',
                                                        opacity: 1,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',

                                                    }}
                                                        onPress={() => handerCong(product.id)}
                                                    >
                                                        <Text style={{
                                                            padding: 5,
                                                            color: 'white',
                                                            textAlign: 'center'
                                                        }}>
                                                            Mượn
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        ))}

                                    </View>

                                    <View>

                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View >

                {/* San Pham */}
                <View View >
                    <View>
                        <View>
                            <View>
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
                                        fontSize: 13,
                                        color: theme.color
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

                                            <View style={{
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
                                                    marginLeft: 10,
                                                }}>
                                                    <View style={{
                                                        width: 80,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        marginRight: 10

                                                    }}>
                                                        <Text style={{
                                                            textAlign: 'center',
                                                            color: theme.color

                                                        }}>
                                                            {Api.name}
                                                        </Text>
                                                        <Text style={{
                                                            textAlign: 'center',
                                                            color: theme.color

                                                        }}>
                                                            {Api.price} $
                                                        </Text>
                                                    </View>

                                                    <View style={{
                                                        flexDirection: 'row',
                                                        marginLeft: -10
                                                    }}>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',

                                                        }}
                                                            onPress={() => handerTru(Api.id, Api.number_of)}
                                                        >
                                                            <Text style={{
                                                                color: theme.color

                                                            }}>-</Text>
                                                        </TouchableOpacity>
                                                        <TextInput style={{
                                                            width: 50,
                                                            height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            textAlign: 'center',
                                                            color: theme.color

                                                        }}

                                                        >
                                                            {Api.number_of}

                                                        </TextInput>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                            onPress={() => handerSoLuong(Api.id, Api.number_of)}
                                                        >
                                                            <Text style={{
                                                                color: theme.color
                                                            }}>+</Text>
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
                                            </View>
                                        </View>
                                    ))

                                }
                            </View>
                        </View>
                    </View>
                </View >

                {/* Tổng Tiền  */}
                <View style={{
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
                        borderRadius: 6,
                        backgroundColor: theme.background
                    }}>

                        <TouchableOpacity >
                            <View style={{
                                flexDirection: 'row',
                                lineHeight: 23,
                            }}>
                                <Text style={{
                                    width: 210,
                                    lineHeight: 23,
                                    fontSize: 20,
                                    color: theme.color

                                }}>
                                    Tổng Tiền:
                                </Text>
                                <Text style={{

                                    lineHeight: 23,
                                    fontSize: 20,
                                    color: theme.color

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
                                    fontSize: 20,
                                    color: theme.color

                                }}>
                                    VAT:
                                </Text>
                                <Text style={{
                                    lineHeight: 23,
                                    fontSize: 20,
                                    color: theme.color

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
                                    fontSize: 20,
                                    color: theme.color

                                }}>
                                    Giảm Giá:
                                </Text>
                                <Text style={{
                                    lineHeight: 23,
                                    fontSize: 20,
                                    color: theme.color

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
                                    color: theme.color

                                }}>
                                    Tổng cần thanh toán:
                                </Text>
                                <Text style={{
                                    color: 'red',
                                    lineHeight: 23,
                                    fontSize: 20,
                                    fontWeight: "bold",

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
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',


    },
    buttonAction: {
        backgroundColor: '#CC3333',
        width: 120,
        height: 50,
        borderColor: 'black',
        borderWidth: 0.3,
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // borderRadius: 10,
        color: 'gold',
        fontWeight: 'bold',

    }
});


