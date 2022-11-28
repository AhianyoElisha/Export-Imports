import React from 'react'
import HeroBanner from './HeroBanner'
import "./home.css"
import ScrollDown from './ScrollDown'


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <HeroBanner />          
        </div>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home