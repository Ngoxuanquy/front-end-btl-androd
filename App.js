import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import Stacks from './src/Navigations/Stack.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { EventRegister } from 'react-native-event-listeners'

import ThemeConText from './config/themeConText.js';
import theme from './config/theme.js';

export default function App() {

  const [mode, setMode] = useState(false)

  useEffect(() => {
    let a = EventRegister.addEventListener('changeTheme', (data) => {
      setMode(data)
      console.log(data)
    })
    return () => {
      EventRegister.removeEventListener(a)

    }
  }, [])

  return (
    <ThemeConText.Provider value={mode === true ? theme.dark : theme.ligth}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stacks />
      </GestureHandlerRootView>
    </ThemeConText.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
