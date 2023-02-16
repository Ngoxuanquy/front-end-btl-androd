import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function DonHang({ navigation }) {
    return (
        <View>
            <ScrollView>
                <View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Chờ Thực Hiện
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Đã Hoàn Thành
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }}
                            onPress={() => navigation.replace('Đơn Vệ Sinh')}
                        >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Vệ Sinh
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Thu Nợ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Khách Nợ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Chưa Bản Giao
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            backgroundColor: '#DDDDDD',
                            width: '90%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 15,
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.11,
                            shadowRadius: 1.11,

                            elevation: 14,
                            marginTop: 5
                        }} >
                            <Text style={{
                                fontSize: 22,
                                color: 'black',
                                textAlign: 'center',

                            }}>
                                Đơn Chờ Thực Hiện
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}