import { ActivityIndicator, FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../redux'
import { getAllBlogs } from '../redux/slices/blogslice'
import BlogItem from '../components/BlogItem'
import { Blog } from '../types/Blog'
import { useIsFocused } from '@react-navigation/native'

const BlogScreen = ({ navigation }: any) => {
    const isFocused = useIsFocused()
    const [searchText, setSearchText] = useState("")
    const [dataToShow,setDataToShow] = useState<Array<Blog>>([])
    const dispatch = useDispatch<AppDispatch>()
    const { blogs, loading, error } = useSelector((state: RootState) => state.blogslice)
console.log('====================================');
console.log(loading);
console.log('====================================');

    useEffect(() => {
        dispatch(getAllBlogs())
        setDataToShow([...blogs])
  
    }, [])


    // useEffect(() => {
    //     blogstoshow = blogs
    // }, [isFocused])
    // const gotoDetail = () => {
    //     navigation.navigate("BlogDetail")
    // }
    function handlesearch(value:any) {
        let newarr = blogs.filter((q: any) => q.title.toLowerCase().includes(value.toLowerCase()));
        setDataToShow([...newarr])
        console.log('==============1======================');
        console.log(dataToShow);
        console.log('===============1=====================');
    }
console.log(blogs);


    return (
        loading == "fullfilled"|| null ? <View>

            <TextInput
                style={{ color: "red", width: "95%",marginLeft:"2.5%", padding: 5, borderWidth: 1,}}
                onChangeText={handlesearch}
                placeholder={searchText}
            />

            <FlatList
                data={blogs}
                renderItem={({ item }) => <BlogItem item={item} />}
                keyExtractor={item => item.id}
            />
        </View> : <ActivityIndicator size="large" color="#00ff00" style={{ marginTop: 250 }} />
    
        
    )

}

export default BlogScreen

const styles = StyleSheet.create({})