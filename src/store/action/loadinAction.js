import { createAsyncThunk } from "@reduxjs/toolkit";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

// Google ile Giriş Aksiyonu
export const loginWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { rejectWithValue }) => {
    try {
      // 1. Google Play Hizmetlerini kontrol et
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

      // 2. Google hesabı seç
      const userInfo = await GoogleSignin.signIn();
      console.log("Google Kullanıcı Bilgisi:", userInfo);

      if (!userInfo.idToken) {
        throw new Error("Google oturum açma başarısız. ID Token alınamadı.");
      }

      // 3. Firebase Kimlik Doğrulama
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);

      console.log("Firebase Girişi Başarılı:", userCredential.user);

      // 4. Redux için kullanıcıyı döndür
      return userCredential.user;

    } catch (error) {
      console.error("Google Giriş Hatası:", error);
      return rejectWithValue(error.message || "Google ile giriş yapılamadı.");
    }
  }
);
