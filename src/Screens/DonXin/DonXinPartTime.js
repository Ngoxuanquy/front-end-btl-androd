import { View, Text, Button, Modal, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper'
import { TouchableOpacity } from 'react-native'
import Checkbox from 'expo-checkbox'

import { TextInput } from 'react-native-gesture-handler'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import DateTimePickerModal from 'react-native-modal-datetime-picker'

const DonXinPartTime = () => {
    const [lichDangKy, setLichDangKy] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [ngayDangKy, setNgayDangKy] = useState([])
    const [dangKyId, setDangKyId] = useState(null)
    const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false)
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false)
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://192.168.1.165:4000/api/dangkylichparttime')
            const data = await res.json()
            setLichDangKy(data.reverse())
        }

        fetchData()
    }, [])



    const showStartDatePicker = () => {
        setStartDatePickerVisibility(true)
    }
    const hideStartDatePicker = () => {
        setStartDatePickerVisibility(false)
    }
    const handleConfirmStart = (date) => {
        setStartDate(JSON.stringify(date).slice(1, 11))
        hideStartDatePicker()
    }

    const showEndDatePicker = () => {
        setEndDatePickerVisibility(true)
    }
    const hideEndDatePicker = () => {
        setEndDatePickerVisibility(false)
    }
    const handleConfirmEnd = (date) => {
        setEndDate(JSON.stringify(date).slice(1, 11))
        hideEndDatePicker()
    }

    const handleAdd = (item, type) => {
        const check = ngayDangKy.some((a) => a.id === item.id)
        if (!check) {
            setNgayDangKy((prev) => [...prev, item])
        } else {
            const newList = ngayDangKy.filter((a) => a.id !== item.id)
            if (type === 'sang') {
                const ngayDk = { ...item, sang: !item.sang }
                setNgayDangKy([...newList, ngayDk].sort((a, b) => a.id - b.id))
            } else if (type === 'chieu') {
                const ngayDk = { ...item, chieu: !item.chieu }
                setNgayDangKy([...newList, ngayDk].sort((a, b) => a.id - b.id))
            } else {
                const ngayDk = { ...item, toi: !item.toi }
                setNgayDangKy([...newList, ngayDk].sort((a, b) => a.id - b.id))
            }
        }
    }

    const handleSubmitNgayDk = () => {
        const data = {
            dangky_id: dangKyId,
            dates: ngayDangKy,
        }
        fetch('http://192.168.1.165:4000/api/LichDangKyParttime', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:')
                const fetchData = async () => {
                    const res = await fetch('http://192.168.1.165:4000/api/dangkylichparttime')
                    const data = await res.json()
                    setLichDangKy(data.reverse())
                }

                fetchData()
                setIsOpen(false)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const handleSubmitLichDk = () => {
        const data = {
            status: 'Chờ duyệt',
            startDate,
            endDate,
            user_id: 1,
        }

        fetch('http://192.168.1.165:4000/api/dangkylichparttime', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:::', data)
                handleClick(data.id)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    const handleClick = (id) => {
        setDangKyId(id)
        setIsOpen(true)
        fetch(`http://192.168.1.165:4000/api/lichdangkyparttime/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setNgayDangKy(data)
            })
    }

    return (
        <View>
            <View>
                <Text
                    style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 16 }}
                >
                    Tạo lịch làm việc mới
                </Text>
                <View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 20,
                        }}
                    >
                        Đăng ký từ ngày
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
                                        <MaterialIcons name="date-range" size={24} color="black" />
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
                            fontSize: 16,
                            fontWeight: '600',
                            marginLeft: 20,
                        }}
                    >
                        Đến ngày
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
                                        <MaterialIcons name="date-range" size={24} color="black" />
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
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TouchableOpacity
                            style={{
                                paddingHorizontal: 24,
                                paddingVertical: 8,
                                backgroundColor: 'blue',
                                marginRight: 20,
                                borderRadius: 10,
                            }}
                            onPress={() => handleSubmitLichDk()}
                        >
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>Lưu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Text style={{ textAlign: 'center', fontSize: 20, paddingVertical: 12 }}>
                Lịch đã đăng ký
            </Text>

            <View style={{ flex: 1 }}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={isOpen}
                    onRequestClose={() => {
                        console.log('Close')
                        setIsOpen(false)
                    }}
                >
                    <ScrollView style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                fontSize: 24,
                                paddingVertical: 12,
                            }}
                        >
                            Lịch đã đăng ký
                        </Text>
                        <View>
                            <DataTable>
                                <DataTable.Header>
                                    <DataTable.Title style={{ flex: 2 }}>Ngày</DataTable.Title>
                                    <DataTable.Title>Sáng</DataTable.Title>
                                    <DataTable.Title>Chiều</DataTable.Title>
                                    <DataTable.Title>Tối</DataTable.Title>
                                </DataTable.Header>
                            </DataTable>
                            {ngayDangKy.map((item) => (
                                <DataTable.Row key={item.id}>
                                    <DataTable.Cell style={{ flex: 2 }}>{item.date}</DataTable.Cell>
                                    <DataTable.Cell>
                                        <Checkbox
                                            value={item.sang}
                                            onValueChange={() => handleAdd(item, 'sang')}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Checkbox
                                            value={item.chieu}
                                            onValueChange={() => handleAdd(item, 'chieu')}
                                        />
                                    </DataTable.Cell>
                                    <DataTable.Cell>
                                        <Checkbox
                                            value={item.toi}
                                            onValueChange={() => handleAdd(item, 'toi')}
                                        />
                                    </DataTable.Cell>
                                </DataTable.Row>
                            ))}
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 32,
                                marginBottom: 60,
                                justifyContent: 'flex-end',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    paddingHorizontal: 16,
                                    paddingVertical: 8,
                                    marginRight: 20,
                                    borderRadius: 4,
                                    backgroundColor: '#d63232',
                                }}
                                onPress={() => setIsOpen(false)}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Đóng
                                </Text>
                            </TouchableOpacity>
                            {ngayDangKy.length > 0 && (
                                <TouchableOpacity
                                    style={{
                                        paddingHorizontal: 16,
                                        paddingVertical: 8,
                                        marginRight: 20,
                                        borderRadius: 4,
                                        backgroundColor: '#3c8dbc',
                                    }}
                                    onPress={handleSubmitNgayDk}
                                >
                                    <Text
                                        style={{
                                            fontSize: 16,
                                            color: 'white',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Lưu
                                    </Text>
                                </TouchableOpacity>
                            )}
                        </View>
                    </ScrollView>
                </Modal>
            </View>

            <View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Id</DataTable.Title>
                        <DataTable.Title>Trạng thái</DataTable.Title>
                        <DataTable.Title>Từ ngày</DataTable.Title>
                        <DataTable.Title>Đến ngày</DataTable.Title>
                    </DataTable.Header>
                    {lichDangKy.map((item) => (
                        <TouchableOpacity key={item.id} onPress={() => handleClick(item.id)}>
                            <DataTable.Row>
                                <DataTable.Cell>{item.id}</DataTable.Cell>
                                <DataTable.Cell>{item.status}</DataTable.Cell>
                                <DataTable.Cell>{item.startDate}</DataTable.Cell>
                                <DataTable.Cell>{item.endDate}</DataTable.Cell>
                            </DataTable.Row>
                        </TouchableOpacity>
                    ))}
                </DataTable>
            </View>
        </View>
    )
}

export default DonXinPartTime
