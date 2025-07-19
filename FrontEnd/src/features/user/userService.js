import axios from 'axios'

// Register a new user (3/3)
const registerUser = async (userData) => {
    const response = await axios.post('/api/users/register_user', userData)
    return response.data.successMessage
}

// Login user (3/3)
const loginUser = async (userData) => {
    const response = await axios.post('/api/users/login_user', userData)
    localStorage.setItem('token', JSON.stringify(response.data.token))
    return response.data.successMessage
}

// Logout user (3/3)
const logoutUser = () => {
    if (localStorage.getItem('token')) {
        localStorage.removeItem('token')
        return 'User logged out'
    } else {
        throw Error()
    }
}

const userService = { registerUser, loginUser, logoutUser }

export default userService

// EOF
