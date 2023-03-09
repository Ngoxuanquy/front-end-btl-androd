import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropDownItem from "react-native-drop-down-item";
import { Accordion, animate, Value } from '@dooboo-ui/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const DonThuNo = () => {
    return (
        <ScrollView >
            <View>
                <View style={{
                    height: 420,
                    justifyCotent: 'center',
                    alignItems: 'center',
                    marginTop: -90,
                    width: "100%",

                }}>
                    <LinearGradient
                        // Background Linear Gradient
                        start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
                        colors={['#bf57f4', '#997af4', '#878bf5', '#7a84f3']}
                        style={{
                            width: "100%",
                            height: 4500,
                            flex: -1,
                            transform: [{ rotate: "285deg" }],
                            borderRadius: 90
                            // zIndex: -1,
                            // marginTop: 100,
                            // marginLeft: 100

                        }}
                    >

                        <View style={{
                            backgroundGradient: "vertical",
                            backgroundGradientTop: "red",
                            backgroundGradientBottom: "blue",
                            width: '100%',
                            paddingTop: 120,
                            paddingLeft: 90,
                            paddingHorizontal: 30,
                            transform: [{ rotate: "-285deg" }],

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <MaterialIcons name='menu' style={{
                                    fontSize: 30,
                                    color: 'white',
                                }} />

                                <MaterialIcons name='notifications' style={{
                                    fontSize: 30,
                                    color: 'white',
                                    marginRight: -40


                                }} />
                            </View>
                            <View style={{
                                marginTop: 30,
                                flexDirection: 'row',
                                marginLeft: -10
                            }}>
                                <Image
                                    style={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: 200
                                    }}
                                    source={{ uri: 'https://phongkhamdongphuong.net/wp-content/uploads/2022/04/hinh-anh-dep-4.jpg' }}
                                />
                                <View>
                                    <Text style={{
                                        fontSize: 20,
                                        marginLeft: 20,
                                        marginTop: 10,
                                        color: 'white'
                                    }}>
                                        Ngô Xuân Quy
                                    </Text>
                                    <Text style={{
                                        fontSize: 14,
                                        marginLeft: 20,
                                        marginTop: 0,
                                        opacity: 0.6,
                                        color: 'white'
                                    }}>
                                        Nhân Viên KT
                                    </Text>
                                </View>

                                <View style={{
                                    marginLeft: 26,
                                    marginTop: 10
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#fff',
                                        padding: 10,
                                        borderRadius: 10
                                    }}>
                                        <Text>
                                            Chi Tiết
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 20
                            }}>
                                <View style={{
                                }}>
                                    <Text style={{
                                        fontSize: '18',
                                        color: 'white'
                                    }}>
                                        Sáng Vào:
                                    </Text>
                                    <Text style={{
                                        fontSize: '18',
                                        color: 'white'
                                    }}>
                                        Sáng Ra:
                                    </Text>
                                </View>
                                <View >
                                    <Text style={{
                                        fontSize: '18',
                                        color: 'white'
                                    }}>
                                        Chiều Vào:
                                    </Text>
                                    <Text style={{
                                        fontSize: '18',
                                        color: 'white'
                                    }}>
                                        Chiều Ra:
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                    {/* 
                    <View style={{
                        width: '100%',
                        height: 400,
                        backgroundColor: '#c25cea',
                        position: 'absolute',
                        marginTop: 0,
                        left: 15,
                        top: -100,
                        transform: [{ rotate: "285deg" }],
                        zIndex: -1,
                        borderRadius: 70,

                    }}>
                        <LinearGradient
                            // Background Linear Gradient
                            colors={['#e3c6ec', '#dfacef', '#bf4ae3', '#c02ded']}
                            style={{
                                width: "100%",
                                height: 1500,
                                position: 'relative',
                                flex: -1,
                                borderRadius: 70,
                                // zIndex: -1,
                                // marginTop: 100,
                                // marginLeft: 100

                            }}
                        ></LinearGradient>
                    </View> */}
                    {/* <Image
                        style={{
                            height: 100,
                            width: 100,
                            zIndex: 100,
                            backgroundColor: '#2851db',
                            marginLeft: 150,
                            top: -30
                        }}
                        source={{ uri: 'https://o.remove.bg/downloads/a6d924d0-f37c-475c-b34e-2bf66b54aa64/lovepik-boy-sitting-fishing-png-image_401745460_wh1200-removebg-preview.png' }}
                    /> */}
                </View>
                <View>
                    <View>
                        <Text style={{
                            fontSize: 25,
                            marginTop: -10,
                            padding: 10,
                            marginBottom: 20
                        }}>
                            Phím Tắt
                        </Text>
                    </View>

                    <ScrollView horizontal>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                            }}>
                            <TouchableOpacity style={{
                                backgroundColor: '#8fe8b1',
                                padding: 15,
                                borderRadius: 10,
                                width: 130,
                                marginLeft: 20,
                                marginRight: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: '#57a3f2',
                                padding: 15,
                                borderRadius: 10,
                                width: 130,
                                marginLeft: 0,
                                marginRight: 0

                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Đơn Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: '#f5b785',
                                padding: 15,
                                borderRadius: 10,
                                width: 130,
                                marginLeft: 20,
                                marginRight: 0

                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20,
                                    color: 'white'
                                }}>
                                    Mã QR
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>

                <View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 145,
                                backgroundColor: '#d3af92',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 145,
                                backgroundColor: '#c7ade2',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 145,
                                backgroundColor: '#d3af92',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 145,
                                backgroundColor: '#c7ade2',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 145,
                                backgroundColor: '#d3af92',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '45%',
                                height: 140,
                                backgroundColor: '#c7ade2',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginTop: 30
                        }}>
                            <TouchableOpacity style={{
                                width: '40%',
                                height: 140,
                                backgroundColor: '#bcece0',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                width: '40%',
                                height: 140,
                                backgroundColor: '#c7ade2',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 20
                            }}>
                                <Text style={{
                                    textAlign: 'center'
                                }}>
                                    Kho Hàng
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
        </ScrollView>
    )
}

export default DonThuNo