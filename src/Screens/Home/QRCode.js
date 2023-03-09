import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import AsyncStorage from '@react-native-async-storage/async-storage';

const QRCode = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScannes] = useState(false)
    const [text, setText] = useState('')
    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])
    const [date, setDate] = useState([])
    const [check, setCheck] = useState('')

    const [id, setId] = useState([]);
    const [ngaycongs, setNgayCong] = useState()

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setNgayCong(res[0].ngay_cong))
            .catch((err) => console.log(err))
    }, [taikhoan])



    useEffect(() => {
        const askForCameraPermission = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        }
        askForCameraPermission()
    }, [])

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users')
            .then(res => res.json())
            .then(res => res.map(re => {
                if (re.email == taikhoan) {
                    setId(re.id)
                }
            }))
    })


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chamcong/' + taikhoan)
            .then(res => res.json())
            .then(res =>
                setDate(res)
            )
    }, [taikhoan])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chamcong/')
            .then(res => res.json())
            .then(res => {
                res.map(re => {
                    if (re.Email == taikhoan) {
                        setCheck(re.date)
                    }
                })
            }
            )
    })



    const handleBarCodeScanned = ({ type, data }) => {
        setScannes(true)
        setText(data)

        const a = new Date()
        var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();


        if (check.slice(0, 2) == a.getDate() && check.slice(3, 5) == (a.getMonth() + 1) && check.slice(6, 10) == a.getFullYear()) {
            alert("Hôm Nay Đã Chấm Công!!!")
        }
        else {
            fetch('http://192.168.1.165:4000' + '/api/chamcong/create/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id: id,
                    email: taikhoan,
                    giovao: time,
                    maqr: data,
                })
            })
                .then(() => {
                    alert('Chấm Công Vào Thành Công')
                    navigation.replace('BottomTab')

                })
        }


        date.map(da => {
            if (da.sang_GioRa == "") {
                fetch('http://192.168.1.165:4000' + '/api/chamcong/update/' + da.id, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(() => {

                        alert('Chấm Công Ra Thành Công')
                        navigation.replace('BottomTab')

                    })
            }
        })

        date.map(da => {
            if (da.chieu_GioVao == "" && da.sang_GioRa != '') {
                fetch('http://192.168.1.165:4000' + '/api/chamcong/update/chieuvao/' + da.id, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(() => {

                        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/ngaycong/' + taikhoan, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chamcong: ngaycongs + 1
                            })
                        })
                        alert('Chấm Công Vào Thành Công')
                        navigation.replace('BottomTab')

                    })
            }
        })

        date.map(da => {
            if (da.chieu_GioRa == "" && da.chieu_GioVao != '') {
                fetch('http://192.168.1.165:4000' + '/api/chamcong/update/chieura/' + da.id, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                })
                    .then(() => {

                        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/ngaycong/' + taikhoan, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                chamcong: ngaycongs + 1
                            })
                        })


                        alert('Chấm Công Ra Thành Công')
                        navigation.replace('BottomTab')

                    })
            }
        })
    }

    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>
        )
    }

    if (hasPermission === false) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <Button title="Allow camera" onPress={() => handleBarCodeScanned()} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ width: '100%', height: 500 }}
                />
            </View>

            <Text>{text}</Text>

            {scanned && (
                <Button title="Chấm lại" onPress={() => setScannes(false)} color="tomato" />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 350,
        height: 350,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'tomato',
    },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
})

export default QRCode