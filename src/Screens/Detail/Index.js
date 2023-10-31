import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ThemeConText from '../../../config/themeConText';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { EventRegister } from 'react-native-event-listeners';
// import { Divider, Space, notification } from 'antd-mobile-rn';
import * as Notifications from 'expo-notifications';
import { Button } from 'react-native-elements';

const Index = ({ route }) => {
    const { id_product } = route.params;

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });

    //khai báo dack mode
    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);

    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    AsyncStorage.getItem('token').then((res) => setToken(res));

    const [apis, setApi] = useState([]);
    useEffect(() => {
        Call_Post_Api(null, token, id, '/product/byId/' + id_product)
            .then((responseData) => {
                // Handle the fetched data here
                setApi([responseData.metadata]);
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error(error);
            });
    }, []);

    //Xử lý số lượng

    const [soluong, setSoluong] = useState(1);

    const handleCong = () => {
        setSoluong(soluong + 1);
    };

    const handleTru = () => {
        if (soluong <= 1) {
            alert('Số lượng phải lớn hơn 1 !!!');
            return setSoluong(1);
        }

        return setSoluong(soluong - 1);
    };

    const [length, setOrderLength] = useState(0);

    const getApi = () => {
        Call_Post_Api(
            {
                userId: id,
            },
            token,
            id,
            '/cart/getlist',
        )
            .then((data) => {
                if (data && data.metadata && data.metadata.cart_products) {
                    setOrderLength(data.metadata.cart_products.length);
                }
            })
            .catch((err) => console.log({ err }));
    };

    useEffect(() => {
        getApi();
    }, [ordersLength]);

    useEffect(() => {
        getApi();
    }, [token]);

    const handelCart = () => {
        const newArray = apis[0];
        newArray['quantity'] = soluong;

        Call_Post_Api(
            {
                userId: id,
                shopId: '645f78f0ff400061f37e430d',
                product: newArray,
            },
            token,
            id,
            '/cart',
        ).then((data) => {
            // getApi()
            EventRegister.emit('chaneLength', length + 1);
            alert('Thêm vào giỏ hàng thành công!!!');
        });

        EventRegister.emit('chaneLength', length);
    };

    return (
        <View
            style={{
                backgroundColor: theme.background,
                flex: 1,
            }}
        >
            <View
                style={{
                    position: 'absolute',
                    bottom: -15,
                    zIndex: 100,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        width: '100%',
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#40B379',
                            padding: 10,
                            borderRightWidth: 1,
                            borderRightColor: 'gray',
                            flex: 0.6,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign
                            name="message1"
                            size={24}
                            color={theme.color}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 12,
                                color: theme.color,
                            }}
                        >
                            Chat ngay
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#40B379',
                            padding: 10,
                            flex: 1.2,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onPress={() => handelCart()}
                    >
                        <FontAwesome
                            name="cart-arrow-down"
                            size={24}
                            color={theme.color}
                        />
                        <Text
                            style={{
                                fontSize: 12,
                                color: theme.color,
                            }}
                        >
                            Thêm vào giỏ hàng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'coral',
                            padding: 10,
                            flex: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                marginLeft: -45,
                                fontSize: 16,
                                color: theme.color,
                            }}
                        >
                            Mua ngay
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View>
                    <View>
                        {apis &&
                            apis.map((api) => (
                                <View key={api._id}>
                                    <View>
                                        <Image
                                            source={{
                                                uri: api.product_thumb,
                                            }}
                                            style={{
                                                width: '100%',
                                                height: 400,
                                            }}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            marginTop: 0,
                                        }}
                                    >
                                        <LinearGradient
                                            // Background Linear Gradient
                                            colors={[
                                                '#ffffff',
                                                '#B4DDED',
                                                '#83C0F2',
                                                '#7a84f3',
                                            ]}
                                            style={{
                                                width: '100%',
                                                zIndex: 10,
                                                padding: 20,
                                            }}
                                            start={{ x: 0, y: 0 }} // Start from the left
                                            end={{ x: 1, y: 0 }} // End at the right
                                        >
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-between',
                                                }}
                                            >
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                    }}
                                                >
                                                    <Text
                                                        style={{
                                                            fontSize: 13,
                                                            marginTop: 3,
                                                            textDecorationLine:
                                                                'line-through',
                                                            // color: theme.color,
                                                        }}
                                                    >
                                                        250.000$
                                                    </Text>
                                                    <Text
                                                        style={{
                                                            fontSize: 18,
                                                            color: theme.color,
                                                            marginLeft: 10,
                                                        }}
                                                    >
                                                        {api.product_price}.000
                                                        $
                                                    </Text>
                                                </View>
                                                <View>
                                                    <Text
                                                        style={{
                                                            color: theme.color,
                                                        }}
                                                    >
                                                        Kết thúc trong 1h
                                                    </Text>
                                                </View>
                                            </View>
                                        </LinearGradient>
                                    </View>
                                    <Text
                                        style={{
                                            fontSize: 22,
                                            padding: 10,
                                            color: theme.color,
                                        }}
                                    >
                                        {api.product_name}
                                    </Text>
                                    <Text
                                        style={{
                                            color: theme.color,
                                            paddingHorizontal: 10,
                                        }}
                                    >
                                        Vào thu rồi các đôi đã có áo mặc
                                        chưa🤣🤣{'\n'}
                                        Vào lựa nhanh tay nào
                                    </Text>

                                    <View
                                        style={{
                                            padding: 10,
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-around',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 20,
                                                textAlign: 'center',
                                                marginTop: 12,
                                                color: theme.color,
                                            }}
                                        >
                                            Số Lượng:
                                        </Text>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Button
                                                style={{
                                                    width: 40,
                                                    color: theme.color,
                                                }}
                                                onPress={() => handleTru()}
                                                title="-"
                                            >
                                                -
                                            </Button>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        width: 40,
                                                        height: 40,
                                                        textAlign: 'center',
                                                        marginTop: 15,
                                                        color: theme.color,
                                                    }}
                                                >
                                                    {soluong}
                                                </Text>
                                            </View>
                                            <Button
                                                style={{
                                                    width: 40,
                                                    color: theme.color,
                                                }}
                                                onPress={() => handleCong()}
                                                title="+"
                                            >
                                                +
                                            </Button>
                                        </View>
                                    </View>
                                </View>
                            ))}
                    </View>

                    <View
                        style={{
                            backgroundColor: '#eeeeee',
                            padding: 10,
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View>
                            <Text
                                style={
                                    {
                                        // color: theme.color
                                    }
                                }
                            >
                                Miễn phí vận chuyển
                            </Text>
                            <Text
                                style={{
                                    fontSize: 10,
                                    // color: theme.color
                                }}
                            >
                                Miễn phí vẫn chuyển trên 90k
                            </Text>
                        </View>
                        <View>
                            <AntDesign
                                name="right"
                                size={20}
                                color="black"
                                style={{
                                    marginTop: 7,
                                }}
                            />
                        </View>
                    </View>
                </View>

                {/* Các sản phẩm tương tự */}

                <View>
                    <Text
                        style={{
                            padding: 10,
                            color: theme.color,
                        }}
                    >
                        Các Sản Phẩm Tương Tự
                    </Text>
                    <View
                        style={{
                            zIndex: -1,
                            marginBottom: 100,
                        }}
                    >
                        <ScrollView horizontal>
                            <View>
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369348017_299608405988796_1561103687398613495_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=M639zy_-vqMAX9cP9h1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBev93PdmP3ldUZUJGWGJXSJfhwGqCXklGjNWeBqqSaOA&oe=64FC9D43',
                                    }}
                                    style={{
                                        width: 180,
                                        height: 200,
                                        zIndex: -1,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                            <View>
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369348017_299608405988796_1561103687398613495_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=M639zy_-vqMAX9cP9h1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBev93PdmP3ldUZUJGWGJXSJfhwGqCXklGjNWeBqqSaOA&oe=64FC9D43',
                                    }}
                                    style={{
                                        width: 180,
                                        height: 200,
                                        zIndex: -1,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                            <View>
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/369348017_299608405988796_1561103687398613495_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=49d041&_nc_ohc=M639zy_-vqMAX9cP9h1&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBev93PdmP3ldUZUJGWGJXSJfhwGqCXklGjNWeBqqSaOA&oe=64FC9D43',
                                    }}
                                    style={{
                                        width: 180,
                                        height: 200,
                                        zIndex: -1,
                                        marginLeft: 10,
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;
