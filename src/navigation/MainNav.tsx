import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import BlogScreen from '../Screens/BlogScreen'
import BlogStack from './Stacks/BlogStack'
import SettingStack from './Stacks/SettingStack'

const MainNav = () => {
    const Tab = createBottomTabNavigator() 
    
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                headerShown: false}}>
<Tab.Screen name="BlogStack" component={BlogStack}/>
                <Tab.Screen name="SettingStack" component={SettingStack} />

            </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNav

const styles = StyleSheet.create({})