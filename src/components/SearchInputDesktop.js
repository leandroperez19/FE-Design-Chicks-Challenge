import { AiOutlineSearch } from '../assets/share/icons';
import '../stylesheets/searchInputDesktop.css';

export default function SearchInputDesktop() {
  return (
    <div className='searchInputDesktop'>
      <AiOutlineSearch className='searchInputDesktop_lens' />
      <input type='text' id="searchInputDesktop_input" placeholder='Search' />
    </div>
  )
}
