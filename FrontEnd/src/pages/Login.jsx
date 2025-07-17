import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaSignInAlt } from 'react-icons/fa'
import { toast} from 'react-toastify'
import Spinner from '../components/Spinner.jsx'
// import { login, reset } from '../features/auth/authSlice'

function Login() {

    const COMPONENT = (
        <h1>Login</h1>
    )

    return COMPONENT
}

export default Login

// EOF
