import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Stay in the Loop!</h1>
        <p>Subscribe to get updates on restocks, new plushies, and exclusive offers 💌 </p>
        <div>
            <input type='email' placeholder='Your email'/>
        </div>
    </div>
  )
}

export default Newsletter