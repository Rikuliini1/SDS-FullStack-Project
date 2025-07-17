import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import userService from './userService'

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: ''
}

// Register a new user (2/3)
export const registerUser = createAsyncThunk('user/register', async (user, thunkAPI) => {
    try {
        const response = await userService.registerUser(user)
        console.log('slice:', response)
        return response
    } catch (error) {
        const message = error.response?.data?.errorMessage || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserState: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    }, extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { resetUserState } = userSlice.actions
export default userSlice.reducer

// EOF
