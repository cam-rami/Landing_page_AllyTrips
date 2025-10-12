import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import {
  WhatIsAllyTrips,
  PioneersSection,
  TestimonialsSection,
  HowItWorksSection,
  CTABanner,
  CommunityBanner,
} from './components/Sections';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main role="main">
        <HeroSection />
        <WhatIsAllyTrips />
        <PioneersSection />
        <CTABanner />
        <TestimonialsSection />
        <HowItWorksSection />

        {/* 🔹 Formulario de registro */}
        <div id="registro">
          <RegistrationForm />
        </div>

        {/* 🔹 Luego la sección de comunidad */}
        <CommunityBanner />
      </main>

      <Footer />
    </div>
  );
}

export default App;
