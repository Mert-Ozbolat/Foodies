import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ProductStyle from '../styles/ProductPage';
import Header from '../components/ProductPage/header';

const ProductPage = ({ route }) => {

    const { item } = route.params;

    return (
        <View style={ProductStyle.container}>

            <Header />

            <View style={ProductStyle.section}>
                <Image style={ProductStyle.productImg} source={{
                    uri: 'https://img.freepik.com/premium-vector/error-404-found-glitch-effect_8024-4.jpg?w=740'
                }} />

                <View style={ProductStyle.descriptions}>
                    <Text style={ProductStyle.productName}>{item.name}</Text>
                    <Text style={ProductStyle.productDesc}>{item.description}</Text>
                </View>

            </View>

            <View style={ProductStyle.footer} >
                <TouchableOpacity >
                    <View style={ProductStyle.button}>
                        <Text style={ProductStyle.buttonText}>Add to Basket</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View >
    )
}

export default ProductPage

