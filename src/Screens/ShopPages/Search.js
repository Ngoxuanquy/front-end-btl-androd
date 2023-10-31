import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Call_Post_Api } from '../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Input } from 'react-native-elements';

const Search = ({ navigation }) => {
    //khai báo value
    const [value, setValue] = useState('');

    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    AsyncStorage.getItem('token').then((res) => setToken(res));

    const [apiSearch, setApiSearch] = useState([]);

    useEffect(() => {
        if (value) {
            Call_Post_Api(null, token, id, '/product/search/' + value).then(
                (data) => setApiSearch(data.metadata),
            );
        } else {
            setApiSearch([]);
        }
    }, [value]);

    return (
        <View
            style={{
                marginTop: 40,
            }}
        >
            <View>
                <View>
                    <Input
                        placeholder="Tìm kiếm sản phẩm !!"
                        style={{
                            padding: 10,
                        }}
                        onChangeText={(e) => setValue(e)}
                    />
                </View>
                <ScrollView style={{}}>
                    <View>
                        {apiSearch?.map((api) => (
                            <TouchableOpacity
                                key={api._id}
                                onPress={() =>
                                    navigation.replace('Detail', {
                                        id_product: api._id,
                                    })
                                }
                            >
                                <View
                                    style={{
                                        paddingHorizontal: 10,
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <View
                                        style={{
                                            padding: 10,
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }}
                                    >
                                        <Image
                                            source={{
                                                uri: api.product_thumb,
                                            }}
                                            style={{
                                                width: 70,
                                                height: 70,
                                                padding: 10,
                                            }}
                                        />
                                        <View
                                            style={{
                                                padding: 10,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                }}
                                            >
                                                {api.product_name}
                                            </Text>
                                            <Text>{api.product_price}</Text>
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <AntDesign
                                            name="close"
                                            size={24}
                                            color="black"
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View>
                        <Text
                            style={{
                                padding: 10,
                            }}
                        >
                            Sản phẩm bán chạy
                        </Text>
                        <View
                            style={{
                                paddingHorizontal: 10,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/370043376_303218885627748_3825166305107423191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=4ri4qXLTQY4AX9F-xz6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD_OOU3-LlXlvKPBgyW34NhWVJV-SUep7rbWa3HEWf9CA&oe=64FB8E11',
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        padding: 10,
                                    }}
                                />
                                <View
                                    style={{
                                        padding: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        Sản phẩm 3
                                    </Text>
                                    <Text>25.98$</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </View>
                    </View>

                    {/* sp2 */}
                    <View>
                        <View
                            style={{
                                paddingHorizontal: 10,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    paddingHorizontal: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/370043376_303218885627748_3825166305107423191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=4ri4qXLTQY4AX9F-xz6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD_OOU3-LlXlvKPBgyW34NhWVJV-SUep7rbWa3HEWf9CA&oe=64FB8E11',
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        padding: 10,
                                    }}
                                />
                                <View
                                    style={{
                                        padding: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        Sản phẩm 3
                                    </Text>
                                    <Text>25.98$</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </View>
                    </View>

                    {/* sp3 */}
                    <View
                        style={{
                            marginBottom: 150,
                        }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 10,
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <View
                                style={{
                                    padding: 10,
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}
                            >
                                <Image
                                    source={{
                                        uri: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/370043376_303218885627748_3825166305107423191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=49d041&_nc_ohc=4ri4qXLTQY4AX9F-xz6&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfD_OOU3-LlXlvKPBgyW34NhWVJV-SUep7rbWa3HEWf9CA&oe=64FB8E11',
                                    }}
                                    style={{
                                        width: 70,
                                        height: 70,
                                        padding: 10,
                                    }}
                                />
                                <View
                                    style={{
                                        padding: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                        }}
                                    >
                                        Sản phẩm 3
                                    </Text>
                                    <Text>25.98$</Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            >
                                <AntDesign
                                    name="close"
                                    size={24}
                                    color="black"
                                />
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

export default Search;
