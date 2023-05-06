import '../../stylesheets/layout/cardsContainer.css';
import Select from '../ui/Select';
import {VscSettings} from '../../assets/icons';
import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Pagination from '../ui/Pagination';

export default function CardsContainer() {

	const [cards,setCards] = useState([]);
	
	function createCards(){
		let n = 15; 
		let arr = []; 
		for (let i = 0; i < n; i++) {
  		i < 8 ? 
			arr.push({
				onSale: true, 
				title: 'Blue Partyhat', 
				info: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr'
			})
			:
			arr.push({
				onSale: false, 
				title: 'Blue Partyhat', 
				info: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr'
			})
		}
		setCards(arr)	
	};

	useEffect(()=>{
		createCards()
	},[])

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

		<div className='cardsContainer_cards'>
			{cards.map(card=>(
				<Card onSale={card.onSale} title={card.title} info={card.info} />
			))}
		</div>
		<Pagination totalPages={50} />
  </div>
  )
}
