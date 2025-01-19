import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import CardStyle from '../styles/HomePage/card'

const Card = ({ item }) => {

    const images = {
        hamburger: require('../assets/images/food3.png'),
    };



    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return `${text.substring(0, maxLength)}...`;
        }
        return text;
    };

    const renderItem = ({ item }) => {
        return (
            <View style={CardStyle.card}>
                <Image style={CardStyle.foodImg} source={images.hamburger} />


                <View style={CardStyle.cardBottom}>
                    <Text style={CardStyle.foodName}>{item.name}</Text>

                    <View style={CardStyle.cardInfo}>
                        <Text style={CardStyle.fooddesc}> {truncateText(item.description, 4)}</Text>
                        <Text style={CardStyle.foodPrice}>{item.price}</Text>
                    </View>
                </View>

            </View>
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