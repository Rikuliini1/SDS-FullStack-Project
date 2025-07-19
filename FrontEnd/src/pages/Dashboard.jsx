import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
// import GoalForm from '../components/GoalForm'
// import GoalItem from '../components/GoalItem'
import { resetUserState } from '../features/user/userSlice'
// import { getGoals, reset } from '../features/goals/goalSlice'

function Dashboard() {
    const navigate = useNavigate()
	const dispatch = useDispatch()

    const { isLoggedIn, justLoggedIn, justLoggedOut, gotError, message } = useSelector((state) => state.user)
    // const { lists, isLoading, isError, message } = useSelector((state) => state.lists)

    useEffect(() => {
        if (justLoggedIn) {
            dispatch(resetUserState())
        }
        if (justLoggedOut) {
            toast.success(message)
            dispatch(resetUserState())
        }
        if (gotError) {
            toast.error(message)
            dispatch(resetUserState())
        }
    },
    [isLoggedIn, gotError, navigate, dispatch])

    const CONDITIONAL_CONTENT = isLoggedIn ? (
        <section className="heading">
            <h1>My Top3 lists</h1>
        </section>
    ) : (
        <>
        <h1>Please login to view lists</h1>
        </>
    )

    const COMPONENT = (
        <>
        {CONDITIONAL_CONTENT}
        </>
    )

    return COMPONENT
}

export default Dashboard

// EOF
