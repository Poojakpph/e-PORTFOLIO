import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Footer from './components/footer/Footer';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
    <Header/>
    <main className='main'>
       <Home/> 
       <About/>
       <Skills/>
       <Services/>
       <Qualification/>
       <Portfolio/>
       <Contact/>
    </main>

    <Footer/>
    <ScrollUp/>
    </>
  );
}

export default App;
