import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebaseConfig";

export const loginWithGoogle = createAsyncThunk("login/google", async (_, { rejectWithValue }) => {
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        return rejectWithValue(error.message);
    }
}
);