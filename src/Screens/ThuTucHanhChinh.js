import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
// import ThuTucHanhChinh from './ThuTucHanhChinh';

export default function ThuTucHanhChinh({ navigation }) {
    return (
        <ScrollView>
            <View>
                <View >
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            borderRadius: 10,
                            width: '90%'

                        }}
                            onPress={() => navigation.navigate('Phiếu Đề Nghị')}

                        >
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Phiếu Đề Nghị
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            width: '90%',
                            borderRadius: 10
                        }}
                            onPress={() => navigation.navigate('Phiếu Giải Trình')}

                        >
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Phiếu Giải Trình
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            borderRadius: 10,
                            width: '90%'

                        }}
                            onPress={() => navigation.navigate('Đơn Xin Nghỉ Phép')}

                        >
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Đơn Xin nghỉ phép
                            </Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            width: '90%',
                            borderRadius: 10
                        }}
                            onPress={() => navigation.navigate('Đơn Xin Nghỉ Việc')}

                        >
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Đơn Xin Nghỉ Việc
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            borderRadius: 10,
                            width: '90%'

                        }}
                            onPress={() => navigation.navigate('Đơn Xin Đi Muộn')}

                        >
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Đơn Xin đi muộn - về sớm
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            width: '90%',
                            borderRadius: 10
                        }}>
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Đơn Xin đăng ký parttime
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            marginTop: 20,
                            borderRadius: 10,
                            width: '90%'

                        }}>
                            <Text style={{
                                fontSize: 20,
                                opacity: 0.7,
                                textAlign: 'center',
                                paddingVertical: 17
                            }}>
                                Phiếu Đề Nghị
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ScrollView>
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
