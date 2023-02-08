import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, RefreshControl } from 'react-native';

export default function PhieuPhat({ navigation }) {
    return (
        <ScrollView

        >
            <View>
                <View style={{
                    padding: 20
                }}>
                    <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                            Phiếu Phạt Tự Động
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
                            Phiếu Phạt Thủ Công
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
                            Phiếu Phạt đã xác nhận
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
                            Phiếu Phạt được miễn
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
