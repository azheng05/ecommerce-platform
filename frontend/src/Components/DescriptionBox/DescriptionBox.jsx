import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='description-box'>
        <div className="description-box-navigator">
            <div className="description-box-navbox">
                Description
            </div>
            <div className="description-box-navbox fade">
                Reviews (122)
            </div>
        </div>
        <div className="description-box-description">
            <p>Handcrafted with soft cotton yarn, this headband is lightweight, breathable, and gentle on your skin. It features tie ends that allow you to adjust the fit easily, wrapping comfortably around your head without any tightness or slipping. A perfect blend of function and comfort!</p>
        </div>
    </div>
  )
}

export default DescriptionBox