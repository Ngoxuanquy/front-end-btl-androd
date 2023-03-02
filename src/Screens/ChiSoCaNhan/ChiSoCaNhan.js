import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import UpAnh from '../../Components/UpAnh';
export default function ChiSoCaNhan({ navigation }) {
    return (
        <View >
            <UpAnh />
            <View>
                <View style={{
                    padding: 20
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Tổng Hợp
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị các chỉ số như trong bảng cá nhân NVKT
                        </Text>
                    </View>

                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Chỉ Số Ngày
                        </Text>
                        <Text style={{
                            fontSize: 20,
                            padding: 10,
                            width: '90%',
                            marginLeft: 20
                        }}>
                            Hiện thị các chỉ số ngày của NVKT
                        </Text>
                    </View>

                    <View style={{
                        marginTop: 30
                    }}>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#dddddd',
                            paddingVertical: 14
                        }}
                            onPress={() => navigation.navigate('Xác Nhận Chỉ Số')}
                        >
                            <Text style={{
                                fontSize: 18,
                                color: 'gray'
                            }}>
                                Xác Nhận Chỉ Số
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#dddddd',
                            paddingVertical: 14,
                            marginTop: 20
                        }}
                            onPress={() => navigation.navigate('Phiếu Phạt')}

                        >
                            <Text style={{
                                fontSize: 18,
                                color: 'gray'
                            }}>
                                Phiếu Phạt
                            </Text>
                        </TouchableOpacity>
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
