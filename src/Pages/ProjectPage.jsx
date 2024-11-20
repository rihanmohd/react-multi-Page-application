import React from 'react'
import Navbar from "../components/Navbar"
import Project from '../components/Project'
import ProjectCard from '../components/ProjectCard'
import PortfolioSection from "../components/Portfolio"
import Footer from "../components/Footer"


const ProjectPage = () => {
  return (
    <div>
        <Navbar />
        <Project />
        <PortfolioSection />
        <ProjectCard />
        <Footer />

    </div>
  )
}

export default ProjectPage