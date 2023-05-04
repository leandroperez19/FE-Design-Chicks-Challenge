import React from 'react'
import {GiBroadsword,AiOutlineSearch,GiFeather,GiPaperBagCrumpled} from '../assets/share/icons';
import Select from './Select';
import '../stylesheets/filterArea.css';

function FilterArea() {
  return (
    <div className='filterArea'>
        <div className='filterArea_top-left'>
          <Select 
          icon={<GiBroadsword className='bigIcon'/>} 
          placeholder={'Select a game'} />
          <button>
            <AiOutlineSearch />
          </button>
        </div>
        <div className='filterArea_bottom-right'>
          <Select 
          type={'small'} 
          icon={<GiPaperBagCrumpled className='smallIcon'/>} 
          placeholder={'All'} 
          label={'Price'} />
          <Select 
          type={'small'} 
          icon={<GiFeather className='smallIcon' />} 
          placeholder={'All'} 
          label={'Item Type'} />
        </div>
      </div>
  )
}

export default FilterArea