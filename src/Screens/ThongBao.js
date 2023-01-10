import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'

// Options data must contain 'item' & 'id' keys
import { ScrollView } from 'react-native-virtualized-view'

const K_OPTIONS = [
    {
        item: 'Đơn Xin Nghỉ',
        id: 'JUVE',
    },
    {
        item: 'Giấy Đề Nghị',
        id: 'RM',
    },
    {
        item: 'Đăng Kí Lịch Partime',
        id: 'BR',
    },

]

const K_OPTIONS2 = [
    {
        item: 'Đơn Xin Nghỉ',
        id: 'JUVE',
    },
    {
        item: 'Giấy Đề Nghị',
        id: 'RM',
    },
    {
        item: 'Đăng Kí Lịch Partime',
        id: 'BR',
    },

]


const K_OPTIONS3 = [
    {
        item: 'Đơn Xin Nghỉ',
        id: 'JUVE',
    },
    {
        item: 'Giấy Đề Nghị',
        id: 'RM',
    },
    {
        item: 'Đăng Kí Lịch Partime',
        id: 'BR',
    },

]

function App() {
    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedTeam2, setSelectedTeam2] = useState({})
    const [selectedTeam3, setSelectedTeam3] = useState({})


    const [selectedTeams, setSelectedTeams] = useState([])
    return (
        <View style={{ margin: 30 }}>
            <ScrollView>
                <SelectBox
                    label="Thủ Tục Hành Chính"
                    options={K_OPTIONS}
                    value={selectedTeam}
                    onChange={onChange()}
                    hideInputFilter={false}
                    style={{

                    }}
                />
                <View style={{ height: 20 }} />

                <SelectBox
                    label="Đơn Hàng"
                    options={K_OPTIONS2}
                    value={selectedTeam2}
                    onChange={onChange2()}
                    hideInputFilter={false}
                />
                <View style={{ height: 20 }} />

                <SelectBox
                    label="Kho Hàng"
                    options={K_OPTIONS3}
                    value={selectedTeam3}
                    onChange={onChange3()}
                    hideInputFilter={false}
                />
                <View style={{ height: 20 }} />

                <View>
                    <TouchableOpacity style={{
                        height: 40
                    }} >
                        <Text style={{
                            fontSize: 18
                        }}>
                            Xác Nhận Bảng Lương
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{
                        height: 40
                    }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            Chỉ Số Cá Nhân
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={{
                        height: 40
                    }}>
                        <Text style={{
                            fontSize: 18
                        }}>
                            Duyệt Chi
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity >
                        <Text style={{
                            fontSize: 18
                        }}>
                            Thông Tin Cá Nhân
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 40 }} />
                <Text style={{ fontSize: 20, paddingBottom: 10 }}>MultiSelect Demo</Text>
                <SelectBox
                    label="Select multiple"
                    options={K_OPTIONS}
                    selectedValues={selectedTeams}
                    onMultiSelect={onMultiChange()}
                    onTapClose={onMultiChange()}
                    isMulti
                />
            </ScrollView>
        </View>
    )

    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
    }

    function onChange() {
        return (val) => setSelectedTeam(val)
    }

    function onChange2() {
        return (val) => setSelectedTeam2(val)
    }
    function onChange3() {
        return (val) => setSelectedTeam3(val)
    }
}

export default App
