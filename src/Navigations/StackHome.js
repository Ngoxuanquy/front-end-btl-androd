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
import XacNhanChiSo from '../Screens/XacNhanChiSo'
import PhieuPhat from '../Screens/PhieuPhat';
import PhieuDeNghi from '../Screens/ThieuDeNghi';
import PhieuGiaiTrinh from '../Screens/PhieuGiaiTrinh';
import DonXinNghiPhep from '../Screens/DonXinNghiPhep';
import DonXinNghiViec from '../Screens/DonXinNghiViec';
import DonXinDiMuon from '../Screens/DonXinDiMuon';
import XuatNhapKho from '../Screens/XuatNhapKho';
import KhoHangCaNhan from '../Screens/KhoHangCaNhan';
import PhieuMuon from '../Screens/PhieuMuon';
import PhieuMuonHang from '../Screens/NhapXuatKho/PhieuMuonHang';
import PhieuXuatKho from '../Screens/NhapXuatKho/PhieuXuatKho';
import PhieuDoiHang from '../Screens/NhapXuatKho/PhieuDoiHang';
import PhieuCapDo from '../Screens/NhapXuatKho/PhieuCapDo';
import PhieuThuDo from '../Screens/NhapXuatKho/PhieuThuHoiDo';
import SuaThanhToan from '../Screens/SuaThanhToan';
import DonVeSinh from '../Screens/DonHang/DonViSinh';


const Stack = createNativeStackNavigator();

function StackHomes() {
    return (
        <NavigationContainer independent={true}   >
            <Stack.Navigator options={{
                headerStyle: {
                    backgroundColor: '#789BF6',
                    height: 150,
                    // title: 'My home',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40
                },
                headerTintColor: '#fff',
            }}>
                <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Đơn Hàng" component={DonHang} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="QRCode" component={QRCode} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="DonDangThucHien" component={DonDangThucHien} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="KhoHang" component={KhoHang} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Lịch Sử Đơn Hàng" component={LichSuDonHang} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Duyệt Chi" component={Chart} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Lương Thưởng" component={LuongThuong} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Thông Báo Công Ty" component={ThongBao} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Nhập-Xuất Kho" component={XuatNhapKho} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',

                }} />
                <Stack.Screen name="Phiếu Mượn Hàng" component={PhieuMuonHang} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Phiếu Xuất Kho" component={PhieuXuatKho} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Phiếu Đổi Hàng" component={PhieuDoiHang} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Phiếu Cấp Đồ" component={PhieuCapDo} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Phiếu Thu Hồi Đồ" component={PhieuThuDo} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />

                <Stack.Screen name="Kho Hàng Cá Nhân" component={KhoHangCaNhan} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Phiếu Mượn" component={PhieuMuon} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="DonHang" component={Cart_Them} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Thủ Tục Hành Chính" component={ThuTucHanhChinh} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Chỉ Số Cá Nhân" component={ChiSoCaNhan} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Chi Tiết Đơn" component={SuaThanhToan} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
                <Stack.Screen name="Xác Nhận Chỉ Số" component={XacNhanChiSo} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Phiếu Phạt" component={PhieuPhat} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Phiếu Đề Nghị" component={PhieuDeNghi} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Phiếu Giải Trình" component={PhieuGiaiTrinh} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Đơn Xin Nghỉ Phép" component={DonXinNghiPhep} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Đơn Xin Nghỉ Việc" component={DonXinNghiViec} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Đơn Xin Đi Muộn" component={DonXinDiMuon} options={{
                    headerShown: true
                }} />
                <Stack.Screen name="Đơn Vệ Sinh" component={DonVeSinh} options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#789BF6',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40
                    },
                    headerTintColor: '#fff',
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackHomes;