import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import { RxCross2 } from "react-icons/rx";

const CartItems = () => {
    
    const {all_product, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div className="cart-items">
        <div className="cart-items-format">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr/>
        {all_product.map((temp) => {
            if (cartItems[temp.id] > 0) {
                return (
                    <div className="cart-items-format">
                        <img src={temp.image} alt="" className="carticon-product-icon"/>
                        <p>{temp.name}</p>
                        <p>${temp.new_price}</p>
                        <button className="cart-items-quantity">{cartItems[temp.id]}</button>
                        <p>${temp.new_price * cartItems[temp.id]}</p>
                        <RxCross2 onClick={() => {removeFromCart(temp.id)}}/> {/* remove icon */}
                    </div>
                )
            }
        })}
        <div className="cart-items down">
            <div className="cart-items-total-wrapper">
                <div className="cart-items-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>${0}</p>
                        </div>
                        <hr/>
                        <div className="cart-items-total-item">
                            <p>Shipping Fee</p>
                            <p>${8}</p>
                        </div>
                        <hr/>
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>${0}</h3>
                        </div>
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItems