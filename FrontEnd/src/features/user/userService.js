import axios from 'axios'

// Register a new user (3/3)
const registerUser = async (userData) => {
    const response = await axios.post('/api/users/register_user', userData)
    return response.data
}

const userService = { registerUser }

export default userService

// EOF
