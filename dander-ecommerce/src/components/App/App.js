import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from '../Cart/CartContainer';
import CartContext from '../Context/CartContext';
import CategoryContext, { categorysContext } from '../Context/CategoryContext';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Loader from '../Loader/Loader';
import MainContainer from '../MainContainer/MainContainer';
import NotFound from '../NotFound/NotFound';


function App() {

  const [categorys, setCategorys] = useState([]);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);
  const { loadCategorys, categorysLoaded, getLoadedCategorys } = useContext(categorysContext);

  const loadMenu = async () => {
    setCategorys(await loadCategorys())
    setIsCategoryLoading(!categorysLoaded())
  }

  useEffect(() => {
    loadMenu();
  }, [categorys, isCategoryLoading])


  if (isCategoryLoading) {
    return (
      <>
        <MainContainer>
          <div className='min-vh-100 justify-content-center d-flex align-items-center'>
            <Loader />
          </div>
        </MainContainer>
      </>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
        <MainContainer>

          <CartContext>
            <Hero />

            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Bienvenido a Dander-Ecommerce" />} />
              <Route path="/cart" element={<CartContainer />} />
              {
                categorys.map(
                  (category, index) =>
                    <Route path=':category' element={<ItemListContainer greeting="Bienvenido a Dander-Ecommerce" />} key={`${category}-${index}`} />)
              }
              <Route path=':category/:itemID/detail' element={<ItemDetailContainer />} />

              <Route path='*' element={<NotFound />} />
            </Routes>
          </CartContext>


        </MainContainer>

        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
