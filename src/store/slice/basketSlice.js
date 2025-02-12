import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalPrice: 0
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload.id);

            if (item) {
                item.quantity += 1;
            } else {
                state.cartItem.push({ ...action.payload, quantity: 1 });
            }
            state.totalQuantity += 1;
            state.totalPrice += action.payload.price;
            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));

            // AsyncStorage'a kaydetme
            saveBasketToStorage(state);
        },

        removeFromBasket: (state, action) => {
            const itemIndex = state.cartItem.findIndex((i) => i.id === action.payload);

            if (itemIndex >= 0) {
                const item = state.cartItem[itemIndex];
                state.totalQuantity -= item.quantity;
                state.totalPrice -= item.price * item.quantity;
                state.cartItem.splice(itemIndex, 1);
            }

            // Eğer sepet boşsa totalPrice'ı sıfırlayalım
            if (state.cartItem.length === 0) {
                state.totalPrice = 0;
            }

            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));

            // AsyncStorage'a kaydetme
            saveBasketToStorage(state);
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload);
            if (item) {
                item.quantity += 1;
                state.totalQuantity += 1;
                state.totalPrice += item.price;
            }

            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));

            // AsyncStorage'a kaydetme
            saveBasketToStorage(state);
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
            } else if (item && item.quantity === 1) {
                state.cartItem = state.cartItem.filter((i) => i.id !== action.payload);
                state.totalQuantity -= 1;
                state.totalPrice -= item.price;
            }

            if (state.cartItem.length === 0) {
                state.totalPrice = 0;
            }
            state.totalPrice = parseFloat(state.totalPrice.toFixed(2));

            // AsyncStorage'a kaydetme
            saveBasketToStorage(state);
        },

        // AsyncStorage'tan veriyi yüklemek için reducer
        loadBasket: (state, action) => {
            state.cartItem = action.payload.cartItem || [];
            state.totalQuantity = action.payload.totalQuantity || 0;
            state.totalPrice = action.payload.totalPrice || 0;
        }
    }
});

export const { addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity, loadBasket } = basketSlice.actions;
export default basketSlice.reducer;

// AsyncStorage'a veri kaydetme fonksiyonu
const saveBasketToStorage = async (state) => {
    try {
        const basketData = {
            cartItem: state.cartItem,
            totalQuantity: state.totalQuantity,
            totalPrice: state.totalPrice
        };
        await AsyncStorage.setItem('basketData', JSON.stringify(basketData));  // Sepet verisini JSON formatında sakla
    } catch (error) {
        console.error('Sepet verisi AsyncStorage\'a kaydedilemedi', error);
    }
};

// AsyncStorage'tan veri okuma fonksiyonu
const loadBasketFromStorage = async (dispatch) => {
    try {
        const savedBasket = await AsyncStorage.getItem('basketData');
        if (savedBasket) {
            const basketData = JSON.parse(savedBasket);
            dispatch(loadBasket(basketData));  // Sepeti Redux store'a yükle
        }
    } catch (error) {
        console.error('Sepet verisi AsyncStorage\'tan alınamadı', error);
    }
};

// Uygulama başladığında sepete verileri yüklemek için kullan
export const loadBasketData = () => (dispatch) => {
    loadBasketFromStorage(dispatch);
};
