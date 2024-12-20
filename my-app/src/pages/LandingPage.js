import React from 'react'
import Navbar from '../component/Navbar';
import HeroSection from '../component/HeroSection';
import WhyUsSection from '../component/WhyUsSection';
import ServicesSection from '../component/ServicesSection';
import ProjectsSection from '../component/ProjectsSection';
import TrainingSection from '../component/TrainingSection';
import Contact from '../component/Contact';
import Footer from '../component/Footer';
import Team from '../component/Team';

export default function LandingPage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <Navbar className="fixed top-0 left-0 w-full z-50" />
      <div className=""> 
        <HeroSection className="w-full px-4 md:px-8 lg:px-16" />
        <WhyUsSection className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <ServicesSection className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <ProjectsSection className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <TrainingSection className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <Team className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <Contact className="w-full px-4 md:px-8 lg:px-16 py-8 md:py-12" />
        <Footer className="w-full px-4 md:px-8 lg:px-16" />
      </div>
    </div>
  )
}