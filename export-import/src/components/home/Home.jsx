import React from 'react'
import HeroBanner from './HeroBanner'
import "./home.css"
import ScrollDown from './ScrollDown'
import Socials from './Socials'


const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <HeroBanner />  
          <Socials />        
        </div>
        <ScrollDown />
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='wave__shape'><path fill="#fafafa" fill-opacity="1" d="M0,160L720,192L1440,32L1440,320L720,320L0,320Z"></path></svg>
    </section>
  )
}

export default Home