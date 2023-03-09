import { StatusBar } from 'expo-status-bar'
import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

export default function DonXinNghiViec({ navigation }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [Date, setDate] = useState()
    const [LiDoNghi, setLiDoNghi] = useState('')
    const [CongViecBanGiao, setCongViecBanGiao] = useState('')
    const [CamKet, setCamKet] = useState('')
    const [list, setList] = useState([])

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleConfirm = (date) => {
        setDate(JSON.stringify(date).slice(1, 11).replace(/-/g, '/'))
        hideDatePicker()
    }

    useEffect(() => {
        const fetchData = async () => {
            const respon = await fetch('http://192.168.1.156:1000/api/donxin/quy')
            const list = await respon.json()
            setList(list)
        }

        fetchData()
    }, [])

    const donXinNghiViec = list.filter((item) => item.type === 'Đơn xin nghỉ việc')

    const handleSubmit = () => {
        const data = {
            Date,
            LiDoNghi,
            CongViecBanGiao,
            CamKet,
            name: 'quy',
            type: 'Đơn xin nghỉ việc',
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
        <View key={data.id} style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
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
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: '600',
                                    }}
                                >
                                    Ngày Nghỉ
                                </Text>
                                <View
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        marginTop: 10,
                                        marginBottom: 10,
                                    }}
                                >
                                    <View>
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '90%',
                                            }}
                                        >
                                            <TextInput
                                                style={{
                                                    width: '100%',
                                                    height: 40,
                                                    borderColor: 'gray',
                                                    borderWidth: 1,
                                                    backgroundColor: 'white',
                                                    borderRadius: 6,
                                                }}
                                                value={Date}
                                            />
                                            {/* <Button title="Show Date Picker"  /> */}
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 7,
                                                }}
                                            >
                                                <TouchableOpacity onPress={showDatePicker}>
                                                    <MaterialIcons
                                                        name="date-range"
                                                        size={24}
                                                        color="black"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <DateTimePickerModal
                                            isVisible={isDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirm}
                                            onCancel={hideDatePicker}
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
                                        Lý Do Nghỉ
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
                                            placeholder="Lý do nghỉ..."
                                            placeholderTextColor="black"
                                            onChangeText={setLiDoNghi}
                                            value={LiDoNghi}
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
                                        Ghi Công Việc Bàn Giao
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
                                            placeholder="Ghi Công Việc Bàn Giao..."
                                            placeholderTextColor="black"
                                            value={CongViecBanGiao}
                                            onChangeText={setCongViecBanGiao}
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
                                        Cam Kết
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
                                            placeholder="Cam Kết..."
                                            placeholderTextColor="black"
                                            value={CamKet}
                                            onChangeText={setCamKet}
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
                                Phiếu Chờ Xác Nhận
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
                                        <Text>Ngày xin nghỉ</Text>
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
                                    {donXinNghiViec.map((datum) => {
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
