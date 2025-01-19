import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice'
import menuReducer from './slice/menuSlice'
import categoryReducer from './slice/categoriesSlice'

const store = configureStore({
    reducer: {
        login: loginReducer,
        menu: menuReducer,
        category: categoryReducer
    }
})


export default store