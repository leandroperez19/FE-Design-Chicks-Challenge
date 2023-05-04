import '../stylesheets/main.css';
import backgroundImage from '../assets/share/main-background.jpg';
import FilterArea from './FilterArea';

export default function Main() {
  return (
    <main>
      <img src={backgroundImage} alt='backgroundImage' className='backgroundImage' />  
      <h1>Condimentum consectetur</h1>
      <FilterArea />
    </main>
  )
}
