import React, {useState} from 'react'
import navImage1 from "../../assets/leaf-branch-4.png"
import navImage2 from "../../assets/leaf-branch-3.png"
import "./header.css"

const Header = () => {

/* ====================== Active Header Tab Color ======================== */
  window.addEventListener("scroll", function () {

    const sections = document.querySelectorAll('section[id]')
    const scrollY = window.pageYOffset
 
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']') 
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
      }else {
        sectionsClass.classList.remove('active-link')
      }
    })

  })

  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    //add show-header class if scroll is greater than 560 viewport
    if (this.scrollY >= 80) header.classList.add("show-header")

    else header.classList.remove("show-header")
  })

/* ====================== Toggle Menu ======================== */

  const [Toggle, showMenu] = useState(false)
  return (
    <header className="header" id="header">
        <nav className="nav container">
          <a href="#home" className="nav__logo">Export & Import</a>
          <div className={Toggle ? "nav__menu show-menu ":"nav__menu"} id="nav-menu">
            <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link" onClick={()=> showMenu(!Toggle)}>Home</a>
                </li>

                <li className="nav__item">
                  <a href="#export" className="nav__link" onClick={()=> showMenu(!Toggle)}>Mange Exports</a>
                </li>
                
                <li className="nav__item">
                  <a href="#about" className="nav__link" onClick={()=> showMenu(!Toggle)}>About Us</a>
                </li>

                <li className="nav__item">
                  <a href="#products" className="nav__link" onClick={()=> showMenu(!Toggle)}>Products</a>
                </li>
                                
                <li className="nav__item">
                  <a href="#team" className="nav__link" onClick={()=> showMenu(!Toggle)}>Team</a>
                </li>

                <li className="nav__item">
                  <a href="#contact" className="nav__link" onClick={()=> showMenu(!Toggle)}>Contact Us</a>
                </li>
            </ul>

            {/* Close Button */}
            <div className="nav__close" id="nav-close" onClick={()=> showMenu(!Toggle)}>
              <i className="ri-close-line"></i>
            </div>
            <img src={navImage1} alt="nav__image" className="nav__img-1" />
            <img src={navImage2} alt="nav__image" className="nav__img-2" />
          </div>

          <div className="nav__buttons">
            {/* Theme change buttons */}
            {/* <i className="ri-moon-line change__theme" id="theme-button"></i> */}
          
            {/* Toggle button */}
            <div className="nav__toggle" id="nav-toggle" onClick={() =>showMenu(!Toggle)}>
              <i className="ri-apps-2-line toggle__button"></i>
            </div>
          </div>
        </nav>
    </header>
  )
}

export default Header