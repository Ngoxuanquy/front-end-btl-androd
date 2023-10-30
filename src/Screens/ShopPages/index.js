import {
    View,
    Text,
    Image,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import ThemeConText from '../../../config/themeConText';
import { LinearGradient } from 'expo-linear-gradient';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import { ButtonGroup } from 'react-native-elements';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LottieView from 'lottie-react-native';

const Index = ({ navigation }) => {
    // const theme = useContext(ThemeConText)
    const [theme, ordersLength] = useContext(ThemeConText);

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 1000);
    }, []);

    const [range, setRange] = useState({ min: 0, max: 100 });

    //Khai báo product
    const [products, setProduct] = useState([]);

    const getApi = (selectedIndexPage) => {
        Call_Post_Api(
            null,
            null,
            null,
            '/product/page/' + (Number(selectedIndexPage) + 1),
        )
            .then((responseData) => {
                // Handle the fetched data here
                console.log(responseData);
                setProduct(responseData.metadata);
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error(error);
            });
    };

    useEffect(() => {
        Call_Post_Api(
            null,
            null,
            null,
            '/product/page/' + (Number(selectedIndexPage) + 1),
        )
            .then((responseData) => {
                // Handle the fetched data here
                console.log(responseData);
                setProduct(responseData.metadata);
            })
            .catch((error) => {
                // Handle any errors that occurred during the fetch
                console.error(error);
            });
    }, [selectedIndexPage]);

    const [sliderValues, setSliderValues] = useState(100); // Điểm cuối mặc định của Slider

    const handleSliderChange = (values) => {
        console.log(values);
        setSliderValues(values); // Cập nhật giá trị khi Slider thay đổi
    };

    //button group
    const buttons = ['Váy', 'Quần', 'Áo', 'Giày', 'Túi'];
    const [selectedIndex, setSelectedIndex] = useState(0);

    const updateIndex = (selectedIndex) => {
        setSelectedIndex(selectedIndex);
    };

    //button group phân trang
    const button_Page = ['1', '2', '3', '4', '5'];
    const [selectedIndexPage, setSelectedIndexPage] = useState(0);

    const updateIndexPage = (selectedIndexPage) => {
        setSelectedIndexPage(selectedIndexPage);
        getApi(selectedIndexPage);
    };

    //range
    const [value, setValue] = useState(0);

    const onValueChange = (newValue) => {
        const roundedValue = Math.round(newValue);
        setValue(roundedValue);
    };

    const [values, setValues] = useState([0, 100]);

    const onValuesChange = (newValues) => {
        setValues(newValues);
    };

    const [fiterArrayProduct, setFiterProduct] = useState([]);

    const filterValues = (arr) => {
        return products.reduce(function (filtered, value) {
            if (value.product_price >= 10 && value.product_price <= 500) {
                // filtered.push(value);
                setFiterProduct(value);
            }
        }, []);
    };

    //Lọc giá
    useEffect(() => {
        const filteredProducts = products.filter((value) => {
            return (
                value.product_price >= values[0] &&
                value.product_price <= values[1]
            );
        });

        // Đặt kết quả lọc vào fiterArrayProduct
        setFiterProduct(filteredProducts);
    }, [values]);

    const handelSreach = () => {
        navigation.navigate('Tìm Kiếm');
    };

    return (
        <View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                        style={{
                            tintColor: 'black',
                            backgroundColor: '#7a84f3',
                            size: 10,
                            marginBottom: 0,
                            backgroundColor: theme.background,
                        }}
                    />
                }
            >
                <LinearGradient
                    // Background Linear Gradient
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    colors={['#bf57f4', '#997af4', '#878bf5', '#7a84f3']}
                    style={{
                        width: '100%',
                        height: 120,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        zIndex: 10,
                        marginBottom: -40,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: 20,
                                color: theme.color,
                            }}
                        >
                            ShopPage
                        </Text>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            right: 0,
                        }}
                    >
                        <TouchableOpacity onPress={() => handelSreach()}>
                            <LottieView
                                source={require('../../../assets/animation_lm6bbwhw.json')}
                                autoPlay
                                loop
                                style={{
                                    height: 70,
                                    width: 70,
                                    marginTop: 5,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>

                <View
                    style={{
                        backgroundColor: theme.background,
                    }}
                >
                    <ScrollView
                        horizontal
                        style={{
                            marginTop: 60,
                        }}
                    >
                        <ButtonGroup
                            buttons={buttons}
                            selectedIndex={selectedIndex}
                            onPress={updateIndex}
                            width={450}
                        />
                    </ScrollView>
                    <View
                        style={{
                            padding: 10,
                        }}
                    >
                        <Text
                            style={{
                                color: theme.color,
                            }}
                        >
                            Lọc sản phẩm
                        </Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <MultiSlider
                            values={values}
                            sliderLength={300} // Độ dài của slider
                            height={5}
                            min={0} // Giá trị tối thiểu
                            max={1000} // Giá trị tối đa
                            step={1} // Bước nhảy
                            onValuesChange={onValuesChange}
                            allowOverlap={false} // Không cho phép các phạm vi chồng lên nhau
                            snapped // Bật chế độ snapped để giá trị là số nguyên
                            trackStyle={{
                                height: 5,
                                backgroundColor: 'lightgray',
                            }} // Điều chỉnh chiều cao và màu sắc của track
                            selectedStyle={{ backgroundColor: 'green' }}
                        />
                        <View>
                            <Text
                                style={{
                                    color: theme.color,
                                }}
                            >
                                {' '}
                                {values[0]} đến {values[1]}{' '}
                            </Text>
                        </View>
                    </View>

                    {/* Sản phẩm lọc giá */}
                    <View>
                        {fiterArrayProduct == [] ? (
                            <View>
                                <Text>Sản phẩm theo giá</Text>
                            </View>
                        ) : null}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            {fiterArrayProduct &&
                                fiterArrayProduct.map((filteredProduct) => (
                                    <View
                                        key={filteredProduct._id}
                                        style={{
                                            borderColor: theme.color,
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            width: '45%',
                                            marginTop: 10,
                                            paddingTop: 5,
                                            padding: 10,
                                            backgroundColor:
                                                theme.backgroundColor,
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate('Detail', {
                                                    id_product:
                                                        filteredProduct._id,
                                                })
                                            }
                                            style={{
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                source={{
                                                    uri: filteredProduct.product_thumb,
                                                }}
                                                style={{
                                                    width: '95%',
                                                    height: 200,
                                                    aspectRatio: 0.9,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                onError={(error) =>
                                                    console.error(
                                                        'Image load error:',
                                                        error,
                                                    )
                                                }
                                            />
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-around',
                                                    width: '100%',
                                                    marginTop: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: theme.color,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {
                                                        filteredProduct.product_name
                                                    }
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: theme.color,
                                                    }}
                                                >
                                                    {
                                                        filteredProduct.product_price
                                                    }
                                                    .000$
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 40,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 10,
                                    color: theme.color,
                                }}
                            >
                                Sản phẩm nổi bật
                            </Text>
                        </View>

                        {/* <View>
                        <Text>Giá trị Slider: {sliderValues}</Text>
                        <Slider
                            style={{ width: 200 }}
                            minimumValue={0}
                            maximumValue={100}
                            step={1}
                            values={sliderValues}
                            onValuesChange={handleSliderChange}
                        />
                    </View> */}

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            {products &&
                                products.map((product) => (
                                    <View
                                        key={product._id}
                                        style={{
                                            borderColor: theme.color,
                                            borderWidth: 1,
                                            alignItems: 'center',
                                            width: '45%',
                                            marginTop: 10,
                                            paddingTop: 5,
                                            padding: 10,
                                            backgroundColor:
                                                theme.backgroundColor,
                                        }}
                                    >
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate('Detail', {
                                                    id_product: product._id,
                                                })
                                            }
                                            style={{
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                source={{
                                                    uri: product.product_thumb,
                                                }}
                                                style={{
                                                    width: '95%',
                                                    height: 200,
                                                    aspectRatio: 0.9,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                                onError={(error) =>
                                                    console.error(
                                                        'Image load error:',
                                                        error,
                                                    )
                                                }
                                            />
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    justifyContent:
                                                        'space-around',
                                                    width: '100%',
                                                    marginTop: 10,
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: theme.color,
                                                        textAlign: 'center',
                                                    }}
                                                >
                                                    {product.product_name}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: theme.color,
                                                    }}
                                                >
                                                    {product.product_price}.000$
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                        </View>
                    </View>
                    <View>
                        <View>
                            <ScrollView
                                horizontal
                                style={{
                                    marginTop: 30,
                                }}
                            >
                                <View
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100%',
                                        marginLeft: 30,
                                    }}
                                >
                                    <ButtonGroup
                                        buttons={button_Page}
                                        selectedIndex={selectedIndexPage}
                                        onPress={updateIndexPage}
                                        width={300}
                                    />
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Index;
