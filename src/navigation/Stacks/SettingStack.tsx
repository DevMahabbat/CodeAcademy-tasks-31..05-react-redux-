import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ThemeScreeen from '../../Screens/ThemeScreen'
const Stack = createNativeStackNavigator()
const SettingStack = () => {
  return (
  
          <Stack.Navigator>
            <Stack.Screen name='ThemeScreen' component={ThemeScreeen} />
          </Stack.Navigator>
  
  )
}

export default SettingStack

const styles = StyleSheet.create({})