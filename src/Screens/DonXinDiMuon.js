import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import DateTime from '../Components/DateTime';

export default function DonXinDiMuon({ navigation }) {
    return (
        <ScrollView style={{
            backgroundColor: 'white'
        }} >
            <View>
                <View style={{
                    padding: 10,
                }}>
                    <View style={{
                        marginBottom: 20,
                    }}>
                        <TouchableOpacity style={{
                            backgroundColor: '#dddddd',
                            paddingVertical: 7,
                            width: 180,
                            borderRadius: 20
                        }}>
                            <Text style={{
                                fontSize: 20,
                                padding: 10,
                                textAlign: 'center'
                            }}>
                                Tạo Phiếu Mới
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{
                            backgroundColor: '#dddddd',
                            paddingVertical: 20,
                            paddingHorizontal: 10,
                            borderRadius: 7
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 23,
                                    fontWeight: '600'
                                }}>
                                    Ngày Nghỉ
                                </Text>
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: 10,
                                    marginBottom: 10
                                }}>
                                    <DateTime />
                                </View>

                                <View>
                                    <Text style={{
                                        fontSize: 20,
                                        padding: 5,
                                        marginBottom: 7,
                                        fontWeight: 'bold'
                                    }}>
                                        Lý Do Nghỉ
                                    </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                borderRadius: 6,
                                                paddingHorizontal: 10
                                            }}

                                            placeholder="Lý do nghỉ..."
                                            placeholderTextColor="black"
                                        />
                                    </View>
                                </View>


                                <View style={{
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        padding: 5,
                                        marginBottom: 7,
                                        fontWeight: 'bold'
                                    }}>
                                        Ghi Công Việc Bàn Giao
                                    </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                borderRadius: 6,
                                                paddingHorizontal: 10
                                            }}
                                            placeholder="Ghi Công Việc Bàn Giao..."
                                            placeholderTextColor="black"
                                        />
                                    </View>
                                </View>


                                <View style={{
                                    marginTop: 10
                                }}>
                                    <Text style={{
                                        fontSize: 20,
                                        padding: 5,
                                        marginBottom: 7,
                                        fontWeight: 'bold'
                                    }}>
                                        Cam Kết
                                    </Text>
                                    <View style={{
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                paddingHorizontal: 10
                                            }}
                                            placeholder="Cam Kết..."
                                            placeholderTextColor="black"
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity style={{
                                    backgroundColor: 'green',
                                    width: 80,
                                    opacity: 0.7,
                                    borderRadius: 7,
                                    marginBottom: 15,
                                    marginTop: 15,
                                    marginLeft: 10

                                }}>
                                    <Text style={{
                                        fontSize: 25,
                                        color: 'white',
                                        textAlign: 'center',
                                        paddingHorizontal: 7,
                                        paddingVertical: 7,
                                    }}>
                                        Lưu
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <Text style={{
                                fontSize: 20,
                                padding: 20
                            }}>
                                Phiếu Được Xác Nhận
                            </Text>
                        </View>


                        <View>
                            <Text style={{
                                fontSize: 20,
                                padding: 20
                            }}>
                                Phiếu Bị Từ Chối
                            </Text>
                        </View>
                    </View>

                </View>
            </View>
        </ScrollView >
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
