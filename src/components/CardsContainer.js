import '../stylesheets/cardsContainer.css';
import Select from './Select';
import {VscSettings} from '../assets/icons';

export default function CardsContainer() {
  return (
  <div className='cardsContainer'>
    <div className='cardsContainer_top'>
      <span className='cardsContainer_top-cardsAmount' >
				Showing 20 - from 125
			</span>
			<div className='cardsContainer_top-sortBy'>
				<Select 
					icon={<VscSettings className='smallIcon rotate'/>} 
					label={'Sort by'} 
					placeholder={'Featured'} 
					type={'small'} 
				/>
			</div>
    </div>
  </div>
  )
}
