import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
// import { logout, resetUserState } from '../features/user/userSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.user)

    const onLogout = () => {
        // dispatch(logout())
        // dispatch(reset())
        // navigate('/')
    }

    // Content based on a condition
    const CONDITIONAL_CONTENT = user ? (
        <li><button className="btn" onClick={onLogout}><FaSignOutAlt/> Logout</button></li> 
    ) : (
        <>
        <li><Link to='/login'><FaSignInAlt/> Login</Link></li>
        <li><Link to='/register'><FaUser/> Register</Link></li>
        </>
    )

    // The final component structure
    const COMPONENT = (
        <header className="header">
            <div className="logo">
                <Link to='/'>MyTop3</Link>
            </div>
            <ul>
                {CONDITIONAL_CONTENT}
            </ul>
        </header>
    )

    return COMPONENT
}

export default Header

// EOF
