import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Hero from './Components/Hero/hero';
import Content from './Components/Content/content';
import Casestudies from './Components/casestudies/casestudies';
import Createaccount from './Components/createaccount/createaccount';
import Questions from './Components/Questions/Questions';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="container"> 
      <Navbar />
      <Hero />
      <Content />
      <Casestudies/>
      <Createaccount/>
      <Questions/>
      <Footer/>


    </div>
  );
}

export default App;
