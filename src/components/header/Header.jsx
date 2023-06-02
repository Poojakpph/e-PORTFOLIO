import React, { useState } from 'react';
import "./header.css";

const Header = () => {
    // toggle menu
    const [Toggle, showMenu]= useState(false);
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">e-Portfolio</a>

            <div className={Toggle? "nav__menu show-menu" :
              "nav__menu" }>
              <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" className="nav__link active-link"> <li className="uil uil-estate nav__icon"></li>Home</a>
                </li>

                <li className="nav__item">
                    <a href="#about" className="nav__link"> <li className="uil uil-user nav__icon"></li>About </a>
                </li>

                <li className="nav__item">
                    <a href="#skills" className="nav__link"> <li className="uil uil-file-alt nav__icon"></li> Skills </a>
                </li>

                <li className="nav__item">
                    <a href="#services" className="nav__link"> <li className="uil uil-scenery nav__icon"></li>Services</a>
                </li>

                <li className="nav__item">
                    <a href="#portfolio" className="nav__link"> <li className="uil uil-scenery nav__icon"></li>Portfolio</a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link"> <li className="uil uil-message nav__icon"></li> Contact</a>
                </li>
               
              </ul>

               
              <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)} ></i>
            </div>

            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)} > <i class="uil uil-apps"></i> </div>
            
        </nav>
    </header>
  )
}

export default Header
