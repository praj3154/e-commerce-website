import React from 'react'
import "./items.css"

export default function Items(props) {
    
  return (
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item_prices">
      <div className="item-price-new">
            {props.new_price}
      </div>
      <div className="item-price-old">
        {props.old_price}
      </div>
      </div>
      
    </div>
  )
}
