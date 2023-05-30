import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../redux'

const BlogDetail = ({navigation}:any) => {
const {blog}  = useSelector<RootState,any>((state) => state.blogslice)
  const { loading} = useSelector<RootState, any>((state) => state.blogslice)
  return (
    loading == "fullfilled"? (
    <View>
        <Button onPress={() => navigation.goBack()} title='Go Back' />
      <Text>{blog.title}</Text>
      </View> ): <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 250 }} />
  )
}

export default BlogDetail

const styles = StyleSheet.create({})