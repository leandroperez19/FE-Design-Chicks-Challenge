import gameItem from '../assets/gameItem.png';
import {FaGamepad,HiShoppingCart,FaSort} from '../assets/icons';
import '../stylesheets/card.css';

export default function Card({onSale,title,info}) {
  return (
    <div className='card'>
      <div className='card_top'>
        <div className='card_top-stockInfo'>
          <span>{onSale ? 'ON SALE' : ''}</span>
          <span>In stock</span>
        </div>
        <div className='card_top-customInput'>
          <input type='number' className='card_top-customInput-input' defaultValue={1} />
          <FaSort className='card_top-customInput-icon' />
        </div>
      </div>

      <div className='card_middle'>
        <img src={gameItem} alt='gameItem' className='card_middle-img' />
        <div className='card_middle-title'>
          <span>{title}</span>
          <FaGamepad className='card_middle-title-gameIcon' />
        </div>
        <div className='card_middle-price'>
          <span>{onSale && '$450.00'}</span>
          <span>{onSale && '$522.50'}</span>
        </div>
        <p>{info}</p>
      </div>

      <div className='card_bottom'>
        <button>DETAILS</button>
        <button>
          ADD 
          <HiShoppingCart className='card_bottom-button-cartIcon' />
        </button>
      </div>
    </div>
  )
}
