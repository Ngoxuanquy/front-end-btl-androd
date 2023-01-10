import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DateTime from '../Components/DateTime';

import DateTimePicker from '@react-native-community/datetimepicker';


export default function ThuNhap() {
    const [datePicker, setDatePicker] = useState(false);

    const [date, setDate] = useState(new Date());

    const [datePicker2, setDatePicker2] = useState(false);

    const [date2, setDate2] = useState(new Date());

    const [timePicker, setTimePicker] = useState(false);

    const [time, setTime] = useState(new Date(Date.now()));

    function showDatePicker() {
        setDatePicker(true);
    };

    function showTimePicker() {
        setTimePicker(true);
    };

    function onDateSelected(event, value) {
        setDate(value);
        setDatePicker(false);
    };

    function onDateSelected2(event, value) {
        setDate2(value);
        setDatePicker2(false);
    };

    function onTimeSelected(event, value) {
        setTime(value);
        setTimePicker(false);
    };

    return (
        <View >
            <View>
                <View>
                    <TouchableOpacity style={{
                        height: 90,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#789BF6'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            marginTop: 10,
                            color: 'white'
                        }}>
                            LỌC NƯỚC 365
                        </Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={{
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#6699FF'
                    }}>

                        <View style={{
                            width: '100%',
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <ScrollView horizontal >

                                <View style={{
                                    marginLeft: 7
                                }}>
                                    <Ionicons name='menu' style={{
                                        fontSize: 30,
                                        color: 'white'
                                    }} />
                                </View>
                                <View style={{
                                    marginLeft: 30
                                }}>
                                    <Text style={{
                                        fontSize: 16,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: 7
                                    }}>
                                        GỌI
                                    </Text>
                                </View>
                                <View style={{
                                    marginLeft: 30
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: 7

                                    }}>
                                        ANDROID
                                    </Text>
                                </View>
                                <View style={{
                                    marginLeft: 30
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: 7

                                    }}>
                                        IOS
                                    </Text>
                                </View>
                                <View style={{
                                    marginLeft: 30
                                }}>
                                    <Ionicons name='notifications-outline' style={{
                                        fontSize: 30,
                                        color: 'white',
                                        // marginTop: -100,
                                        // marginRight: -30
                                    }} />
                                </View>
                                <View style={{
                                    marginLeft: 30
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        color: 'white',
                                        fontWeight: 'bold',
                                        marginTop: 7

                                    }}>
                                        DND00200
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>

                    </View>
                </View>

            </View>

            {/* Bộ Lọc */}
            <ScrollView>
                <View>
                    <View>
                        <View style={{
                            height: 250,
                            borderColor: 'black',
                            borderWidth: 0.3,
                            marginLeft: 10,
                            marginRight: 10,
                            marginTop: 20,
                            borderRadius: 7, borderBottomLeftRadius: 7,
                            borderBottomRightRadius: 7,
                            backgroundColor: '#fff',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 7.27,

                            elevation: 10,

                            // padding: 15
                        }}>
                            <View style={{
                                borderColor: 'blue',
                                borderWidth: 1
                            }}>

                            </View>
                            <TouchableOpacity style={{
                                borderColor: 'black',
                                borderWidth: 0.25,
                                padding: 20,
                                opacity: 0.5
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    color: 'blue',
                                    opacity: 1,
                                    fontWeight: 'bold'
                                }}>
                                    Bộ lọc
                                </Text>
                            </TouchableOpacity>

                            <View style={{
                                marginLeft: 50,
                                marginRight: 50,
                                marginTop: 30
                            }}>
                                <TouchableOpacity
                                    onPress={() => setDatePicker(true)}
                                    style={{
                                        zIndex: 1
                                    }}
                                >
                                    {datePicker && (
                                        <DateTimePicker
                                            value={date}
                                            mode={'date'}
                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            is24Hour={true}
                                            onChange={onDateSelected}
                                        // style={styleSheet.datePicker}
                                        />
                                    )}

                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            borderColor: 'black',
                                            borderWidth: 0.22,
                                            borderRadius: 5,
                                            backgroundColor: '#EEEEEE'
                                        }}
                                        value={date.toDateString()}
                                        // onPress={() => setDatePicker(true)}
                                        pointerEvents="none"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setDatePicker2(true)}

                                >
                                    {datePicker2 && (
                                        <DateTimePicker
                                            value={date2}
                                            mode={'date'}
                                            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                            is24Hour={true}
                                            onChange={onDateSelected2}
                                        // style={styleSheet.datePicker}
                                        />
                                    )}
                                    <TextInput
                                        style={{
                                            height: 40,
                                            width: "100%",
                                            borderColor: 'black',
                                            borderWidth: 0.2,
                                            borderRadius: 5,
                                            backgroundColor: '#EEEEEE'
                                        }}
                                        value={date2.toDateString()}
                                        pointerEvents="none"

                                    />
                                </TouchableOpacity>

                                <TouchableOpacity style={{
                                    width: 70,
                                    height: 40,
                                    borderColor: 'black',
                                    borderWidth: 0.3,
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    backgroundColor: '#6699CC'
                                }}>
                                    <Text style={{
                                        textAlign: 'center',
                                        fontSize: 18,
                                        color: 'white'
                                    }}>
                                        Lọc
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </View>

                {/* Chỉ Số Ngày */}

                <View style={{
                    // height: 250,
                    borderColor: 'black',
                    borderWidth: 0.3,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 40,
                    borderRadius: 7, borderBottomLeftRadius: 7,
                    borderBottomRightRadius: 7,
                    backgroundColor: '#fff',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 7.27,

                    elevation: 10,
                    marginBottom: 200,
                    // flexDirection: 'row'


                }}>


                    <View >
                        <View style={{
                            borderColor: 'blue',
                            borderWidth: 1
                        }}>
                        </View>
                        <View>
                            <Text style={{
                                fontSize: 22,
                                padding: 10
                            }}>
                                Chỉ Số Ngày
                            </Text>
                        </View>
                        <View>
                            <Text style={{
                                padding: 10
                            }}>
                                Tính Từ ngày 18-12-2002 - 2022-12-26 23:59:59
                            </Text>
                        </View>

                        <View style={{
                            padding: 10,

                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }} >
                                <View>
                                    <Text style={{
                                        color: 'red',
                                        fontSize: 17

                                    }}>
                                        Bậc hiện tại:
                                        <Text style={{
                                            fontWeight: 'bold',
                                            fontSize: 17
                                        }}>
                                            Bậc 1
                                        </Text>

                                    </Text>
                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30
                                    }}>
                                        GTTB Đơn
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',

                                    }}>
                                        630.000
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 28
                                    }}>
                                        Tỉ Lệ Với
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',

                                    }}>
                                        5%
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 28
                                    }}>
                                        OLE
                                    </Text>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 'bold',

                                    }}>
                                        85%
                                    </Text>
                                </View>


                                {/* rigth  */}
                                <View style={{

                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        opacity: 0.5
                                    }}>
                                        Lương Tạm Tính
                                    </Text>
                                    <Text style={{
                                        fontSize: 20,
                                        color: 'red',
                                        fontWeight: 'bold',
                                        lineHeight: 30

                                    }}>
                                        234.429.201
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7
                                    }}>
                                        Ngày Công
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        447.5
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Chiếu Khẩu Thay Lõi
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        133.909.000
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3,


                                    }}>

                                    </View>


                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Chiếu Khấu Đơn Thêm
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        7.279.800
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>


                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Số Đơn Phát Sinh
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        2181 Đơn
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>


                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Giá Trị TB hiện tại
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        679.641
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Giá trị TB yêu cầu
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        0
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>


                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Giá trị TB còn thiếu
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        0
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>

                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Tổng Tiền còn thiếu
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        0
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>


                                    </View>
                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 0.7,
                                        lineHeight: 30

                                    }}>
                                        Số Đơn vệ Sinh
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        68 Đơn
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>


                                    </View>
                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 1,
                                        lineHeight: 30

                                    }}>
                                        Tỉ lệ vệ sinh TB
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        lineHeight: 30,
                                        fontSize: 19,
                                    }}>
                                        3.01%
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>


                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 1,
                                        lineHeight: 30

                                    }}>
                                        OLE
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        lineHeight: 30,
                                        fontSize: 19,
                                    }}>
                                        0%
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3

                                    }}>


                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 1,
                                        lineHeight: 30

                                    }}>
                                        Số km trung bình/đơn
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        0
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3,

                                    }}>


                                    </View>

                                    <Text style={{
                                        fontSize: 16,
                                        opacity: 1,
                                        lineHeight: 30

                                    }}>
                                        Thời Gian trung bình đơn
                                    </Text>
                                    <Text style={{
                                        fontWeight: 'bold',
                                        fontSize: 19,
                                        lineHeight: 30

                                    }}>
                                        0 phút
                                    </Text>
                                    <View style={{
                                        borderColor: 'black',
                                        borderWidth: 0.5,
                                        width: "100%",
                                        marginTop: 5,
                                        opacity: 0.3,
                                        marginBottom: 30

                                    }}>


                                    </View>


                                </View>
                            </View>
                            <View>
                                <DateTime />

                            </View>
                        </View>
                    </View>
                </View>



            </ScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
