import { createSlice } from "@reduxjs/toolkit"
import { getMenuAction } from "../action/getMenuAction"


const initialState = {
    menu: [],
    isLoading: false,
    error: null
}

const menuSlice = createSlice({
    name: 'Menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getMenuAction.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getMenuAction.fulfilled, (state, action) => {
                console.log("Redux Store Updated with:", action.payload);
                state.isLoading = false
                state.error = null
                state.menu = action.payload
            })
            .addCase(getMenuAction.rejected, (state, action) => {
                console.error("Redux Error in Reducer:", action.payload);
                state.error = action.error.payload || 'Something went wrong!'
                state.isLoading = false
            })
    }
})

export default menuSlice.reducer