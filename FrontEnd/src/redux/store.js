import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'
// import listReducer from '../features/lists/listSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        // lists: listReducer
    }
})

export default store

// EOF
