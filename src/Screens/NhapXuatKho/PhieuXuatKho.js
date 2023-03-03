import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    Button,
    Dialog,
    CheckBox,
    ListItem,
    Avatar,
} from '@rneui/themed';

export default function PhieuXuatKho({ navigation }) {

    const [taikhoan, setTaiKhoan] = useState([])

    const [sanphams, setSanPham] = useState([])
    const [khotongs, setKhoTong] = useState([])
    const [sanphamthieu, setSanPhamThieu] = useState([])
    const [sanphamthua, setSanPhamThua] = useState([])
    const [id, setId] = useState()
    const [chitietsanphams, setChiTiet] = useState([])
    const [chitietkhachhangs, setChiTietKhachHang] = useState([])
    const [loading1, setLoading1] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [loading3, setLoading3] = useState(true)
    const [loading4, setLoading4] = useState(true)


    const toggleDialog4 = (id) => {
        console.log(id)
        sanphams.map(sanpham => {
            if (sanpham.id == id) {
                setChiTiet(sanpham.orders)
            }
        })

        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/id/' + 1)
            .then(res => res.json())
            .then(res => setChiTietKhachHang(res))
            .catch(err => console.log(err))

        setVisible4(!visible4);
    };


    const [visible4, setVisible4] = useState(false);

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/thanhtoan/NguoiLam/' + taikhoan)
            .then(res => res.json())
            .then(res => setSanPham(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading1(false)
            })
    }, [taikhoan])


    const [apis, setApi] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setApi(res[0].khohangcanhan))
            .finally(() => {
            })
    }, [taikhoan])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/khotong/')
            .then(res => res.json())
            .then(res => setKhoTong(res))
            .catch(err => console.log(err))
    }, [taikhoan])


    // useEffect(() => {
    //     fetch('http://192.168.1.165:4000' + '/api/users')
    //         .then(res => res.json())
    //         .then(res => res.map(re => {
    //             if (re.email !== taikhoan) {
    //                 return;
    //             }
    //             fetch('http://192.168.1.165:4000' + '/api/khocanhan/user_id/' + re.id)
    //                 .then(res => res.json())
    //                 .then(res => res.map(re => {
    //                     if (re.SoLuong < re.TieuChuan) {
    //                         setSanPhamThieu(prev => [...prev, re])
    //                         return;
    //                     }
    //                 }))
    //             fetch('http://192.168.1.165:4000' + '/api/khocanhan/user_id/' + re.id)
    //                 .then(res => res.json())
    //                 .then(res => res.map(re => {
    //                     if (re.SoLuong > re.TieuChuan) {
    //                         setSanPhamThua(prev => [...prev, re])
    //                     }
    //                 }))
    //                 .catch((err) => console.log(err))
    //                 .finally(() => {
    //                     setLoading2(false)
    //                     setLoading3(false)
    //                 })

    //         }))
    // }, [taikhoan])


    // console.log(sanphamthieu)

    // useEffect(() => {
    //     console.log(id)


    //     fetch('http://192.168.1.165:4000' + '/api/khocanhan/user_id/' + 1)
    //         .then(res => res.json())
    //         .then(res => res.map(re => {
    //             if (re.SoLuong > re.TieuChuan) {
    //                 setSanPhamThua(re)
    //             }
    //         }))
    //         .catch((err) => console.log(err))
    // }, [id])

    const buttons = [
        { id: 0, button: 'SP Đã Làm' },
        { id: 1, button: 'SP Cần Cấp' },
        { id: 2, button: 'SP Cần Trả' },
        { id: 3, button: 'Lịch Sử Xuất Hàng' },

    ]

    const [isloadDaLam, setDaLam] = useState(true)
    const [isloadCanCap, setCanCap] = useState(false)
    const [isloadCanTra, setCanTra] = useState(false)
    const [isloadLichSu, setLichSu] = useState(false)
    const [cliedId, setCliedID] = useState(0);


    const handerChon = (value, id) => {
        setCliedID(id);

        if (value == "SP Đã Làm") {
            setCanCap(false)
            setCanTra(false)
            setDaLam(true)
            setLichSu(false)
        }
        else if (value == "SP Cần Trả") {
            setCanCap(false)
            setCanTra(true)
            setDaLam(false)
            setLichSu(false)

        }
        else if (value == "SP Cần Cấp") {
            setCanCap(true)
            setCanTra(false)
            setDaLam(false)
            setLichSu(false)

        }
        else if (value == "Lịch Sử Xuất Hàng") {
            setCanCap(false)
            setCanTra(false)
            setDaLam(false)
            setLichSu(true)

        }
    }

    const [tests, setTest] = useState("")
    const [lichsuxuathangs, setLichSuXuatHang] = useState([])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsuxuathang/name/' + taikhoan)
            .then(res => res.json())
            .then(res => setLichSuXuatHang(res))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading4(false)
            })
    }, [taikhoan])


    function handerSubmit() {
        fetch('http://192.168.1.165:4000' + '/api/lichsuxuathang/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: taikhoan,
            })
        })
            .then((
                fetch('http://192.168.1.165:4000' + '/api/lichsuxuathang/')
                    .then(res => res.json())
                    .then(res => {
                        let max_val = res.reduce(function (accumulator, element) {
                            return (accumulator.id > element.id) ? accumulator.id : element.id
                        });
                        sanphamthieu.map(sanphamthie => {
                            fetch('http://192.168.1.165:4000' + '/api/xuathang/create/', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    name: taikhoan,
                                    tenhang: sanphamthie.TenHang,
                                    id: max_val + 1,
                                    soluong: sanphamthie.TieuChuan - sanphamthie.SoLuong,
                                    price: sanphamthie.price
                                })
                            })
                        })

                        sanphamthua.map(sanphamthu => {
                            fetch('http://192.168.1.165:4000' + '/api/xuathang/create/', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    name: taikhoan,
                                    tenhang: sanphamthu.TenHang,
                                    id: max_val + 1,
                                    soluong: sanphamthu.TieuChuan - sanphamthu.SoLuong,
                                    price: sanphamthu.price
                                })
                            })
                        })
                    })
            ))
    }

    const [xuathangs, setXuatHang] = useState([])


    const toggleDialog5 = (id) => {
        lichsuxuathangs.map(lichsuxuathang => {
            if (lichsuxuathang.id == id) {
                setXuatHang(lichsuxuathang.xuathang)
            }
        })



        setVisible4(!visible4);
    };



    return (
        <ScrollView style={styles.container}>
            <ScrollView horizontal>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 20,
                    marginBottom: 20
                }}>
                    {buttons.map((button, index) => (
                        <TouchableOpacity
                            key={button.id}
                            style={{

                            }}
                            onPress={() => handerChon(button.button, button.id)}
                        >
                            <Text
                                style={
                                    [
                                        index === cliedId ? styles.buttonAction : styles.butonUn,
                                        // styles.butonUn
                                    ]
                                }
                            >
                                {button.button}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <View>
                {/* Kho Toongr */}
                {isloadDaLam &&
                    <View>
                        {loading1 ? <ActivityIndicator /> :
                            <View>
                                <View>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 20
                                    }}>
                                        Sản Phẩm Đã Đi Làm
                                    </Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 5,
                                    borderWidth: 0.4,
                                    borderColor: 'gray',
                                    paddingVertical: 10
                                }}>
                                    <View style={{
                                        width: '40%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Tên Khách Hàng
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '30%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Đơn Giá
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '30%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Trạng Thái
                                        </Text>
                                    </View>


                                </View>

                                <View style={{

                                    // paddingVertical: 10
                                }}>
                                    {sanphams.map(sanpham => (
                                        <View
                                            key={sanpham.id}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                // borderWidth: 0.4,
                                                // borderColor: 'gray',
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: 1,
                                                paddingVertical: 6

                                            }}>
                                            <View style={{
                                                width: '40%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30
                                                }}>
                                                    {sanpham.KhachHang}
                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '30%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'
                                                }}>
                                                    {sanpham.TongTienSauGiam}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '30%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Button
                                                    title="Xem Chi Tiết"
                                                    onPress={() => toggleDialog4(sanpham.id)}
                                                    buttonStyle={styles.button}
                                                />
                                                <Dialog
                                                    isVisible={visible4}
                                                    onBackdropPress={toggleDialog4}
                                                >
                                                    <Dialog.Title title="Chi Tiết Sản Phẩm" />
                                                    <View>
                                                        <View>
                                                            {chitietkhachhangs.map(chitietkhachhang => (
                                                                <View key={chitietkhachhang.id}>
                                                                    <Text>
                                                                        Khách Hàng:   {chitietkhachhang.KhachHang}
                                                                    </Text>
                                                                    <Text>
                                                                        Người Làm: {chitietkhachhang.NguoiLam}
                                                                    </Text>
                                                                    <Text>
                                                                        Trạng Thái: {chitietkhachhang.TrangThai}
                                                                    </Text>
                                                                    <Text>
                                                                        Điện Thoại: {chitietkhachhang.Phone_Number}
                                                                    </Text>
                                                                    <Text>
                                                                        Địa Chỉ: {chitietkhachhang.Address}
                                                                    </Text>
                                                                </View>
                                                            ))}
                                                        </View>
                                                        <View>
                                                            <View style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-around',
                                                                borderColor: 'gray',
                                                                paddingVertical: 10
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: 17,
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    Tên SP
                                                                </Text>
                                                                <Text style={{
                                                                    fontSize: 17,
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    Đơn Giá
                                                                </Text>
                                                                <Text style={{
                                                                    fontSize: 17,
                                                                    fontWeight: 'bold'
                                                                }}>
                                                                    SL Tồn
                                                                </Text>
                                                            </View>
                                                            {chitietsanphams.map(chitietsanpham => (
                                                                <View key={chitietsanpham.id}>

                                                                    <View style={{

                                                                        // paddingVertical: 10
                                                                    }}>
                                                                        <View style={{
                                                                            flexDirection: 'row',
                                                                            justifyContent: 'space-around',
                                                                            // borderWidth: 0.4,
                                                                            // borderColor: 'gray',
                                                                            borderBottomColor: 'gray',
                                                                            borderBottomWidth: 1,
                                                                            paddingVertical: 6

                                                                        }}>
                                                                            <Text style={{
                                                                                fontSize: 16,
                                                                                lineHeight: 30
                                                                            }}>
                                                                                {chitietsanpham.TenHang}
                                                                            </Text>
                                                                            <Text style={{
                                                                                fontSize: 16,
                                                                                lineHeight: 30
                                                                            }}>
                                                                                {chitietsanpham.price}
                                                                            </Text>
                                                                            <Text style={{
                                                                                fontSize: 16,
                                                                                lineHeight: 30
                                                                            }}>
                                                                                {chitietsanpham.SoLuong}
                                                                            </Text>
                                                                        </View>


                                                                    </View>

                                                                </View>
                                                            ))}
                                                        </View>
                                                    </View>
                                                </Dialog>
                                            </View>

                                        </View>

                                    ))}
                                </View>
                            </View>
                        }
                    </View>
                }


                {/* Kho Ca Nhan */}
                {isloadCanCap &&
                    <>
                        {loading2 ? <ActivityIndicator /> :
                            <View>
                                <View>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 20
                                    }}>
                                        Số Sản Phẩm Cần Cấp
                                    </Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 5,
                                    borderWidth: 0.4,
                                    borderColor: 'gray',
                                    paddingVertical: 10
                                }}>
                                    <View style={{
                                        width: '30%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Tên Sản Phẩm
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '10%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Đơn Giá
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '10%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            SL Còn
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Tiêu Chuẩn
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Trạng Thái
                                        </Text>
                                    </View>
                                </View>

                                <View style={{

                                    // paddingVertical: 10
                                }}>
                                    {sanphamthieu.map(sanpham => (
                                        <View
                                            key={sanpham.id}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                // borderWidth: 0.4,
                                                // borderColor: 'gray',
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: 1,
                                                paddingVertical: 6

                                            }}>
                                            <View style={{
                                                width: '30%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30
                                                }}>
                                                    {sanpham.TenHang}
                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'
                                                }}>
                                                    {sanpham.price}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'

                                                }}>
                                                    {sanpham.SoLuong}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '15%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'

                                                }}>
                                                    {sanpham.TieuChuan}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '15%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                {sanpham.SoLuong < sanpham.TieuChuan ?
                                                    <Text style={{
                                                        fontSize: 16,
                                                        lineHeight: 30,
                                                        textAlign: 'center',
                                                        color: 'green'
                                                    }}>
                                                        Cấp

                                                    </Text>
                                                    :
                                                    <Text style={{
                                                        fontSize: 16,
                                                        lineHeight: 30,
                                                        textAlign: 'center',
                                                        color: 'red'
                                                    }}>
                                                        Thừa

                                                    </Text>
                                                }
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>
                        }
                    </>
                }

                {isloadCanTra &&
                    <>
                        {loading3 ? <ActivityIndicator /> :
                            <View>
                                <View>
                                    <Text style={{
                                        padding: 10,
                                        fontSize: 20
                                    }}>
                                        Số Sản Phẩm Cần Trả
                                    </Text>

                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 5,
                                    borderWidth: 0.4,
                                    borderColor: 'gray',
                                    paddingVertical: 10
                                }}>
                                    <View style={{
                                        width: '30%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Tên Sản Phẩm
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '10%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Đơn Giá
                                        </Text>
                                    </View>
                                    <View style={{
                                        width: '10%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            SL Còn
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Tiêu Chuẩn
                                        </Text>
                                    </View>

                                    <View style={{
                                        width: '15%',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 17,
                                            fontWeight: 'bold'
                                        }}>
                                            Trạng Thái
                                        </Text>
                                    </View>
                                </View>

                                <View style={{

                                    // paddingVertical: 10
                                }}>
                                    {sanphamthua.map(sanpham => (
                                        <View
                                            key={sanpham.id}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                // borderWidth: 0.4,
                                                // borderColor: 'gray',
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: 1,
                                                paddingVertical: 6

                                            }}>
                                            <View style={{
                                                width: '30%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30
                                                }}>
                                                    {sanpham.TenHang}
                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'
                                                }}>
                                                    {sanpham.price}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '10%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'

                                                }}>
                                                    {sanpham.SoLuong}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '15%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text style={{
                                                    fontSize: 16,
                                                    lineHeight: 30,
                                                    textAlign: 'center'

                                                }}>
                                                    {sanpham.TieuChuan}

                                                </Text>
                                            </View>

                                            <View style={{
                                                width: '15%',
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                {sanpham.SoLuong < sanpham.TieuChuan ?
                                                    <Text style={{
                                                        fontSize: 16,
                                                        lineHeight: 30,
                                                        textAlign: 'center',
                                                        color: 'green'
                                                    }}>
                                                        Cấp

                                                    </Text>
                                                    :
                                                    <Text style={{
                                                        fontSize: 16,
                                                        lineHeight: 30,
                                                        textAlign: 'center',
                                                        color: 'red'
                                                    }}>
                                                        Thừa

                                                    </Text>
                                                }
                                            </View>
                                        </View>

                                    ))}
                                </View>
                            </View>
                        }
                    </>
                }

                {isloadLichSu &&
                    <>
                        {loading4 ? <ActivityIndicator /> :
                            <View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginBottom: 5,
                                    borderWidth: 0.4,
                                    borderColor: 'gray',
                                    paddingVertical: 10
                                }}>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold'
                                    }}>
                                        Tên
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold'
                                    }}>
                                        Ngày
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold'
                                    }}>
                                        Trạng Thái
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold'
                                    }}>
                                        Chi Tiết
                                    </Text>
                                </View>
                                {
                                    lichsuxuathangs.map(lichsuxuathang => (
                                        <View key={lichsuxuathang.id} style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                            marginBottom: 5,
                                            borderBottomColor: 'gray',
                                            borderBottomWidth: 0.4,
                                            paddingVertical: 10
                                        }}>
                                            <Text>
                                                {lichsuxuathang.Name}
                                            </Text>
                                            <Text>
                                                {lichsuxuathang.date}
                                            </Text>
                                            {
                                                lichsuxuathang.TrangThai == "Chưa Duyệt" ?
                                                    <Text style={{
                                                        color: 'red',
                                                        opacity: 0.7
                                                    }}>
                                                        {lichsuxuathang.TrangThai}
                                                    </Text>
                                                    :
                                                    <Text style={{
                                                        color: 'green',
                                                        opacity: 0.7
                                                    }}>
                                                        {lichsuxuathang.TrangThai}
                                                    </Text>
                                            }
                                            <Button
                                                title="Chi Tiết"
                                                onPress={() => toggleDialog5(lichsuxuathang.id)}
                                                buttonStyle={styles.button}
                                            />
                                            <Dialog
                                                isVisible={visible4}
                                                onBackdropPress={toggleDialog5}
                                            >
                                                <Dialog.Title title="Chi Tiết Sản Phẩm" />
                                                <View>
                                                    <Text style={{
                                                        fontSize: 16,
                                                        color: 'red',
                                                        opacity: 0.7
                                                    }}>
                                                        Chú Thích:
                                                    </Text>
                                                    <View>
                                                        <Text>
                                                            Dương là số hàng đc Cấp
                                                        </Text>
                                                    </View>
                                                    <View>
                                                        <Text>
                                                            Âm là số hàng phải trả
                                                        </Text>
                                                    </View>
                                                    <View>
                                                        <View style={{
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-around',
                                                            borderColor: 'gray',
                                                            paddingVertical: 10
                                                        }}>
                                                            <Text style={{
                                                                fontSize: 17,
                                                                fontWeight: 'bold'
                                                            }}>
                                                                Tên SP
                                                            </Text>
                                                            <Text style={{
                                                                fontSize: 17,
                                                                fontWeight: 'bold'
                                                            }}>
                                                                Đơn Giá
                                                            </Text>
                                                            <Text style={{
                                                                fontSize: 17,
                                                                fontWeight: 'bold'
                                                            }}>
                                                                SL Tồn
                                                            </Text>
                                                        </View>
                                                        {xuathangs.map(xuathang => (
                                                            <View key={xuathang.id}>

                                                                <View style={{

                                                                    // paddingVertical: 10
                                                                }}>
                                                                    <View style={{
                                                                        flexDirection: 'row',
                                                                        justifyContent: 'space-around',
                                                                        // borderWidth: 0.4,
                                                                        // borderColor: 'gray',
                                                                        borderBottomColor: 'gray',
                                                                        borderBottomWidth: 1,
                                                                        paddingVertical: 6

                                                                    }}>
                                                                        <Text style={{
                                                                            fontSize: 16,
                                                                            lineHeight: 30
                                                                        }}>
                                                                            {xuathang.TenHang}
                                                                        </Text>
                                                                        <Text style={{
                                                                            fontSize: 16,
                                                                            lineHeight: 30
                                                                        }}>
                                                                            {xuathang.price}
                                                                        </Text>
                                                                        <Text style={{
                                                                            fontSize: 16,
                                                                            lineHeight: 30
                                                                        }}>
                                                                            {xuathang.SoLuong}
                                                                        </Text>
                                                                    </View>


                                                                </View>

                                                            </View>
                                                        ))}
                                                    </View>
                                                </View>
                                            </Dialog>
                                        </View>


                                    ))
                                }
                            </View>
                        }
                    </>
                }

                <View style={{
                    marginLeft: 40,
                    marginTop: 20
                }}>
                    <TouchableOpacity style={{
                        borderWidth: 1,
                        borderColor: 'gray',
                        width: 100,
                        padding: 7,
                        backgroundColor: 'green',
                        opacity: 0.7,
                        borderRadius: 4
                    }}
                        onPress={() => handerSubmit()}
                    >
                        <Text style={{
                            textAlign: 'center',
                            color: 'white'
                        }}>
                            Gửi Yêu Cầu
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },

    butonUn: {
        // backgroundColor: 'gray',
        width: 110,
        height: 50,
        // marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#DDDDDD',
        // borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 2.27,
        elevation: 10,
        borderRadius: 100,
        marginLeft: 10

    },
    buttonAction: {
        backgroundColor: '#CC3333',
        width: 120,
        height: 50,
        // marginTop: 20,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // borderRadius: 10,
        color: 'gold',
        fontWeight: 'bold',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 3.27,
        elevation: 10,
        borderRadius: 100,
        marginLeft: 10

    }
});
