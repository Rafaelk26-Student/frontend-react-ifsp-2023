import './Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Quem somos</NavLink></li>
                <li><NavLink to='/contato'>Contato</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header