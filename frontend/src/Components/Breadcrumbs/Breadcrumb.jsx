import React from 'react'
import './Breadcrumb.css'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className="breadcrumb">
        HOME <IoIosArrowForward/> SHOP <IoIosArrowForward/> {product.category} <IoIosArrowForward/> {product.name}
    </div>
  )
}

export default Breadcrumb