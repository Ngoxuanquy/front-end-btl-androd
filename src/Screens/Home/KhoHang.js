import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function KhoHang() {
    return (
        <View style={{
            flex: 1
        }} >
            <View>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 130,
                    marginLeft: 40,
                    marginRight: 40,
                    marginTop: 20,
                    backgroundColor: '#fff',
                    borderRadius: 7,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 7.27,

                    elevation: 10,

                }}>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FontAwesome name="book" size={24} color="black" style={{
                            marginRight: 5,
                            marginTop: 5
                        }} />
                        <Text style={{
                            fontSize: 18,
                            lineHeight: 35
                        }}>
                            Tổng SL tồn: 100
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row'
                    }}>
                        <FontAwesome name="money" size={24} color="black" />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 5
                        }}>
                            Tổng Tiền tồn kho: 100.000đ
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                backgroundColor: '#fff',
                flex: 1,
                marginTop: 20
            }}>
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
                            Đơn Giá
                        </Text>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: 'bold'
                        }}>
                            SL Tồn
                        </Text>
                    </View>

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
                                Lõi 1 Kang
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                100.000
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                12
                            </Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                            paddingVertical: 6
                        }}>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                Lõi 2 Kang
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                200.000
                            </Text>
                            <Text style={{
                                fontSize: 16,
                                lineHeight: 30
                            }}>
                                15
                            </Text>
                        </View>
                    </View>

                    <View>

                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
