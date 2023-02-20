import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import React, { useEffect, useState } from 'react';

export default function PhieuMuonHang({ navigation }) {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Cường', value: 'Cường' },
        { label: 'Quy', value: 'Quy' }
    ]);

    const [value1, setValue1] = useState(null);
    const [apis, setApi] = useState([])


    useEffect(() => {
        fetch('http://192.168.1.165:4000' + '/api/users/' + value)
            .then(res => res.json())
            .then(res => setApi(res[0].khohangcanhan))
            .catch((err) => console.log(err))
    }, [value])



    const [sanPhams, setSanPham] = useState([]);


    function handerMuon(id) {
        apis.map(api => {
            if (api.id == id) {
                setSanPham([...sanPhams, api])
            }
        })
    }

    console.log(sanPhams)

    function handerDelete(id) {
        console.log(id)
        var filtered = sanPhams.filter(function (value, index, arr) {
            return value.id != id;
        });

        setSanPham(filtered)
    }

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
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            marginBottom: 5,
                            borderWidth: 0.4,
                            borderColor: 'gray',
                            paddingVertical: 10
                        }}>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>
                                Tên Sản Phẩm
                            </Text>

                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>
                                SL Tồn
                            </Text>
                            <Text style={{
                                fontSize: 17,
                                fontWeight: 'bold'
                            }}>
                                Trạng Thái
                            </Text>
                        </View>
                        {apis.map(api => (
                            <View
                                key={api.id}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    // borderWidth: 0.4,
                                    // borderColor: 'gray',
                                    borderBottomColor: 'gray',
                                    borderBottomWidth: 1,
                                    paddingVertical: 6

                                }}>
                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 30
                                }}>
                                    {api.TenHang}
                                </Text>

                                <Text style={{
                                    fontSize: 16,
                                    lineHeight: 30
                                }}>
                                    {api.SoLuong}
                                </Text>
                                <TouchableOpacity style={{
                                    fontSize: 16,
                                    lineHeight: 30,
                                    marginTop: 7
                                }}
                                    onPress={() => handerMuon(api.id)}
                                >
                                    <Text>
                                        Mượn
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                    <ScrollView style={{
                        marginBottom: 300,
                        zIndex: -100
                    }}>

                        <View style={{
                            zIndex: -2000,
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
                                    {sanPhams == [] ? null : sanPhams.map((sanPham, index) => (

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
                                                    {sanPham.TenHang}
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

                                                >
                                                    1
                                                </TextInput>
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
                                                    backgroundColor: 'red',
                                                    opacity: 0.7,
                                                    borderRadius: 6
                                                }}
                                                    onPress={() => handerDelete(sanPham.id)}
                                                >
                                                    <Text style={{
                                                        textAlign: 'center',
                                                        color: 'white'
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
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
