import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function ThongTinTaiKhoan() {
    return (
        <View >
            <View>
                <View>
                    <View style={{
                        backgroundColor: '#0097d9',
                        height: 90,
                        justifyContent: 'center',
                        borderBottomRightRadius: 50,
                        borderBottomLeftRadius: 50,
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around'

                        }}>
                            <Ionicons name="ios-return-up-back" size={27} color="white" style={{
                                marginTop: 5
                            }} />
                            <Text style={{
                                fontSize: 28,
                                color: 'white',
                                textAlign: 'center',
                                marginTop: 5
                            }}>
                                Tài Khoản
                            </Text>
                            <Ionicons name="notifications-outline" size={27} color="white" style={{
                                marginTop: 7
                            }} />
                        </View>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30
                }}>
                    <Image
                        style={{
                            width: 200,
                            height: 200,
                            borderRadius: 20
                        }}
                        source={
                            {
                                uri: 'https://image-us.24h.com.vn/upload/4-2019/images/2019-12-17/1576580871-929bdf4f16b86295376a79e7a8a0b7fe.jpg'
                            }
                        }
                    />

                    <View>
                        <Text style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 10
                        }}>
                            Ngô Xuân Quy
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            opacity: 0.6,
                            lineHeight: 70
                        }}>
                            Số Điện Thoại: 0589401978
                        </Text>
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center',
                            opacity: 0.6,
                        }} >
                            Địa Chỉ: Cửa Lò, Nghệ An
                        </Text>
                    </View>

                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <AntDesign name="mail" size={124} color="black" />
                        <Text style={{
                            fontSize: 18,
                            textAlign: 'center'
                        }}>
                            (Tệp Đính Kèm)
                        </Text>
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
