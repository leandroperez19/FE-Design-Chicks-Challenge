import {AiOutlineSearch} from '../../assets/icons';
import '../../stylesheets/ui/searchInputMobile.css';

export default function SearchInputMobile({setSearchInputState}) {
  return (
    <div className="searchInputMobile">
      <div className="searchInputMobile_container">
        <label htmlFor="searchInputMobile_container-input"> 
          <AiOutlineSearch />
        </label>
        <input id="searchInputMobile_container-input" type="text" placeholder="Search" autoFocus />
        <span className='searchInputMobile_container-closeBtn' onClick={()=>setSearchInputState(false)}>
          Close
        </span>
      </div>
    </div>
  )
}
