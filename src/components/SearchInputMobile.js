import {AiOutlineSearch} from '../assets/share/icons';

export default function SearchInputMobile() {
  return (
    <div className="searchInputMobile">
      <div className="searchInputMobile_container">
        <label htmlFor="searchInput"> 
          <AiOutlineSearch />
        </label>
        <input id="searchInput" type="text" placeholder="Search" />
        <span>Close</span>
      </div>
      <div className='searchInputComponent_bg'></div>
    </div>
  )
}
