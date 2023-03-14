import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ThemeConText from '../../../config/themeConText';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChiTiet({ route, navigation }) {

    const { name, id } = route.params;
    const theme = useContext(ThemeConText)


    const [isLoad, setIsLoad] = useState(false)
    const [apis, setApi] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )
    const [customer_historys, setCustomer_history] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/id/' + id)
            .then(res => res.json())
            .then(res => {
                setApi(res)
                setCustomer_history(res[0].customer_history)
            })
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [id])

    const [conten, setConten] = useState('')


    const handerSubmit = () => {
        fetch('http://192.168.1.165:4000' + '/api/order_comment/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id,
                conten: conten,
                email: taikhoan,
            })
        })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/order_comment/id/' + id)
                    .then(res => res.json())
                    .then(res => setComment(res))
                    .catch(err => console.log(err))
                    .finally(() => {
                    })
            })
    }

    const [commens, setComment] = useState([])
    const [order_imgs, setOrder_img] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/order_img/id/' + id)
            .then(res => res.json())
            .then(res => setOrder_img(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [id])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/order_comment/id/' + id)
            .then(res => res.json())
            .then(res => setComment(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [id])


    return (
        <KeyboardAvoidingView style={{
            backgroundColor: theme.background,
        }}>
            {/* <View> */}
            {/* ẩn hiên img */}
            {isLoad == true ?
                <View style={{
                    zIndex: 1,
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    opacity: 0.9
                }}>
                    <TouchableOpacity
                        onPress={() => setIsLoad(false)}
                    >
                        <Image
                            // onPress={() => setIsLoad(false)}
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                                position: 'absolute',
                                zIndex: 1,
                                top: 0,

                            }}
                            source={{
                                uri: 'https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg'
                            }}
                        />

                        <Ionicons name='close' style={{
                            fontSize: 40,
                            color: 'white',
                            zIndex: 100,
                            marginLeft: Dimensions.get('window').width - 50
                        }}
                            onPress={() => setIsLoad(false)}

                        />
                        {/* </TouchableOpacity> */}
                    </TouchableOpacity>
                </View>
                : null}
            <ScrollView >
                <View style={{
                    backgroundColor: theme.maunen,

                }}>
                    <View style={{
                        marginRight: 10,
                        marginLeft: 10,
                        borderColor: 'black',
                        borderWidth: 0.3,
                        marginTop: 20,
                        borderRadius: 10,
                        backgroundColor: theme.background,

                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 7.27,

                        elevation: 10,
                    }}>
                        <View style={{
                            // borderColor: 'black',
                            // borderWidth: 0.4,
                            padding: 10,
                            borderTopRightRadius: 20,
                            // borderRadius: 10,
                            // backgroundColor: '#FF9966',
                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: '#00337a',
                                textAlign: 'center',
                                marginLeft: -20,
                                color: theme.color
                            }}>
                                Thông Tin Khách Hàng
                            </Text>
                        </View>
                        {apis.map(api => (
                            <View
                                key={api.id}
                                style={{
                                    padding: 10,
                                }}>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Ionicons name="ios-people-sharp" size={24} color="black" style={{
                                        color: theme.color

                                    }} />
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 33,
                                        marginLeft: 10,
                                        color: theme.color

                                    }}>
                                        Mã Đơn Hàng: {api.code_bill}
                                    </Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Ionicons name="ios-people-sharp" size={24} color="black" style={{
                                        color: theme.color

                                    }} />
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 33,
                                        marginLeft: 10,
                                        color: theme.color

                                    }}>
                                        Người Làm Đơn: {api.nguoithuchien}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Entypo name="address" size={24} color="black" style={{
                                        color: theme.color

                                    }} />
                                    <Text style={{
                                        fontSize: 18,
                                        marginLeft: 10,
                                        color: theme.color

                                    }}>
                                        Địa Chỉ: {api.Address}
                                    </Text>
                                </View>

                            </View>
                        ))}
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10
                        }}>
                            <TouchableOpacity style={{
                                borderColor: theme.color,
                                borderWidth: 0.4,
                                width: 160,
                                padding: 8,
                                borderRadius: 10,
                                backgroundColor: theme.background,


                            }}
                                onPress={() => navigation.replace('Map')}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    textAlign: 'center',
                                    color: theme.color

                                }}>
                                    Google Map
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {customer_historys.map(api => (
                        <View
                            key={customer_historys.id}
                        >
                            <View style={{
                                marginLeft: 10,
                                marginRight: 10,
                                borderColor: 'black',
                                borderWidth: 0.3,
                                marginTop: 20,
                                borderRadius: 10,
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 7.27,

                                elevation: 10,
                                backgroundColor: theme.background,
                                marginBottom: 30


                            }}>
                                <View style={{
                                    // borderColor: 'black',
                                    // borderWidth: 0.3,
                                    padding: 10,
                                    // borderBottomLeftRadius: 10,
                                    borderTopLeftRadius: 10,
                                    // backgroundColor: '#FF9999'
                                    // marginLeft: 10
                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        color: '#00337a',
                                        textAlign: 'center',
                                        color: theme.color

                                    }}>
                                        Thông Tin Đơn
                                    </Text>
                                </View>
                                <View style={{
                                    padding: 10,

                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color


                                    }}>
                                        Tên Khách Hàng: {api.name}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color

                                    }}>
                                        Số Điện Thoại: {api.Number}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        marginRight: 20,
                                        color: theme.color


                                    }}>
                                        Địa Chỉ: {api.Address}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color


                                    }}>
                                        Giờ Hẹn Khách: 12h15 - 13/6/2022
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color

                                    }}>
                                        Giờ Bắt Đầu: 13h - 18/12/2002
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color



                                    }}>
                                        Giờ Kết Thúc: 15h - 18/12/2002
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color


                                    }}>
                                        Khoảng Cách: 12km
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color


                                    }}>
                                        Thời Gian Di Chuyển: 30p
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        color: theme.color


                                    }}>
                                        Loại Máy: RO
                                    </Text>

                                </View>

                            </View>

                        </View>
                    ))}
                </View>

                <View>
                    <View>
                        <Text style={{
                            fontSize: 18,
                            padding: 10,
                            color: theme.color

                        }}>
                            Comment
                        </Text>
                    </View>
                    <View style={{
                        marginLeft: 10,
                        // marginRight: 100,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <Ionicons name="ios-people-circle-outline" size={34} color="black" style={{
                                color: theme.color

                            }} />
                            <TextInput
                                style={{
                                    width: '100%',
                                    height: 30,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                    width: 250,
                                    borderRadius: 6,
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    color: theme.color


                                }}
                                placeholder="Viết Bình Luận..."
                                onChangeText={(e) => setConten(e)
                                }
                            />
                        </View>
                        <View>
                            <TouchableOpacity style={{
                                width: 80,
                                height: 30,
                                // borderColor: 'black',
                                // borderWidth: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 6,
                                backgroundColor: '#589c0b',

                            }}
                                onPress={() => handerSubmit()}
                            >

                                <Text style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    color: theme.color

                                }}>
                                    Gửi
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                        {commens.map(commen => (
                            <View
                                key={commen.id}
                                style={{
                                    flexDirection: 'row',
                                    // justifyContent: 'space-between',
                                    padding: 10
                                }}>
                                <Ionicons name="ios-people-circle-outline" size={34} color="black" style={{
                                    color: theme.color

                                }} />
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    position: 'relative',

                                }}>
                                    <View style={{
                                        marginLeft: 20,
                                        width: 220

                                    }}>
                                        <Text style={{
                                            color: theme.color,
                                            fontSize: 20,
                                        }}>
                                            {commen.email}

                                        </Text>
                                        <Text style={{
                                            color: theme.color,
                                            opacity: 0.5,

                                        }}>
                                            {commen.conten}
                                        </Text>
                                    </View>
                                    <View style={{
                                        marginTop: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            opacity: 0.5,
                                            color: theme.color,

                                        }}>
                                            {commen.time}
                                        </Text>
                                        <Text style={{
                                            fontSize: 12,
                                            opacity: 0.5,
                                            color: theme.color,

                                        }}>
                                            {commen.date}
                                        </Text>

                                    </View>
                                </View>

                            </View>
                        ))}

                    </View>

                </View>



                {/* //img */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    marginTop: 10,
                    marginBottom: 30
                }}>
                    {order_imgs && order_imgs.map(order_img => (
                        <TouchableOpacity
                            key={order_img.id}
                            onPress={() => setIsLoad(true)}
                            style={{
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.34,
                                shadowRadius: 7.27,

                                elevation: 10,
                                marginTop: 10
                            }}
                        >
                            <View style={{
                                width: '100%',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                alignItems: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: 6
                                    }}
                                    source={{
                                        uri: order_img.img
                                    }}
                                />
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    {order_img.time}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))}

                </View>

            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
