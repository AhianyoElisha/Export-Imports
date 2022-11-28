import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Exports from './components/exports/Exports';
import Products from './components/products/Products';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home />
      <Exports />
      <Products />
      <About />
    </main>
    </>
  );
}

export default App;
