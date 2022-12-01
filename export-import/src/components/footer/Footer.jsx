import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Import & Exports</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" 
                    className="footer__link">About</a>
                </li>
                <li>
                    <a href="#products" 
                    className="footer__link">Products</a>
                </li>
                <li>
                    <a href="#team" 
                    className="footer__link">Team</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.facebook.com/" 
                className="footer__social-link"
                target="blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/" 
                className="footer__social-link"
                target="blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.twitter.com/" 
                className="footer__social-link"
                target="blank">
                    <i className="bx bxl-twitter"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; Imports & Exports. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer