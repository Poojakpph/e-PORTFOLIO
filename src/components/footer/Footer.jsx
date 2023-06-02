import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
     <footer className="footer">
       <div className="footer__container container">
          <h1 className="footer__title">POOJA KUMARI</h1>
          <ul className="footer__list">
            <li><a href="#about" className="footer__link">About</a></li>
            <li><a href="#portfolio" className="footer__link">Projects</a></li>
            <li><a href="#contact" className="footer__link">Contact</a></li>
          </ul>

          <div className="footer__social">
            <a href="https://www.linkedin.com/in/pooja-kumari-48443b20a/" className="home__social-link" target='_blank'> 
              <i class="uil uil-linkedin"></i> 
            </a>
            <a href="https://github.com/Poojakpph" className="home__social-link" target='_blank'> 
              <i class="uil uil-github"></i> 
            </a>
            <a href="https://twitter.com/poojakph01" className="home__social-link" target='_blank'> 
              <i class="uil uil-twitter"></i>
            </a>
          </div>
          

          <span className="footer__copy">&#169; poojakumari.All rights reserved</span>
       </div>
     </footer>
  )
}

export default Footer
