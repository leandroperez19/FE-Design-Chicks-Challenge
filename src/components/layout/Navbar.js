import '../../stylesheets/layout/navbar.css';
import logo from '../../assets/chicks-logo-large.svg';
import BurgerMenu from '../ui/BurgerMenu';
import { useState, memo } from 'react';
import NavbarSections from '../ui/NavbarSections';
import {RxHamburgerMenu,FaChevronDown,HiShoppingCart,FaUser} from '../../assets/icons';
import { useScreen } from '../../hooks/useScreen';

export default memo(function Navbar() {

  const sections = ['Currency','Items','Accounts','Services','Swap','Sell']
  const [burgerMenuState,setBurgerMenuState] = useState(false);
  const {isMobile} = useScreen(1240)

  return (
    <nav className='navbar'>
      <div className='navbar_left'>
        {
        isMobile &&
          <>
            <RxHamburgerMenu className='navbar_left-burgerMenuIcon' onClick={()=>setBurgerMenuState(true)} />
            {burgerMenuState && <BurgerMenu setBurgerMenuState={setBurgerMenuState} sections={sections} />}
          </>
        }
        <div className='navbar_left-logo' >
          <img src={logo} alt='logo' />
        </div>
        {!isMobile && <NavbarSections sections={sections}/>}
      </div>
      <div className='navbar_right'>
        <div className='navbar_right-currencySelector'>
          <span>USD</span>
          <FaChevronDown className='navbar_right-currencySelector-icon' />
        </div>
        <div className='navbar_right-cart'>
          <HiShoppingCart className='navbar_right-cart-cartIcon' />
          <span>CART (5)</span>
        </div>
        <button className='navbar_right-signInBtn'>
          SIGN IN
          <FaUser className='navbar_right-signInBtn-userIcon' />
        </button>
      </div>
    </nav>
  )
}
)