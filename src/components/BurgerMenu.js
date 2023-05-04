import {IoMdClose} from 'react-icons/io';
import {AiFillCaretDown} from 'react-icons/ai'
import '../assets/burgerMenu.css';


export default function BurgerMenu({setBurgerMenuState,sections}) {

  const burgerMenuSections = [...sections,'USD','CART (5)']

  return (
    <div className="burgerMenu">
      <div className='burgerMenu_header'>
        <IoMdClose className='burgerMenu_header-closeIcon' onClick={()=>setBurgerMenuState(false)} />
        <span>Menu</span>
      </div>
      <ul className='burgerMenu_sections'>
        {
          burgerMenuSections.map(section=>(
            <li className='burgerMenu_sections-section' key={section}>
              <span>{section}</span>
              <AiFillCaretDown />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
