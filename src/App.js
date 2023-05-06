import Main from "./components/layout/Main";
import Navbar from "./components/layout/Navbar";
import CardsContainer from './components/layout/CardsContainer';
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <CardsContainer />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
