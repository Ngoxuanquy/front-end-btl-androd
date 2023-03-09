import { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Button,
    Dimensions,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'
import Modal from 'react-native-modalbox'
import { useHeaderHeight } from '@react-navigation/elements'

export default function DonXinNghiPhep({ navigation }) {
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false)
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const [LiDoNghi, setLiDoNghi] = useState('')
    const [CongViecBanGiao, setCongViecBanGiao] = useState('')
    const [CamKet, setCamKet] = useState('')
    const [donXin, setDonXin] = useState([])
    const [banGiaoCho, setBanGiaoCho] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const [currentModel, setCurrentModel] = useState({})

    const heightHeadeShow = useHeaderHeight()

    useEffect(() => {
        const fetchData = async () => {
            const respon = await fetch('http://192.168.1.156:1000/api/donxin/quy')
            const list = await respon.json()
            setDonXin(list)
        }

        fetchData()
    }, [])

    const donXinNghi = donXin.filter((item) => item.type === 'Đơn xin nghỉ phép')
    const tongSoNgayNghi = donXinNghi.reduce((a, b) => a + b.soNgayNghi, 0)

    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true)
    }
    const hideStartDatePicker = () => {
        setStartDatePickerVisibility(false)
    }
    const handleConfirmStart = (date) => {
        setStartDate(JSON.stringify(date).slice(1, 11).replace(/-/g, '/'))
        hideStartDatePicker()
    }

    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true)
    }
    const hideEndDatePicker = () => {
        setEndDatePickerVisibility(false)
    }
    const handleConfirmEnd = (date) => {
        setEndDate(JSON.stringify(date).slice(1, 11).replace(/-/g, '/'))
        hideEndDatePicker()
    }

    const handleSubmit = () => {
        let soNgayNghi = Number(endDate.slice(-2)) - Number(startDate.slice(-2))
        const m = Number(startDate.slice(-5, -3))
        if (soNgayNghi < 0) {
            if (m === 2) {
                soNgayNghi += 28
            } else if (m == 1 || m == 3 || m == 5 || m == 7 || m == 9 || m == 11) {
                soNgayNghi += 31
            } else {
                soNgayNghi += 30
            }
        }
        const data = {
            Date: startDate,
            endDate,
            soNgayNghi,
            LiDoNghi,
            CongViecBanGiao,
            CamKet,
            name: 'quy',
            type: 'Đơn xin nghỉ phép',
            status: 'Chờ duyệt',
            banGiaoCho,
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
                console.log('Success:')
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const renderRow = (data) => (
        <TouchableOpacity
            key={data.id}
            style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', marginVertical: 8 }}
            onPress={() => {
                setIsOpen(true)
                setCurrentModel(data)
            }}
        >
            <View style={{ flex: 0.5, alignSelf: 'stretch' }}>
                <Text>{data.id}</Text>
            </View>
            <View style={{ flex: 1.5, alignSelf: 'stretch' }}>
                <Text>{data.name}</Text>
            </View>
            <View style={{ flex: 3, alignSelf: 'stretch' }}>
                <Text>{`${data.Date} - ${data.endDate.slice(-5)}`}</Text>
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
                        width: '68%',
                        paddingVertical: 4,
                        borderRadius: 8,
                        color: 'white',
                        textAlign: 'center',
                    }}
                >
                    {data.status}
                </Text>
            </View>
        </TouchableOpacity>
    )

    const users = ['a1', 'a2', 'a3', 'a4', 'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4']

    return (
        <ScrollView
            style={{
                backgroundColor: 'white',
            }}
        >
            {isOpen && (
                <View style={{ flex: 1 }}>
                    <Modal
                        isOpen={isOpen}
                        onClosed={() => setIsOpen(false)}
                        style={{
                            height: 1000,
                            marginTop: heightHeadeShow + 10,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    fontSize: 24,
                                    paddingVertical: 12,
                                }}
                            >
                                Đơn xin nghỉ phép
                            </Text>
                            <View style={{ paddingHorizontal: 12 }}>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Tôi tên là: {currentModel.name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Chức vụ: Nhân viên
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Bộ phận: Phòng kỹ thuật
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Nay tôi làm đơn xin nghỉ phép từ: {currentModel.Date} Đến:{' '}
                                    {currentModel.endDate}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Tổng số ngày nghỉ: {currentModel.soNgayNghi}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Số ngày nghỉ phép trong năm còn lại: {5 - tongSoNgayNghi}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Số lần nghỉ sai quy định trong quý: 0
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Lí do: {currentModel.LiDoNghi}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Trong thời gian nghỉ phép tôi sẽ thông báo và bàn giao công việc
                                    cụ thể như sau:
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Công việc bàn giao: {currentModel.CongViecBanGiao}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Người bàn giao: {currentModel.banGiaoCho}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Tôi xin cam kết: {currentModel.CamKet}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Kính mong ban giám đốc xem xét và giải quyết.
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Tôi xin chân thành cảm ơn!
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingVertical: 8,
                                        borderBottomWidth: 1,
                                    }}
                                >
                                    Ngày tạo đơn: {currentModel.Date}
                                </Text>
                            </View>
                        </View>
                        <View style={{ position: 'absolute', top: 0, right: 0 }}>
                            <Button title="X" color="black" onPress={() => setIsOpen(false)} />
                        </View>
                    </Modal>
                </View>
            )}
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
                        <Text style={{ fontSize: 18 }}>
                            Số ngày nghỉ phép trong năm còn lại: {5 - tongSoNgayNghi}
                        </Text>
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
                                        fontSize: 20,
                                        fontWeight: '600',
                                    }}
                                >
                                    Nghỉ Từ Ngày:
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
                                                    paddingLeft: 12,
                                                }}
                                                value={startDate}
                                            />
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 7,
                                                }}
                                            >
                                                <TouchableOpacity onPress={showStartDatePicker}>
                                                    <MaterialIcons
                                                        name="date-range"
                                                        size={24}
                                                        color="black"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <DateTimePickerModal
                                            isVisible={isStartDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirmStart}
                                            onCancel={hideStartDatePicker}
                                        />
                                    </View>
                                </View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontWeight: '600',
                                    }}
                                >
                                    Bắt đầu đi Làm Ngày:
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
                                                    paddingLeft: 12,
                                                }}
                                                value={endDate}
                                            />
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    right: 10,
                                                    top: 7,
                                                }}
                                            >
                                                <TouchableOpacity onPress={showEndDatePicker}>
                                                    <MaterialIcons
                                                        name="date-range"
                                                        size={24}
                                                        color="black"
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        <DateTimePickerModal
                                            isVisible={isEndDatePickerVisible}
                                            mode="date"
                                            onConfirm={handleConfirmEnd}
                                            onCancel={hideEndDatePicker}
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
                                        Bàn giao cho
                                    </Text>
                                    <View
                                        style={{ justifyContent: 'center', alignItems: 'center' }}
                                    >
                                        <Picker
                                            selectedValue={banGiaoCho}
                                            onValueChange={(itemValue, itemIndex) =>
                                                setBanGiaoCho(itemValue)
                                            }
                                            style={{
                                                width: '90%',
                                                borderWidth: 1,
                                                backgroundColor: 'white',
                                                paddingHorizontal: 10,
                                            }}
                                        >
                                            {users.map((user, i) => (
                                                <Picker.Item key={i} label={user} value={user} />
                                            ))}
                                        </Picker>
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
                                            fontSize: 20,
                                            color: 'white',
                                            textAlign: 'center',
                                            paddingVertical: 7,
                                        }}
                                    >
                                        Gửi
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View>
                            <View
                                style={{
                                    flex: 1,
                                    alignSelf: 'stretch',
                                    flexDirection: 'row',
                                    marginVertical: 20,
                                }}
                            >
                                <View style={{ flex: 0.5, alignSelf: 'stretch' }}>
                                    <Text>Id</Text>
                                </View>
                                <View style={{ flex: 1.5, alignSelf: 'stretch' }}>
                                    <Text>Họ tên</Text>
                                </View>
                                <View style={{ flex: 3, alignSelf: 'stretch' }}>
                                    <Text>Ngày xin nghỉ</Text>
                                </View>
                                <View style={{ flex: 2, alignSelf: 'stretch' }}>
                                    <Text>Trạng thái</Text>
                                </View>
                            </View>
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            >
                                {donXinNghi.map((datum) => {
                                    return renderRow(datum)
                                })}
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
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal2: {
        height: 100,
        backgroundColor: '#3B5998',
    },

    btn: {
        margin: 10,
        backgroundColor: '#3B5998',
        color: 'white',
        padding: 10,
    },

    text: {
        color: 'black',
        fontSize: 22,
    },
})
