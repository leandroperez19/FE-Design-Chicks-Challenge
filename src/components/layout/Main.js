import '../../stylesheets/layout/main.css';
import backgroundImage from '../../assets/main-background.jpg';
import FilterArea from '../FilterArea';
import CardsContainer from '../CardsContainer';

export default function Main() {
  return (
    <main>
      <img src={backgroundImage} alt='backgroundImage' className='backgroundImage' />  
      <div className='main_container'>
        <h1>Condimentum consectetur</h1>
        <FilterArea />
        <CardsContainer />
      </div>
    </main>
  )
}
