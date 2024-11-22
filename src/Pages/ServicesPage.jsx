import React from 'react'
import Navbar from "../components/Navbar"
import Service from '../components/Service'
import OurWork from "../components/OurWork"
import Card from "../components/Card"
import ServiceConsultation from '../components/ServiceConsultation'
import Rating from "../components/Rating"
import Footer from "../components/Footer"



const ServicesPage = () => {
  return (
    <>
    <Navbar />
    <Service />
    <Card />
     <OurWork />
    <ServiceConsultation />
    <Rating />
    <Footer />
    </>
  )
}

export default ServicesPage