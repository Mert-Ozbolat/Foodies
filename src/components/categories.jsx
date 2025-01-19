import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getCategory from '../store/action/getCategory';
import CategoryStyle from '../styles/HomePage/category';

const Categories = () => {
    const dispatch = useDispatch();


    const categories = useSelector((state) => state.category.category);

    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);

    return (
        <View style={CategoryStyle.list}>
            {categories.map((item) => (
                <View key={item.id} style={CategoryStyle.itemContainer}>
                    <Image
                        source={{ uri: item.image }}
                        style={CategoryStyle.image}
                        resizeMode="contain"
                    />
                    <Text style={CategoryStyle.itemName}>{item.name}</Text>
                </View>
            ))}
        </View>
    );
};

export default Categories;
