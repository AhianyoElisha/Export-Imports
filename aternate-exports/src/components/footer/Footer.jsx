import React from 'react'
import './footer.css'
import leafImg1 from '../../assets/leaf-branch-1.png'
import leafImg2 from '../../assets/leaf-branch-2.png'
import leafImg3 from '../../assets/leaf-branch-3.png'
import footerCard1 from '../../assets/footer-card-1.png'
import footerCard2 from '../../assets/footer-card-2.png'
import footerCard3 from '../../assets/footer-card-3.png'
import footerCard4 from '../../assets/footer-card-4.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container grid">
            <div>
                <a href="#" className="footer__logo">Export & Import</a>
                <p className="footer__description">
                Vast experience with the <br /> best products on the <br /> market
                </p>
            </div>
            <div className="footer__content">
                <div>
                    <h3 className="footer__title">Navigation</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Mange Exports</a>
                        </li>
                
                        <li>
                            <a href="#" className="footer__link">About</a>
                        </li>
                
                        <li>
                            <a href="#" className="footer__link">Products</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer__title">Information</h3>
                    <ul className="footer__links">
                        <li>
                            <a href="#" className="footer__link">Contact</a>
                        </li>
                
                        <li>
                            <a href="#" className="footer__link">Team</a>
                        </li>
                
                        <li>
                            <a href="#" className="footer__link">Terms and Conditions</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Address</h3>
                    <ul className="footer__links">
                        <li className='footer__information'>
                            Madina /Ashaley Botwe
                            Accra, Ghana
                        </li>
                
                        <li className='footer__information'>
                            9AM - 11PM
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footer__title">Social Media</h3>
                    <ul className="footer__socials">
                        <a href="https://www.facebook.com/" target="_blank" className="footer__social-link">
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" className="footer__social-link">
                            <i className="ri-instagram-fill"></i>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" className="footer__social-link">
                            <i className="ri-twitter-fill"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__info container">
            <div className="footer__card">
                <img src={footerCard1} alt="card" />
                <img src={footerCard2} alt="card" />
                <img src={footerCard3} alt="card" />
                <img src={footerCard4} alt="card" />
            </div>
            <span className="footer__copy">
                &#169; Mange Exports International. All rights reserved
            </span>
        </div>
        <img src={leafImg1} alt="footer" className="footer__leaf-1" />
        <img src={leafImg2} alt="footer" className="footer__leaf-2" />
        <img src={leafImg3} alt="footer" className="footer__leaf-3" />
   </footer>
  )
}

export default Footer