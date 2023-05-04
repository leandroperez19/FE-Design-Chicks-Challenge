import React from 'react';
import '../stylesheets/navbarSections.css';
import {FaChevronDown} from '../assets/share/icons';

function NavbarSections({sections}) {
  return (
  <ul className='navbar_sections'>
    {sections.map(section=>(
      <li className='navbar_sections-section' key={section}>
        <span>{section}</span>
        <FaChevronDown className='navbar_sections-section-chevronIcon' />
      </li>
    ))}
  </ul>
  )
}

export default NavbarSections