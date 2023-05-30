import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Blog } from '../types/Blog';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux';
import { deleteBlogByID, getCurrentBlog } from '../redux/slices/blogslice';



const BlogItem = ({ item }: any) => {



    const dispatch = useDispatch<AppDispatch>()
    const navigation = useNavigation();
    function handledetail(item: any) {
console.log(item);
        dispatch(getCurrentBlog({ id: item.id }))
        navigation.navigate('BlogDetail')

    }
    function handledelete(id: any) {
        dispatch(deleteBlogByID({ id: id }))
    }
    return (

        <View style={styles.container}>
            
            <TouchableOpacity onPress={() => handledetail(item)} style={{ width: "60%", justifyContent: "flex-start", flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Image source={{ uri: item.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                <Text style={{ fontSize: 22 }}>{item?.title}</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'flex-end', flexDirection: 'row', gap: 2, alignItems: 'center' }}>
                <TouchableOpacity onPress={() => handledelete(item.id)} style={{ padding: 5, backgroundColor: "pink", borderRadius: 5 }}><Text style={{ color: 'black' }}>Remove</Text></TouchableOpacity>
                <TouchableOpacity style={{ padding: 5, backgroundColor: "lightgreen", borderRadius: 5 }}><Text style={{ color: 'black' }}> Favorite</Text></TouchableOpacity>

            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: 'row',
        width: "95%",
        marginLeft: "2%",
        marginTop: 15
    }


});

export default BlogItem;
