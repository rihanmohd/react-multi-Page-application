import React from 'react'
import Navbar from "../components/Navbar"
import About from '../components/About'
import Who from "../components/Who"
import OurTeam from '../components/OurTeam'
import Call from '../components/Call'
import  PortfolioSection from "../components/Portfolio"
import Vedio from "../components/Vedio"
import Footer from "../components/Footer"



const AboutPage = () => {
  return (
   <>
   <Navbar />
   <About />
   <Who />
   <OurTeam />
<Call />
<PortfolioSection />
<Vedio />
<Footer />
   </>
  )
}

export default AboutPage