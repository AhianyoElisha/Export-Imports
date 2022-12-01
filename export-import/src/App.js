import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Exports from './components/exports/Exports';
import Products from './components/products/Products';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import ScrollReveal from "scrollreveal"

function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: "1000",
      delay: "300",
      reset: true
    });

    // Home Section Animations
    sr.reveal(`.home__scroll`, {origin: "bottom"})
    sr.reveal(`.home-in`, {interval: 100})
    
    
    // Export Page Animations
    sr.reveal(`.export__data`, {origin:"right"})
    sr.reveal(`.image__stack`, {origin: "left"})

    // About Page Animations
    sr.reveal(`.about__title_animate`)
    sr.reveal(`.about__img`, {origin:"right"})
    sr.reveal(`.about__data`, {origin: "left"})

    //Product Section Animations
    // sr.reveal(`.product__title_animate`, {origin: "left"})
    // sr.reveal(`.products__title`, {origin: "right"})
    sr.reveal(`.products__container`, {origin: "bottom"})

    // Team Section Animations
    sr.reveal(`.team__header`, {origin: "bottom"})
    sr.reveal(`.team__card`, {interval: 200})

    // Contact Section Animations
    sr.reveal(`.contact__title_animate`, {origin: "bottom"})
    // sr.reveal(`.contact__title`)
    sr.reveal(`.contact__info`, {origin:"right"})
    sr.reveal(`.contact__form`, {origin: "left"})
  }, []);
  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <Exports />
      <Products />
      <About />
      <Team />
      <Contact />
    </main>

    <Footer />
    <Scrollup />
    </>
  );
}

export default App;