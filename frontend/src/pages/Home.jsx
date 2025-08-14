import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Featprojects from '../components/Featprojects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Featprojects/>
        <About/>
        <Contact/>
        <Footer/>

    </div>
  )
}

export default Home