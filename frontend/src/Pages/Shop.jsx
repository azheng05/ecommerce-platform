import React from 'react'
import Hero from '../Components/Hero/Hero';
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/Offers';
import NewProducts from '../Components/NewProducts/NewProducts';
import Newsletter from '../Components/Newsletter/Newsletter';

export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <NewProducts/>
        <Newsletter/>
    </div>
  )
}

export default Shop;