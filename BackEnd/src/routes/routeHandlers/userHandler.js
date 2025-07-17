import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import UserModel from '../../database/models/userModel.js'

// @desc    Register a new user to database
// @route   POST /api/users/register_user
// @access  Public
const registerUser = async (req, res) => {
    try {
        console.log(`Request to ${req.method} route ${req.originalUrl}`.cyan)
        console.log('    Registering new user...'.yellow)

        const { email, password } = req.body || {}

        // Check for missing data
        if (!email || !password) {
            const missingFields = []
            if (!email) missingFields.push('email')
            if (!password) missingFields.push('password')
            console.log(`        User not registered, missing data (${missingFields.join(', ')})\n`.red)
            return res.status(400).json({ failMessage: `User not registered, missing data (${missingFields.join(', ')})` })
        }

        // Check if user already exists
        const existingUser = await UserModel.findOne({ email })
        if (existingUser) {
            console.log('        User not registered, email already in use\n'.red)
            return res.status(400).json({ failMessage: 'User not registered, email already in use' })
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        // Create a new user
        const newUser = await UserModel.create({
            email,
            password: hashedPassword
        })

        console.log('        Successful user registration\n'.green)
        res.status(201).json({
            successMessage: 'Successful user registration',
            _id: newUser.id,
            email
        })
    } catch (error) {
        console.log('        Failed to register new user\n'.red)
        console.log(error)
        res.status(500).json({ errorMessage: 'Failed to register new user' })
    }
}

// @desc    Authenticate and login user
// @route   POST /api/users/login_user
// @access  Public
const loginUser = async (req, res) => {
    try {
        console.log(`Request to ${req.method} route ${req.originalUrl}`.cyan)
        console.log('    Attempting user login...'.yellow)

        const { email, password } = req.body || {}

        // Check for missing data
        if (!email || !password) {
            const missingFields = []
            if (!email) missingFields.push('email')
            if (!password) missingFields.push('password')
            console.log(`        User not logged in, missing data (${missingFields.join(', ')})\n`.red)
            return res.status(400).json({ failMessage: `User not logged in, missing data (${missingFields.join(', ')})` })
        }

        // Check if user exists
        const existingUser = await UserModel.findOne({ email })
        if (!existingUser) {
            console.log('        User not logged in, email not found\n'.red)
            return res.status(400).json({ failMessage: 'User not logged in, email not found' })
        }

        // Check if passwords match
        const matchingPasswords = await bcryptjs.compare(password, existingUser.password)
        if (!matchingPasswords) {
            console.log('        User not logged in, incorrect password\n'.red)
            return res.status(400).json({ failMessage: 'User not logged in, incorrect password' })
        }

        console.log(`        Successful user login\n`.green)
        res.status(200).json({
            successMessage: 'Successful user login',
            userId: existingUser.id,
            email,
            token: generateToken(existingUser.id)
        })
    } catch (error) {
        console.log('        Failed to login user\n'.red)
        console.log(error)
        res.status(500).json({ errorMessage: 'Failed to login user' })
    }
}

// Generate JWT
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' })
}

export { registerUser, loginUser }

// EOF
