import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PhieuGiaiTrinh({ navigation }) {
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
                            Tạo Phiếu Mới
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
                            Các Phiếu đã được xác nhận
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
                            Các Phiếu Bị Từ Chối
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
