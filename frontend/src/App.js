import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';
import plushies_bannner from './Components/Assets/banner_women.png'
import accessories_banner from './Components/Assets/banner_mens.png'
import keychains_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/plushies' element={<ShopCategory banner={plushies_bannner} category="Plushies"/>}/>
        <Route path='/accessories' element={<ShopCategory banner={accessories_banner} category="Accessories"/>}/>
        <Route path='/keychains' element={<ShopCategory banner={keychains_banner} category="Keychains"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
