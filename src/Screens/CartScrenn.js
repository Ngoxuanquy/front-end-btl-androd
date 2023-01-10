import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, Image, Dimensions } from 'react-native';

import React, {
    useEffect, useState
} from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Cart({ navigation }) {

    const [isload, setIsLoad] = useState(false)

    function handerNhanDon() {
        alert('Nhán Đơn Thành Công');
        setIsLoad(true)
    }

    return (
        <ScrollView >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                // marginTop: 50,
                marginBottom: 20,
                height: 160,
                backgroundColor: '#FF6666',
                // textAlign: 'center',
                borderBottomLeftRadius: 70,
                borderBottomRightRadius: 70,
                position: 'relative'

            }}>
                <View style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    // height: 300


                }}>
                    <View style={{
                        // position: 'relative'

                    }}>
                        {/* <TouchableOpacity>
                        <Text style={{
                            fontSize: 18
                        }}>
                            Back
                        </Text>
                    </TouchableOpacity> */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginLeft: -30
                        }}>
                            <TouchableOpacity style={{
                            }}>
                                <Ionicons name='menu' style={{
                                    fontSize: 30,
                                    color: 'white',
                                    // marginTop: -100

                                }} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{

                            }}>
                                <Ionicons name='notifications-outline' style={{
                                    fontSize: 30,
                                    color: 'white',
                                    // marginTop: -100,
                                    marginRight: -30


                                }} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{
                            alignItems: 'center',
                            marginTop: 20,

                        }}>
                            <Text style={{
                                fontSize: 25,
                                color: 'white'
                            }}>
                                Danh Sách Đơn Hàng
                            </Text>
                        </TouchableOpacity>
                        <Image
                            style={{
                                width: 50, height: 50,
                                position: 'absolute',
                                marginTop: 80,
                                marginLeft: Dimensions.get('window').width - 150

                            }}
                            source={{
                                uri: 'https://cdn.pixabay.com/photo/2015/12/11/06/37/santa-hat-1087709_960_720.png'
                            }}
                        />
                    </View>
                </View>
            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderColor: 'black',
                borderWidth: 1,
                paddingVertical: 10,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                backgroundColor: '#CCCCCC',
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 2.27,

                elevation: 10,
            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',


                }}>
                    <TouchableOpacity style={{
                        borderColor: 'black',

                    }}>
                        <Text style={{
                            color: 'black'
                        }} >
                            Tổng Đơn
                        </Text>
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            10
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>
                            Đi Được
                        </Text>
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            10
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>
                            Hủy
                        </Text>
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            10
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity>
                        <Text>
                            Sai Máy
                        </Text>
                        <Text style={{
                            textAlign: 'center'
                        }}>
                            10
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <Text style={{
                    fontSize: 18,
                    color: 'gray',
                    padding: 10
                }}>
                    Đơn Đang Thực Hiện
                </Text>
            </View>
            <View style={{
                borderColor: 'black',
                borderWidth: 0.4,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10,
                borderRadius: 10,
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
                elevation: 10,

            }}>
                <View style={{
                    justifyContent: 'center',
                    // alignItems: 'center',
                    paddingHorizontal: 20,
                    marginBottom: 20,


                }}>
                    <TouchableOpacity style={{

                    }}>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Mã Đơn: abc
                        </Text>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Tên Khóa: Ngô Xuân Quy
                        </Text>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Địa Chỉ: Hà Nội
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 10
                    }}>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: '#DCDCDC',
                            borderRadius: 6

                        }}
                            onPress={() => navigation.navigate('ThanhToan')}

                        >
                            <Text style={{
                                color: 'black'
                            }}>
                                Thanh Toán
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: '#DCDCDC',
                            borderRadius: 6

                        }}
                            onPress={() => navigation.navigate('Chup')}
                        >
                            <Text style={{
                                color: 'black'
                            }}>
                                Chụp Ảnh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: '#DCDCDC',
                            borderRadius: 6


                        }}
                            onPress={() => navigation.navigate("ChiTiet")}
                        >
                            <Text style={{
                                color: 'black'
                            }}>
                                Chi Tiết
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Đơn Chưa Xác Thực */}
            <View>
                <Text style={{
                    fontSize: 18,
                    padding: 10,
                    color: 'coral'
                }}>
                    Đơn Chưa Xác Thực
                </Text>
            </View>
            <View style={{
                borderColor: 'black',
                borderWidth: 1,
                marginTop: 10,
                marginLeft: 10,
                marginRight: 10
            }}>
                <View style={{
                    justifyContent: 'center',
                    // alignItems: 'center',
                    paddingHorizontal: 20,
                    marginBottom: 20

                }}>
                    <TouchableOpacity style={{

                    }}>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Mã Đơn: abc
                        </Text>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Tên Khóa: Ngô Xuân Quy
                        </Text>
                        <Text style={{
                            lineHeight: 30
                        }}>
                            Địa Chỉ: Hà Nội
                        </Text>
                    </TouchableOpacity>
                </View>
                {isload == false ?
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginBottom: 10
                        }}>
                            <TouchableOpacity style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                padding: 10,
                                backgroundColor: 'coral',
                                borderRadius: 6
                            }}
                                onPress={() => handerNhanDon()}
                            >
                                <Text style={{
                                    color: 'white'
                                }}>
                                    Nhận Đơn
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                borderColor: 'black',
                                borderWidth: 1,
                                padding: 10,
                                backgroundColor: '#FF9999',
                                borderRadius: 6

                            }}>
                                <Text style={{
                                    color: 'white'
                                }}>
                                    Từ Chối
                                </Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    : null}
                {isload == true ? <View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginBottom: 10
                    }}>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'gray'

                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Thanh Toán
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'gray'

                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Chụp Ảnh
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'gray'

                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Chi Tiết
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View> : null}
            </View>


        </ScrollView>
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
