import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, Animated, Button, BackHandler, RefreshControl } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropDownItem from "react-native-drop-down-item";
import { Accordion, animate, Value } from '@dooboo-ui/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UpAnh from '../Components/UpAnh';
import LottieView from 'lottie-react-native';
// import MaHoa from '../Components/MaHoa';
import * as Keychain from 'react-native-keychain';

// import { Value } from 'react-native-reanimated';
// import Buttons from './Button'
export default function HomeScrenn({ navigation }) {

    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('token')
        .then(res =>
            setToken(res)
        )

    const URL_ON = 'http://192.168.0.106:4000'
    const URL1_ON = 'http://192.168.0.114:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    const [isLoad, setIsLoad] = useState(false)
    const [isUpAnh, setUpAnh] = useState(false)

    const [thongtin, setThongTin] = useState([])
    const [reset, setReset] = useState(false);

    const [apis, setApi] = useState([])
    const [image, setImage] = useState(null)
    const [logins, setLogin] = useState([])

    const countries = ["Egypt", "Canada", "Australia", "Ireland"]

    const [animatedValue] = useState(new Animated.Value(0));
    const animate = () => {
        animate({
            animatedValue,
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    }

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('token')
        .then(res =>
            setToken(res)
        )

    // console.log(taikhoan)

    useEffect(() => {
        fetch(URL_FPT + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setThongTin(res))
    }, [taikhoan])

    const options = {
        method: 'get',
        headers: {
            'Authorization': 'Bearer ' + token,
        },
    }

    useEffect(() => {
        fetch(URL_FPT + '/posts', options)
            .then(res => res.json())
            .then(res => setApi(res))
            .catch((err) => console.log(err))
    }, [token])

    function handerLogout() {

        fetch(URL_FPT + '/api/users/update/token/' + taikhoan, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(() => {
                // navigation.replace('Login');
                setReset(true);
                setTimeout(() => {
                    setReset(false);
                }, 100);

                AsyncStorage.clear().then(() => {
                    setToken('')
                    setTaiKhoan('')
                    // console.log("taikhoan : " + taikhoan)

                }).catch((error) => {
                    console.log('AsyncStorage clear error: ', error);
                });

            })
    }

    if (reset) {
        return null;
    }

    const pickImage = async () => {
        // setIsLoad(true)

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        // console.log("image :" + image)

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    function handerXacNhan() {
        fetch(URL_FPT + '/api/users/update/img/' + taikhoan, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                img: image
            })
        })
            .then(() => {
                fetch(URL_FPT + '/api/users/' + taikhoan)
                    .then(res => res.json())
                    .then(res => setThongTin(res))
            })

        setUpAnh(false)

    }

    const contents = [
        {
            title: "Thụ Tục Hành Chính",
            body: "Hi. I love this component. What do you think?"
        },
        {
            title: "Đơn Hàng",
            body: "Yes. You can have more items."
        },
        {
            title: "Kho Hàng",
            body: "hello"
        }
    ]


    const buttons = [
        {
            id: 1, button: 'Thủ Tục Hành Chính', icon: 'receipt', color: 'coral'
        },
        {
            id: 2, button: 'Chỉ Số Cá Nhân', icon: 'receipt',
        },
        {
            id: 3, button: 'Thông Báo Công Ty', icon: 'notifications',
        },
        {
            id: 4, button: 'Lương Thưởng', icon: 'receipt',
        },
        {
            id: 5, button: 'Lịch Sử Đơn Hàng', icon: 'history',
        },
        {
            id: 6, button: 'Duyệt Chi', icon: 'trending-up',
        },
        {
            id: 7, button: 'Nhập-Xuất Kho', icon: 'compare-arrows',
        },
        {
            id: 8, button: 'Kho Hàng Cá Nhân', icon: 'account-balance',
        },
        {
            id: 9, button: 'Phiếu Mượn', icon: 'library-books',
        },
    ]

    function handerUpAnh() {
        setUpAnh(true)
        setImage(null)
    }

    function handerCance() {
        setUpAnh(false)
        setImage(null)

    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#fff',
            position: 'relative'
        }}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#2851db',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            {/* menu */}
            <View style={{
                marginTop: 0,
                backgroundColor: '#2851db',
                paddingVertical: 20,
                color: 'white',
                height: 240,
                borderBottomRightRadius: 70,
                borderBottomLeftRadius: 70,
                // position: 'relative',  
                zIndex: -1
            }}>
                {/* hinhf tronf */}
                <View>
                    <TouchableOpacity style={{
                        width: 70,
                        height: 70,
                        borderRadius: 200,
                        backgroundColor: '#3182e6',
                        position: 'absolute',
                        zIndex: -1,
                        top: 60,
                        left: 0
                    }}>

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={{
                        width: 50,
                        height: 50,
                        borderRadius: 200,
                        backgroundColor: '#3182e6',
                        position: 'absolute',
                        zIndex: -1,
                        top: 60,
                        left: '55%'
                    }}>

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={{
                        width: 40,
                        height: 40,
                        borderRadius: 200,
                        backgroundColor: '#3182e6',
                        position: 'absolute',
                        zIndex: -1,
                        top: 0,
                        left: '30%'
                    }}>

                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={{
                        width: 120,
                        height: 120,
                        borderRadius: 400,
                        backgroundColor: '#3182e6',
                        position: 'absolute',
                        zIndex: -1,
                        top: -50,
                        right: -30,

                    }}>

                    </TouchableOpacity>
                </View>


                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}>
                    <TouchableOpacity
                        onPress={() => setIsLoad(true)}
                        style={{
                            // borderColor: 'black',
                            // borderWidth: 1,
                            // paddingHorizontal: 3,
                            // paddingVertical: 3,
                            borderRadius: 10,
                            marginTop: 20
                        }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            <MaterialIcons name='menu' style={{
                                fontSize: 30,
                                color: 'white'
                            }} />
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20
                    }}>
                        <Text style={{
                            fontSize: 25,
                            marginLeft: -5,
                            color: 'white',
                            // fontWeight: 'bold'

                        }}>
                            Trang Chủ

                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        marginTop: 20
                    }}>

                        <MaterialIcons name='notifications' style={{
                            fontSize: 30,
                            color: 'white'

                        }} />

                    </TouchableOpacity>

                </View>
                <View style={{
                    // width: Dimensions.get('window').width - 60,
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    height: 190,


                }}>
                    <View style={{
                        marginTop: 20,
                        bottom: -20,
                        position: 'absolute',
                        zIndex: 100
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderColor: 'black',
                            borderWidth: 0.4,
                            borderRadius: 10,
                            backgroundColor: '#fff',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 2.27,
                            elevation: 10,
                            padding: 25,
                            zIndex: 100

                        }}>
                            <View>
                                {thongtin.map(thong => (
                                    <TouchableOpacity
                                        key={thong.id}
                                        onPress={() => handerUpAnh()}
                                    >
                                        {thong.img == "" ?
                                            <Image
                                                style={{
                                                    width: 100,
                                                    height: 120,
                                                    borderRadius: 10,
                                                }}
                                                source={{
                                                    uri: "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang.jpg"
                                                }}
                                            /> :
                                            <Image
                                                style={{
                                                    width: 100,
                                                    height: 120,
                                                    borderRadius: 10,
                                                }}
                                                source={{
                                                    uri: thong.img
                                                }}
                                            />
                                        }

                                    </TouchableOpacity>
                                ))}
                            </View>
                            <View style={{
                                paddingHorizontal: 10,
                                marginTop: 7,
                                fontWeight: 'IBM'
                            }}>

                                <View style={{
                                    flexDirection: 'row'
                                }}>

                                    <Text style={{
                                        lineHeight: 30,
                                        // fontSize: 14
                                    }}>
                                        {taikhoan}
                                    </Text>
                                    <Text style={{
                                        lineHeight: 30,
                                        marginLeft: 30
                                    }}>
                                        (NV007)
                                    </Text>
                                </View>
                                <Text style={{
                                    lineHeight: 30
                                }}>
                                    Nhân Viên KT
                                    {/* <View>
                                        {
                                            apis.map((api, index) => (
                                                <Text key={index} >
                                                    {api.email}

                                                </Text>
                                            ))
                                        }
                                    </View> */}

                                </Text>
                                <Text style={{
                                    lineHeight: 26
                                }}>
                                    Bâc 100
                                </Text>
                                <Text style={{
                                    lineHeight: 25,
                                    marginBottom: 10
                                }}>
                                    10.000.000đ
                                </Text>

                            </View>
                        </View>

                    </View>
                </View>

                {/* <View>
                    <View>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 10,
                            backgroundColor: '#E0FFFF'
                        }}>
                            <Text>
                                Quét Mã QR
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> */}
            </View>

            {/* <View style={{
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    borderColor: 'black',
                    borderWidth: 1,
                    width: 300,
                    padding: 10,
                    alignItems: 'center',
                    marginTop: 20,
                    borderRadius: 10,
                    backgroundColor: '#DDDDDD'
                }}>
                    <Text style={{
                        color: 'black',
                        fontWeight: 'bold'
                    }}>
                        Thu Nhập: 1.000.000đ
                    </Text>
                </TouchableOpacity>
            </View> */}




            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                marginTop: 50,
                alignItems: 'center',

            }}>
                <View style={{
                    width: '100%',
                    position: 'absolute',
                    // marginLeft: 30


                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity style={{
                                width: '30%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'black',
                                borderWidth: 0.4,
                                padding: 20,
                                top: -25,
                                borderBottomLeftRadius: 5,
                                borderTopLeftRadius: 5,
                                backgroundColor: '#FFCC99',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.44,
                                shadowRadius: 2.27,
                                elevation: 13,
                            }}
                                onPress={() => navigation.navigate('KhoHang')}
                            >
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: 'black',

                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '29%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'black',
                                borderWidth: 0.4,
                                padding: 20,
                                top: -25,
                                backgroundColor: '#FFCC99',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.44,
                                shadowRadius: 2.27,
                                elevation: 13,

                            }}
                                onPress={() => navigation.navigate('Đơn Hàng')}

                            >
                                <Text style={{
                                    fontWeight: 'bold'
                                }}>
                                    Đơn Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '27%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: 'black',
                                borderWidth: 0.4,
                                padding: 20,
                                top: -25,
                                borderBottomRightRadius: 5,
                                borderTopRightRadius: 5,
                                backgroundColor: '#FFCC99',
                                shadowOffset: {
                                    width: 0,
                                    height: 6,
                                },
                                shadowOpacity: 0.44,
                                shadowRadius: 2.27,
                                elevation: 13,

                            }}
                                onPress={() => navigation.navigate('QRCode')}

                            >
                                <Text style={{
                                    fontWeight: 'bold'
                                }}>
                                    QR Code
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <View style={{
                }}>
                    <View style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        marginTop: 40,
                        // marginBottom: 150

                    }} >
                        {buttons.map(button => (
                            <TouchableOpacity onPress={() => navigation.navigate(button.button)
                            }
                                key={button.id}
                                style={{
                                    width: 110,
                                    height: 100,
                                    borderColor: 'black',
                                    borderWidth: 1,
                                    borderRadius: 6,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: 35,
                                    backgroundColor: '#fff',
                                    shadowOffset: {
                                        width: 0,
                                        height: 5,
                                    },
                                    shadowOpacity: 0.64,
                                    shadowRadius: 2.27,
                                    elevation: 10,
                                    marginLeft: 5
                                }}>
                                <MaterialIcons name={button.icon} style={{
                                    fontSize: 30,
                                    color: '#550000'

                                }} />
                                <Text style={{
                                    color: '#550000',
                                    fontSize: 15,
                                    textAlign: 'center',
                                    padding: 5
                                }}>
                                    {button.button}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View>
                </View>
            </View>

            {
                isUpAnh &&
                <View style={{
                    backgroundColor: 'white',
                    position: 'absolute',
                    width: '100%',
                    bottom: 0,
                }}>
                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: 'white',
                        paddingVertical: 2,
                        marginTop: 3
                    }}>
                        <Button title="Thay Ảnh" onPress={pickImage} style={{
                        }} />
                    </View>
                    {image &&

                        <View style={{
                            alignItems: 'center', justifyContent: 'center',
                            backgroundColor: 'white',
                            paddingVertical: 2,
                            marginTop: 3,
                            borderTopWidth: 0.5
                        }}>
                            <>
                                <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
                                <Button title="Xác Nhận" onPress={() => handerXacNhan()} style={{
                                }}
                                />
                            </>
                        </View>
                    }
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderTopColor: 'gray',
                        borderTopWidth: 0.5
                    }}>
                        <TouchableOpacity>
                            <Text style={{
                                fontSize: 20,
                                marginBottom: 7,
                                paddingVertical: 5
                            }}
                                onPress={() => handerCance()}
                            >
                                Cance
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }


            {
                isLoad &&

                <View style={{
                    width: '100%',
                    height: Dimensions.get('window').height,
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    position: 'absolute',
                    zIndex: 10,
                    top: 0
                }}
                >
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: Dimensions.get('window').height,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            position: 'absolute',
                            zIndex: 10,
                            top: 0
                        }}
                        onPress={() => setIsLoad(false)}
                    >

                    </TouchableOpacity>
                </View>
            }



            {
                isLoad &&
                <View style={{
                    position: 'absolute',
                    height: Dimensions.get('window').height,
                    backgroundColor: 'white',
                    width: '80%',
                    zIndex: 110,

                }}>

                    <View style={{
                        zIndex: 100,
                        backgroundColor: '#0097d9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 2,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 2.00,

                        elevation: 2,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginTop: 25,
                            marginBottom: 10,
                            justifyContent: 'space-between',
                        }}>
                            {thongtin.map(thong => (
                                <TouchableOpacity
                                    key={thong.id}
                                    onPress={() => handerUpAnh()}
                                >
                                    {thong.img == "" ?
                                        <Image
                                            style={{
                                                width: 100,
                                                height: 120,
                                                borderRadius: 10,
                                            }}
                                            source={{
                                                uri: "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang.jpg"
                                            }}
                                        /> :
                                        <Image
                                            style={{
                                                width: 100,
                                                height: 120,
                                                borderRadius: 10,
                                            }}
                                            source={{
                                                uri: thong.img
                                            }}
                                        />
                                    }

                                </TouchableOpacity>
                            ))}
                            <View style={{
                                paddingHorizontal: 10,
                                marginTop: 7
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    color: 'white',
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>
                                    Ngô Xuân Quy
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    color: '#c9c9c9',
                                    fontSize: 16
                                }}>
                                    Nhân Viên KT
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    color: '#c9c9c9',
                                    fontSize: 16
                                }}>
                                    Bâc 100
                                </Text>
                            </View>
                        </View>

                    </View>


                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <TouchableOpacity style={{
                            width: '90%',
                            height: 2,
                            backgroundColor: '#0097d9',
                            marginTop: 5
                        }}>

                        </TouchableOpacity>
                    </View>

                    <ScrollView>
                        <View style={{
                            marginBottom: 100
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                // height: 40,
                                padding: 10,
                                paddingBottom: -10,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.3,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 60,
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <MaterialIcons
                                    name="home"
                                    size={26}
                                    color="black"
                                    style={{
                                        // lineHeight: 30,
                                        // height: 40

                                    }}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    lineHeight: 30,
                                    marginLeft: 10

                                }}>
                                    Trang Chủ
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // height: 60,
                                padding: 10,
                                paddingBottom: -10,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.3,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 60,
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <MaterialIcons
                                    name="notifications"
                                    size={26}
                                    color="black"
                                    style={{
                                        // lineHeight: 30,
                                        // height: 40

                                    }}
                                />
                                <Text style={{
                                    fontSize: 20,
                                    lineHeight: 30,
                                    marginLeft: 10

                                }}>
                                    Thông Báo Công Ty
                                </Text>
                            </View>

                            <View style={{
                                // marginBottom: -100,
                                // height: 380
                                // transform: [{
                                //     scale: animatedValue
                                // }]
                            }}>
                                <ScrollView style={{ alignSelf: 'stretch', }}
                                    useNativeDriver={false}
                                >
                                    {
                                        contents
                                            ? contents.map((param, i) => {
                                                return (
                                                    <Accordion
                                                        style={{
                                                        }}
                                                        key={i}
                                                        useNativeDriver={true}
                                                        // style={styles.dropDownItem}
                                                        contentVisible={false}
                                                        // invisibleImage={IC_ARR_DOWN}
                                                        // visibleImage={IC_ARR_UP}
                                                        header={
                                                            <View style={{
                                                                marginLeft: 10,
                                                                marginRight: 10
                                                            }} >
                                                                <Animated.View style={{
                                                                    width: '100%',
                                                                    flexDirection: 'row',
                                                                    padding: 10,
                                                                    // height: 60,
                                                                    borderBottomColor: 'gray',
                                                                    borderBottomWidth: 0.3,
                                                                    // justifyContent: 'space-around'
                                                                }}
                                                                >
                                                                    <SimpleLineIcons name="handbag" size={24} color="black" style={{
                                                                        marginTop: -7,
                                                                        // marginLeft: 10

                                                                    }} />
                                                                    {/* <Animated.View> */}

                                                                    <Text style={{
                                                                        fontSize: 20,
                                                                        color: 'black',
                                                                        // height: 0,
                                                                        marginLeft: 10

                                                                    }}
                                                                    // onPress={animateIn}
                                                                    >{param.title}</Text>

                                                                    {/* </Animated.View> */}

                                                                    <AntDesign name="down" size={16} color="black" style={{
                                                                        position: 'absolute',
                                                                        right: 10,
                                                                        top: 15
                                                                    }}
                                                                        onPress={animate}
                                                                    />

                                                                </Animated.View>
                                                            </View>
                                                        }
                                                    >

                                                        <View style={{

                                                        }}>
                                                            <Text style={[
                                                                styles.txt,
                                                                {
                                                                    fontSize: 20,
                                                                }
                                                            ]}>
                                                                {param.body}
                                                            </Text>
                                                        </View>
                                                    </Accordion>
                                                );
                                            })
                                            : null
                                    }
                                    {/* <View style={{ height: 96 }} /> */}
                                </ScrollView>
                            </View>



                            <View style={{
                                flexDirection: 'row',
                                // height: 60,
                                padding: 10,
                                paddingBottom: -10,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.3,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 60,
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                alignItems: 'center'


                            }}>
                                <Feather name="book" size={24} color="black" style={{
                                    marginTop: -7
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    lineHeight: 30,
                                    marginLeft: 10

                                }}>
                                    Xác Nhận Bảng Lương
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // height: 60,
                                padding: 10,
                                paddingBottom: -10,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.3,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 60,
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                alignItems: 'center'


                            }}>
                                <AntDesign name="linechart" size={24} color="black" style={{
                                    marginTop: -7
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    lineHeight: 30,
                                    marginLeft: 10

                                }}>
                                    Chỉ Số Cá Nhân
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                // height: 60,
                                padding: 10,
                                paddingBottom: -10,
                                borderBottomColor: 'gray',
                                borderBottomWidth: 0.3,
                                marginLeft: 10,
                                marginRight: 10,
                                height: 60,
                                textAlign: 'center',
                                justifyContent: 'flex-start',
                                alignItems: 'center'


                            }}>
                                <FontAwesome name="money" size={24} color="black" style={{
                                    marginTop: -7
                                }} />
                                <Text style={{
                                    fontSize: 20,
                                    lineHeight: 30,
                                    marginLeft: 10

                                }}>
                                    Duyệt Chi
                                </Text>
                            </View>


                            <View style={{
                                marginTop: 40
                            }}>
                                <TouchableOpacity style={{
                                    flexDirection: 'row',
                                    // height: 60,
                                    padding: 10,
                                    paddingBottom: -10,
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 0.3,
                                    marginLeft: 10,
                                    marginRight: 10,
                                    height: 60,
                                    textAlign: 'center',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}
                                    onPress={() => handerLogout()}
                                >
                                    <MaterialIcons name="logout" size={30} color="black" style={{
                                        marginTop: -3
                                    }} />
                                    <Text style={{
                                        fontSize: 20,
                                        lineHeight: 30,
                                        marginLeft: 10

                                    }}>
                                        Đăng Xuất
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View >

            }
        </ScrollView >

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
