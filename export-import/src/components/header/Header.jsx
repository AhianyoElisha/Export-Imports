import React, {useState} from 'react'
import "./header.css"

const Header = () => {
/* ====================== Active Header Tab Color ======================== */
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        //add show-header class if scroll is greater than 560 viewport
        if (this.scrollY >= 80) header.classList.add("show-header")
    
        else header.classList.remove("show-header")
    })

/* ====================== Toggle Menu ======================== */

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Import & Export</a>
            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" onClick={function() { setActiveNav("#home");showMenu(!Toggle);}} 
                        className={activeNav === "#home" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i>HOME
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#export" onClick={function() {setActiveNav("#exports"); showMenu(!Toggle)}} 
                        className={activeNav === "#exports" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-user nav__icon"></i>MANGE EXPORTS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#products" onClick={function() { setActiveNav("#products"); showMenu(!Toggle)}} 
                        className={activeNav === "#products" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i>PRODUCTS
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" onClick={function() { setActiveNav("#about"); showMenu(!Toggle)}} 
                        className={activeNav === "#about" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-user nav__icon"></i>ABOUT US
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#team" onClick={function() { setActiveNav("#team"); showMenu(!Toggle)}} 
                        className={activeNav === "#team" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i>TEAM
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" onClick={function() { setActiveNav("#contact"); showMenu(!Toggle)}} 
                        className={activeNav === "#contact" ? "nav__link active-link": "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i>CONTACT US
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={()=> showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header