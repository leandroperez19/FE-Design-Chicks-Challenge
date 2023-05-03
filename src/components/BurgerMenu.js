import {IoMdClose} from 'react-icons/io';
import {AiFillCaretDown} from 'react-icons/ai'
import '../assets/burgerMenu.css';

export default function BurgerMenu({setBurgerMenuState}) {

  const sections = ['Currency','Items','Accounts','Services','Swap','Sell Currency','Sell Item','Sell Acount']

  return (
    <div className="burgerMenu">
      <div className='burgerMenu_header'>
        <IoMdClose className='burgerMenu_header-closeIcon' onClick={()=>setBurgerMenuState(false)} />
        <span>Menu</span>
      </div>
      <ul className='burgerMenu_sections'>
        {
          sections.map(section=>(
            <li className='burgerMenu_sections-section'>
              <span>{section}</span>
              <AiFillCaretDown />
            </li>
          ))
        }
      </ul>
    </div>
  )
}
