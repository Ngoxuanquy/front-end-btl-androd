import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';

export default function PhieuMuonHang({ navigation }) {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'Apple', value: 'apple' },
        { label: 'Banana', value: 'banana' }
    ]);

    const [sanPhams, setSanPham] = useState([]);

    useEffect(() => {
        setSanPham([...sanPhams, value1])
    }, [value1])

    console.log(sanPhams)

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <View >
                        <Text style={{
                            fontSize: 20,
                            padding: 10
                        }}>
                            Kho Cho Mượn
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginLeft: 15,
                            zIndex: 100,
                            backgroundColor: 'white',

                        }}>
                            <DropDownPicker
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 100,
                                    backgroundColor: 'white',
                                }}

                            />
                        </View>
                    </View>

                    <View style={{
                        zIndex: -1
                    }}>
                        <Text style={{
                            fontSize: 20,
                            padding: 10
                        }}>
                            Sản Phẩm Mượn
                        </Text>
                        <View style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginLeft: 15
                        }}>
                            <DropDownPicker
                                open={open1}
                                value={value1}
                                items={items1}
                                setOpen={setOpen1}
                                setValue={setValue1}
                                setItems={setItems1}
                                style={{
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}
                            />
                        </View>
                    </View>
                    <ScrollView style={{
                        marginBottom: 300
                    }}>

                        <View style={{
                            zIndex: -2,
                        }}>
                            <View>
                                <Text style={{
                                    fontSize: 22,
                                    padding: 10
                                }}>
                                    Sản Phẩm Đã Chọn
                                </Text>
                            </View>
                            <View style={{
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity style={{
                                    backgroundColor: '#dddddd',
                                    width: '90%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 7,
                                }}>
                                    {sanPhams.map((sanPham, index) => (

                                        <View
                                            key={index}

                                            style={{
                                                marginVertical: 10,
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                marginLeft: 20
                                            }}>
                                            <View style={{
                                                marginLeft: -50,
                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}>
                                                <Text
                                                    style={{
                                                        textAlign: 'center',
                                                        width: 60
                                                    }}>
                                                    {sanPham}
                                                </Text>
                                            </View>
                                            <View style={{
                                                marginRight: 40
                                            }}>

                                            </View>
                                            <View style={{
                                                flexDirection: 'row',
                                            }}>
                                                <TouchableOpacity style={{
                                                    width: 35, height: 35,
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'white'
                                                }}
                                                >
                                                    <Text>-</Text>
                                                </TouchableOpacity>
                                                <TextInput style={{
                                                    width: 50,
                                                    height: 35,
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    backgroundColor: 'white'

                                                }}

                                                >1</TextInput>
                                                <TouchableOpacity style={{
                                                    width: 35, height: 35,
                                                    borderColor: 'black',
                                                    borderWidth: 1,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'white',
                                                    marginRight: 20
                                                }}
                                                >
                                                    <Text>+</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{
                                                    width: 40,
                                                    height: 35,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderColor: 'black',
                                                    borderWidth: 0.4,

                                                }}>
                                                    <Text style={{
                                                        textAlign: 'center'
                                                    }}>
                                                        Xóa
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    ))}

                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={{
                            padding: 10
                        }}>
                            <TouchableOpacity style={{
                                backgroundColor: 'green',
                                opacity: 0.6,
                                width: 80,
                            }}>
                                <Text style={{
                                    fontSize: 22,
                                    color: 'white',
                                    textAlign: 'center',
                                    paddingVertical: 7
                                }}>
                                    Lưu
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            <View style={{
                                padding: 10
                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    lineHeight: 30
                                }}>
                                    NVKT khác yêu cầu mượn:

                                </Text>

                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 30
                                    }}>
                                        Ngô Xuân Quy mượn vòi bạc
                                    </Text>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'green',
                                        opacity: 0.6,
                                        width: 120,
                                        borderRadius: 8,
                                        marginLeft: 100
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            color: 'white',
                                            paddingVertical: 7,
                                            textAlign: 'center',
                                        }}>
                                            Xác Nhận
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 30
                                    }}>
                                        Ngô Xuân Quy mượn vòi bạc
                                    </Text>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'green',
                                        opacity: 0.6,
                                        width: 120,
                                        borderRadius: 8,
                                        marginLeft: 100
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            color: 'white',
                                            paddingVertical: 7,
                                            textAlign: 'center',
                                        }}>
                                            Xác Nhận
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Text style={{
                                        fontSize: 18,
                                        lineHeight: 30
                                    }}>
                                        Ngô Xuân Quy mượn vòi bạc
                                    </Text>
                                    <TouchableOpacity style={{
                                        backgroundColor: 'green',
                                        opacity: 0.6,
                                        width: 120,
                                        borderRadius: 8,
                                        marginLeft: 100
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            color: 'white',
                                            paddingVertical: 7,
                                            textAlign: 'center',
                                        }}>
                                            Xác Nhận
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>


                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
