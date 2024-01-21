import React from 'react'
import './Footer.css'
import footer_logo from "../Assets/logo_big.png"
import instagram_icon from '../Assets/instagram_icon.png'
import pintest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'


export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer_logo">
    <img src={footer_logo} alt="" />
    <p> SHOPPER</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li> Product</li>
        <li> Offices</li>
        <li>About</li>
        <li> Contact</li>

      </ul>
      <div className="social_media">
        <div className="icon_con">
        <img src={instagram_icon} alt="" />
        </div>
        <div className="icon_con">
            <img src={pintest} alt="" />
            </div>
            <div className="icon_con">
            <img src={whatsapp} alt="" />
            </div>
            

      </div>
      <div className="footer_copy">
                <hr />
                <p>
                    copyrright @2023 - All Right Reserved
                </p>
            </div>
    </div>
  )
}
