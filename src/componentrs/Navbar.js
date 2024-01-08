import React, { useState } from 'react'
import"./Navbar.css"
import logo from './Assets/logo.png'
import cart_icon from "./Assets/cart_icon.png"
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [menu,setMenu] = useState("shop");

  return (
    <div className='Navbar'>
      <div className="Nav-logo">
        <img src={logo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="menu">
        <li onClick={()=> setMenu("Shop")}><Link style={{textDecoration: 'none'}} to = "/"> Shop</Link> {menu==="Shop"? <hr/>:<></>}</li>
        <li onClick={()=> setMenu("Men")}><Link  style={{textDecoration: 'none'}} to ="/mens"> Men</Link>{menu==="Men"? <hr/>:<></>}</li>
        <li onClick={()=> setMenu("Women")}><Link  style={{textDecoration: 'none'}} to ="/Womens"> Women</Link>{menu==="Women"? <hr/>:<></>}</li>
        
      </ul>
      <div className="log-cart">
        <Link to="/Login"> 
        <button>
            Login
        </button>
        </Link>
    <Link to="/Cart">
    <img src={cart_icon} alt="" />
    </Link>
     
        <div className="cert-cout">0</div>
      </div>
    </div>
  )
}
