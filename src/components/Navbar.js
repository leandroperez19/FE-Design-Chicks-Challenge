import '../assets/navbar.css';
import {RxHamburgerMenu} from 'react-icons/rx';
import logo from '../assets/chicks-logo-large.svg';
import {FaUser} from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar_left'>
            <RxHamburgerMenu className='navbar_left-burgerMenu' />
            <img src={logo} alt='logo' className='navbar_left-logo' />
        </div>
        <button className='navbar_signInBtn'>
            SIGN IN
            <FaUser className='navbar_signInBtn-userIcon' />
        </button>
    </nav>
  )
}
