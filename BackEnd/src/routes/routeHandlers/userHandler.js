import jwt from 'jsonwebtoken'
import bcrypjs from 'bcryptjs'
import UserModel from '../../database/models/userModel.js'

// @desc    Register new user to database
// @route   POST /api/users/register_user
// @access  Public
const registerUser = async (req, res) => {
    console.log('Request to POST route /api/users/register_user'.cyan)
    console.log('    Doing stuff...'.yellow)
    // TODO
    console.log('        Successful POST request to register a new user\n'.green)
}

// @desc    Authenticate and login user
// @route   POST /api/users/login_user
// @access  Public
const loginUser = async (req, res) => {
    console.log('Request to POST route /api/users/login_user'.cyan)
    console.log('    Doing stuff...'.yellow)
    // TODO
    console.log('        Successful POST request to login a user\n'.green)
}

export { registerUser, loginUser }

// EOF
