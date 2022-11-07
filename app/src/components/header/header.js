import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../store/actions/loginActions'
import './header.css'

export const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleLogout = () => {
        dispatch(logout())
        navigate("/login", { replace: true })
    }
    return (
        <header className='header'>
            <h1>App Notas</h1>
            <button onClick={handleLogout}>logout</button>
        </header>
    )
}