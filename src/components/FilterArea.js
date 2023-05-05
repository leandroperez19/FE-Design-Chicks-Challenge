import { useState} from 'react'
import {GiBroadsword,AiOutlineSearch,GiFeather,GiPaperBagCrumpled} from '../assets/icons';
import Select from './Select';
import '../stylesheets/filterArea.css';
import SearchInputMobile from './SearchInputMobile';
import { useScreen } from '../hooks/useScreen';
import SearchInputDesktop from './SearchInputDesktop';


function FilterArea() {

  const [searchInputState,setSearchInputState] = useState(false);
  const {isMobile} = useScreen(575);

  return (
    <div className='filterArea'>
      <div className='filterArea_top-left'>
        <Select 
          icon={<GiBroadsword className='bigIcon'/>} 
          placeholder={'Select a game'} 
        />
        {isMobile && 
          <button onClick={()=>setSearchInputState(true)}>
          <AiOutlineSearch />
          </button>}
      </div>
      {isMobile ? 
        searchInputState && 
        <SearchInputMobile setSearchInputState={setSearchInputState}/> :
        <SearchInputDesktop />
       }
      <div className='filterArea_bottom-right'>
        <Select 
          type={'small'} 
          icon={<GiPaperBagCrumpled className='smallIcon'/>} 
          placeholder={'All'} 
          label={'Price'} 
        />
        <Select 
          type={'small'} 
          icon={<GiFeather className='smallIcon' />} 
          placeholder={'All'} 
          label={'Item Type'} 
        />
        </div>
    </div>
  )
}

export default FilterArea