import './Header.css'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button'

const Header = () => {
  return (
    <header>
        <h1>Logo</h1>
        <nav>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>Quem somos</NavLink></li>
                <li><NavLink to='/contato'>Contato</NavLink></li>
                <li><Button variant="primary" title="Login" /></li>
                <li><Button variant="seccondary" title="Cadastre-se" /></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header