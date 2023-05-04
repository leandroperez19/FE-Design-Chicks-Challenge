import {AiOutlineSearch} from '../assets/share/icons';
import '../stylesheets/searchInputMobile.css';

export default function SearchInputMobile({setSearchInputState}) {
  return (
    <div className="searchInputMobile">
      <div className="searchInputMobile_container">
        <label htmlFor="searchInputMobile_container-input"> 
          <AiOutlineSearch />
        </label>
        <input id="searchInputMobile_container-input" type="text" placeholder="Search" />
        <span className='searchInputMobile_container-closeBtn' onClick={()=>setSearchInputState(false)}>
          Close
        </span>
      </div>
    </div>
  )
}
