import visa from '../../assets/Visa_Logo.png';
import mastercard from '../../assets/mastercard_logo.png';
import americanExpress from '../../assets/american-express-logo.png';
import skrill from '../../assets/skrill-logo.png';
import '../../stylesheets/ui/paymentMethods.css';


export default function PaymentMethods() {
  return (
    <div className='paymentMethods'>
      <div className='paymentMethods_images'>
        <img src={visa} alt='visa' />
        <img src={mastercard} alt='mastercard' />
        <img src={americanExpress} alt='americanExpress' />
        <img src={skrill} alt='skrill' />
        <img src='https://chicksgold.com/payment-methods/crypto.svg' alt='crypto'/>
        <span>and 50+ more</span>
      </div>
    </div>
  )
}
