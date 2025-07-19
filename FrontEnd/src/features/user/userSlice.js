import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

// Get user from localStorage
const token = JSON.parse(localStorage.getItem('token'))

const initialState = {
    isLoggedIn: token ? true : false,
    isLoading: false,
    justRegistered: false,
    justLoggedIn: false,
    justLoggedOut: false,
    gotError: false,
    message: ''
}

// Register a new user (2/3)
export const registerUser = createAsyncThunk('user/register', async (userData, thunkAPI) => {
    try {
        return await userService.registerUser(userData)
    } catch (error) {
        const errorMessage = error.response.data.errorMessage
        return thunkAPI.rejectWithValue(errorMessage)
    }
})

// Login user (2/3)
export const loginUser = createAsyncThunk('user/login', async (userData, thunkAPI) => {
    try {
        return await userService.loginUser(userData)
    } catch (error) {
        const errorMessage = error.response.data.errorMessage
        return thunkAPI.rejectWithValue(errorMessage)
    }
})

// Logout user (2/3)
export const logoutUser = createAsyncThunk('user/logout', async (_, thunkAPI) => {
    try {
        return userService.logoutUser()
    } catch (error) {
        return thunkAPI.rejectWithValue('Logout failed')
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: (state) => {
            state.isLoading = false
            state.justRegistered = false
            state.justLoggedIn = false
            state.justLoggedOut = false
            state.gotError = false
            state.message = ''
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.justRegistered = true
                state.message = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.gotError = true
                state.message = action.payload
            })
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.justLoggedIn = true
                state.isLoggedIn = true
                state.message = action.payload
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.gotError = true
                state.message = action.payload
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.justLoggedOut = true
                state.isLoggedIn = false
                state.message = action.payload
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.message = action.payload
                state.gotError = true
                state.message = action.payload
            })
    }
})

export const { resetUserState } = userSlice.actions
export default userSlice.reducer

// EOF
