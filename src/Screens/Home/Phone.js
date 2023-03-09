import React, { useState, useContext } from 'react';

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
import ThemeConText from '../../../config/themeConText';
import { LinearGradient } from 'expo-linear-gradient';

// import Call API
import call from 'react-native-phone-call';
import { useEffect } from 'react';

const Phone = ({ navigation }) => {

    const theme = useContext(ThemeConText)

    const [inputValue, setInputValue] = useState('0589401978');
    const [isLoading, setIsLoading] = useState(true)

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
        fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
            .then(res => res.json())
            .then(res => setOrders(res))
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
                // setReset(true);
                // setTimeout(() => {
                //     setReset(false);
                // }, 10);
            })
    }, [taikhoan])


    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            fetch('http://192.168.1.165:4000' + '/api/customer_re/' + taikhoan)
                .then(res => res.json())
                .then(res => setOrders(res))
                .catch(err => console.log(err))
            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);


    return (


        <ScrollView
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} style={{
                    tintColor: 'black',
                    backgroundColor: '#bf57f4',
                    size: 10,
                    marginBottom: 0,
                }} />
            }
        >
            <View >
                <LinearGradient
                    // Background Linear Gradient
                    start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }}
                    colors={['#bf57f4', '#997af4', '#878bf5', '#7a84f3']}
                    style={{
                        width: "100%",
                        height: 120,
                        flex: -1,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}
                >
                    <View style={{
                        height: 100,
                        justifyContent: 'center',
                        // marginBottom: 10,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10
                    }}>
                        <Text style={{
                            fontSize: 30,
                            color: 'white',
                            textAlign: 'center',
                            marginTop: 40
                        }}>
                            Gọi Điện
                        </Text>
                    </View>
                </LinearGradient>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.container}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={[styles.container, { backgroundColor: theme.maunen }]}>
                            <View  >
                                <Text style={{
                                    fontSize: 25,
                                    padding: 20,
                                    color: theme.color,
                                    fontWeight: 'bold',
                                    marginTop: 10
                                }}>
                                    Thông Tin Khách Hàng
                                </Text>
                                {orders.map(order => (

                                    <View key={order.id}>
                                        <View style={[{
                                            marginLeft: 10,
                                            marginRight: 10,
                                            borderColor: 'gray',
                                            borderWidth: 1,
                                            marginBottom: 10,
                                            padding: 15,
                                            shadowColor: "#000",
                                            shadowOffset: {
                                                width: 0,
                                                height: 7,
                                            },
                                            shadowOpacity: 0.43,
                                            shadowRadius: 9.51,

                                            elevation: 15,
                                        }, { backgroundColor: theme.background }]}>
                                            <View style={{
                                                marginBottom: 30
                                            }}>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginTop: 10,
                                                    marginBottom: 15,
                                                }}>
                                                    <Text
                                                        style={[
                                                            {
                                                                fontSize: 20,
                                                                fontWeight: 'bold'
                                                            }
                                                            , {
                                                                color: theme.color
                                                            }]}
                                                    >
                                                        Đơn Hàng:
                                                    </Text>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        BD12
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginBottom: 15
                                                }}>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        Tên Khách Hàng:
                                                    </Text>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        {order.name}
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginBottom: 15
                                                }}>

                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        Số Điện Thoại:
                                                    </Text>
                                                    <Text style={{
                                                        fontSize: 20,
                                                        marginLeft: 10

                                                    }}>
                                                        {order.Number.slice(0, 7)}***
                                                    </Text>
                                                </View>

                                                <View style={{
                                                    flexDirection: 'row'
                                                }}>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        Địa Chỉ:
                                                    </Text>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        {order.Address}
                                                    </Text>
                                                </View>
                                                <View style={{
                                                    flexDirection: 'row',
                                                    marginTop: 15,
                                                    marginBottom: 20
                                                }}>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
                                                        Giờ Hẹn Khách:
                                                    </Text>
                                                    <Text style={[
                                                        {
                                                            fontSize: 20,
                                                            fontWeight: 'bold'
                                                        }
                                                        , {
                                                            color: theme.color
                                                        }]}>
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
        marginTop: -10,
        zIndex: -1
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