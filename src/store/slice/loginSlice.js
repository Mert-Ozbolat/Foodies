import { createSlice } from "@reduxjs/toolkit";
import { loginWithGoogle } from "../action/loadinAction";

// Başlangıç durumu
const initialState = {
    auth: false,     // Giriş yapıldı mı?
    user: null,      // Kullanıcı bilgileri
    loading: false,  // Yükleniyor durumu
    error: null      // Hata mesajı
};

const loginSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // Oturum kapatma işlemi
        logout: (state) => {
            state.auth = false;
            state.user = null;
            state.loading = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Giriş isteği başlatıldığında
            .addCase(loginWithGoogle.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

            // Giriş başarılı olduğunda
            .addCase(loginWithGoogle.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.auth = true;
                state.user = payload;
                state.error = null;
            })

            // Giriş başarısız olduğunda
            .addCase(loginWithGoogle.rejected, (state, { payload }) => {
                state.loading = false;
                state.auth = false;
                state.user = null;
                state.error = payload || "Google ile giriş başarısız oldu.";
            });
    }
});

// Logout aksiyonu export edildi
export const { logout } = loginSlice.actions;

export default loginSlice.reducer;
