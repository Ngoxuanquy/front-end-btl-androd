import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';


// import Buttons from './Button'
export default function HomeScrenn({ navigation }) {

    const [isLoad, setIsLoad] = useState(false)
    const [token, setToken] = useState([])
    const [apis, setApi] = useState([])



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
        }, {
            id: 6, button: 'Duyệt Chi', icon: 'trending-up',
        }
    ]
    return (
        <ScrollView style={{
            flex: 1,
            backgroundColor: '#fff'
        }} >


            {isLoad &&
                <View>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: Dimensions.get('window').height,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            // position: 'absolute',
                            zIndex: 1,
                            // top: 0
                        }}
                        onPress={() => setIsLoad(false)}
                    >

                    </TouchableOpacity>
                </View>
            }
            {isLoad &&
                <View style={{
                    position: 'absolute',
                    height: Dimensions.get('window').height,
                    backgroundColor: 'gray',
                    width: '70%',
                    zIndex: 1
                }}>

                    <View style={{
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <View>
                            <Image
                                style={{
                                    width: 100,
                                    height: 120,
                                    borderRadius: 10,
                                    marginTop: 100,

                                }}
                                source={{
                                    uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/286462354_1371956499953772_2394174266156682221_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=hM_kYA5ViR4AX8JclL1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ8O9uqJyyy7Zd0ApEC94wyQKoaSNxmoiIVpRGi2gO_PQ&oe=63C9DF3E'
                                }}
                            />
                        </View>
                        <View style={{
                            paddingHorizontal: 10,
                            marginTop: 7
                        }}>
                            <Text style={{
                                lineHeight: 30,
                                color: 'white',
                                fontSize: 30
                            }}>
                                Ngô Xuân Quy
                            </Text>
                            <Text style={{
                                lineHeight: 30,
                                color: 'white',
                                fontSize: 20


                            }}>
                                Nhân Viên KT
                            </Text>
                            <Text style={{
                                lineHeight: 30,
                                color: 'white',
                                fontSize: 20


                            }}>
                                Bâc 100
                            </Text>
                        </View>
                    </View>

                </View>
            }

            {/* menu */}

            <View style={{
                marginTop: 0,
                backgroundColor: '#2851db',
                paddingVertical: 20,
                color: 'white',
                height: 240,
                borderBottomRightRadius: 70,
                borderBottomLeftRadius: 70,
                position: 'relative'

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
                                <Image
                                    style={{
                                        width: 100,
                                        height: 120,
                                        borderRadius: 10,
                                    }}
                                    source={{
                                        uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/286462354_1371956499953772_2394174266156682221_n.jpg?stp=dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=hM_kYA5ViR4AX8JclL1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ8O9uqJyyy7Zd0ApEC94wyQKoaSNxmoiIVpRGi2gO_PQ&oe=63C9DF3E'
                                    }}
                                />
                            </View>
                            <View style={{
                                paddingHorizontal: 10,
                                marginTop: 7,

                            }}>

                                <View style={{
                                    flexDirection: 'row'
                                }}>

                                    <Text style={{
                                        lineHeight: 30,
                                        // fontSize: 14
                                    }}>
                                        Ngô Xuân Quy
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
                                    <View>
                                        {
                                            apis.map((api, index) => (
                                                <Text key={index} >
                                                    {api.userName}

                                                </Text>
                                            ))
                                        }
                                    </View>

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
                                onPress={() => navigation.navigate('DonDangThucHien')}

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
                        marginBottom: 150

                    }} >
                        {buttons.map(button => (
                            <TouchableOpacity onPress={() => navigation.navigate(button.button)
                            }
                                key={button.id}
                                style={{
                                    width: 100,
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
