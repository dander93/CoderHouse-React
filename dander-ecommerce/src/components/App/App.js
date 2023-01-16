import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import getCategorys from '../../services/categoryServices';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import MainContainer from '../MainContainer/MainContainer';


function App() {

  const [cartCounter, setCartCounter] = useState(0);

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    getCategorys()
      .then(setCategorys)
  }, [categorys])

  return (
    <div className="App">
      <BrowserRouter>
        <MainContainer>
          <Hero cartCounter={cartCounter}/>

          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenido a Dander-Ecommerce" />} />
            <Route path="/cart" element={<h1>CARRITO</h1>} />
            {
              categorys.map(
                (category, index) =>
                  <Route path=':category' element={<ItemListContainer greeting="Bienvenido a Dander-Ecommerce" />} key={`${category}-${index.toString()}`} />)
            }
            <Route path=':category/:itemID/detail' element={<ItemDetailContainer setCartCounter={setCartCounter}/>} />
          </Routes>


        </MainContainer>
        
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
