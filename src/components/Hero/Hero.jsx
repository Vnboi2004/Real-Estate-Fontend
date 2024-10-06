import React from 'react'
import CountUp from 'react-countup';
import './Hero.css'
import { FaLocationDot } from "react-icons/fa6";


const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"/>
            <h1>
              Discover <br/>
              Most Suitable <br/>
              Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className='secondaryText'>Find a variety of properties that suit you very easilty</span>
            <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-bar">
            <FaLocationDot color="var(--blue)" size={25}/>
            <input type="text" />
            <button className='button'>Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end = {9000} duration={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Premium Product</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end = {2000} duration={4}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Happy Customer</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end = {28}/>
                <span>+</span>
              </span>
              <span className='secondaryText'>Awards Winning</span>
            </div>
          </div>
        </div>

         {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./assets/hero-image.png" alt="hero-image"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
