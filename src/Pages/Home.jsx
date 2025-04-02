import React from 'react'
import Navbar from '../Components/Navbar/navbar'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/hero';
import Content from '../Components/Content/content';
import Casestudies from '../Components/casestudies/casestudies';
import Createaccount from '../Components/createaccount/createaccount';
import Questions from '../Components/Questions/Questions';


const Home = () => {
  return (
    <>
    <Navbar/>
        <Hero />
        <Content />
        <Casestudies/>
        <Createaccount/>
        <Questions/>
    <Footer/>
    </>
  )
}

export default Home