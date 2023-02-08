import { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContainer from '../Cart/CartContainer';
import CheckoutCart from '../Cart/FormCheckout/CheckoutCart';
import CartContext from '../Context/CartContext';
import { categorysContext } from '../Context/CategoryContext';
import Footer from '../Footer/Footer';
import Hero from '../Hero/Hero';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import Loader from '../Loader/Loader';
import MainContainer from '../MainContainer/MainContainer';
import NotFound from '../NotFound/NotFound';


function App() {

  const [isCategorysPetitionSend, setIsCategorysPetitionSend] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(true);

  const [categorys, setCategorys] = useState([]);
  const { loadCategorys } = useContext(categorysContext);

  const loadMenu = () => {
    if (!isCategorysPetitionSend) {
      setIsCategorysPetitionSend(true)

      loadCategorys()
        .then((res) => {
          setCategorys(res)
          setIsCategoryLoading(false)
        })
        .catch(console.error);

    }
  }

  useEffect(() => {

    loadMenu();

  }, [categorys, isCategoryLoading])

  const handleOnEnter = (transition) => {
    console.log(transition)
  } 

  if (isCategoryLoading) {
    return (
      <>
        <MainContainer>
          <div className='min-vh-100 d-flex justify-content-center align-items-center'>
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
              <Route path="/cart/checkout" element={<CheckoutCart />} onEnter={handleOnEnter}/>
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
