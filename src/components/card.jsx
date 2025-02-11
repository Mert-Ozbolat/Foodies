import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import CardStyle from '../styles/HomePage/card'
import { PRODUCT } from '../utils/routes';
import { useNavigation } from '@react-navigation/native';

const Card = ({ item }) => {

    const navigation = useNavigation();

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
        }
        return text;
    };

    const renderItem = ({ item }) => {

        let foodImage;

        switch (item.categoryId) {
            case 1:
                foodImage = require('../assets/images/food1.png');
                break;
            case 2:
                foodImage = require('../assets/images/food2.png');
                break;
            case 3:
                foodImage = require('../assets/images/food3.png');
                break;
            case 4:
                foodImage = require('../assets/images/food4.png');
                break;
            default:
                foodImage = require('../assets/images/food1.png');
        }


        return (
            <TouchableOpacity
                style={CardStyle.card}
                onPress={() => navigation.navigate(PRODUCT, { item })}>
                <Image style={CardStyle.foodImg} source={foodImage} />
                <View style={CardStyle.cardBottom}>
                    <Text style={CardStyle.foodName}>{truncateText(item.name, 16)}</Text>

                    <View style={CardStyle.cardInfo}>
                        <Text style={CardStyle.fooddesc}> {truncateText(item.description, 9)}</Text>
                        <Text style={CardStyle.foodPrice}>{item.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


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
    )
}

export default Card