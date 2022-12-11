import React from 'react'
import aboutImg from "../../assets/about.png"
import leafImg from '../../assets/leaf-branch-1.png'
import "./about.css"

const About = () => {
  return (
    <section className="about section" id="about">
        <div className="about__container container grid">
          <div className="about__data">
            <span className="section__subtitle">About Us</span>
            <h3 className="about__title">We Are Here To Serve You With Our Experience</h3>
            <p className="about__description">Serving since 2005, gaining experience over the years providing
            products of excellent quality</p>
            <ul className="about__list">
                <li className="about__item">Supply according to client's needs</li>
                <li className="about__item">Shipment load supervision</li>
                <li className="about__item">Great experience in logistics</li>
                <li className="about__item">Speed in procurement</li>
                <li className="about__item">Varied/Extensive supplier database</li>
            </ul>
            <a href="#read__more" className="button">READ MORE
            <i className="ri-arrow-right-line"></i></a>
          </div>
          <div className="upper__layer">
            <div className="lower__layer1"></div>
            <div className="lower__layer2"></div>
            <img src={aboutImg} alt="" className="about__img" />
          </div>
        </div>
        <img src={leafImg} alt="" className="leaf__img" />
    </section>
  )
}

export default About