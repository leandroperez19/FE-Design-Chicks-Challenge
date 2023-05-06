import {AiFillCaretDown} from '../../assets/icons'
import '../../stylesheets/ui/select.css';

function Select({type,icon,label,placeholder}) {
  return (
    <div className={`select ${type}`}>
      <div className='select_left'>
        {icon}
        <div className='select_left-text'>
          {label && 
          <span className='select_left-text-label'>{label}</span>
          }
          <span className='select_left-text-placeholder'>{placeholder}</span>
        </div>
      </div>
      <AiFillCaretDown className='select_chevronDownIcon' /> 
    </div>
  )
}

export default Select