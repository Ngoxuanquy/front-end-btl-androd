import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function PhieuCapDo({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("ThuNhap")}
            >
                <Text>
                    test
                </Text>
            </TouchableOpacity>
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
