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
        },

        removeFromBasket: (state, action) => {
            const itemIndex = state.cartItem.findIndex((i) => i.id === action.payload)

            if (itemIndex >= 0) {
                const item = state.cartItem[itemIndex]
                state.totalQuantity -= item.quantity
                state.price -= item.price * item.quantity
                state.cartItem.splice(itemIndex, 1)
            }
        }
    }
})


export const { addToBasket, removeFromBasket } = basketSlice.actions
export default basketSlice.reducer