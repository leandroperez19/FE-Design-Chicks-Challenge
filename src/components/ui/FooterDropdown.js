import {FaChevronDown} from '../../assets/icons';
import '../../stylesheets/ui/footerDropdown.css';
import { useState } from 'react';
import {useScreen} from '../../hooks/useScreen'

export default function FooterDropdown({title,sections}) {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const {isMobile} = useScreen(768)

  return (
    <div className='footerDropdown'>
      <div className='footerDropdown_top' onClick={toggleDropdown} >
        <span>{title}</span>
        {isMobile && <FaChevronDown />}
      </div>
      {isMobile && isOpen && (
        <ul className='footerDropdown_bottom'>
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      )}
      {!isMobile && (
        <ul className='footerDropdown_bottom'>
          {sections.map((section) => (
            <li key={section}>{section}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
