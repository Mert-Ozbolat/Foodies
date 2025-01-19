import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs";
import { CATEGORIES } from "../../service/urls";



const getCategory = createAsyncThunk('category/getCategory', async (params, { rejectWithValue }) => {
    try {
        const response = await getRequest(CATEGORIES, params)
        console.log("Categories Data from API:", response);
        return response;
    } catch (error) {
        console.error("Thunk Error in getMenuAction:", error.message || error);
        return rejectWithValue(error.message);
    }
})

export default getCategory