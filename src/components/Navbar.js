import '../assets/navbar.css';
import {RxHamburgerMenu} from 'react-icons/rx';
import logo from '../assets/chicks-logo-large.svg';
import {FaUser} from 'react-icons/fa';
import BurgerMenu from './BurgerMenu';
import { useState } from 'react';

export default function Navbar() {

  const [burgerMenuState,setBurgerMenuState] = useState(false);

  return (
    <nav className='navbar'>
        <div className='navbar_left'>
            <RxHamburgerMenu className='navbar_left-burgerMenuIcon' onClick={()=>setBurgerMenuState(true)} />
            <img src={logo} alt='logo' className='navbar_left-logo' />
            {burgerMenuState && <BurgerMenu setBurgerMenuState={setBurgerMenuState} />}
        </div>
        <button className='navbar_signInBtn'>
            SIGN IN
            <FaUser className='navbar_signInBtn-userIcon' />
        </button>
    </nav>
  )
}
