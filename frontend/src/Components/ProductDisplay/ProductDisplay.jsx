import React from 'react'
import './ProductDisplay.css'
import { MdStarBorder, MdStar } from "react-icons/md";

const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className="productdisplay">
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt=""/>
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <div className="productdisplay-right-stars-list">
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStar/>
                    <MdStarBorder/>
                </div>
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                {/* <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div> */}
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                description of item
            </div>
            <button>Add to cart</button>
            <p className="productdisplay-right-category"><span>Category:</span> Plushie, Mini</p>
            <p className="productdisplay-right-category"><span>Tags:</span> Plushie, Latest, Blue</p>
        </div>
    </div>
  )
}

export default ProductDisplay