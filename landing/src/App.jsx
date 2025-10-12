import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import {
  WhatIsSection,
  PioneersSection,
  CTABanner,
  TestimonialsSection,
  HowItWorksSection,
  CommunityBanner
} from './components/Sections';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import VistaTrasera from "./assets/vista-trasera.png";

/**
 * Main App Component
 * High-performance, responsive landing page for AllyTrips
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <HeroSection />
        <WhatIsSection />
        <PioneersSection />
        <CTABanner />
        <TestimonialsSection />
        <HowItWorksSection />
        <RegistrationForm />
        {/* 🔹 Nueva sección agregada debajo del formulario y antes del footer */}
        <CommunityBanner backgroundUrl={VistaTrasera} />
      </main>
      <Footer />
    </div>
  );
}

export default App;