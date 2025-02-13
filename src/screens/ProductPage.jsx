import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductStyle from '../styles/ProductPage';
import Header from '../components/ProductPage/header';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../store/slice/basketSlice';
import FlashMessage from 'react-native-flash-message';

const ProductPage = ({ route }) => {

    const dispatch = useDispatch()
    const { item } = route.params;

    let foodImage;
    switch (item.categoryId) {
        case 1: foodImage = require('../assets/images/food1.png'); break;
        case 2: foodImage = require('../assets/images/food2.png'); break;
        case 3: foodImage = require('../assets/images/food3.png'); break;
        case 4: foodImage = require('../assets/images/food4.png'); break;
        case 5: foodImage = require('../assets/images/food5.png'); break;
        case 6: foodImage = require('../assets/images/food6.png'); break;
        case 7: foodImage = require('../assets/images/food7.png'); break;
        case 8: foodImage = require('../assets/images/food8.png'); break;
        case 9: foodImage = require('../assets/images/food9.png'); break;
        case 10: foodImage = require('../assets/images/food10.png'); break;
        default: foodImage = require('../assets/images/food1.png');
    }

    return (
        <View style={ProductStyle.container}>
            <Header />
            <FlashMessage position="top" />

            <View style={ProductStyle.section}>
                <Image style={ProductStyle.productImg} source={foodImage} />

                <View style={ProductStyle.descriptions}>
                    <Text style={ProductStyle.productName}>{item.name}</Text>
                    <Text style={ProductStyle.productDesc}>{item.description}</Text>
                </View>

            </View>
            <View style={ProductStyle.footer} >
                <TouchableOpacity
                    onPress={() => dispatch(addToBasket(item))}
                >
                    <View style={ProductStyle.button}>
                        <Text style={ProductStyle.buttonText}>Add to Basket</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default ProductPage

