import jwt from 'jsonwebtoken'
import UserModel from '../database/models/userModel.js'

const authMiddleware = async (req, res, next) => {
    try {
        console.log(`Request to ${req.method} route ${req.originalUrl}`.cyan)
        console.log('    Authenticating user...'.yellow)
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            // Get token from header
            const token = req.headers.authorization.split(' ')[1]

            // Verify token
            const tokenData = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from the token
            req.user = await UserModel.findById(tokenData.id).select('-password')

            console.log('        User authenticated'.green)
            next()   
        } else {
            console.log('        Not authorized, no jwt\n'.red)
            res.status(401).json({ failMessage: 'Not authorized, no jwt' })
        }
    } catch (error) {
        console.log('        Authentication failed\n'.red)
        console.log(error)
        res.status(500).json({ errorMessage: 'Authentication failed' })
    }
}

export default authMiddleware

// EOF
