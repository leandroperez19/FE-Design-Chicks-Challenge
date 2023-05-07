import '../../stylesheets/layout/cardsContainer.css';
import Select from '../ui/Select';
import {VscSettings} from '../../assets/icons';
import { useEffect, useState } from 'react';
import Card from '../ui/Card';
import Pagination from '../ui/Pagination';
import gameItem from '../../assets/gameItem.png';

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
				description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr',
        image: gameItem,
        price: '$450.00',
        discount: '$522.50'
			})
			:
			arr.push({
				onSale: false, 
				title: 'Blue Partyhat', 
				description: 'Lorem ipsum dolor sit amet consetetur sadipscing elitr',
        image: gameItem,
        price: '$450.00',
        discount: '$522.50'
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
				<Card 
          onSale={card.onSale} 
          title={card.title} 
          description={card.description} 
          image={card.image}
          price={card.price}
          discount={card.discount}
        />
			))}
		</div>
		<Pagination />
  </div>
  )
}
