import React, { useEffect } from "react";
import { View, Text, FlatList, Image, Pressable, Button, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromBasket, loadBasketData } from "../store/slice/basketSlice";
import GeneralStyle from "../styles/GeneralStyle";
import BasketStyle from "../styles/BasketPage/Basket";
import { AddCircle, MinusCirlce, Trash } from "iconsax-react-native";

const BasketPage = () => {
    const { cartItem, totalPrice } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadBasketData());
    }, [dispatch]);

    return (
        <View style={GeneralStyle.container}>
            <View style={BasketStyle.basket}>
                <Text style={BasketStyle.Header}>My Basket</Text>
                <FlatList
                    data={cartItem}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        let foodImage;
                        switch (Number(item.id)) {
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
                                        <View style={BasketStyle.quantityContainer}>
                                            <Pressable
                                                onPress={() => dispatch(increaseQuantity(item.id))}
                                            ><AddCircle size="32" color="#FFF" /></Pressable>

                                            <Text style={BasketStyle.quantity}>x{item.quantity}</Text>

                                            <Pressable
                                                onPress={() => dispatch(decreaseQuantity(item.id))}
                                            ><MinusCirlce size="32" color="#FFF" /></Pressable>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>

            <View style={BasketStyle.payment}>
                <View>
                    <View style={BasketStyle.group}>
                        <Text style={BasketStyle.total}>Delivery Fee</Text>
                        <Text style={BasketStyle.totalPrice}>$2.00</Text>
                    </View>


                    <View style={BasketStyle.group}>
                        <Text style={BasketStyle.total}>Total</Text>
                        <Text style={BasketStyle.totalPrice}>${totalPrice + 2}</Text>
                    </View>
                </View>


                <Pressable style={BasketStyle.checkout}>
                    <Text style={BasketStyle.checkoutText}>Checkout</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default BasketPage;
