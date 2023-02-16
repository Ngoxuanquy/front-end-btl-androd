import React, { useState } from 'react';

// import all the components we are going to use
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    RefreshControl
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import Call API
import call from 'react-native-phone-call';
import { useEffect } from 'react';

const Phone = ({ navigation }) => {
    const [inputValue, setInputValue] = useState('0589401978');

    const URL_ON = 'http://192.168.0.106:4000'
    const URL1_ON = 'http://192.168.0.114:5000'

    const URL_CT = 'http://192.168.1.121:4000'
    const URL1_CT = 'http://192.168.1.121:5000'

    const URL_FPT = 'http://192.168.0.145:4000'
    const URL1_FPT = 'http://192.168.0.145:5000'

    const [taikhoan, setTaiKhoan] = useState([])
    const [orders, setOrders] = useState([])

    AsyncStorage.getItem('taikhoan')
        .then(res =>
            setTaiKhoan(res)
        )


    function triggerCall(number) {
        // Check for perfect 10 digit length
        if (inputValue.length != 10) {
            alert('Please insert correct contact number');
            return;
        }

        const args = {
            number: number,
            prompt: true,
        };
        // Make a call
        call(args).catch(console.error);
    };

    useEffect(() => {
        fetch(URL_FPT + '/api/customer_re/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res))
            .catch(err => console.log(err))
    }, [])

    console.log(orders)



    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetch(URL_FPT + '/api/customer_re/' + taikhoan)
                .then(res => res.json())
                .then(res => setOrders(res))
                .catch(err => console.log(err))
            setRefreshing(false);
        }, 1000);
    }, []);

    useEffect(() => {
        clearTimeout(onRefresh)
    }, [])

    return (


        <ScrollView style={styles.container}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#0066FF',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            <View style={styles.container}>
                <View style={{
                    height: 100,
                    backgroundColor: '#0066FF',
                    justifyContent: 'center',
                    marginBottom: 10,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius: 10
                }}>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        Gọi Điện
                    </Text>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={{
                            flex: 1,

                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 25,
                                    padding: 20,
                                    color: 'blue',
                                    fontWeight: 'bold'
                                }}>
                                    Thông Tin Khách Hàng
                                </Text>
                                {orders.map(order => (

                                    <View key={order.id}>
                                        <View style={{
                                            marginLeft: 10,
                                            marginRight: 10,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            marginBottom: 10,
                                            padding: 15,
                                            backgroundColor: '#eeeeee',
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 7,
                                            },
                                            shadowOpacity: 0.43,
                                            shadowRadius: 9.51,

                                            elevation: 15,
                                        }}>
                                            <View style={{
                                                marginBottom: 30
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginTop: 10,
                                                    marginBottom: 15,
                                                }}>
                                                    <Text style={{
                                                        // marginTop: 20,
                                                        fontSize: 20,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Đơn Hàng:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10
                                                    }}>
                                                        BD12
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginBottom: 15
                                                }}>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Tên Khách Hàng:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10

                                                    }}>
                                                        {order.name}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginBottom: 15
                                                }}>

                                                    <Text style={{
                                                        fontSize: 20,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Số Điện Thoại:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10

                                                    }}>
                                                        {order.number}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <Text style={{
                                                        fontWeight: 'bold',
                                                        fontSize: 20
                                                    }}>
                                                        Địa Chỉ:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10

                                                    }}>
                                                        {order.Address}
                                                    </Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginTop: 15,
                                                    marginBottom: 20
                                                }}>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        fontWeight: 'bold'
                                                    }}>
                                                        Giờ Hẹn Khách:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10

                                                    }}>
                                                        09:15 - 14/02/2023
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}>
                                                    <TouchableOpacity
                                                        activeOpacity={0.7}
                                                        style={styles.buttonStyle}
                                                        onPress={() => triggerCall(order.Number)}>
                                                        <Ionicons name="ios-call-outline" size={24} color="white" style={{
                                                            textAlign: 'center'
                                                        }} />
                                                    </TouchableOpacity>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>

                        </View>

                    </TouchableWithoutFeedback>

                </KeyboardAvoidingView>
            </View>

        </ScrollView>
    );
};

export default Phone;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 10,
        textAlign: 'center',
    },
    titleText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    titleTextsmall: {
        marginVertical: 8,
        fontSize: 16,
    },
    buttonStyle: {
        justifyContent: 'center',
        marginTop: -15,
        padding: 10,
        backgroundColor: '#8ad24e',
        width: 60,
        height: 60,
        borderRadius: 100
    },
    buttonTextStyle: {
        color: '#fff',
        textAlign: 'center',
    },
    textInput: {
        height: 60,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 7,
        fontSize: 24
    },
});