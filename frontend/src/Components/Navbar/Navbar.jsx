import React, { useState, useContext } from 'react'
import './Navbar.css'
import logo from '../Assets/ShopImages/CatLogo.png'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <Link onClick={()=>setMenu("shop")} style={{ textDecoration: 'none' }} to="/" ><p>Mimi Crochets</p></Link>
        </div>
        <ul className="nav-menu">
            {/*When you click on a section, it will underline it*/}
            <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("plushies")}}><Link style={{ textDecoration: 'none' }} to='/plushies'>Plushies</Link>{menu==="plushies"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("accessories")}}><Link style={{ textDecoration: 'none' }} to='/accessories'>Accessories</Link>{menu==="accessories"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("keychains")}}><Link style={{ textDecoration: 'none' }} to='/keychains'>Keychains</Link>{menu==="keychains"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"><button>Login</button></Link>
            <Link to='/cart'><FiShoppingCart className="cart-icon"/></Link>
            <div className="nav-cart-count">
            {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar
