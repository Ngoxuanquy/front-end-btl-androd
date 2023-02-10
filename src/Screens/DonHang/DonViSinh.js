import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function DonVeSinh({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 24,
                textAlign: 'center',
                paddingVertical: 10
            }}>
                Thông Tin Đơn Hàng</Text>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity style={{
                    borderColor: 'gray',
                    borderWidth: 0.4,
                    height: 200,
                    width: '90%',
                    borderRadius: 10,
                    padding: 15,
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,

                    elevation: 10,

                }}>
                    <Text style={{
                        fontSize: 20,
                        lineHeight: 40
                    }}>
                        1. Tên
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        lineHeight: 40
                    }}>
                        2. Địa Chỉ
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        lineHeight: 40
                    }}>
                        3. Lý Do Vệ Sinh
                    </Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
