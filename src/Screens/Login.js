import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image, Dimensions } from 'react-native';
import React, { useEffect, useState, useCallback, useMemo, useLayoutEffect } from 'react';
// import CheckBox from '@react-native-community/checkbox';
import Checkbox from 'expo-checkbox';

import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ navigation }) {

    const URL_ON = 'http://192.168.0.114:4000'
    const URL1_ON = 'http://192.168.0.114:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isChecked, setChecked] = useState(false);

    const [token, setToKen] = useState("");
    const [logins, setLogin] = useState([]);
    const [taikhoan, setTaiKhoan] = useState([]);
    const [matkhau, setMatKhau] = useState([]);

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: taikhoan
        })
    };

    useLayoutEffect(() => {
        fetch(URL_ON + '/api/users')
            .then(res => res.json())
            .then(res => setLogin(res))
    }, [])

    console.log(logins)

    function handerSubmit() {
        const user = logins.find(user => user.email === taikhoan)
        if (!user) return alert('sai tk hoặc mk');

        fetch(URL1_ON + '/login', options)
            .then(res => res.json())
            .then(res => {
                // console.log(res.accessToken)
                AsyncStorage.setItem('token', res.accessToken);
                AsyncStorage.setItem('taikhoan', taikhoan);

                fetch(URL_ON + '/api/users/update/' + taikhoan, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        Token: res.accessToken,
                        refreshToken: res.refreshToken
                    })
                })
            })
            .catch((err) => console.log(err))
            .finally(() => {
                navigation.replace('Home');
                return;
            }
            )
        // .catch(err => console.log(err))
    }

    // function handerSubmit() {
    //     navigation.replace('Home');
    // }

    // console.log(logins)

    return (
        <View style={styles.container}>
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
                                    bottom: 125,
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
                                    height: 250,
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
                                                onChangeText={e => setTaiKhoan(e)}
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
                                                    onChangeText={e => setMatKhau(e)}
                                                />
                                                <MaterialIcons
                                                    name="menu"
                                                    size={28}
                                                    color="black"
                                                    style={{
                                                        position: 'absolute',
                                                        right: -10,
                                                        top: -5,
                                                        opacity: 0.3
                                                    }}
                                                />
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
                                                <Checkbox />
                                                <Text style={{
                                                    color: '#5d92f5',
                                                    marginLeft: 5,
                                                    marginTop: 3,
                                                    fontWeight: 'bold'

                                                }}>
                                                    Ghi Nhớ
                                                </Text>
                                            </View>
                                            <Text style={{
                                                color: '#5d92f5',
                                                fontWeight: 'bold'
                                            }}>
                                                Quên Mật Khẩu
                                            </Text>
                                        </View>

                                        <View style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            marginTop: 50
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
                                                    Đăng Nhập
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>



                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>


            <View style={{
                position: 'absolute',
                // zIndex: 0,
                textAlign: 'center',
                alignItems: 'center',
                top: 40,
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
                        zIndex: -1,
                    }}
                    source={
                        require('../../assets/logo.jpg')
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
                    LỌC NƯỚC 365
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        width: Dimensions.get('window').width,
        // backgroundColor: '#6699FF',
        // color: 'white'
    },
});
