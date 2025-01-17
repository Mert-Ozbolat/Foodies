import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../service/verbs"; // Sadece import edin
import { MENU } from "../../service/urls";

// createAsyncThunk ile API isteği
const getMenuAction = createAsyncThunk('menu/getMenu', async (params, { rejectWithValue }) => {
    try {
        const response = await getRequest(MENU, params); // API çağrısı yapılır
        console.log("Menu Data from API:", response);
        return response; // API'den dönen veriyi döndür
    } catch (error) {
        console.error("Thunk Error in getMenuAction:", error.message || error);
        return rejectWithValue(error.message); // Hata durumunda reject edilir
    }
});

export { getMenuAction };
