import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import React, { useEffect, useState, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ChiSoCaNhan({ navigation }) {

    const luong = useRef();

    function handlePress(event) {
        console.log(event.target.value);
    }

    const [apis, setAPi] = useState([])
    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    useEffect(() => {
        fetch('http://192.168.0.112:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setAPi(res))
            .catch((err) => console.log(err))
    }, [taikhoan])

    const [luongtamtinhs, setLuongTamTinh] = useState()

    useEffect(() => {
        fetch('http://192.168.0.112:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setLuongTamTinh(res[0].gia_tri_TB_hien_tai))
            .catch((err) => console.log(err))
    }, [taikhoan])


    const textRef = useRef(null);


    function handerSubmit() {
        if (luongtamtinhs > 2000 && luongtamtinhs < 3000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 20000
                })
            })
        }
        else if (luongtamtinhs > 1000 && luongtamtinhs < 2000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 10000
                })
            })
        }
        else if (luongtamtinhs >= 3000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 30000
                })
            })
        }
    }

    useEffect(() => {
        if (luongtamtinhs > 2000 && luongtamtinhs < 3000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 20000
                })
            })
        }
        else if (luongtamtinhs > 1000 && luongtamtinhs < 2000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 10000
                })
            })
        }
        else if (luongtamtinhs >= 3000) {
            fetch('http://192.168.0.112:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 30000
                })
            })
        }
    }, [luongtamtinhs])

    return (
        <View >
            <View>
                <View>
                    <TouchableOpacity onPress={handlePress}>
                        <Text ref={textRef}>This is my text</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {apis.map(api => (
                        <View key={
                            api.id
                        }
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <View style={{
                                flexDirection: 'row'
                            }}>

                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Bậc Hiện Tại
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.gia_tri_TB_hien_tai > 3630 ?
                                        <Text style={{
                                            color: 'red'
                                        }}>
                                            Bậc 2
                                        </Text>
                                        :
                                        <Text style={{
                                            color: 'red'
                                        }}>
                                            Bậc 1
                                        </Text>

                                    }
                                </Text>
                            </View>

                            <View style={{
                                flexDirection: 'row'
                            }}>

                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 250
                                }}>
                                    Lương Tạm Tính
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }}
                                    onPress={handlePress}
                                >
                                    {api.gia_tri_TB_hien_tai > 3630 ?
                                        <Text style={{
                                            color: 'red',
                                            fontSize: 16
                                        }}
                                            onTextLayout={(e) => console.log(e.target.value)}
                                        >
                                            2.000.000đ
                                        </Text>
                                        :
                                        <Text style={{
                                            color: 'red',
                                            fontSize: 16
                                        }}

                                        >
                                            1.000.000đ
                                        </Text>

                                    }
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Ngày Công
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.ngay_cong}

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Chiết Khấu Thay Lõi
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.chiet_khau_thay_loi}

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Số đơn phát sinh
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.so_don_phat_sinh}

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Giá Trị Tb hiện tại
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.gia_tri_TB_hien_tai}

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Giá Trị Tb Yêu Cầu
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.gia_tri_TB_yeu_cau}

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 250
                                }}>
                                    Giá Trị trung bình còn thiếu
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.gia_tri_TB_yeu_cau - api.gia_tri_TB_hien_tai > 0 ?
                                        api.gia_tri_TB_yeu_cau - api.gia_tri_TB_hien_tai
                                        :
                                        <Text style={{
                                            fontSize: 16,
                                            textAlign: 'center',
                                            color: 'red'
                                        }}>
                                            Vượt Chỉ Tiêu
                                        </Text>
                                    }

                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Đơn vệ sinh
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.so_don_ve_sinh}


                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Tỉ lệ vệ sinh TT
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.ti_le_ve_sinh_TT}


                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    OLE
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.OLE}


                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Số Km Tb đơn
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.so_KM_TB_don}


                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row'
                            }}>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                    width: 300
                                }}>
                                    Số thời gian trung bình
                                </Text>
                                <Text style={{
                                    lineHeight: 30,
                                    fontSize: 20,
                                }} >
                                    {api.time_TB}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 30
                }}>
                    <TouchableOpacity style={{
                        width: 100,
                        backgroundColor: 'green',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 7
                    }}
                        onPress={() => handerSubmit()}
                    >
                        <Text style={{
                            fontSize: 20,
                            color: 'white',
                            textAlign: 'center'
                        }}>
                            Xác Nhận
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
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
