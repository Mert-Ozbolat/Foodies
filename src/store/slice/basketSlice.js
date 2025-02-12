import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItem: [],
    totalQuantity: 0,
    totalPrice: 0
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload.id)

            if (item) {
                item.quantity += 1
            } else {
                state.cartItem.push({ ...action.payload, quantity: 1 })
            }
            state.totalQuantity += 1
            state.totalPrice += action.payload.price
            state.totalPrice = parseFloat(state.totalPrice.toFixed(2))
        },

        removeFromBasket: (state, action) => {
            const itemIndex = state.cartItem.findIndex((i) => i.id === action.payload)

            if (itemIndex >= 0) {
                const item = state.cartItem[itemIndex]
                state.totalQuantity -= item.quantity
                state.totalPrice -= item.price * item.quantity
                state.cartItem.splice(itemIndex, 1)
            }

            if (state.cartItem.length === 0) {
                state.totalPrice = 0
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload)
            if (item) {
                item.quantity += 1
                state.totalQuantity += 1
                state.totalPrice += item.price
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItem.find((i) => i.id === action.payload)
            if (item && item.quantity > 1) {
                item.quantity -= 1
                state.totalQuantity -= 1
                state.totalPrice -= item.price
            }
        }
    }
})

export const { addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity } = basketSlice.actions
export default basketSlice.reducer
