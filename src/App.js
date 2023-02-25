import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import React from 'react';
import Analytics from './components/Analytics';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      {/* 
      <Route path = '/' element={<App />}></Route>
      <Route path="blogs" element={<App />} />
    </BrowserRouter> */}
{/* 
      <BrowserRouter>
        <Routes> */}



          {/* <Route path="blogs" element={<Hero />} />
          <Route path='/' element={<Analytics/>}/> */}
          <Navbar />
          <Hero />
          <Analytics />
          <Newsletter />
          <Cards />
          <Footer />
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
