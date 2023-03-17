import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LinearGradient from 'react-native-linear-gradient';
import Home from '../Screens/Home/HomeScrem'
import QRCode from '../Screens/Home/QRCode'
import DonDangThucHien from '../Screens/DonHang/DonDangThucHien'
import KhoHang from './../Screens/Home/KhoHang'
import LichSuDonHang from './../Screens/Home/LichSuDonHang'
import Chart from '../Components/Char'
import ThongBao from '../Screens/ThongBao/ThongBao'
import LuongThuong from './../Screens/Home/LuongThuong'
import Cart_Them from '../Screens/Cart/Cart_Them'
import ChiSoCaNhan from '../Screens/ChiSoCaNhan/ChiSoCaNhan'
import ThuTucHanhChinh from '../Screens/Home/ThuTucHanhChinh'
import DonHang from '../Screens/Home/DonHang'
import XacNhanChiSo from '../Screens/ChiSoCaNhan/XacNhanChiSo'
import PhieuPhat from '../Screens/DonXin/PhieuPhat'
import PhieuDeNghi from '../Screens/DonXin/ThieuDeNghi'
import PhieuGiaiTrinh from '../Screens/DonXin/PhieuGiaiTrinh'
import DonXinNghiViec from '../Screens/DonXin/DonXinNghiViec'
import DonXinDiMuon from '../Screens/DonXin/DonXinDiMuon'
import XuatNhapKho from '../Screens/Home/XuatNhapKho'
import KhoHangCaNhan from '../Screens/ChiSoCaNhan/KhoHangCaNhan'
import PhieuMuon from '../Screens/NhapXuatKho/LichSuMuon'
import PhieuMuonHang from '../Screens/NhapXuatKho/PhieuMuonHang'
import PhieuXuatKho from '../Screens/NhapXuatKho/PhieuXuatKho'
import PhieuDoiHang from '../Screens/NhapXuatKho/PhieuDoiHang'
import PhieuCapDo from '../Screens/NhapXuatKho/PhieuCapDo'
import PhieuThuDo from '../Screens/NhapXuatKho/PhieuThuHoiDo'
import SuaThanhToan from '../Screens/Cart/SuaThanhToan'
import DonVeSinh from '../Screens/DonHang/DonViSinh'
import ChiTietThongBao from '../Screens/ThongBao/ChiTietThongBao'
import DonChoThucHien from '../Screens/DonHang/DonChoThucHien'
import DonDaHoanThanh from '../Screens/DonHang/DonHoanThanh'
import DonThuNo from '../Screens/DonHang/DonThuNo'
import DonKhachNo from '../Screens/DonHang/DonKhachNo'
import DonHoanThanh from '../Screens/DonHang/DonHoanThanh'
import DonChuaBanGiao from '../Screens/DonHang/DonChuaBanGiao'
import DonXinNghiPhep from '../Screens/DonXin/DonXinNghiPhep';
import DonXinPartTime from '../Screens/DonXin/DonXinPartTime';
import XemLaiChiTiet from './../Screens/ThongBao/XemLaiChiTiet';
import ChiTietDonDangThucHien from './../Screens/DonHang/ChiTietDonDangThucHien';




const Stack = createNativeStackNavigator()

function StackHomes() {
    return (
        <Stack.Navigator
            options={{
                headerStyle: {
                    backgroundColor: '#262626',
                    height: 150,
                    // title: 'My home',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                },
                headerTintColor: '#fff',
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Đơn Hàng"
                component={DonHang}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="QRCode"
                component={QRCode}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DonDangThucHien"
                component={DonDangThucHien}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="KhoHang"
                component={KhoHang}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Lịch Sử Đơn Hàng"
                component={LichSuDonHang}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Duyệt Chi"
                component={Chart}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Lương Thưởng"
                component={LuongThuong}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Thông Báo Công Ty"
                component={ThongBao}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Nhập-Xuất Kho"
                component={XuatNhapKho}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Mượn Hàng"
                component={PhieuMuonHang}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Xuất Kho"
                component={PhieuXuatKho}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Đổi Hàng"
                component={PhieuDoiHang}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Cấp Đồ"
                component={PhieuCapDo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Thu Hồi Đồ"
                component={PhieuThuDo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Kho Hàng Cá Nhân"
                component={KhoHangCaNhan}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Lịch Sử Phiếu Mượn"
                component={PhieuMuon}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="DonHang"
                component={Cart_Them}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Thủ Tục Hành Chính"
                component={ThuTucHanhChinh}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Chỉ Số Cá Nhân"
                component={ChiSoCaNhan}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Chi Tiết Đơn"
                component={SuaThanhToan}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Xác Nhận Chỉ Số"
                component={XacNhanChiSo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Phạt"
                component={PhieuPhat}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Đề Nghị"
                component={PhieuDeNghi}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Phiếu Giải Trình"
                component={PhieuGiaiTrinh}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Xin Nghỉ Phép"
                component={DonXinNghiPhep}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Xin Nghỉ Việc"
                component={DonXinNghiViec}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Xin Đi Muộn"
                component={DonXinDiMuon}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Vệ Sinh"
                component={DonVeSinh}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Chi Tiết Thông Báo"
                component={ChiTietThongBao}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Đơn Thu Nợ"
                component={DonThuNo}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Đã Hoàn Thành"
                component={DonDaHoanThanh}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Khách Nợ"
                component={DonKhachNo}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Chờ Thực Hiện"
                component={DonChoThucHien}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#262626',
                        backgroundColor: "linear-gradient(-90deg, purple, pink)",
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Hoàn Thành"
                component={DonHoanThanh}
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
            <Stack.Screen
                name="Đơn Chưa Bàn Giao"
                component={DonChuaBanGiao}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Đơn Xin nghỉ phép"
                component={DonXinNghiPhep}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />


            <Stack.Screen
                name="Đơn Xin Part Time"
                component={DonXinPartTime}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Xem Lại Chi Tiết"
                component={XemLaiChiTiet}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Chi Tiết Đơn Đang Thực Hiện"
                component={ChiTietDonDangThucHien}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />

            <Stack.Screen
                name="Đơn Đang Thực Hiện"
                component={DonDangThucHien}
                options={{
                    headerShown: true,
                    headerStyle: {
                        backgroundColor: '#262626',
                        height: 150,
                        // title: 'My home',
                        borderBottomLeftRadius: 40,
                        borderBottomRightRadius: 40,
                    },
                    headerTintColor: '#fff',
                }}
            />
        </Stack.Navigator>
    )
}

export default StackHomes