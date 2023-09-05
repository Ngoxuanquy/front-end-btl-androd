import { View, Text, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import Chart from '../../../Components/Char';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";


const Home_Admin = () => {


    //Lấy ngày trong tuần
    const [tuans, setTuan] = useState([])
    useEffect(() => {
        // Lấy ngày hiện tại
        var currentDate = new Date();

        // Lấy ngày trong tuần (0: Chủ Nhật, 1: Thứ Hai, 2: Thứ Ba, ..., 6: Thứ Bảy)
        var currentDayOfWeek = currentDate.getDay();

        // Tạo một mảng để lưu trữ tất cả các ngày trong tuần
        var daysOfWeek = [];

        // Hàm để định dạng ngày thành "dd/mm"
        function formatDateToDDMM(date) {
            var day = date.getDate();
            var month = date.getMonth() + 1; // Lưu ý: Tháng trong JavaScript đếm từ 0 (0 là tháng 1)
            return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month;
        }

        // Lặp qua các ngày trong tuần bắt đầu từ Thứ Hai
        for (var i = 1; i <= 7; i++) {
            // Tính toán ngày cụ thể bằng cách thêm hoặc trừ ngày trong tuần
            var day = new Date(currentDate);
            day.setDate(currentDate.getDate() + i - currentDayOfWeek);

            // Đưa ngày vào mảng daysOfWeek sau khi định dạng
            daysOfWeek.push(formatDateToDDMM(day));
        }

        // In ra mảng daysOfWeek chứa các ngày trong tuần với định dạng "dd/mm"

        // In ra mảng daysOfWeek chứa các ngày trong tuần
        setTuan(daysOfWeek);

    }, [])

    return (
        <ScrollView>
            <View>
                <View>
                    <View>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 40
                        }}>
                            <Text style={{
                                fontSize: 22,
                                marginLeft: 30
                            }}>
                                Admin
                            </Text>
                            <Ionicons name="people-circle" size={40} color="black" style={{
                                marginRight: 30

                            }} />
                        </View>

                        {/* order */}
                        <View style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <View style={{
                                backgroundColor: '#C6CCCC',
                                width: '90%',
                                height: 150,
                                borderRadius: 10
                            }}>
                                <View>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 22,
                                        marginTop: 15
                                    }}>
                                        Order
                                    </Text>
                                </View>

                                <View style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    marginTop: 30
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                            textAlign: 'center'
                                        }}>
                                            100
                                        </Text>
                                        <Text style={{
                                            fontSize: 19,
                                            textAlign: 'center'

                                        }}>
                                            New
                                        </Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            100
                                        </Text>
                                        <Text style={{
                                            fontSize: 19
                                        }}>
                                            Shipped
                                        </Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            100
                                        </Text>
                                        <Text style={{
                                            fontSize: 19
                                        }}>
                                            Delivered
                                        </Text>
                                    </View>
                                    <View style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>
                                            100
                                        </Text>
                                        <Text style={{
                                            fontSize: 19
                                        }}>
                                            Total
                                        </Text>
                                    </View>
                                </View>

                                {/* Thoongs kees */}
                                <View style={{
                                    marginTop: 40
                                }}>
                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        shadowOpacity: 0.32,
                                        shadowRadius: 5.46,

                                        elevation: 9,

                                    }}>
                                        <View style={{
                                            backgroundColor: 'red',
                                            width: 10,
                                            height: '100%',
                                            marginRight: -25,
                                            borderBottomLeftRadius: 7,
                                            borderTopLeftRadius: 7
                                        }}>

                                        </View>
                                        <View style={{
                                            backgroundColor: 'white',
                                            padding: 10,
                                            paddingHorizontal: 50,
                                            borderBottomRightRadius: 7,
                                            borderTopRightRadius: 7,
                                            width: 160
                                        }}>
                                            <Text style={{
                                                fontSize: 18
                                            }}>
                                                User
                                            </Text>
                                            <Text style={{
                                                fontSize: 18
                                            }}>
                                                120
                                            </Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: 'blue',
                                            width: 10,
                                            height: '100%',
                                            marginRight: -25,
                                            borderBottomLeftRadius: 7,
                                            borderTopLeftRadius: 7
                                        }}>

                                        </View>
                                        <View>

                                            <View style={{
                                                backgroundColor: 'white',
                                                padding: 10,
                                                paddingHorizontal: 50,
                                                borderBottomRightRadius: 7,
                                                borderTopRightRadius: 7,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                width: 160

                                            }}>

                                                <Text style={{
                                                    fontSize: 18,
                                                    textAlign: 'left'
                                                }}>
                                                    Order
                                                </Text>
                                                <Text style={{
                                                    fontSize: 18
                                                }}>
                                                    5 đơn
                                                </Text>
                                            </View>
                                        </View>
                                    </View>

                                    <View style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 4,
                                        },
                                        shadowOpacity: 0.32,
                                        shadowRadius: 5.46,

                                        elevation: 9,
                                        marginTop: 10,


                                    }}>
                                        <View style={{
                                            backgroundColor: 'yellow',
                                            width: 7,
                                            height: '100%',
                                            marginRight: -25,
                                            borderBottomLeftRadius: 7,
                                            borderTopLeftRadius: 7
                                        }}>

                                        </View>
                                        <View style={{
                                            backgroundColor: 'white',
                                            padding: 10,
                                            paddingHorizontal: 50,
                                            borderBottomRightRadius: 7,
                                            borderTopRightRadius: 7,
                                            width: 150

                                        }}>
                                            <Text style={{
                                                fontSize: 18,
                                                marginLeft: -20
                                            }}>
                                                product
                                            </Text>
                                            <Text style={{
                                                fontSize: 18
                                            }}>
                                                120
                                            </Text>
                                        </View>
                                        <View style={{
                                            backgroundColor: 'gray',
                                            width: 7,
                                            height: '100%',
                                            marginRight: -25,
                                            borderBottomLeftRadius: 7,
                                            borderTopLeftRadius: 7
                                        }}>

                                        </View>
                                        <View>

                                            <View style={{
                                                backgroundColor: 'white',
                                                padding: 10,
                                                paddingHorizontal: 50,
                                                borderBottomRightRadius: 7,
                                                borderTopRightRadius: 7,
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                width: 150
                                            }}>

                                                <Text style={{
                                                    fontSize: 18,
                                                    textAlign: 'left',
                                                    marginLeft: -35
                                                }}>
                                                    Tài khoản
                                                </Text>
                                                <Text style={{
                                                    fontSize: 18
                                                }}>
                                                    50
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                                {/* Bán hàng trong tuần */}

                                <View style={{
                                    width: '90%'
                                }}>
                                    <View>
                                        <Text style={{
                                            fontSize: 20,
                                            marginTop: 20
                                        }}>
                                            Weekly Sales
                                        </Text>
                                    </View>
                                    <LineChart
                                        data={{
                                            labels: tuans,
                                            datasets: [
                                                {
                                                    data: [
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100,
                                                        Math.random() * 100
                                                    ]
                                                }
                                            ]
                                        }}
                                        width={Dimensions.get("window").width - 40} // from react-native
                                        height={220}
                                        yAxisLabel="$"
                                        yAxisSuffix="k"
                                        yAxisInterval={1} // optional, defaults to 1
                                        chartConfig={{
                                            backgroundColor: "#e26a00",
                                            backgroundGradientFrom: "#fb8c00",
                                            backgroundGradientTo: "#ffa726",
                                            decimalPlaces: 2, // optional, defaults to 2dp
                                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                            style: {
                                                // borderRadius: 16
                                            },
                                            propsForDots: {
                                                r: "6",
                                                strokeWidth: "2",
                                                stroke: "#ffa726"
                                            }
                                        }}
                                        bezier
                                        style={{
                                            marginVertical: 8,
                                            // borderRadius: 16
                                        }}
                                    />
                                </View>


                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Home_Admin