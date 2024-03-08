import { useState } from 'react';
import {AiFillCaretDown} from '../../assets/icons'
import '../../stylesheets/ui/select.css';

function Select({ type, icon, label, placeholder, options }) {
  const [selectedOption, setSelectedOption] = useState(placeholder);
  const [optionsOpen, setOptionsOpen] = useState(false);

  const optClick = (opt) => {
    setSelectedOption(opt);
    setOptionsOpen(false);
  }

  return (
    <div className={`select ${type}`}>
      <div className='label-container' onClick={() => setOptionsOpen(!optionsOpen)}>
      <div className='select_left'>
        {icon}
        <div className='select_left-text'>
          {label && 
          <span className='select_left-text-label'>{label}</span>
          }
          <span className='select_left-text-placeholder'>{selectedOption}</span>
        </div>
      </div>
      <AiFillCaretDown className={`'select_chevronDownIcon' ${optionsOpen && 'rotate'}`} /> 
      </div>
     {optionsOpen && <div className='options'>
          {options.map(opt => (
            <div className='option' onClick={() => optClick(opt)}>{opt}</div>
          ))}
      </div>}
    </div>
  )
}

export default Select