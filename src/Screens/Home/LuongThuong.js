import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView, ActivityIndicator } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import React, { useEffect, useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';
import { AntDesign } from '@expo/vector-icons';


export default function LuongThuong() {

    const theme = useContext(ThemeConText)
    const [day, setDay] = useState(false)
    const [month, setMonth] = useState(true)
    const [week, setWeek] = useState(false)
    const [cliedId, setCliedID] = useState(0);
    const [logins, setLogin] = useState([]);
    const [taikhoan, setTaiKhoan] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    var data_week = {
        labels: ["Tuần 1", "Tuần 2", "Tuần 3", "Tuần 4"],
        datasets: [
            {
                data: [20, 45, 28, 80]
            }
        ]
    };

    var data_day = {
        labels: ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
        datasets: [
            {
                data: [100, 15, 128, 10, 119, 43]
            }
        ]
    };

    var data_month = {
        labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6"],
        datasets: [
            {
                data: [100, 15, 128, 10, 119, 43]
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => theme.color,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,// optional
        backgroundColor: '#fff',
        background: "none"


    };

    function handerWeek() {
        setMonth(false)
        setDay(false)
        setWeek(true)
    }

    function handerMonth() {
        setMonth(true)
        setDay(false)
        setWeek(false)
    }

    function handerDay() {
        setMonth(false)
        setDay(true)
        setWeek(false)
    }

    const buttons = [
        { id: 0, button: 'Day' },
        { id: 1, button: 'Week' },
        { id: 2, button: 'Month' },

    ]

    const getConten = () => {
        if (isLoading) {
            return <ActivityIndicator />
        }
    }

    function handerSubmit(slug, id) {
        setCliedID(id)
        if (slug == 'Month') {
            handerMonth();
        }
        else if (slug == 'Day') {
            handerDay();
        }
        else if (slug == 'Week') {
            handerWeek();
        }
    }

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + taikhoan)
            .then(res => res.json())
            .then(res => setLogin(res))
            .finally(() => {
                setIsLoading(false)
            })
    }, [taikhoan])

    const [luongs, setLuong] = useState()
    const [chietkhauloi, setChietKhauLoi] = useState([])
    const [chietkhaudonthem, setChietKhauDonThem] = useState([])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => {
                setLuong(res[0].luong_tam_tinh);
                setChietKhauLoi(res[0].chiet_khau_thay_loi)
                setChietKhauDonThem(res[0].chiet_khau_don_them)
            })
            .catch((err) => console.log(err))
    }, [taikhoan])

    const [luongtamtinhs, setLuongTamTinh] = useState()

    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/chisocanhan/email/' + taikhoan)
            .then(res => res.json())
            .then(res => setLuongTamTinh(res[0].gia_tri_TB_hien_tai))
            .catch((err) => console.log(err))
    }, [taikhoan])

    useEffect(() => {
        if (luongtamtinhs > 2000 && luongtamtinhs < 3000) {
            fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 20000
                })
            })
        }
        else if (luongtamtinhs > 1000 && luongtamtinhs < 2000) {
            fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 10000
                })
            })
        }
        else if (luongtamtinhs >= 3000) {
            fetch('http://192.168.1.165:4000' + '/api/chisocanhan/update/luong/' + taikhoan, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    luong: 30000
                })
            })
        }
    }, [luongtamtinhs])


    return (
        <>
            {
                isLoading ? <ActivityIndicator style={{
                    // flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 100

                }} /> :
                    <ScrollView style={{
                        // flex: 1
                        height: 100,

                    }}>
                        <View style={{

                        }}>
                            <View style={{
                                height: 300,
                                backgroundColor: '#4650c7',
                                borderBottomLeftRadius: 50,
                                borderBottomRightRadius: 50
                            }} >

                                <View style={{

                                }}>

                                    <View style={{
                                        marginTop: 20,
                                        marginLeft: 30,
                                        marginBottom: 10
                                    }}>
                                        <Text style={{
                                            color: 'white',
                                            fontSize: 20,
                                            opacity: 0.7,
                                            marginTop: 20,
                                            color: '#de7c1b'
                                        }}>
                                            Lương Hiện Tại:
                                        </Text>
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                fontSize: '30',
                                                textAlign: 'center',
                                                color: 'white'
                                            }}>
                                                $
                                            </Text>
                                            <Text style={{
                                                color: 'white',
                                                fontSize: 50,
                                                lineHeight: 50,
                                                textAlign: 'center',
                                                marginTop: 20

                                            }}>
                                                {luongs + chietkhaudonthem + chietkhauloi}
                                            </Text>
                                        </View>
                                        <View style={{
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <Text style={{
                                                color: 'white',
                                                width: '70%',
                                                textAlign: 'center'
                                            }}>
                                                Đây là lương tạm tính, nếu muốn biết chính xác thì chờ cuối tháng nhé
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 30
                                }}>
                                    <View style={{
                                        width: '90%',
                                        backgroundColor: '#eeeeee',
                                        height: 70,
                                        borderRadius: 20,
                                        flexDirection: 'row'
                                    }}>
                                        <View style={{
                                            width: '29%',
                                            backgroundColor: '#dddddd',
                                            height: 60,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            marginTop: 5,
                                            marginLeft: 10
                                        }}>
                                            <AntDesign name="linechart" size={44} color="#4aede8" style={{
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 7
                                            }} />
                                        </View>
                                        <View style={{
                                            width: '30%',
                                            backgroundColor: '#dddddd',
                                            height: 60,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            marginTop: 5,
                                            marginLeft: 10
                                        }}>
                                            <AntDesign name="notification" size={44} color="#dc59de" style={{
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 7
                                            }} />
                                        </View>
                                        <View style={{
                                            width: '30%',
                                            backgroundColor: '#dddddd',
                                            height: 60,
                                            borderRadius: 10,
                                            alignItems: 'center',
                                            marginTop: 5,
                                            marginLeft: 10
                                        }}>
                                            <AntDesign name="smileo" size={44} color="#a9e817" style={{
                                                textAlign: 'center',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                marginTop: 7
                                            }} />
                                        </View>
                                    </View>
                                </View>
                            </View>



                            <View style={[{
                                // backgroundColor: 'white',
                                height: 550,
                                marginTop: -100,
                                zIndex: -1
                                // flex: 1
                            }, {
                                backgroundColor: theme.background
                            }]}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginTop: 80
                                }}>
                                    <Text style={[{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 30,
                                        marginBottom: 10
                                    }, {
                                        color: theme.color
                                    }]}>
                                        Hàng Tháng
                                    </Text>
                                    <Text style={[{
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                        marginTop: 30,
                                        marginBottom: 10
                                    }, {
                                        color: theme.color
                                    }]}>
                                        Ứng Lương
                                    </Text>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginVertical: 10,
                                    marginBottom: 30,
                                    marginTop: 20
                                }}>
                                    {buttons.map((button, index) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => handerSubmit(button.button, button.id)}
                                            style={{
                                                backgroundColor: 'white'
                                            }}
                                        >
                                            <Text style={[
                                                index === cliedId ? styles.buttonAction : styles.butonUn,
                                            ]}>
                                                {button.button}
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>


                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    {month &&
                                        <BarChart
                                            // style={graphStyle}
                                            data={data_month}
                                            width={Dimensions.get('window').width - 20}
                                            height={270}
                                            yAxisLabel="$"
                                            chartConfig={chartConfig}
                                            verticalLabelRotation={30}
                                            bezier
                                            style={{
                                                marginVertical: 8,
                                                borderRadius: 16,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 5,
                                                },
                                                shadowOpacity: 0.34,
                                                shadowRadius: 2.27,
                                                elevation: 10,
                                            }}

                                        />
                                    }
                                    {week &&
                                        <BarChart
                                            // style={graphStyle}
                                            data={data_week}
                                            width={Dimensions.get('window').width - 20}
                                            height={270}
                                            yAxisLabel="$"
                                            chartConfig={chartConfig}
                                            verticalLabelRotation={30}
                                            bezier
                                            style={{
                                                marginVertical: 8,
                                                borderRadius: 16,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 5,
                                                },
                                                shadowOpacity: 0.34,
                                                shadowRadius: 2.27,
                                                elevation: 10,
                                            }}

                                        />
                                    }

                                    {day &&
                                        <BarChart
                                            // style={graphStyle}
                                            data={data_day}
                                            width={Dimensions.get('window').width - 20}
                                            height={270}
                                            yAxisLabel="$"
                                            chartConfig={chartConfig}
                                            verticalLabelRotation={30}
                                            bezier
                                            style={{
                                                marginVertical: 8,
                                                borderRadius: 16,
                                                shadowOffset: {
                                                    width: 0,
                                                    height: 5,
                                                },
                                                shadowOpacity: 0.34,
                                                shadowRadius: 2.27,
                                                elevation: 10,
                                            }}

                                        />
                                    }

                                </View>
                            </View>
                        </View>
                    </ScrollView >
            }
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    butonUn: {
        backgroundColor: 'white',
        width: 100,
        height: 40,
        // marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#eeeeee',
        // borderRadius: 10,
        borderRadius: 10

    },
    buttonAction: {
        backgroundColor: '#33CCFF',
        width: 100,
        height: 40,
        // marginTop: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        // borderRadius: 10,
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 10


    }
})
