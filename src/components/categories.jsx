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

    const imageMap = {
        1: require('../assets/icons/categories/hamburger.png'),
        2: require('../assets/icons/categories/pizza.png'),
        3: require('../assets/icons/categories/noodles.png'),
        4: require('../assets/icons/categories/chicken.png'),
        5: require('../assets/icons/categories/vegetarian.png'),
        6: require('../assets/icons/categories/cake.png'),
        7: require('../assets/icons/categories/beer.png'),
        8: require('../assets/icons/categories/melonpan.png'),
    };

    const getFoodImage = (id) => {
        const numericId = parseInt(id, 10);
        return imageMap[numericId] || imageMap[8];  // Eğer id bulunmazsa 8'inci resim varsayılan olarak kullanılır
    };



    return (
        <View style={CategoryStyle.list}>

            {categories.map((item) => (
                <View key={item.id} style={CategoryStyle.itemContainer}>
                    <Image
                        source={getFoodImage(item.id)}
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
