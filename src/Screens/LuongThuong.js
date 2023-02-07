import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import React, { useEffect, useState } from 'react';


export default function LuongThuong() {

    const [day, setDay] = useState(false)
    const [month, setMonth] = useState(true)
    const [week, setWeek] = useState(false)
    const [cliedId, setCliedID] = useState(0);

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
        color: (opacity = 1) => `rgba(65,105,225, ${opacity})`,
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
        { id: 1, button: 'Day' },
        { id: 2, button: 'Week' },
        { id: 3, button: 'Month' },

    ]

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


    return (
        <ScrollView style={{
            backgroundColor: '#3366FF',
            flex: 1
        }}>
            <View >
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 50,
                    height: 70,

                }}>
                    <View>
                        <Image
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 200
                            }}
                            source={{
                                uri: 'https://thuthuatphanmem.vn/uploads/2018/09/11/hinh-anh-dep-6_044127357.jpg'
                            }}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'center',

                    }}>
                        <Text style={{
                            textAlign: 'center',
                            alignItems: 'center',
                            fontSize: 24,
                            marginTop: 0,
                            marginLeft: -40,
                            color: 'white'
                        }}>
                            Ngô Xuân Quy
                        </Text>
                    </View>
                    <View style={{
                        textAlign: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 0,

                    }}>
                        <FontAwesome name="search" size={24} color="white" />

                    </View>
                </View>

                <View style={{
                    marginTop: 20,
                    marginLeft: 30,
                    marginBottom: 10
                }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 20,
                        opacity: 0.7
                    }}>
                        Lương Hiện Tại:
                    </Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 35,
                        lineHeight: 50

                    }}>
                        $ 1.000.000đ
                    </Text>
                </View>



                <View style={{
                    backgroundColor: 'white',
                    height: 500,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                }}>
                    <View>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            marginTop: 30,
                            marginLeft: 20,
                            marginBottom: 10
                        }}>
                            Hàng Tháng
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginVertical: 10
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
                                    index + 1 === cliedId ? styles.buttonAction : styles.butonUn,
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
        marginTop: 10,
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
        marginTop: 10,
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
