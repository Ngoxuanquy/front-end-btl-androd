import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';

// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function ChiTiet({ route, navigation }) {

    const { name, id } = route.params;

    console.log(id)

    const [isLoad, setIsLoad] = useState(false)
    const [apis, setApi] = useState([])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/id/' + id)
            .then(res => res.json())
            .then(res => setApi(res))
            .catch(err => console.log(err))
            .finally(() => {
            })
    }, [id])

    console.log(apis)


    return (
        <KeyboardAvoidingView style={{
            backgroundColor: '#fff',
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
                    backgroundColor: '#a8e3e3',
                }}>
                    <View style={{
                        marginRight: 10,
                        marginLeft: 10,
                        borderColor: 'black',
                        borderWidth: 0.3,
                        marginTop: 20,
                        borderRadius: 10,
                        backgroundColor: '#fff',
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
                                marginLeft: -20
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
                                    <Ionicons name="ios-people-sharp" size={24} color="black" />
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 33,
                                        marginLeft: 10
                                    }}>
                                        Mã Đơn Hàng: {api.code_bill}
                                    </Text>
                                </View>

                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Ionicons name="ios-people-sharp" size={24} color="black" />
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 33,
                                        marginLeft: 10
                                    }}>
                                        Tên Khách Hàng: {api.KhachHang}
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row'
                                }}>
                                    <Entypo name="address" size={24} color="black" />
                                    <Text style={{
                                        fontSize: 18,
                                        marginLeft: 10
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
                                borderColor: 'black',
                                borderWidth: 0.4,
                                width: 160,
                                padding: 8,
                                borderRadius: 10,
                                backgroundColor: '#F5F5F5'

                            }}
                                onPress={() => navigation.replace('Map')}
                            >
                                <Text style={{
                                    fontSize: 18,
                                    textAlign: 'center'
                                }}>
                                    Google Map
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    {apis.map(api => (
                        <View
                            key={api.id}
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
                                backgroundColor: '#fff',
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
                                        marginLeft: 20

                                    }}>
                                        Tên Khách Hàng: {api.KhachHang}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20

                                    }}>
                                        Số Điện Thoại: {api.Phone_Number}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20,
                                        marginRight: 20

                                    }}>
                                        Địa Chỉ: {api.Address}
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20

                                    }}>
                                        Giờ Hẹn Khách: 12h15 - 13/6/2022
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20
                                    }}>
                                        Giờ Bắt Đầu: 13h - 18/12/2002
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20


                                    }}>
                                        Giờ Kết Thúc: 15h - 18/12/2002
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20

                                    }}>
                                        Khoảng Cách: 12km
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20

                                    }}>
                                        Thời Gian Di Chuyển: 30p
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 35,
                                        marginLeft: 20

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
                            padding: 10
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
                            <Ionicons name="ios-people-circle-outline" size={34} color="black" />
                            <TextInput
                                style={{
                                    width: '100%',
                                    height: 30,
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 1,
                                    width: 250,
                                    borderRadius: 6,
                                    paddingLeft: 10,
                                    paddingRight: 10

                                }}
                                placeholder="Viết Bình Luận..."
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

                            }}>

                                <Text style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    Gửi
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            padding: 10
                        }}>
                            <Ionicons name="ios-people-circle-outline" size={34} color="black" />

                            <View style={{
                                marginLeft: 20
                            }}>
                                <Text>
                                    Ngô Xuân Quy

                                </Text>
                                <Text>
                                    Sản Phẩm Tốt Quá
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 12,
                                    opacity: 0.5
                                }}>
                                    15h20
                                </Text>
                            </View>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            // justifyContent: 'space-between',
                            padding: 10
                        }}>
                            <Ionicons name="ios-people-circle-outline" size={34} color="black" />

                            <View style={{
                                marginLeft: 20
                            }}>
                                <Text>
                                    Ngô Xuân Quy

                                </Text>
                                <Text>
                                    Sản Phẩm Tốt Quá
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 12,
                                    opacity: 0.5
                                }}>
                                    15h20
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>



                {/* //img */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    marginTop: 10,

                }}>
                    <TouchableOpacity
                        onPress={() => setIsLoad(true)}
                        style={{
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 7.27,

                            elevation: 10,
                        }}
                    >
                        <Image
                            style={{
                                width: 170,
                                height: 200,
                                borderRadius: 6
                            }}
                            source={{
                                uri: 'https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg'
                            }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setIsLoad(true)}
                        style={{
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 7.27,

                            elevation: 10,
                        }}
                    >
                        <Image
                            style={{
                                width: 170,
                                height: 200,
                                borderRadius: 6,


                            }}
                            source={{
                                uri: 'https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg'
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setIsLoad(true)}
                        style={{
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 7.27,

                            elevation: 10,
                        }}
                    >
                        <Image
                            style={{
                                width: 170,
                                height: 200,
                                marginTop: 10,
                                borderRadius: 6

                            }}
                            source={{
                                uri: 'https://giadinh.mediacdn.vn/296230595582509056/2022/2/17/27212817110061775266623491256080737665900375n-16450863187391857196552.jpg'
                            }}
                        />
                    </TouchableOpacity>
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
