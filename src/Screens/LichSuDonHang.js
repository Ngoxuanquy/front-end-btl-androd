import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function LichSuDonHang() {

    return (
        <ScrollView>
            <View>
                <View>
                    <View>
                        <View style={{
                            marginTop: 10
                        }}>
                            <AntDesign name="search1" size={29} color="black" style={{
                                position: 'absolute',
                                top: 10,
                                left: 10
                            }} />
                            <TextInput
                                style={{
                                    borderColor: 'gray',
                                    borderWidth: 0.3,
                                    height: 50,
                                    paddingLeft: 50,
                                    paddingRight: 20,
                                    fontSize: 20,
                                    color: 'black'
                                }}
                                placeholder="Nhập Mã Đơn..."
                            />
                        </View>

                        <View>
                            <Text style={{
                                padding: 10,
                                fontSize: 20
                            }}>
                                Hôm Nay, 14/01/2022
                            </Text>
                        </View>
                    </View>
                    {/* Thông tin */}
                    <View style={{
                        backgroundColor: '#eeeeee',
                        borderColor: 'gray',
                        borderWidth: 0.4,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 6.32,

                        elevation: 1,
                    }}>
                        <View style={{
                            marginTop: 10,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15
                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <FontAwesome name="money" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 18
                                }}>
                                    90K
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop: 5
                                }}>
                                    9h:30
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Lõi Lọc Kang, Vòi nước, Bảo dưỡng
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Ngô Xuân Quy
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Mã Đơn Hàng: QQQQ
                            </Text>
                            <Text style={{
                                fontSize: 18

                            }}>
                                Ngày Giờ: 10:15 - 14/01/2022
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginTop: 5,
                                marginBottom: 15
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'

                                }}>
                                    (Chưa Thanh Toán)
                                </Text>
                                <Text style={{
                                    fontSize: 16,
                                    textDecorationLine: 'underline'
                                }}>
                                    Xem Chi Tiết
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Thông tin */}
                    <View style={{
                        backgroundColor: '#eeeeee',
                        borderColor: 'black',
                        borderWidth: 0.4,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 2.32,

                        elevation: 1,
                        opacity: 0.6,
                        marginTop: 20

                    }}>
                        <View style={{
                            marginTop: 10,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15,

                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <FontAwesome name="money" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 18
                                }}>
                                    90K
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop: 5
                                }}>
                                    9h:30
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Lõi Lọc Kang, Vòi nước, Bảo dưỡng
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Ngô Xuân Quy
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Mã Đơn Hàng: QQQQ
                            </Text>
                            <Text style={{
                                fontSize: 18

                            }}>
                                Ngày Giờ: 10:15 - 14/01/2022
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginTop: 5,
                                marginBottom: 15
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'

                                }}>
                                    (Đã Thanh Toán)
                                </Text>
                                <Text style={{
                                    fontSize: 16,
                                    textDecorationLine: 'underline'

                                }}>
                                    Xem Chi Tiết
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Thông tin */}
                    <View style={{
                        backgroundColor: '#eeeeee',
                        borderColor: 'black',
                        borderWidth: 0.4,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 2.32,

                        elevation: 1,
                        opacity: 0.6,
                        marginTop: 20

                    }}>
                        <View style={{
                            marginTop: 10,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15,

                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <FontAwesome name="money" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 18
                                }}>
                                    90K
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop: 5
                                }}>
                                    9h:30
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Lõi Lọc Kang, Vòi nước, Bảo dưỡng
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Ngô Xuân Quy
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Mã Đơn Hàng: QQQQ
                            </Text>
                            <Text style={{
                                fontSize: 18

                            }}>
                                Ngày Giờ: 10:15 - 14/01/2022
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginTop: 5,
                                marginBottom: 15
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'

                                }}>
                                    (Đã Thanh Toán)
                                </Text>
                                <Text style={{
                                    fontSize: 16,
                                    textDecorationLine: 'underline'

                                }}>
                                    Xem Chi Tiết
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Thông tin */}
                    <View style={{
                        backgroundColor: '#eeeeee',
                        borderColor: 'black',
                        borderWidth: 0.4,
                        marginLeft: 10,
                        marginRight: 10,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 8,
                        },
                        shadowOpacity: 0.44,
                        shadowRadius: 2.32,

                        elevation: 1,
                        opacity: 0.6,
                        marginTop: 20

                    }}>
                        <View style={{
                            marginTop: 10,
                            paddingHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 15,

                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <FontAwesome name="money" size={24} color="black" />
                                <Text style={{
                                    marginLeft: 10,
                                    fontSize: 18
                                }}>
                                    90K
                                </Text>
                            </View>
                            <View>
                                <Text style={{
                                    fontSize: 16,
                                    marginTop: 5
                                }}>
                                    9h:30
                                </Text>
                            </View>
                        </View>

                        <View style={{
                            paddingHorizontal: 10
                        }}>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Lõi Lọc Kang, Vòi nước, Bảo dưỡng
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Ngô Xuân Quy
                            </Text>
                            <Text style={{
                                fontSize: 18
                            }}>
                                Mã Đơn Hàng: QQQQ
                            </Text>
                            <Text style={{
                                fontSize: 18

                            }}>
                                Ngày Giờ: 10:15 - 14/01/2022
                            </Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                paddingHorizontal: 10,
                                marginTop: 5,
                                marginBottom: 15
                            }}>
                                <Text style={{
                                    fontSize: 16,
                                    fontWeight: 'bold'

                                }}>
                                    (Đã Thanh Toán)
                                </Text>
                                <Text style={{
                                    fontSize: 16,
                                    textDecorationLine: 'underline'

                                }}>
                                    Xem Chi Tiết
                                </Text>
                            </View>
                        </View>
                    </View>




                </View>
            </View>
        </ScrollView>
    )
}