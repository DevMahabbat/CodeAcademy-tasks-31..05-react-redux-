import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BlogScreen from '../../Screens/BlogScreen'
import BlogDetail from '../../Screens/BlogDetail'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux'
const Stack = createNativeStackNavigator()
const BlogStack = () => {
  const dark = useSelector<RootState,any>(state=> state.themeSlice.dark)
  return (
   <Stack.Navigator>

    <Stack.Screen name="BlogScreen" component={BlogScreen} options={{contentStyle: {backgroundColor: dark? "black" :"white"}}}/>
      <Stack.Screen name="BlogDetail" component={BlogDetail} options={{ contentStyle: { backgroundColor: dark ? "black" : "white" } }} />
   </Stack.Navigator>
  )
}

export default BlogStack

const styles = StyleSheet.create({})