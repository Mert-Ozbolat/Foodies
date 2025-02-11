import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../store/slice/basketSlice";
import GeneralStyle from "../styles/GeneralStyle";
import BasketStyle from "../styles/BasketPage/Basket";
import { Trash } from "iconsax-react-native";


const BasketPage = () => {

    const { cartItem, totalPrice } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    return (
        <View style={GeneralStyle.container}>
            <Text style={BasketStyle.Header}>My Basket</Text>
            <FlatList
                data={cartItem}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    let foodImage;

                    switch (item.id) {
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
                        case 5:
                            foodImage = require('../assets/images/food5.png');
                            break;
                        case 6:
                            foodImage = require('../assets/images/food6.png');
                            break;
                        case 7:
                            foodImage = require('../assets/images/food7.png');
                            break;
                        case 8:
                            foodImage = require('../assets/images/food8.png');
                            break;
                        case 9:
                            foodImage = require('../assets/images/food9.png');
                            break;
                        case 10:
                            foodImage = require('../assets/images/food10.png');
                            break;
                        default:
                            foodImage = require('../assets/images/food1.png');
                    }

                    return (
                        <View style={BasketStyle.cart}>
                            <View style={BasketStyle.cartLeft}>
                                <Image
                                    source={foodImage}
                                    style={BasketStyle.itemImage}
                                />
                            </View>
                            <View style={BasketStyle.cartRight}>
                                <View style={BasketStyle.cartHead}>
                                    <Text style={BasketStyle.itemName}>{item.name}</Text>
                                    <Trash color="#FFF" size="32" onPress={() => dispatch(removeFromBasket(item.id))} />
                                </View>

                                <View style={BasketStyle.cartBottom}>
                                    <Text style={BasketStyle.price}>{item.price} $</Text>
                                    <Text style={BasketStyle.quantity}>Adet: {item.quantity}</Text>
                                </View>
                            </View>
                        </View>
                    );
                }}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>Toplam: {totalPrice} $</Text>
        </View>
    );
};

export default BasketPage;
