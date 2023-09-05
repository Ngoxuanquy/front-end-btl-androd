import {
    StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView,
    ActivityIndicator,
    TouchableWithoutFeedback, Keyboard, Image, Dimensions
} from 'react-native';
import React, { useEffect, useState, useLayoutEffect } from 'react';
import Checkbox from 'expo-checkbox';

import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import { Entypo } from '@expo/vector-icons';
import Config from 'react-native-config';

import { API_KEY, URL_KEY } from "@env"
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import Modal from 'react-native-modal';

export default function DangKY({ navigation }) {

    const [isChecked, setChecked] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    function handerSubmit() {

        setIsLoading(true)

        if (asy_matkhau == '' || re_matkhau == '' || asy_taikhoan == '') {
            alert('Nhập đầy đủ thông tin!!')
        }
        else if (asy_matkhau == re_matkhau) {
            Call_Post_Api(
                {
                    email: asy_taikhoan,
                    password: asy_matkhau
                },
                null, null,
                '/shop/signup'
            )
                .then((responseData) => {
                    // Handle the fetched data here
                    console.log(responseData);
                    if (responseData.metadata.status === "success") {
                        setIsLoading(false)
                        alert('Đăng ký thành công !!!')
                        navigation.replace('Login')
                    }
                    else if (responseData.metadata.status === "error") {
                        alert("Tài Khoản Đã Tồn tại !!");
                        setIsLoading(false)

                    }
                })
                .catch((error) => {
                    // Handle any errors that occurred during the fetch
                    console.error(error);
                });
            console.log('alc')
        }
        else {
            return alert('Mật khẩu không trùng nhau')
        }


        // navigation.replace('Login')

    }

    const [asy_taikhoan, setAsyTaiKhoan] = useState('');
    const [asy_matkhau, setAsyMatKhau] = useState('');
    const [re_matkhau, setReMatKhau] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(true)


    return (
        <View style={styles.container}>

            {isLoading && (
                <Modal isVisible={isModalVisible} backdropOpacity={0.5}>
                    <View style={styles.modal}>
                        <ActivityIndicator />
                    </View>
                </Modal>
            )}

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}

            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{
                        // position: 'absolute',
                        zIndex: 100,
                        textAlign: 'center',
                        alignItems: 'center'
                    }}>

                        <View>
                            <View style={{
                                backgroundColor: '#2869db',
                                flex: 1,
                                width: Dimensions.get('window').width,

                            }}>

                            </View>
                            <View style={{
                                width: 350,
                                height: 350,
                                backgroundColor: '#2869bd',
                                position: 'absolute',
                                borderRadius: 100,
                                right: -210,
                                top: -130,
                                transform: [{ rotate: "110deg" }],
                                opacity: 25,
                                shadowColor: "#111",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.38,
                                shadowRadius: 16.00,

                                elevation: 24,
                            }}>

                            </View>
                            <View style={{
                                width: 300,
                                height: 300,
                                backgroundColor: '#5d92f5',
                                position: 'absolute',
                                borderRadius: 100,
                                right: -200,
                                top: -110,
                                transform: [{ rotate: "110deg" }],
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 12,
                                },
                                shadowOpacity: 0.58,
                                shadowRadius: 16.00,

                                elevation: 24,

                            }}>

                            </View>

                            <View style={{
                                width: 300,
                                height: 300,
                                backgroundColor: '#5d92f5',
                                position: 'absolute',
                                borderRadius: 100,
                                left: -260,
                                top: 10,
                                transform: [{ rotate: "300deg" }],
                                shadowColor: "#333",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.88,
                                shadowRadius: 16.00,

                                elevation: 24,

                            }}>

                            </View>
                            <View style={{
                                zIndex: 3,
                                position: 'absolute',
                                bottom: 0
                            }}>
                                <View style={{
                                    width: Dimensions.get('window').width,
                                    // height: Dimensions.get('window').height,
                                    height: 300,
                                    backgroundColor: '#fff',
                                    position: 'absolute',
                                    borderRadius: 90,
                                    left: 0,
                                    bottom: 215,
                                    transform: [{ rotate: "205deg" }],
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 10,
                                    },
                                    shadowOpacity: 0.38,
                                    shadowRadius: 16.00,

                                    elevation: 10,
                                    zIndex: 2

                                }}>

                                </View>

                                <View style={{
                                    width: Dimensions.get('window').width,
                                    // height: Dimensions.get('window').height,
                                    height: 350,
                                    backgroundColor: '#fff',
                                    position: 'absolute',
                                    // borderRadius: 100,
                                    // left: -260,
                                    bottom: 0,
                                    zIndex: 2

                                    // transform: [{ rotate: "140deg" }],
                                }}>
                                    <View style={{
                                        marginTop: -50,
                                        marginRight: 50,
                                        marginLeft: 50
                                    }}>
                                        <View style={{

                                        }}>
                                            <MaterialIcons
                                                name="people"
                                                size={28}
                                                color="black"
                                                style={{
                                                    position: 'absolute',
                                                    left: -20,
                                                    top: -5,
                                                    opacity: 0.3
                                                }}
                                            />

                                            <TextInput style={{
                                                borderBottomColor: 'black',
                                                borderBottomWidth: 1,
                                                paddingLeft: 20,
                                                fontSize: 20
                                            }}
                                                onChangeText={e => setAsyTaiKhoan(e)}
                                            />

                                            <MaterialIcons
                                                name="check"
                                                size={28}
                                                color="black"
                                                style={{
                                                    position: 'absolute',
                                                    right: -10,
                                                    top: 0,
                                                    opacity: 0.3
                                                }}
                                            />
                                        </View>

                                        <View style={{
                                            marginTop: 60,
                                        }}>
                                            <View style={{
                                                zIndex: 100
                                            }}>
                                                <MaterialIcons
                                                    name="lock"
                                                    size={28}
                                                    color="black"
                                                    style={{
                                                        position: 'absolute',
                                                        left: -20,
                                                        top: -5,
                                                        opacity: 0.3,
                                                    }}
                                                />

                                                <TextInput style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                    paddingLeft: 20,
                                                    fontSize: 20
                                                }}
                                                    onChangeText={e => setAsyMatKhau(e)}
                                                />
                                                <Entypo name="eye-with-line" size={24} color="black" style={{
                                                    position: 'absolute',
                                                    right: -10,
                                                    top: -5,
                                                    opacity: 0.3
                                                }} />
                                            </View>
                                        </View>

                                        <View style={{
                                            marginTop: 60,
                                        }}>
                                            <View style={{
                                                zIndex: 100
                                            }}>
                                                <MaterialIcons
                                                    name="lock"
                                                    size={28}
                                                    color="black"
                                                    style={{
                                                        position: 'absolute',
                                                        left: -20,
                                                        top: -5,
                                                        opacity: 0.3,
                                                    }}
                                                />

                                                <TextInput style={{
                                                    borderBottomColor: 'black',
                                                    borderBottomWidth: 1,
                                                    paddingLeft: 20,
                                                    fontSize: 20
                                                }}
                                                    onChangeText={e => setReMatKhau(e)}
                                                />
                                                <Entypo name="eye-with-line" size={24} color="black" style={{
                                                    position: 'absolute',
                                                    right: -10,
                                                    top: -5,
                                                    opacity: 0.3
                                                }} />
                                            </View>
                                        </View>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            marginTop: 20,

                                        }}>
                                            <View style={{
                                                flexDirection: 'row'
                                            }}>
                                                <Checkbox
                                                    value={isChecked}
                                                    onValueChange={setChecked}
                                                    color={isChecked ? '#4630EB' : undefined}
                                                />
                                                <TouchableOpacity
                                                    onPress={() => setChecked(!isChecked)}
                                                >
                                                    <Text style={{
                                                        color: '#5d92f5',
                                                        marginLeft: 5,
                                                        marginTop: 3,
                                                        fontWeight: 'bold'

                                                    }}>
                                                        Ghi Nhớ
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                onPress={() => navigation.navigate('QuenMatKhau')}
                                            >
                                                <Text style={{
                                                    color: '#5d92f5',
                                                    fontWeight: 'bold'
                                                }}>
                                                    Quên Mật Khẩu
                                                </Text>
                                            </TouchableOpacity>
                                        </View>

                                        <View style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            marginTop: 10
                                        }}>
                                            <Text>
                                                Bạn đã có tài khoản
                                            </Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                                <Text style={{
                                                    marginLeft: 5,
                                                    color: 'blue'
                                                }}>
                                                    Đăng Nhập

                                                </Text>
                                            </TouchableOpacity>

                                        </View>
                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 40
                                        }}>
                                            <TouchableOpacity style={{
                                                width: 200,
                                                height: 40,
                                                backgroundColor: '#2869bd',
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 20
                                            }}
                                                onPress={() => handerSubmit()}

                                            >
                                                <Text style={{
                                                    textAlign: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    fontSize: 20,

                                                }}>
                                                    Đăng Ký
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={{
                            position: 'absolute',
                            // zIndex: 0,
                            textAlign: 'center',
                            alignItems: 'center',
                            top: 100,
                            // zIndex: 1
                        }}>
                            <Image
                                style={{
                                    height: 100,
                                    width: 100,
                                    borderRadius: 85,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign: 'center',
                                    zIndex: -100,
                                }}
                                source={
                                    {
                                        uri: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/275549265_119316327349050_7133039339301134607_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Ao4SUEFu0fUAX__KvG7&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBYEG5xu-FEJVTZzNF6tlO6hCYUk-igLzyeiE6Pg7sLbQ&oe=64F04414"
                                    }
                                }
                            />

                            <Text style={{
                                fontSize: 30,
                                color: '#fff',
                                fontWeight: 'bold',
                                marginTop: 10,
                                letterSpacing: 4,
                                zIndex: -1
                            }}>
                                Stantio Shop
                            </Text>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>



        </View>
    )

}

const styles = StyleSheet.create({})