import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
// import ThuTucHanhChinh from './ThuTucHanhChinh';

export default function ThuTucHanhChinh() {
    return (
        <View style={styles.container}>
            <Text>ThongTinTaiKhoan</Text>

            <StatusBar style="auto" />
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
