import React from 'react'
import AboutImg from "../../assets/about.png"
import "./about.css"
const About = () => {
  return (
    <section className="about section" id="about">
      <div className="center__header">
        <h2 className="section__title">About Us</h2>
      </div>
      <div className="about__container container grid">
        <img src={AboutImg}  className="about__img" alt="" />
        <div className="about__data">
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
          <a href="#read__more" className="button button--flex">READ MORE</a>
        </div>
      </div>
    </section>
  )
}

export default About