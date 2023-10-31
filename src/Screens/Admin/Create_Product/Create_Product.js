import {
    View,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
// import { Button, Input } from '@rneui/themed';
import { animate } from '@dooboo-ui/native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { Call_Post_Api } from '../../../Call_post_api/Call_Post_Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
import { Button, Input } from 'react-native-elements';

const Create_Product = () => {
    const navigation = useNavigation();

    const [isVisible, setIsVisible] = useState(false);
    const [image, setImage] = useState(null);

    const [taikhoan, setTaiKhoan] = useState();
    const [token, setToken] = useState();
    const [id, setId] = useState();

    const [isLoading, setIsLoading] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(true);

    //Lấy dữ liệu từ asystore
    AsyncStorage.getItem('taikhoan').then((res) => setTaiKhoan(res));

    AsyncStorage.getItem('id').then((res) => setId(res));

    AsyncStorage.getItem('token').then((res) => setToken(res));

    //Lấy ảnh từ thư viện
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log("image :" + image)

        if (!result.canceled) {
            const source = { uri: result.assets[0].uri };
            setImage(source.uri);
        }
    };

    const [isLoad, setIsLoad] = useState(false);
    const [isUpAnh, setUpAnh] = useState(false);

    function handerUpAnh() {
        pickImage();
        setUpAnh(true);
        setIsVisible(true);
        setImage(null);
    }

    const [img_test, setImgTest] = useState([]);

    const uploadImage = async () => {
        // setIsLoading(true)
        setIsLoading(true);

        const CLOUD_NAME = 'dvqmndx5j';
        const PRESET_NAME = 'upload';
        const FOLDER_NAME = 'banhang';
        const url = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData();
        formData.append('upload_preset', PRESET_NAME);
        formData.append('folder', FOLDER_NAME);

        // formData.append('file', image)

        formData.append('file', {
            uri: image,
            // type: imageData.type,
            name: 'image.jpg', // You can change the name as needed
        });

        const res = await axios
            .post(api, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            .catch((err) => {
                console.error('Error uploading image:', err);
            });
        return res.data.url;
    };

    //Khai báo product
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState('');

    const handelSubmit = async () => {
        const img = await uploadImage();

        Call_Post_Api(
            {
                product_name: name,
                product_thumb: img,
                product_description: description,
                product_price: price,
                product_type: 'Electronics',
                product_quantity: Number(quantity),
                product_attributes: {
                    manufacturer: 'quy',
                    size: 'L',
                    color: 'Denim',
                },
            },
            token,
            id,
            '/product',
        ).then(() => {
            setIsLoading(false);
            alert('Tạo sản phẩm thành công!!');
            navigation.navigate('Danh sách sản phẩm');
        });
    };

    // console.log({ image })

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            {isLoading && (
                <Modal isVisible={isModalVisible} backdropOpacity={0.5}>
                    <View>
                        <ActivityIndicator />
                    </View>
                </Modal>
            )}
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{
                    flex: 1,
                }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                Tên sản phẩm:
                            </Text>
                            <Input onChangeText={(e) => setName(e)} />
                        </View>

                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                Giá:
                            </Text>
                            <Input onChangeText={(e) => setPrice(e)} />
                        </View>
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontSize: 18,
                                    }}
                                >
                                    Ảnh
                                </Text>
                                <Button
                                    style={{
                                        width: 100,
                                        marginBottom: 30,
                                    }}
                                    onPress={() => handerUpAnh()}
                                >
                                    <Text>Up Ảnh</Text>
                                </Button>
                            </View>
                            {image && (
                                <View>
                                    <Image
                                        source={{
                                            uri: image,
                                        }}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            marginLeft: 20,
                                        }}
                                    />
                                </View>
                            )}
                        </View>
                        <TouchableOpacity onPress={() => handelSubmit()}>
                            <Text>anhr</Text>
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                Số lượng trong kho:
                            </Text>
                            <Input onChangeText={(e) => setQuantity(e)} />
                        </View>

                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                }}
                            >
                                Mô tả sản phẩm:
                            </Text>
                            <Input onChangeText={(e) => setDescription(e)} />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

            <View style={{}}>
                <Button onPress={() => handelSubmit()}>
                    <Text>Xác nhận</Text>
                </Button>
            </View>
        </View>
    );
};

export default Create_Product;
