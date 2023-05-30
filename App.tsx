import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider, useDispatch } from 'react-redux'
import store, { AppDispatch } from './src/redux'
import MainNav from './src/navigation/MainNav'

const App = () => {
  return (
    <Provider store={store}>
    <MainNav />

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})