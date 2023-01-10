import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

// import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';



export default function Chart() {
    const data = {
        labels: ["Swim"], // optional
        data: [0.4]
    };

    const data1 = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43]
            }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(255,20,147, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,// optional
        backgroundColor: '#fff',
        background: "none"


    };

    const chartConfig2 = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(135,206,250, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,// optional
        backgroundColor: '#fff',
        background: "none"


    };

    const chartConfig3 = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(255,255,0, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,// optional
        backgroundColor: '#fff',
        background: "none"


    };

    const chartConfig4 = {
        backgroundGradientFrom: "#fff",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        backgroundGradientToOpacity: 0.1,
        color: (opacity = 1) => `rgba(0,128,0, ${opacity})`,
        strokeWidth: 1, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false,// optional
        backgroundColor: '#fff',
        background: "none"


    };

    const data2 = [
        {
            name: "Seoul",
            population: 21500000,
            color: "rgba(131, 167, 234, 1)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Toronto",
            population: 2800000,
            color: "#F00",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Beijing",
            population: 527612,
            color: "red",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "New York",
            population: 8538000,
            color: "#ffffff",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Moscow",
            population: 11920000,
            color: "rgb(0, 0, 255)",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        }
    ];

    const data4 = {
        labels: ["Test1", "Test2"],
        legend: ["L1", "L2"],
        data: [
            [60, 60],
            [30, 30]
        ],
        barColors: ["#dfe4ea", "#ced6e0"]
    };

    return (
        <View style={styles.container}>
            <ScrollView style={{
            }}>
                <Text style={{
                    fontSize: 23,
                    paddingHorizontal: 20,
                    marginTop: 15

                }}>Bezier Line Chart</Text>


                <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                    justifyContent: 'center'
                }}>
                    <ScrollView horizontal>
                        <View style={{
                            padding: 10
                        }} >
                            <View>
                                <ProgressChart
                                    data={data}
                                    width={120}
                                    height={120}
                                    strokeWidth={10}
                                    radius={50}
                                    chartConfig={chartConfig}
                                    hideLegend={true}
                                    style={{
                                        backgroundColor: 'white'
                                    }}

                                />
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '35%'
                                }}>
                                    <Ionicons name={'cart'} style={{
                                        fontSize: 30,
                                        color: '#550000',
                                    }} />
                                    <Text>
                                        40%
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                // padding: 20
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold'
                                }}>
                                    166
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    opacity: 0.3
                                }}>
                                    Giỏ Hàng
                                </Text>
                            </View>

                        </View>

                        <View style={{
                            padding: 10
                        }} >
                            <View>
                                <ProgressChart
                                    data={data}
                                    width={120}
                                    height={120}
                                    strokeWidth={10}
                                    radius={50}
                                    chartConfig={chartConfig2}
                                    hideLegend={true}
                                    style={{
                                        backgroundColor: 'white'
                                    }}

                                />
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '35%'
                                }}>
                                    <Ionicons name='briefcase-outline' style={{
                                        fontSize: 30,
                                        color: '#550000',
                                    }} />
                                    <Text>
                                        60%
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                // padding: 20
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold'
                                }}>
                                    181
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    opacity: 0.3
                                }}>
                                    Cặp :)))
                                </Text>
                            </View>

                        </View>

                        <View style={{
                            padding: 10
                        }} >
                            <View>
                                <ProgressChart
                                    data={data}
                                    width={120}
                                    height={120}
                                    strokeWidth={10}
                                    radius={50}
                                    chartConfig={chartConfig3}
                                    hideLegend={true}
                                    style={{
                                        backgroundColor: 'white'
                                    }}

                                />
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '35%'
                                }}>
                                    <Ionicons name={'desktop-outline'} style={{
                                        fontSize: 30,
                                        color: '#550000',
                                    }} />
                                    <Text>
                                        70%
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                // padding: 20
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: 'bold'
                                }}>
                                    240
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    opacity: 0.3
                                }}>
                                    Máy Tính
                                </Text>
                            </View>

                        </View>

                        <View style={{
                            padding: 10
                        }} >
                            <View>
                                <ProgressChart
                                    data={data}
                                    width={120}
                                    height={120}
                                    strokeWidth={10}
                                    radius={50}
                                    chartConfig={chartConfig4}
                                    hideLegend={true}
                                    style={{
                                        backgroundColor: 'white'
                                    }}

                                />
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    left: '35%',
                                    top: '35%'
                                }}>
                                    <Ionicons name={'cart'} style={{
                                        fontSize: 30,
                                        color: '#550000',
                                    }} />
                                    <Text>
                                        40%
                                    </Text>
                                </View>
                            </View>

                            <View style={{
                                // padding: 20
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: 'bold'
                                }}>
                                    166
                                </Text>
                                <Text style={{
                                    fontSize: 17,
                                    opacity: 0.3
                                }}>
                                    Giỏ Hàng
                                </Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>

                <View style={{
                    marginHorizontal: 20,
                    width: '90%'
                }}>
                    <Text style={{
                        fontSize: 22,
                        marginTop: 20,
                        marginBottom: 10
                    }}>
                        Sales Report
                    </Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ],

                                },
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ],

                                }
                            ],

                        }}
                        width={Dimensions.get("window").width - 40} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#DDDDDD",
                            backgroundGradientFrom: "#EEEEEE",
                            backgroundGradientTo: "#EEEEEE",
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(	0,191,255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                                borderRadius: 16,
                                // marginLeft: 20

                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }

                        }


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
                </View>

                <BarChart
                    // style={graphStyle}
                    data={data1}
                    width={300}
                    height={220}
                    yAxisLabel="$"
                    chartConfig={chartConfig}
                    verticalLabelRotation={30}
                />




                <PieChart
                    data={data2}
                    width={300}
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: "#fff",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#fff",
                        backgroundGradientToOpacity: 0.1,
                        color: (opacity = 1) => `rgba(255,20,147, ${opacity})`,
                        strokeWidth: 1, // optional, default 3
                        barPercentage: 0.5,
                        useShadowColorFromDataset: false,// optional
                        backgroundColor: '#fff',
                        background: "none"
                    }}
                    accessor={"population"}
                    backgroundColor={"transparent"}
                    paddingLeft={"15"}
                    center={[10, 50]}
                    absolute
                    hasLegend={true}
                />
                <StackedBarChart
                    height={280}
                    data={data4}
                    width={300}
                    chartConfig={chartConfig}
                    showLegend={false}
                    withHorizontalLabels={true}
                />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        // marginBottom: 100

    },
});
