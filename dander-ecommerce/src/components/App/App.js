import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import MainContainer from '../MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Hero />
        <ItemListContainer greeting="Bienvenido a Dander-Ecommerce" />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
