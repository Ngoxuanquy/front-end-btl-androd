import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function XuatNhapKho({ navigation }) {
    return (
        <View>
            <View>
                <View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            width: '90%',
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7
                        }}
                            onPress={() => navigation.replace('Phiếu Xuất Kho')}
                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                                Phiếu Xuất Kho
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            width: '90%',
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7
                        }}
                            onPress={() => navigation.replace('Phiếu Mượn Hàng')}

                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                                Phiếu Mượn Hàng
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            width: '90%',
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7
                        }}
                            onPress={() => navigation.replace('Phiếu Đổi Hàng')}

                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                                Phiếu Đổi Hàng
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            width: '90%',
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7
                        }}
                            onPress={() => navigation.replace('Phiếu Cấp Đồ')}

                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                                Phiếu Cấp Đồ
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <TouchableOpacity style={{
                            height: 60,
                            width: '90%',
                            backgroundColor: '#dddddd',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 7
                        }}
                            onPress={() => navigation.replace('Phiếu Thu Hồi Đồ')}

                        >
                            <Text style={{
                                textAlign: 'center',
                                fontSize: 20
                            }}>
                                Phiếu Thu Hồi Đồ
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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
