import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import CardsContainer from './components/layout/CardsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <CardsContainer />
      </Main>
    </div>
  );
}

export default App;
