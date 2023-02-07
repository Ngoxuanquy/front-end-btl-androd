import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import UpAnh from '../Components/UpAnh';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker'


export default function ThongTinTaiKhoan() {

    const [isload, setIsLoad] = useState(false)
    const [image, setImage] = useState(null)
    const [isUpAnh, setUpAnh] = useState(false)

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


    function handerCance() {
        setIsLoad(false)
    }

    return (
        <View >
            <View>
                <View>
                    <View style={{
                        backgroundColor: '#0097d9',
                        height: 90,
                        justifyContent: 'center',
                        borderBottomRightRadius: 50,
                        borderBottomLeftRadius: 50,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'

                        }}>
                            <Ionicons name="ios-return-up-back" size={27} color="white" style={{
                                marginTop: 5
                            }} />
                            <Text style={{
                                fontSize: 28,
                                color: 'white',
                                textAlign: 'center',
                                marginTop: 5
                            }}>
                                Tài Khoản
                            </Text>
                            <Ionicons name="notifications-outline" size={27} color="white" style={{
                                marginTop: 7
                            }} />
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 20
                        }}
                        source={
                            {
                                uri: 'https://image-us.24h.com.vn/upload/4-2019/images/2019-12-17/1576580871-929bdf4f16b86295376a79e7a8a0b7fe.jpg'
                            }
                        }
                    />

                    <View>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 10
                        }}>
                            Ngô Xuân Quy
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            opacity: 0.6,
                            lineHeight: 70
                        }}>
                            Số Điện Thoại: 0589401978
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            opacity: 0.6,
                        }} >
                            Địa Chỉ: Cửa Lò, Nghệ An
                        </Text>
                    </View>

                    {isload &&
                        <View style={{
                            backgroundColor: 'white',
                            position: 'absolute',
                            width: '100%',
                            bottom: 0,
                            zIndex: 1
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
                            <View style={{
                                alignItems: 'center', justifyContent: 'center',
                                backgroundColor: 'white',
                                paddingVertical: 2,
                                marginTop: 3,
                                borderTopWidth: 0.5
                            }}>
                                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
                                <Button title="Xác Nhận" onPress={() => handerXacNhan()} style={{

                                }} />
                            </View>
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

                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                        onPress={() => { setIsLoad(true) }}
                    >

                        <AntDesign name="mail" size={124} color="black" />
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center'
                        }}>
                            (Tệp Đính Kèm)
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
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
