import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Screens/Home';
import Login from '../Screens/Login';
import QRCode from '../Screens/QRCode';
import DonDangThucHien from '../Screens/DonDangThucHien'
import KhoHang from './../Screens/KhoHang';
import LichSuDonHang from './../Screens/LichSuDonHang';
import Chart from '../Screens/Char';
import ThongBao from '../Screens/ThongBao'
import LuongThuong from './../Screens/LuongThuong';
import Cart_Them from '../Screens/Cart_Them';
import ChiSoCaNhan from '../Screens/ChiSoCaNhan';
import ThuTucHanhChinh from '../Screens/ThuTucHanhChinh';
import DonHang from '../Screens/DonHang';

const Stack = createNativeStackNavigator();

function StackHomes() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Đơn Hàng" component={DonHang} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="QRCode" component={QRCode} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="DonDangThucHien" component={DonDangThucHien} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="KhoHang" component={KhoHang} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Lịch Sử Đơn Hàng" component={LichSuDonHang} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Duyệt Chi" component={Chart} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Lương Thưởng" component={LuongThuong} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Thông Báo Công Ty" component={ThongBao} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="DonHang" component={Cart_Them} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Thủ Tục Hành Chính" component={ThuTucHanhChinh} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Chỉ Số Cá Nhân" component={ChiSoCaNhan} options={{
                    headerShown: true
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackHomes;