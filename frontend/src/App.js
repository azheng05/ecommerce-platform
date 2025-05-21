import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/plushies' element={<ShopCategory category="plushies"/>}/>
        <Route path='/accessories' element={<ShopCategory category="accessories"/>}/>
        <Route path='/keychains' element={<ShopCategory category="keychains"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
