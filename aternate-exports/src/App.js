import './App.css';
import { useEffect } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Exports from './components/exports/Exports'
import Products from './components/products/Products'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup'
import ScrollReveal from 'scrollreveal'

function App() {
  useEffect(() => {
  const sr = ScrollReveal({
      distance: "30px",
      origin: 'top',
      reset: true,
  })  

  sr.reveal('.image__group')
  sr.reveal('.home__data', {origin: 'bottom'})
  
  
  sr.reveal(`.upper__layer`, {origin: 'left'})
  sr.reveal(`.about__data`, {origin: 'right'})

  sr.reveal(`.image__stack`, {origin: 'left'})
  sr.reveal(`.export__data`, {origin: 'right'})

  sr.reveal(`.products__container`, {origin: "left"})

  sr.reveal(`.team__header`, {origin: "bottom"})
  sr.reveal(`.team__card`, {interval: 200})


  sr.reveal(`.contact__title`, {origin: "bottom"})
  sr.reveal(`.contact__info`, {origin:"right"})
  sr.reveal(`.contact__form`, {origin: "left"})


}, [])
  
  return (
    <>
    <Header />
    <main className="main">
      <Home />
      <Exports />
      <About />
      <Products />
      <Team />
      <Contact />
    </main>
    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
