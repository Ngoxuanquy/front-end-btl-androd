import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function XacNhanChiSo({ navigation }) {
    return (
        <View >
            <View>
                <View style={{
                    padding: 20
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Chờ Xác Nhận
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị như hiện tại
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Đã Xác Nhận
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị như hiện tại
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Đã Từ Chối
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị như hiện tại
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Đã Được Duyệt
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị như hiện tại
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Chờ PCN xử lý
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị như hiện tại
                        </Text>
                    </View>

                </View>
            </View>
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
});
