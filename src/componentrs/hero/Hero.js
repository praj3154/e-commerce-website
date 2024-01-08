import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
export default function Hero() {
    return (

      <div className="hero">
        {/* hero left */}

        <div className="hero_left">
        <h2>
            NEEW ARRIVAL ONLY
        </h2>
        <div>
            <div className="hand-icon">
                <p> new</p>
               
             <img src={hand_icon}alt="" />

            </div>
            <p>collectioins</p>
            <p>for every one</p>

        </div>
        <div className="hero_letest-btn">
            <div> Letest Collection</div>
            <img src={arrow} alt="" />

        </div>
        </div>
        {/* hero right */}


        <div className="hero_right">
            <img src={hero_image} alt="" />

        </div>
      </div>
    )
}
