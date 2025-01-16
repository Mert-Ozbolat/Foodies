import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle } from "../action/loadinAction";


const initialState = {
    auth: false,
    user: null,
    pending: false,
    error: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginWithGoogle.pending, (state) => {
                state.pending = true;
                state.error = null
            })

            .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
                state.pending = false;
                state.error = null;
                state.auth = true;
                state.user = payload
            })

            .addCase(loginWithGoogle.rejected, (state, { payload }) => {
                state.auth = false
                state.error = payload;
                state.pending = false
            })
    }
})

export default loginSlice.reducer;