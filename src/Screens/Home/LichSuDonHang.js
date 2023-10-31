import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState, useContext } from 'react';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ThemeConText from '../../../config/themeConText';
import { ListItem, Button, Icon } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

const LichSuDonHang = () => {
    const [theme, ordersLength] = useContext(ThemeConText);

    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    AsyncStorage.getItem('token').then((res) => setToken(res));

    //khai báo apis thoogn tin đơn hàng
    const [apisTransaction, setApiTransaction] = useState();

    useEffect(() => {
        Call_Post_Api(null, token, id, '/transaction/getFullUseId/' + id).then(
            (data) => {
                if (data && data.metadata && data.metadata) {
                    setApiTransaction(data.metadata);
                } else {
                    setApiTransaction([]);
                }
            },
        );
    }, [ordersLength]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Call_Post_Api(
                    null,
                    token,
                    id,
                    '/transaction/getFullUseId/' + id,
                );
                if (data && data.metadata) {
                    // console.log(data.metadata);
                    // const transactionProducts = data.metadata.flatMap(
                    //     (transaction) => transaction.transaction_products,
                    // );

                    const resultArray = data?.metadata.map((item) => {
                        const transactionProducts = item.transaction_products;
                        const createdOn = item.createdOn;

                        // Kiểm tra xem transactionProducts có giá trị hay không, nếu không thì trả về một mảng rỗng
                        const mergedArray = transactionProducts
                            ? transactionProducts.map((product) => ({
                                  ...product,
                                  createdOnTran: createdOn,
                              }))
                            : [];

                        return mergedArray;
                    });

                    // Nếu bạn muốn gộp tất cả các giá trị thành một mảng duy nhất, bạn có thể sử dụng phương thức reduce
                    const flattenedArray = resultArray.reduce(
                        (acc, val) => acc.concat(val),
                        [],
                    );

                    setApiTransaction(flattenedArray);
                } else {
                    setApiTransaction([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setApiTransaction([]); // Xử lý lỗi bằng cách đặt mảng rỗng
            }
        };

        fetchData();
    }, [token]);

    // console.log({ apisTransaction });

    const [dones, setDone] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Call_Post_Api(
                    null,
                    token,
                    id,
                    '/transaction/getFullOrder_doneUseId/' + id,
                );
                if (data && data.metadata) {
                    const transactionProducts = data.metadata.flatMap(
                        (transaction) => transaction.transaction_products,
                    );
                    setDone(transactionProducts);
                } else {
                    setDone([]);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setDone([]); // Xử lý lỗi bằng cách đặt mảng rỗng
            }
        };

        fetchData();
    }, [token]);

    const handleLeftSwipe = () => {
        // Handle left swipe action
        console.log('Swiped left');
    };

    const handleRightSwipe = () => {
        // Handle right swipe action
        console.log('Swiped right');
    };

    // console.log(apisTransaction);

    //Xử lý hủy đơn
    const handlerHuyDon = (api) => {
        console.log(api.createdOnTran);
        const { createdOnTran, ...newProduct } = api;

        Call_Post_Api(
            {
                userId: id,
                newCartData: [newProduct],
                createdOn: api.createdOnTran,
            },
            token,
            id,
            '/transaction/deleteProduct',
        );
    };

    return (
        <ScrollView>
            <View>
                {/* <ListItem.Swipeable
                    leftWidth={80}
                    rightWidth={90}
                    minSlideWidth={40}
                    onSwipeBegin={() => {
                        console.log('Left swipe event');
                    }}
                    onSwipeableRightOpen={() => {
                        console.log('Right swipe event');
                    }}
                    leftContent={(action, progress) => (
                        <Button
                            containerStyle={{
                                flex: 1,
                                justifyContent: 'center',
                                backgroundColor: '#f4f4f4',
                            }}
                            // type="clear"
                            title=" abc"
                            icon={
                                <AntDesign
                                    name="menu"
                                    size={23}
                                    color={theme.color}
                                />
                            }
                            onPress={() => {
                                console.log('abc');
                                action();
                                handleLeftSwipe();
                            }}
                        />
                    )}
                    rightContent={() => {
                        return <Text>right</Text>;
                    }}
                >
                    <Icon name="label-important-outline" type="material" />
                    <ListItem.Content>
                        <ListItem.Title>Email from John Doe</ListItem.Title>
                        <ListItem.Subtitle>Hey, I'm John Doe</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem.Swipeable> */}
                <Text
                    style={{
                        padding: 10,
                        fontSize: 20,
                    }}
                >
                    Đơn hàng đã đặt
                </Text>
                <View>
                    {apisTransaction?.map((api, index) => (
                        <View
                            key={index}
                            style={{
                                padding: 10,
                                width: '100%',
                            }}
                        >
                            <View
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '90%',
                                    alignItems: 'center',
                                }}
                            >
                                <View>
                                    <Image
                                        source={{
                                            uri: api.product_thumb,
                                        }}
                                        style={{
                                            height: 100,
                                            width: 100,
                                        }}
                                    />
                                </View>
                                <View
                                    style={
                                        {
                                            // width: '0%',
                                        }
                                    }
                                >
                                    <Text
                                        style={{
                                            fontSize: 17,
                                        }}
                                    >
                                        {api.product_name}
                                    </Text>
                                    <View
                                        style={{
                                            display: 'flex',
                                            // justifyContent: 'flex-end',
                                            // alignItems: 'flex-end'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 14,
                                            }}
                                        >
                                            x{api.quantity}
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 14,
                                            }}
                                        >
                                            đ{api.product_price}.000
                                        </Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        backgroundColor: 'coral',
                                        alignItems: 'center', // Center horizontally
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Button
                                        title="Hủy"
                                        style={{
                                            fontSize: 14,
                                        }}
                                        onPress={() => handlerHuyDon(api)}
                                    ></Button>
                                </View>
                            </View>
                            <View
                                style={{
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    width: '100%',
                                    marginTop: 4,
                                }}
                            ></View>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        padding: 5,
                                    }}
                                >
                                    {api.quantity} sản phẩm
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        padding: 5,
                                    }}
                                >
                                    Thành Tiền :{' '}
                                    {api.quantity * api.product_price}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
                <View>
                    <View>
                        <Text
                            style={{
                                padding: 10,
                                fontSize: 20,
                            }}
                        >
                            Đơn hàng đã đóng
                        </Text>
                        <View>
                            {dones?.map((api) => (
                                <View
                                    key={api._id}
                                    style={{
                                        padding: 10,
                                    }}
                                >
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: api.product_thumb,
                                            }}
                                            style={{
                                                height: 100,
                                                width: 100,
                                            }}
                                        />
                                        <View
                                            style={{
                                                width: '100%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 17,
                                                }}
                                            >
                                                {api.product_name}
                                            </Text>
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    // justifyContent: 'flex-end',
                                                    // alignItems: 'flex-end'
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    x{api.quantity}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                    }}
                                                >
                                                    đ{api.product_price}.000
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            borderBottomColor: 'gray',
                                            borderBottomWidth: 1,
                                            width: '100%',
                                            marginTop: 4,
                                        }}
                                    ></View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                padding: 5,
                                            }}
                                        >
                                            {api.quantity} sản phẩm
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 16,
                                                padding: 5,
                                            }}
                                        >
                                            Thành Tiền :{' '}
                                            {api.quantity * api.product_price}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LichSuDonHang;
