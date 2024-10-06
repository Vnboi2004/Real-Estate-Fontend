import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import './Header.css'
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {right: !menuOpened && '-100%'}
    }
  }
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./assets/logo.png" alt="logo" width={100}/>
            <OutsideClickHandler onOutsideClick={() => {
              setMenuOpened(false)
            }}>
                <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                  <a href="Residencies">Residencies</a>
                  <a href="Our-Value">Our Value</a>
                  <a href="Contact-Us">Contact Us</a>
                  <a href="Get-Started">Get Started</a> 
                  <button className='button'>
                      <a href="button">Contact</a>
                  </button>
                </div>
            </OutsideClickHandler>
            
          <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
    </section>
  )
}

export default Header
