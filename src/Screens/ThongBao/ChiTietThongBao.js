import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


function ChiTietThongBao({ route, navigation }) {



    return (
        <View>
            <View >
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 20,


                }}>
                    {apis.map(api => (
                        <View key={api.id} style={{
                            width: '80%',
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 7,

                        }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Người Mượn: {api.NguoiMuon}
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Kho Hàng: {api.email}
                            </Text>
                            <Text style={{
                                fontSize: 15,
                                lineHeight: 30
                            }}>
                                Ngày Giờ: {api.date}
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Trạng Thái: {api.TrangThai}
                            </Text>
                        </View>
                    ))}
                </View>
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
                            Tên Sản Phẩm
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            Số Lượng
                        </Text>

                    </View>
                    {sanphams.map(sanpham => (
                        <View
                            key={sanpham.id}
                        >

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
                                        {sanpham.TenHang}
                                    </Text>
                                    <Text style={{
                                        fontSize: 16,
                                        lineHeight: 30
                                    }}>
                                        {sanpham.SoLuong}
                                    </Text>

                                </View>


                            </View>
                        </View>
                    ))}

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'red',
                            opacity: 0.7
                        }}>
                            <Text style={{
                                color: 'white'
                            }}>
                                Từ Chối
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            borderColor: 'gray',
                            borderWidth: 1,
                            padding: 10,
                            backgroundColor: 'green',
                            opacity: 0.7
                        }}
                            onPress={() => handerSubmit()}
                        >
                            <Text style={{
                                color: 'white'
                            }}>
                                Xác Nhận
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChiTietThongBao