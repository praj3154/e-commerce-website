import React from 'react'
import './Breadcrum.css'
import arrow_icon from "../Assets/breadcrum_arrow.png"
export default function Breadcrims(props) {
    const {product} = props;

  return (
    <div className='bradcrum'>
       <span> Home </span> <img src={arrow_icon}alt="" />
       <span> Shop </span> <img src={arrow_icon} alt="" /> 
       {product.category} <img src={arrow_icon} alt="" />
       {product.name}
    </div>
  )
}
