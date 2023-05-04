import '../stylesheets/navbar.css';
import logo from '../assets/share/chicks-logo-large.svg';
import BurgerMenu from './BurgerMenu';
import { useEffect, useState, memo } from 'react';
import NavbarSections from './NavbarSections';
import {RxHamburgerMenu,FaChevronDown,HiShoppingCart,FaUser} from '../assets/share/icons';

export default memo(function Navbar() {

  const sections = ['Currency','Items','Accounts','Services','Swap','Sell']
  const [burgerMenuState,setBurgerMenuState] = useState(false);
  const [isMobile,setIsMobile] = useState(window.innerWidth < 1240);


  useEffect(()=>{
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1240);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <nav className='navbar'>
        <div className='navbar_left'>
            {
              isMobile &&
              <>
                <RxHamburgerMenu 
                className='navbar_left-burgerMenuIcon' 
                onClick={()=>setBurgerMenuState(true)} 
                />
                {burgerMenuState && 
                <BurgerMenu 
                setBurgerMenuState={setBurgerMenuState}
                sections={sections} 
                />
                }
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