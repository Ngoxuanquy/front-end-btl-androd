import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import * as Notifications from 'expo-notifications';
import ThemeConText from '../../../config/themeConText';


export default function PhieuMuonHang({ navigation }) {

    const theme = useContext(ThemeConText)

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [isload, setIsload] = useState(false)

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Cường', value: 'cuong' },
        { label: 'Quy', value: 'quy' }
    ]);

    const [value1, setValue1] = useState(null);
    const [apis, setApi] = useState([])
    const [ids, setId] = useState('')
    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    const [id_donhang, setID_DonHang] = useState('')

    const [id_users, setId_users] = useState('')
    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    AsyncStorage.getItem('id_users')
        .then(res =>
            setId_users(res)
        )


    const [inventorys, setInventory] = useState([])
    const [produces, setProduce] = useState([]);




    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + value)
            .then(res => res.json())
            .then(res => setId(res[0]?.id))
            .catch((err) => console.log(err))
    }, [value])



    const [sanPhams, setSanPham] = useState([]);

    useEffect(() => {
        let arr = items.filter(function (e) {
            return e.value != taikhoan
        });
        setItems(arr)
    }, [taikhoan])


    function handerMuon(id, name) {

        let ids1 = id_donhang + 1

        apis.map(api => {
            if (api.id == id) {
                fetch('http://192.168.1.165:4000' + '/api/muonhang/create/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: ids,
                        name: name,
                        soluong: 1,
                        nguoimuon: taikhoan,
                        lichsu_id: Number(ids1),
                        produce_id: api.productsId
                    })
                })
                    .then(() => {
                        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/create/', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: name,
                                soluong: 1,
                                nguoimuon: taikhoan
                            })
                        })
                            .then(() => {
                                fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
                                    .then(res => res.json())
                                    .then(res => setSanPham(res))
                                    .catch((err) => console.log(err))
                            })
                    })
                    .catch((err) => console.log(err))

                return;
            }
            // else {
            //     return alert('Sanr Phẩm Đã Hết Hàng!!');
            // }
        })


    }



    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
            .then(res => res.json())
            .then(res => setSanPham(res))
            .catch((err) => console.log(err))
    }, [])


    function handerDelete(id) {
        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/delete/id/' + id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
                    .then(res => res.json())
                    .then(res => setSanPham(res))
                    .catch((err) => console.log(err))
            })


        fetch('http://192.168.1.165:4000' + '/api/muonhang/delete/id/' + id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            }
        )
            .catch((err) => console.log(err))

    }



    function handerTru(id, soluong) {
        if (soluong <= 1) {
            alert('Số Lượng Phải Lớn Hơn 1')
            return;
        }

        fetch('http://192.168.1.165:4000' + '/api/muonhang/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong - 1
            })
        })
            .catch((err) => console.log(err))


        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong - 1
            })
        })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
                    .then(res => res.json())
                    .then(res => setSanPham(res))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))


    }

    const [soluonghangton, setSoLuongHangTon] = useState()


    function handerCong(id, soluong) {

        console.log(soluong)

        fetch('http://192.168.1.165:4000' + '/api/muonhang/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong + 1
            })
        })

        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/update/soluong/' + id, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                soluong: soluong + 1
            })
        })
            .then(() => {
                fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
                    .then(res => res.json())
                    .then(res => setSanPham(res))
                    .catch((err) => console.log(err))
            })
    }

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/tokenthongbao/')
            .then(res => res.json())
            .then(res => res.map(re => {
                if (re.Name == value) {
                    setToken(re.Token)
                }
            }))
            .catch((err) => console.log(err))
    }, [value])


    async function Gui() {

        const message = {
            to: token,
            sound: 'https://nhacchuong123.com/nhac-chuong/abc/Nhac-chuong-iphone-14-mac-dinh.mp3',
            title: taikhoan + " Muốn Mượn Hàng Của Bạn!!",
            body: 'Nhấn Vào Để Xem Chi Tiết!!'
        }

        await Axios.post('https://api.expo.dev/v2/push/send', message)
            .catch(err => console.log(err))

    }

    function handerSubmit() {
        let id;
        if (id_donhang == 0) {
            id = 1
        }
        else {
            id = id_donhang + 1
        }


        fetch('http://192.168.1.165:4000' + '/api/muonhang/update/lichsumuonhangId/' + id,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id
                })
            }
        )
            .then(() => {

                fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/delete/' + taikhoan,
                    {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                    }
                )
                    .then(() => {
                        fetch('http://192.168.1.165:4000' + '/api/muonhangnhap/' + taikhoan)
                            .then(res => res.json())
                            .then(res => setSanPham(res))
                            .catch((err) => console.log(err))
                    })
                    .then(() => {

                        Gui();

                        alert('Đã Gửi Yêu Cầu Thành Công!!!')
                        navigation.navigate('Nhập-Xuất Kho')
                    })
            })
            .catch(err => console.log(err))



    }

    const [search, setSearch] = useState([])
    const [idnguoichomuon, setIdNguoiCHoMuon] = useState()

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + value)
            .then(res => res.json())
            .then(res => setIdNguoiCHoMuon(res[0]?.id))
            .catch((err) => console.log(err))
    }, [value])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/products/')
            .then(res => res.json())
            .then(res => res.map(api => {
                setInventory(pre => [...pre, api.inventory])
            }))
            .finally(() => {

            })
            .catch((err) => console.log(err))

    }, [])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/products/')
            .then(res => res.json())
            .then(res => setProduce(res))
            .catch((err) => console.log(err))

    }, [])


    useEffect(() => {
        inventorys.map(inventory => {
            inventory.map(api => {
                if (api.usersId == idnguoichomuon) {
                    // return;
                    setApi(pre => [...pre, api])
                }

            })
        })
    }, [idnguoichomuon])

    // useEffect(() => {
    //     if (search != "") {
    //         fetch('http://192.168.1.165:4000' + '/api/khocanhan/sanpham/' + idnguoichomuon + '/' + search)
    //             .then(res => res.json())
    //             .then(res => setApi(res))
    //             .catch((err) => console.log(err))
    //     }
    //     else {
    //         fetch('http://192.168.1.165:4000' + '/api/users/' + value)
    //             .then(res => res.json())
    //             .then(res => setApi(res[0].khohangcanhan))
    //             .catch((err) => console.log(err))
    //     }
    // }, [search])


    function handerXacNhan() {
        if (value == null) {
            alert('Vui Lòng Nhập Nơi Mượn!!')
            return;
        }
        setIsload(true)

        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/create/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                trangthai: 'Chưa Xác Nhận',
                taikhoan: taikhoan,
                nguoimuon: value
            })
        })
            .catch((err) => console.log(err))


    }

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/lichsumuonhang/')
            .then((res) => res.json())
            .then(res => {
                let max_val = res.reduce(function (accumulator, element) {
                    return (accumulator.id > element.id) ? accumulator.id : element.id
                });

                setID_DonHang(max_val)
            })
            .catch((err) => console.log(err))

    }, [taikhoan])



    return (
        <View style={[styles.container, { backgroundColor: theme.maunen }]}>
            <View>
                <View>
                    <View >
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            color: theme.color
                        }}>
                            Kho Cho Mượn
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginLeft: 15,
                            zIndex: 100,
                            backgroundColor: theme.background

                        }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 100,
                                    backgroundColor: theme.background,
                                    borderColor: theme.color,
                                    color: theme.color
                                }}


                            />
                        </View>
                    </View>
                    {
                        isload == false ? <View style={{
                            zIndex: -1,
                            position: 'absolute',
                            right: 20,
                            top: 110,
                            backgroundColor: 'green',
                            opacity: 0.7
                        }}>
                            <TouchableOpacity style={{
                                borderColor: 'gray',
                                borderWidth: 1,
                                width: 80,
                                padding: 7,

                            }}
                                onPress={() => handerXacNhan()}
                            >
                                <Text style={{
                                    color: 'white'
                                }}>
                                    Xác Nhận
                                </Text>
                            </TouchableOpacity>
                        </View>
                            : null
                    }

                    {isload &&
                        <>
                            <View style={{
                                zIndex: -1
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    padding: 10,
                                    color: theme.color

                                }}>
                                    Sản Phẩm Mượn
                                </Text>
                                <View style={{
                                }}>
                                    <View style={{
                                        marginLeft: 10,
                                        color: theme.color

                                    }}>
                                        <Text>
                                            Tìm Kiếm
                                        </Text>
                                    </View>
                                    <View style={{
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        marginLeft: 20,
                                        padding: 10
                                    }}>
                                        <TextInput
                                            style={{
                                                width: '80%',
                                                height: 30,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                paddingHorizontal: 10
                                            }}
                                            onChangeText={(e) => setSearch(e)}
                                        />
                                        <TouchableOpacity style={{
                                            width: 50,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            padding: 5
                                        }}>
                                            <Text style={{
                                                textAlign: 'center',
                                                color: theme.color

                                            }}>
                                                Tìm
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>

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
                                        fontWeight: 'bold',
                                        color: theme.color

                                    }}>
                                        Tên Sản Phẩm
                                    </Text>

                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        color: theme.color

                                    }}>
                                        SL Tồn
                                    </Text>
                                    <Text style={{
                                        fontSize: 17,
                                        fontWeight: 'bold',
                                        color: theme.color

                                    }}>
                                        Trạng Thái
                                    </Text>
                                </View>
                                <View style={{

                                    // paddingVertical: 10
                                }}>
                                    {apis.map(api => (
                                        <View
                                            key={api.id}
                                            style={{
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                // borderWidth: 0.4,
                                                // borderColor: 'gray',
                                                borderBottomColor: 'gray',
                                                borderBottomWidth: 1,
                                                paddingVertical: 6

                                            }}>
                                            {produces.map(produce => (
                                                <View
                                                    key={produce.id}
                                                    style={{
                                                        flexDirection: 'row',
                                                        justifyContent: 'center',

                                                    }}>
                                                    {api.productsId == produce.id ?

                                                        <View
                                                            key={produce.id}
                                                            style={{
                                                                flexDirection: 'row',
                                                                justifyContent: 'space-around'
                                                            }}>
                                                            <View style={{
                                                                width: '40%',
                                                                justifyContent: 'center',
                                                                justifyContent: 'center'
                                                            }}>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    lineHeight: 30,
                                                                    textAlign: 'left',
                                                                    marginLeft: -40,
                                                                    color: theme.color


                                                                }}>
                                                                    {produce.name}
                                                                </Text>
                                                            </View>
                                                            <View>
                                                                <Text style={{
                                                                    fontSize: 16,
                                                                    lineHeight: 30,
                                                                    color: theme.color

                                                                }}>

                                                                    {api.exist}
                                                                </Text>
                                                            </View>

                                                            <View>
                                                                <TouchableOpacity
                                                                    onPress={() => handerMuon(api.id, produce.name)}
                                                                >
                                                                    <Text style={{
                                                                        fontSize: 16,
                                                                        lineHeight: 30,
                                                                        color: theme.color,
                                                                        marginLeft: 30

                                                                    }}>

                                                                        Mượn
                                                                    </Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>
                                                        : null}
                                                </View>

                                            ))}

                                        </View>


                                    ))}
                                </View>
                            </View>

                            <ScrollView style={{
                                marginBottom: 300,
                                zIndex: -100
                            }}>

                                <View style={{
                                    zIndex: -2000,
                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 22,
                                            padding: 10,
                                            color: theme.color

                                        }}>
                                            Sản Phẩm Đã Chọn
                                        </Text>
                                    </View>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <View style={{
                                            backgroundColor: theme.background,
                                            width: '90%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 7,
                                        }}>
                                            {sanPhams == [] ? null : sanPhams.map((sanPham, index) => (

                                                <View
                                                    key={index}

                                                    style={{
                                                        marginVertical: 10,
                                                        flexDirection: 'row',
                                                        justifyContent: 'space-around',
                                                        marginLeft: 20
                                                    }}>
                                                    <View style={{
                                                        marginLeft: -50,
                                                        justifyContent: 'center',
                                                        alignItems: 'center'
                                                    }}>
                                                        <Text
                                                            style={{
                                                                textAlign: 'center',
                                                                width: 60,
                                                                color: theme.color

                                                            }}>
                                                            {sanPham.TenHang}
                                                        </Text>
                                                    </View>
                                                    <View style={{
                                                        marginRight: 40
                                                    }}>

                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                    }}>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                            onPress={() => handerTru(sanPham.id, sanPham.SoLuong)}
                                                        >
                                                            <Text style={{
                                                                color: theme.color
                                                            }}>-</Text>
                                                        </TouchableOpacity>
                                                        <TextInput style={{
                                                            width: 50,
                                                            height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            textAlign: 'center',
                                                            // backgroundColor: 'white',
                                                            color: theme.color

                                                        }}

                                                        >
                                                            {sanPham.SoLuong}
                                                        </TextInput>
                                                        <TouchableOpacity style={{
                                                            width: 35, height: 35,
                                                            borderColor: theme.color,
                                                            borderWidth: 1,
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            // backgroundColor: 'white',
                                                            marginRight: 20
                                                        }}
                                                            onPress={() => handerCong(sanPham.id, sanPham.SoLuong)}

                                                        >
                                                            <Text style={{
                                                                color: theme.color
                                                            }}>+</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={{
                                                            width: 40,
                                                            height: 35,
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            borderColor: 'black',
                                                            borderWidth: 0.4,
                                                            backgroundColor: 'red',
                                                            opacity: 0.7,
                                                            borderRadius: 6
                                                        }}
                                                            onPress={() => handerDelete(sanPham.id)}
                                                        >
                                                            <Text style={{
                                                                textAlign: 'center',
                                                                color: 'white'
                                                            }}>
                                                                Xóa
                                                            </Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            ))}

                                        </View>
                                    </View>
                                </View>


                                <View style={{
                                    padding: 20
                                }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'green',
                                        // opacity: 0.6,
                                        width: 130,

                                    }}
                                        onPress={() => handerSubmit()}
                                    >
                                        <Text style={{
                                            fontSize: 22,
                                            color: 'white',
                                            textAlign: 'center',
                                            paddingVertical: 7
                                        }}>
                                            Gửi Yêu Cầu
                                        </Text>
                                    </TouchableOpacity>
                                </View>


                            </ScrollView>

                        </>}

                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
