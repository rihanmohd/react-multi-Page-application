import React from "react"
import { Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import AboutPage from "./Pages/AboutPage"
import ServicesPage from "./Pages/ServicesPage"
import ProjectPage from "./Pages/ProjectPage"
import PortfolioPage from "./Pages/PortfolioPage"
import FaqPage from "./Pages/FaqPage"
import BlogPage from "./Pages/BlogPage"
import SinglePage from "./Pages/SinglePage"
import ErrorPage from "./Pages/ErrorPage"
function App() {
  

  return (
 <>
 
  <Routes >
<Route path="/" element={<HomePage />}/>
<Route path="/about" element={<AboutPage />}/>
<Route path="/services" element={<ServicesPage />}/>
<Route path="/project" element={<ProjectPage />}/>
<Route path="/portfolio" element={<PortfolioPage />}/>
<Route path="/faq" element={<FaqPage />}/>
<Route path="/blog" element={<BlogPage />}/>
<Route path="/single" element={<SinglePage/>}/>
<Route path="/error" element={<ErrorPage />}/>
  </Routes>
 
 
 
 </>
  )
}

export default App
// react multi page application
// commit: react router dom added