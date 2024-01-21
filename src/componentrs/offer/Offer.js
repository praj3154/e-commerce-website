import React from 'react'
import "./Offer.css"
import exclucive_image from '../Assets/exclusive_image.png'
export default function Offer() {
  return (
    <div className='Offers'>
      <div className="of_left">
        <h1>
            Exclusive
        </h1>
        <h1>
            Offers For You
        </h1>
        <p>
            ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button>
            Cheak Now
        </button>
      </div>
      <div className="Of-right">
        <img src={exclucive_image}alt="" />
      </div>
    </div>
  )
}
