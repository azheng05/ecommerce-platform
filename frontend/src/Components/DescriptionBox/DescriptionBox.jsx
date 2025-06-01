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
            <div className="description-box-description">
                <p>Description yada yada yada</p>
                <p>More description yada yada yada</p>
            </div>
        </div>
    </div>
  )
}

export default DescriptionBox