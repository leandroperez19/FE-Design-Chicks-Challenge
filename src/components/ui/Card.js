import {FaGamepad,HiShoppingCart,FaSort} from '../../assets/icons';
import '../../stylesheets/ui/card.css';

export default function Card({onSale,title,description,image,price,discount}) {

  let shortDescription = description.slice(0,64).trim() + '...';

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
        <img src={image} alt='gameItem' className='card_middle-img' />
        <div className='card_middle-title'>
          <span>{title}</span>
          <FaGamepad className='card_middle-title-gameIcon' />
        </div>
        <div className='card_middle-price'>
          <span>{(onSale && price) && price}</span>
          <span>{(onSale && discount) && discount}</span>
        </div>
        <p>{description.length > 64 ? shortDescription : description}</p>
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
