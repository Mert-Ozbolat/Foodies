import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsk4KHPYfH7fqMItaHsKoZSYxhrRB2NdM",
  authDomain: "foodies-f07de.firebaseapp.com",
  projectId: "foodies-f07de",
  storageBucket: "foodies-f07de.appspot.com",
  messagingSenderId: "894419976793",
  appId: "1:894419976793:android:3a7f8b2132965915b2e748",
};

// Firebase App'i başlat
const app = initializeApp(firebaseConfig);

// Firebase Auth'u AsyncStorage ile başlat
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
