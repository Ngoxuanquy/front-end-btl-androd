import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

function QuenMatKhau() {

    const [apis, setApis] = useState([])
    const [email, setEmail] = useState('')
    const [logins, setLogin] = useState([]);
    const [pass, setPass] = useState('')

    const URL_ON = 'http://192.168.0.106:4000'
    const URL1_ON = 'http://192.168.0.106:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    useEffect(() => {
        fetch(URL_FPT + '/api/users')
            .then(res => res.json())
            .then(res => setLogin(res))
    }, [])

    function handerSubmit() {
        logins.map(login => {
            if (login.email == email) {
                setPass(login.pass)
            }
            else {
                alert('Gmail Không Tồn Tại!!');
            }
        })
    }


    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1
        }}>
            <Text style={{
                fontSize: 25,
            }}>
                Quên Mật Khẩu
            </Text>
            <View>
                <View >
                    <Text style={{
                    }}>
                        Email
                    </Text>
                    <TextInput
                        style={{
                            width: 300,
                            height: 30,
                            borderColor: 'black',
                            borderWidth: 0.4
                        }}
                        onChangeText={(e) => setEmail(e)}
                    />
                    {pass &&
                        <View style={{
                            marginTop: 10
                        }}>
                            <Text>
                                Mật Khẩu Là:  {pass}
                            </Text>
                        </View>
                    }
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 40
                    }}>
                        <TouchableOpacity style={{
                            width: 80,
                            height: 40,
                            borderWidth: 1,
                            borderColor: 'gray',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={() => handerSubmit()}
                        >
                            <Text style={{
                                textAlign: 'center'
                            }}>
                                Xác Nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View >
    )
}


export default QuenMatKhau