import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function ThanhToan() {

    const [cliedId, setCliedID] = useState(0);
    const [Apis, setApi] = useState([])
    const [sanphams, setSanPham] = useState([])


    const Arrays = [
        {
            id: 1,
            name: 'Rau'
        },
        {
            id: 2,
            name: 'Thịt'
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

    const Products = [
        {
            id: 1,
            name: 'Rau Dền',
            price: 100,
            properties: 'Rau',
            img: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2022/1/20/996975/Rau-Den.jpg?w=800&crop=auto&scale=both'

        },
        {
            id: 2,
            name: 'Rau Cải',
            price: 100,
            properties: 'Rau',
            img: 'http://media.cooky.vn/images/blog-2016/6-loai-rau-khong-bao-gio-nen-luoc-0.jpg'

        },
        {
            id: 3,
            name: 'Rau muống',
            price: 100,
            properties: 'Rau',
            img: 'https://hongngochospital.vn/wp-content/uploads/2013/11/rau-muong.jpg'

        },
        {
            id: 4,
            name: 'Thịt Lợn',
            price: 100,
            properties: 'Thịt',
            img: 'https://icdn.dantri.com.vn/FaA3gEccccccccccccos/Image/2011/06/tht6811_a9082.jpg'

        },
        {
            id: 5,
            name: 'Thịt Gà',
            price: 100,
            properties: 'Thịt',
            img: 'https://suckhoehangngay.mediacdn.vn/zoom/700_438/154880486097817600/2021/8/29/an-thit-ga-nhieu-co-tot-khong-2-16302301251131276160424-0-97-512-916-crop-16302301919781076935074.jpg'

        },
        {
            id: 6,
            name: 'Cá Mập',
            price: 100,
            properties: 'Cá',
            img: 'https://cdnmedia.baotintuc.vn/Upload/ESSoZh9IeVhxwO8Bh87Q/files/2021/10/27/camap271021.jpg'

        },
        {
            id: 7,
            name: 'Khủng Long',
            price: 100,
            properties: 'Khủng Long',
            img: 'http://icdn.dantri.com.vn/zoom/1200_630/2021/05/10/khung-long-crop-1620601045917.jpeg'

        },
        {
            id: 8,
            name: 'Voi',
            price: 100,
            properties: 'Voi',
            img: 'https://hinhmoc.com/wp-content/uploads/2020/07/con-voi.jpg'

        },
        {
            id: 9,
            name: 'Thịt Bò',
            price: 100,
            properties: 'Thịt',
            img: 'https://vinmec-prod.s3.amazonaws.com/images/20191112_133540_928947_thit-bo.max-1800x1800.png'

        },
        {
            id: 10,
            name: 'Thịt Hổ',
            price: 100,
            properties: 'Thịt',
            img: 'https://image.thanhnien.vn/w1024/Uploaded/2022/jvunzvu/2022_07_08/ho-8347.jpg'

        }
    ]

    const [product, setProduct] = useState(Products);
    const [xoa, setXoa] = useState();



    function handerProperties(name, id) {
        setCliedID(id);
        let data;
        if (name === 'All') {
            data = Products;
            setProduct(data);
            return;
        }
        data = Products.filter((item) => {
            return item.properties == name;
        });
        setProduct(data);

    }
    // console.log(product)


    useEffect(() => {
        setApi(Products)
    }, [])

    function handerCong(id) {
        Products.map(Product => {
            if (Product.id == id) {
                setSanPham([...sanphams, Product])
            }
        })
    }
    // console.log(sanphams)

    function arrayRemove(arr, value) {
        return arr.filter(function (ele) {
            return ele != value;
        });
    }
    function handerTru(id) {
        var filtered;

        filtered = sanphams.filter(item => item.id !== id);

        // sanphams.splice(sanphams.indexOf(xoa), 1);

        setSanPham(filtered)
    }

    // console.log(handerTru(id))
    var TT = 0;
    const [tongtien, setTongTien] = useState()
    useEffect(() => {
        sanphams.map(sanpham => {
            TT += sanpham.price
        })
        // console.log(TT)
        setTongTien(TT)
    }, [sanphams])




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
                        width: '33%',
                        alignItems: 'center',
                        borderColor: 'black',
                        borderWidth: 0.3,
                        paddingVertical: 15
                    }}>
                        <Text>
                            Tiền Mặt
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '33%',
                        alignItems: 'center',
                        borderColor: 'black',
                        borderWidth: 0.3,
                        paddingVertical: 15
                    }}>
                        <Text>
                            Chuyển Khoản
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        width: '33%',
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
                        {
                            product.map((Api, index) => (
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
                                                // marginLeft: 40
                                            }}>
                                                <TouchableOpacity style={{
                                                    width: 35, height: 35,
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
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

                                                >1</TextInput>
                                                <TouchableOpacity style={{
                                                    width: 35, height: 35,
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                    onPress={() => handerCong(Api.id)}
                                                >
                                                    <Text>+</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))

                        }
                    </View>
                </View>

                {/* San Pham */}
                <View>
                    <View>
                        <View>
                            <TouchableOpacity>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'coral',
                                    padding: 10,
                                    marginTop: 10
                                }}>
                                    Sản Phẩm Đã Chọn
                                </Text>
                                {
                                    sanphams.map((Api, index) => (

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
                                                        // marginLeft: 40
                                                    }}>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: 'black',
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                            onPress={() => handerTru(Api.id)}
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

                                                        >1</TextInput>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: 'black',
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center'
                                                        }}
                                                            onPress={() => handerCong(Api.id)}
                                                        >
                                                            <Text>+</Text>
                                                        </TouchableOpacity>
                                                    </View>
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
                                    {tongtien + ((tongtien * 10) / 100) - 10}
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


