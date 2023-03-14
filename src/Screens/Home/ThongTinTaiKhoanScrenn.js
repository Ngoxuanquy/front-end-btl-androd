import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button, ScrollView, RefreshControl } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import UpAnh from '../../Components/UpAnh';
import React, { useEffect, useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';
import { LinearGradient } from 'expo-linear-gradient';
import Upload from '../../Components/Upload';

export default function ThongTinTaiKhoan() {

    const theme = useContext(ThemeConText)
    const [isload, setIsLoad] = useState(false)
    const [image, setImage] = useState(null)
    const [isUpAnh, setUpAnh] = useState(false)
    const [taikhoan, setTaiKhoan] = useState([])
    const [thongtin, setThongTin] = useState([])


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

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setThongTin(res))
    }, [taikhoan])


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
                .then(res => res.json())
                .then(res => setThongTin(res))
            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);


    return (
        <View
            style={[
                {
                    flex: 1
                }
                , {
                    backgroundColor: theme.maunen,
                    zIndex: 100
                }]}
        >
            <View style={{

            }}>
                <View>
                    <View >
                        <LinearGradient
                            // Background Linear Gradient
                            start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
                            colors={['#fff', '#8ed4d1', '#3ddbb5', '#17e3b2']}
                            style={{
                                width: "100%",
                                height: 220,
                                borderBottomLeftRadius: 20,
                                borderBottomRightRadius: 20,
                                position: 'absolute'
                            }}
                        >
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 50

                            }}>
                                <Ionicons name="ios-return-up-back" size={27} color="white" style={{
                                    color: theme.color,
                                    marginTop: 5,
                                }} />
                                <Text style={{
                                    fontSize: 28,
                                    // color: 'white',
                                    textAlign: 'center',
                                    marginTop: 5,
                                    color: theme.color
                                }}>
                                    Tài Khoản
                                </Text>
                                <Ionicons name="notifications-outline" size={27} color="white" style={{
                                    marginTop: 7,
                                    color: theme.color

                                }} />
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                            tintColor: 'black',
                            backgroundColor: '#8ed4d1',
                            size: 10,
                            marginBottom: 0,
                        }} />
                    }
                >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 140,
                        borderRadius: 20,
                        zIndex: 1

                    }}>
                        <View style={[
                            {
                                width: '90%',
                                borderRadius: 20,

                            }
                            , {
                                backgroundColor: theme.background
                            }]}>
                            {thongtin.map(thong => (
                                <View
                                    key={thong.id}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 30
                                    }}>

                                    <TouchableOpacity
                                        key={thong.id}
                                        onPress={() => handerUpAnh()}
                                    >
                                        {thong.img == "" ?
                                            <Image
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    borderRadius: 10,
                                                }}
                                                source={{
                                                    uri: "https://haycafe.vn/wp-content/uploads/2022/02/Avatar-trang.jpg"
                                                }}
                                            /> :
                                            <Image
                                                style={{
                                                    width: 120,
                                                    height: 120,
                                                    borderRadius: 10,
                                                }}
                                                source={{
                                                    uri: thong.img
                                                }}
                                            />
                                        }

                                    </TouchableOpacity>

                                    <View style={{

                                    }}>
                                        <Text
                                            style={[
                                                {
                                                    fontSize: 22,
                                                    fontWeight: 'bold',
                                                    textAlign: 'center',
                                                    marginTop: 10
                                                }
                                                , {
                                                    color: theme.color
                                                }]}
                                        >
                                            {thong.email}
                                        </Text>
                                        <Text
                                            style={[
                                                {
                                                    fontSize: 18,
                                                    textAlign: 'center',
                                                    lineHeight: 70
                                                }
                                                , {
                                                    color: theme.color
                                                }]}
                                        >
                                            Số Điện Thoại: 0589401978
                                        </Text>
                                        <Text style={[
                                            {
                                                fontSize: 18,
                                                textAlign: 'center',
                                                lineHeight: 30,
                                                marginBottom: 30
                                            }
                                            , {
                                                color: theme.color
                                            }]}>
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
                                                {image && <Image source={{ uri: image }} />}
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
                                        alignItems: 'center',
                                        marginBottom: 30
                                    }}
                                        onPress={() => { setIsLoad(true) }}
                                    >

                                        <AntDesign name="mail" size={124} style={[
                                            {

                                            }
                                            , {
                                                color: theme.color
                                            }]} />
                                        <Text
                                            style={[
                                                {
                                                    fontSize: 18,
                                                    textAlign: 'center'
                                                }
                                                , {
                                                    color: theme.color
                                                }]}
                                        >
                                            (Tệp Đính Kèm)
                                        </Text>
                                    </TouchableOpacity>

                                </View>
                            ))}
                        </View>
                    </View>

                </ScrollView>
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
