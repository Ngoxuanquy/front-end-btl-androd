import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Button,
    ScrollView,
    RefreshControl,
    Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Alert,
} from 'react-native';
import { Zocial } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
// import { Input } from '@rneui/themed';

import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

export default function ThongTinTaiKhoan() {
    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);

    const [isload, setIsLoad] = useState(false);
    const [image, setImage] = useState(null);
    const [isUpAnh, setUpAnh] = useState(false);
    const [taikhoan, setTaiKhoan] = useState([]);
    const [thongtin, setThongTin] = useState([]);

    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        const getIdFromStorage = async () => {
            try {
                const res = await AsyncStorage.getItem('id');
                setId(res);
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        };

        getIdFromStorage();
    }, []);

    useEffect(() => {
        const getTokenFromStorage = async () => {
            try {
                const res = await AsyncStorage.getItem('token');
                setToken(res);
            } catch (error) {
                // Handle errors here
                console.error(error);
            }
        };

        getTokenFromStorage();
    }, []);

    const pickImage = async () => {
        // setIsLoad(true)

        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log("image :" + image)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    function handerCance() {
        setIsLoad(false);
    }

    //khai báo thong tin tài khoản
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [name, setName] = useState('');

    //khai bao api của thông tin cá nhân
    const [apis, setApi] = useState([]);

    const getApi = () => {
        Call_Post_Api(null, token, id, '/contact/get/' + id).then((data) => {
            setApi(data.metadata);
        });
    };

    useEffect(() => {
        getApi();
    }, [token]);

    const handelUpdate = () => {
        Call_Post_Api(
            {
                address: address,
                phone: phone,
                userId: id,
                name: name,
            },
            token,
            id,
            '/contact',
        ).then((data) => {
            if (data.message == 'success') {
                alert('Cập nhật thông tin thành công!!!');
                getApi();
                setIsModalVisible(false);
            }
        });
    };

    const [refreshing, setRefreshing] = React.useState(true);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, [taikhoan]);

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {/* Model */}
            <Modal
                isVisible={isModalVisible}
                style={{
                    backgroundColor: theme.background,
                }}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    style={{
                        flex: 1,
                    }}
                >
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View
                            style={{
                                backgroundColor: theme.background,
                                flex: 1,
                                width: '100%',
                                marginTop: 30,
                                padding: 10,
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    marginLeft:
                                        Dimensions.get('window').width - 100,
                                }}
                                onPress={() => setIsModalVisible(false)}
                            >
                                <AntDesign
                                    name="close"
                                    size={30}
                                    color="gray"
                                />
                            </TouchableOpacity>

                            <View>
                                <View>
                                    <Text
                                        style={{
                                            padding: 20,
                                            fontSize: 22,
                                            color: theme.color,
                                        }}
                                    >
                                        Thông tin tài khoản
                                    </Text>
                                    <View>
                                        <Text
                                            style={{
                                                color: theme.color,
                                            }}
                                        >
                                            Tên đăng nhập :
                                        </Text>
                                        <Input
                                            onChangeText={(e) => setName(e)}
                                            placeholder={`${
                                                apis && apis.name
                                                    ? apis.name
                                                    : 'Default Placeholder Text'
                                            }`}
                                        />
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                color: theme.color,
                                            }}
                                        >
                                            Địa chỉ :
                                        </Text>
                                        <Input
                                            onChangeText={(e) => setAddress(e)}
                                            placeholder={`${
                                                apis && apis.address
                                                    ? apis.address
                                                    : 'Default Placeholder Text'
                                            }`}
                                        />
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                color: theme.color,
                                            }}
                                        >
                                            Số điện thoại :
                                        </Text>
                                        <Input
                                            onChangeText={(e) => setPhone(e)}
                                            placeholder={`${
                                                apis && apis.phone
                                                    ? apis.phone
                                                    : 'Default Placeholder Text'
                                            }`}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 20,
                                        }}
                                    >
                                        <Button
                                            title="Cập Nhật"
                                            onPress={() => handelUpdate()}
                                        ></Button>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </Modal>
            <View>
                <View
                    style={{
                        height: 160,
                    }}
                >
                    <LinearGradient
                        // Background Linear Gradient
                        start={{ x: 0.5, y: 0 }}
                        end={{ x: 0.5, y: 1 }}
                        colors={['#E8E8E8', '#B5B5B5', '#828282', '#696969']}
                        style={{
                            width: '100%',
                            height: 160,
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            position: 'absolute',
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 50,
                            }}
                        >
                            <Ionicons
                                name="ios-return-up-back"
                                size={27}
                                color="white"
                                style={{
                                    color: theme.color,
                                    marginTop: 5,
                                }}
                            />
                            <Text
                                style={{
                                    fontSize: 28,
                                    // color: 'white',
                                    textAlign: 'center',
                                    marginTop: 5,
                                    color: theme.color,
                                }}
                            >
                                Tài Khoản
                            </Text>
                            <Ionicons
                                name="notifications-outline"
                                size={27}
                                color="white"
                                style={{
                                    marginTop: 7,
                                    color: theme.color,
                                }}
                            />
                        </View>
                        <View
                            style={{
                                marginTop: -30,
                                marginLeft:
                                    Dimensions.get('window').width - 150,
                            }}
                        >
                            <LottieView
                                source={require('../../../assets/animation_lm5r13d2.json')}
                                autoPlay
                                loop
                                style={{
                                    height: 100,
                                    width: 100,
                                }}
                            />
                        </View>
                    </LinearGradient>
                </View>

                {/* Thông tin khách hàng */}
                <View
                    style={{
                        backgroundColor: theme.background,
                        height: 1000,
                        marginTop: -20,
                        zIndex: -10,
                    }}
                >
                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-around',
                                marginTop: 10,
                            }}
                        >
                            <Image
                                source={{
                                    uri: 'https://antimatter.vn/wp-content/uploads/2022/11/anh-avatar-trang-fb-mac-dinh.jpg',
                                }}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: 300,
                                }}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        padding: 20,
                                        color: theme.color,
                                    }}
                                >
                                    {taikhoan}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                padding: 20,
                                marginTop: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: theme.background,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 1,
                            }}
                        >
                            <View>
                                <Ionicons
                                    name="people"
                                    size={24}
                                    color={theme.color}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: theme.color,
                                    marginLeft: 10,
                                }}
                            >
                                Tài khoản:
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: theme.color,
                                }}
                            >
                                {apis && apis.name}
                            </Text>
                        </View>

                        <View
                            style={{
                                padding: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: theme.background,

                                marginTop: 10,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 11,
                            }}
                        >
                            <View>
                                <FontAwesome
                                    name="address-card-o"
                                    size={24}
                                    color={theme.color}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: theme.color,
                                    marginLeft: 10,
                                }}
                            >
                                Địa chỉ:
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: theme.color,
                                }}
                            >
                                {apis && apis.address}
                            </Text>
                        </View>

                        <View
                            style={{
                                padding: 20,
                                display: 'flex',
                                flexDirection: 'row',
                                backgroundColor: theme.background,
                                marginTop: 10,
                                shadowColor: '#000',
                                shadowOffset: {
                                    width: 0,
                                    height: 5,
                                },
                                shadowOpacity: 0.36,
                                shadowRadius: 6.68,

                                elevation: 11,
                            }}
                        >
                            <View>
                                <Feather
                                    name="phone"
                                    size={24}
                                    color={theme.color}
                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: theme.color,
                                    marginLeft: 10,
                                }}
                            >
                                Số điện thoại :
                            </Text>
                            <Text
                                style={{
                                    fontSize: 20,
                                    marginLeft: 10,
                                    color: theme.color,
                                }}
                            >
                                {apis && apis.phone}
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <Button
                            title="Cập Nhật"
                            onPress={() => setIsModalVisible(true)}
                        ></Button>
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
