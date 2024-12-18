import React from 'react'
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Card from "../components/Card"
import Who from "../components/Who"
import OurWork from "../components/OurWork"
import Images from "../components/Images"

import PortfolioSection from "../components/Portfolio"
import Vedio from "../components/Vedio"
import Rating from "../components/Rating"
import Footer from "../components/Footer"


const HomePage = () => {
  return (
    <>
    <Navbar />
 <Header />
 <Card />
 <Who />
 <OurWork />
 <Images />
 <PortfolioSection />
 <Vedio />
 <Rating />
 <Footer />
    </>
  )
}

export default HomePage