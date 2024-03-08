import { useState} from 'react'
import {GiBroadsword,AiOutlineSearch,GiFeather,GiPaperBagCrumpled} from '../../assets/icons';
import Select from '../ui/Select';
import '../../stylesheets/layout/filterArea.css';
import SearchInputMobile from '../ui/SearchInputMobile';
import { useScreen } from '../../hooks/useScreen';
import SearchInputDesktop from '../ui/SearchInputDesktop';


function FilterArea() {

  const [searchInputState,setSearchInputState] = useState(false);
  const {isMobile} = useScreen(575);

  const games = ['Oldschool Runescape', 'Runescape 3', 'Gissel game']
  const prices = ['100$', '50$', '10$']
  const types = ['Armor', 'Weapon', 'Jewerly']

  return (
    <div className='filterArea'>
      <div className='filterArea_top-left'>
        <Select 
          icon={<GiBroadsword className='bigIcon'/>} 
          placeholder={'Select a game'} 
          options={games}
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
          options={prices}
        />
        <Select 
          type={'small'} 
          icon={<GiFeather className='smallIcon' />} 
          placeholder={'All'} 
          label={'Item Type'}
          options={types}
        />
        </div>
    </div>
  )
}

export default FilterArea