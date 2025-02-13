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

    return (
        <View style={ProductStyle.container}>
            <Header />
            <FlashMessage position="top" />

            <View style={ProductStyle.section}>
                <Image style={ProductStyle.productImg} source={item} />

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

