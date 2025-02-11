import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice'
import menuReducer from './slice/menuSlice'
import categoryReducer from './slice/categoriesSlice'
import basketReducer from './slice/basketSlice';

const store = configureStore({
    reducer: {
        login: loginReducer,
        menu: menuReducer,
        category: categoryReducer,
        basket: basketReducer
    }
})


export default store