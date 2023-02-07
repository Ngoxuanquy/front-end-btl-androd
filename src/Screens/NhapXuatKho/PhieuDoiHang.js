import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';

export default function PhieuDoiHang({ navigation }) {
    return (
        <ScrollView style={styles.container}>
            <View>
                <View>
                    <View style={{
                        padding: 10,
                        borderRadius: 7

                    }}>
                        <Text style={{
                            fontSize: 22,
                            marginBottom: 15
                        }}>
                            Đơn Hàng cần Đổi
                        </Text>
                        <View style={{
                            backgroundColor: '#eeeeee',
                            padding: 10
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Mã Đơn Hàng
                            </Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Tên KH
                            </Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Địa Chỉ
                            </Text>
                        </View>

                        <View style={{
                            backgroundColor: '#eeeeee',
                            padding: 10,
                            marginTop: 20,
                            borderRadius: 7
                        }}>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Mã Đơn Hàng
                            </Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Tên KH
                            </Text>
                            <Text style={{
                                fontSize: 18,
                                fontWeight: "500",
                                lineHeight: 40
                            }}>
                                Địa Chỉ
                            </Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={{
                                fontSize: 22,
                                padding: 10
                            }}>
                                Sản Phẩm cần đổi
                            </Text>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TextInput style={{
                                    height: 40,
                                    width: '90%',
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 6,
                                    paddingHorizontal: 10
                                }}
                                    placeholder="Search..."
                                    placeholderTextColor='black'
                                />
                            </View>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                padding: 10
                            }}>
                                Lý Do Đổi
                            </Text>
                        </View>
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

    },
});
