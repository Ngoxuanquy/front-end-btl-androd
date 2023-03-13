import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'

import ThemeConText from '../../../config/themeConText'


export default function DonHang({ navigation }) {

    let theme = useContext(ThemeConText)

    return (
        <View style={{

            backgroundColor: theme.maunen,
            flex: 1
        }}>
            <View style={{
                backgroundColor: theme.background,
                borderRadius: 30,
                marginTop: 60,
                borderWidth: 0.7,
                borderColor: theme.color,

            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,

                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',
                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,
                        marginTop: 5,

                    }}
                        onPress={() => navigation.navigate('Đơn Chờ Thực Hiện')}

                    >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color

                        }}>
                            Đơn Chờ Thực Hiện
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',
                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,

                        marginTop: 5
                    }}
                        onPress={() => navigation.navigate('Đơn Đã Hoàn Thành')}

                    >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color


                        }}>
                            Đơn Đã Hoàn Thành
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',


                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,

                        marginTop: 5
                    }}
                        onPress={() => navigation.navigate('Đơn Vệ Sinh')}
                    >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color


                        }}>
                            Đơn Vệ Sinh
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',


                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,

                        marginTop: 5
                    }}
                        onPress={() => navigation.navigate('Đơn Thu Nợ')}

                    >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color


                        }}>
                            Đơn Thu Nợ
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',


                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,

                        marginTop: 5
                    }} >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color


                        }}
                            onPress={() => navigation.navigate('Đơn Khách Nợ')}

                        >
                            Đơn Khách Nợ
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 30
                }}>
                    <TouchableOpacity style={{
                        height: 60,
                        backgroundColor: theme.background,
                        width: '90%',
                        borderBottomColor: theme.color,
                        borderBottomWidth: 0.6,
                        marginTop: 5
                    }} >
                        <Text style={{
                            fontSize: 22,
                            color: 'black',
                            marginTop: 20,
                            marginLeft: 20,
                            color: theme.color
                        }}
                            onPress={() => navigation.navigate('Đơn Chưa Bàn Giao')}

                        >
                            Đơn Chưa Bàn Giao
                        </Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    )
}