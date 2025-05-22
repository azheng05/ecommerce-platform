import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/ShopImages/PlushieDragon.png'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hero-hand-icon">
                    <p></p>
                </div>
                <p>Bubbles the</p>
                <p>Dragon</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img arc={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero;