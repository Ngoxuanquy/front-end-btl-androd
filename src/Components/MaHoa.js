import * as Keychain from 'react-native-keychain';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

function MaHoa() {

    const [taikhoan, setTaiKhoan] = useState([])
    const [token, setToken] = useState([])


    async () => {

        AsyncStorage.getItem('taikhoan')
            .then(res =>
                setTaiKhoan(res)
            )

        AsyncStorage.getItem('token')
            .then(res =>
                setToken(res)
            )

        // Store the credentials
       
    }
}

export default MaHoa
