import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import CardStyle from '../styles/HomePage/card';
import { PRODUCT } from '../utils/routes';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Card = ({ item }) => {
    const navigation = useNavigation();

    const truncateText = (text, maxLength) => {
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const renderItem = ({ item, index }) => {
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
            <Animatable.View
                animation="fadeInUp"
                delay={index * 100}
                duration={500}
                style={CardStyle.card}
            >
                <TouchableOpacity
                    onPress={() => navigation.navigate(PRODUCT, { item })}
                    activeOpacity={0.7}
                >
                    <Image style={CardStyle.foodImg} source={foodImage} />
                    <View style={CardStyle.cardBottom}>
                        <Text style={CardStyle.foodName}>{truncateText(item.name, 16)}</Text>
                        <View style={CardStyle.cardInfo}>
                            <Text style={CardStyle.fooddesc}>{truncateText(item.description, 9)}</Text>
                            <Text style={CardStyle.foodPrice}>{item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
        );
    };

    return (
        <FlatList
            data={item}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={CardStyle.row}
            contentContainerStyle={CardStyle.list}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default Card;
