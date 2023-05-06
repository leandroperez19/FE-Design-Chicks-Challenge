import {FaChevronDown} from '../../assets/icons';
import '../../stylesheets/ui/footerDropdown.css';
import { useState } from 'react';

export default function FooterDropdown({title,sections}) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='footerDropdown'>
      <div className='footerDropdown_top' onClick={toggleDropdown} >
        <span>{title}</span>
        <FaChevronDown />
      </div>
      { isOpen && 
       (<ul className='footerDropdown_bottom'>
          {sections.map(section=>(
            <li>{section}</li>
          ))}
        </ul>
        )
      }
    </div>
  )
}
