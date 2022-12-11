import React from 'react'
import heroImg1 from "../../assets/hero1.jpg"
import heroImg2 from "../../assets/hero2.jpg"
import homeImage1 from "../../assets/leaf-branch-4.png"
import homeImage2 from "../../assets/leaf-branch-2.png"

import HeroBanner from './HeroBanner'
import "./home.css"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="image__group">
            <img src={heroImg1} alt="hero_image" className="home__img1 home__img" />
            <img src={heroImg2} alt="hero_image" className="home__img2 home__img" />
          </div>
          <HeroBanner />
        </div>
      <img src={homeImage2} alt="" className="home__leaf-1" />  
      <img src={homeImage1} alt="" className="home__leaf-2" />  
    </section>
  )
}

export default Home