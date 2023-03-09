import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function PhieuGiaiTrinh({ navigation }) {
    const [name, setName] = useState('')
    const [chucVu, setChucVu] = useState('')
    const [liDoDeNghi, setLiDoDeNghi] = useState('')
    const [noiDung, setNoiDung] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const respon = await fetch('http://192.168.1.156:1000/api/donxin/quy')
            const list = await respon.json()
            setList(list)
        }

        fetchData()
    }, [])

    const PhieuGiaiTrinh = list.filter((item) => item.type === 'Phiếu giải trình')
    const handleSubmit = () => {
        const date = new Date()
        console.log(date.getDate(), date.getSeconds())
        const data = {
            name: 'quy',
            type: 'Phiếu giải trình',
            LiDoNghi: liDoDeNghi,
            CamKet: noiDung,
            CongViecBanGiao: chucVu,
            Date: date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear(),
            status: 'Chờ duyệt',
        }
        fetch('http://192.168.1.156:1000/api/donxin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const renderRow = (data) => (
        <View
            key={data.id}
            style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', marginVertical: 8 }}
        >
            <View style={{ flex: 1, alignSelf: 'stretch' }}>
                <Text>{data.id}</Text>
            </View>
            <View style={{ flex: 2, alignSelf: 'stretch' }}>
                <Text>{data.name}</Text>
            </View>
            <View style={{ flex: 2, alignSelf: 'stretch' }}>
                <Text>{data.Date}</Text>
            </View>
            <View style={{ flex: 2, alignSelf: 'stretch' }}>
                <Text
                    style={{
                        backgroundColor:
                            data.status === 'Chờ duyệt'
                                ? 'orange'
                                : data.status === 'Đã duyệt'
                                ? 'blue'
                                : 'red',
                        width: '80%',
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderRadius: 8,
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    {data.status}
                </Text>
            </View>
        </View>
    )

    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
            }}
        >
            <View>
                <View
                    style={{
                        padding: 10,
                    }}
                >
                    <View
                        style={{
                            marginBottom: 20,
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                backgroundColor: '#dddddd',
                                paddingVertical: 7,
                                width: 180,
                                borderRadius: 20,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 10,
                                    textAlign: 'center',
                                }}
                            >
                                Tạo Phiếu Mới
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View
                            style={{
                                backgroundColor: '#dddddd',
                                paddingVertical: 20,
                                paddingHorizontal: 10,
                                borderRadius: 7,
                            }}
                        >
                            <View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            padding: 5,
                                            marginBottom: 7,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Tên
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                borderRadius: 6,
                                                paddingHorizontal: 10,
                                            }}
                                            placeholder=""
                                            placeholderTextColor="black"
                                            onChangeText={setName}
                                            value={name}
                                        />
                                    </View>
                                </View>
                                <View>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            padding: 5,
                                            marginBottom: 7,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Chức vụ
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                borderRadius: 6,
                                                paddingHorizontal: 10,
                                            }}
                                            placeholder="Chức vụ..."
                                            placeholderTextColor="black"
                                            onChangeText={setChucVu}
                                            value={chucVu}
                                        />
                                    </View>
                                </View>

                                <View
                                    style={{
                                        marginTop: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            padding: 5,
                                            marginBottom: 7,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Lí do giải trình
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                borderRadius: 6,
                                                paddingHorizontal: 10,
                                            }}
                                            placeholder="Lí do giải trình..."
                                            placeholderTextColor="black"
                                            value={liDoDeNghi}
                                            onChangeText={setLiDoDeNghi}
                                        />
                                    </View>
                                </View>

                                <View
                                    style={{
                                        marginTop: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            padding: 5,
                                            marginBottom: 7,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Nội dung chi tiết
                                    </Text>
                                    <View
                                        style={{
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <TextInput
                                            style={{
                                                width: '90%',
                                                height: 40,
                                                borderColor: 'gray',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                paddingHorizontal: 10,
                                            }}
                                            placeholder="Nội dung..."
                                            placeholderTextColor="black"
                                            value={noiDung}
                                            onChangeText={setNoiDung}
                                        />
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={{
                                        backgroundColor: 'green',
                                        width: 80,
                                        opacity: 0.7,
                                        borderRadius: 7,
                                        marginBottom: 15,
                                        marginTop: 15,
                                        marginLeft: 10,
                                    }}
                                    onPress={handleSubmit}
                                >
                                    <Text
                                        style={{
                                            fontSize: 25,
                                            color: 'white',
                                            textAlign: 'center',
                                            paddingHorizontal: 7,
                                            paddingVertical: 7,
                                        }}
                                    >
                                        Gửi
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <Text
                                style={{
                                    fontSize: 20,
                                    padding: 20,
                                }}
                            >
                                Phiếu đã giải trình
                            </Text>
                            <View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        flexDirection: 'row',
                                        marginVertical: 20,
                                    }}
                                >
                                    <View style={{ flex: 1, alignSelf: 'stretch' }}>
                                        <Text>Id</Text>
                                    </View>
                                    <View style={{ flex: 2, alignSelf: 'stretch' }}>
                                        <Text>Họ tên</Text>
                                    </View>
                                    <View style={{ flex: 2, alignSelf: 'stretch' }}>
                                        <Text>Ngày giải trình</Text>
                                    </View>
                                    <View style={{ flex: 2, alignSelf: 'stretch' }}>
                                        <Text>Trạng thái</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {PhieuGiaiTrinh.map((datum) => {
                                        return renderRow(datum)
                                    })}
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
