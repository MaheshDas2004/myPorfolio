import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Featprojects from '../components/Featprojects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Routes,Route } from 'react-router-dom'

const Home = () => {
  return (
    <div id='/' className='scroll-smooth'>
        <Hero/>
        <Featprojects/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home