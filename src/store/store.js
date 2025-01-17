import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './slice/loginSlice'
import menuReducer from './slice/menuSlice'

const store = configureStore({
    reducer: {
        login: loginReducer,
        menu: menuReducer
    }
})


export default store