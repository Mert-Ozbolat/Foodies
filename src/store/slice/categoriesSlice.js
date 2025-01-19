import { createSlice } from "@reduxjs/toolkit"
import getCategory from "../action/getCategory"


const initialState = {
    category: [],
    isLoading: false,
    error: null
}

const categorySlice = createSlice({
    name: 'Category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, state => {
                state.isLoading = true
                state.error = null
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                console.log("Redux Store Updated with:", action.payload);
                state.isLoading = false
                state.error = null
                state.category = action.payload
            })
            .addCase(getCategory.rejected, (state, action) => {
                console.error("Redux Error in Reducer:", action.payload);
                state.error = action.error.payload || 'Something went wrong!'
                state.isLoading = false
            })
    }
})

export default categorySlice.reducer