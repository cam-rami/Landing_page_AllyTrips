import React, { useEffect, useRef } from 'react';
import VistaTrasera from "./../assets/vista-trasera.png";
import LogoBlanco from "./../assets/allyTrips.png";
/**
 * Hero Section Component
 * Full-screen hero with background image, left-side blue overlay, and left-aligned text
 */
const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* 🔹 Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={VistaTrasera}
          alt="Traveler in beautiful Colombian landscape"
          className="w-full h-full object-cover"
          loading="eager"
        />

        {/* 🔹 Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-[#0D2C63]/95 via-[#0D2C63]/85 to-transparent"></div>
      </div>

      {/* 🔹 Text Content */}
      <div className="relative z-10 flex items-center h-full text-white text-left pl-[6%] md:pl-[8%] lg:pl-[10%] pr-6 max-w-4xl">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <img src={LogoBlanco} 
                  alt="AllyTrips" 
                  className='w-10 h-auto transition-all duration-300' />
            <span className="text-2xl font-semibold tracking-wide">AllyTrips</span>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-5">
            Una nueva forma <span className="text-[#FFD84D]">de viajar</span>
            <br />
            está por comenzar
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 animate-slide-up delay-200">
            Muy pronto descubrirás <span className="text-[#FFD84D]">hospedajes</span> y <span className="text-[#FFD84D]">experiencias</span>
             creados por personas y comunidades que quieren transformar la manera de viajar.
          </p>

          {/* 🔹 CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up delay-300">
            <button
              onClick={() => scrollToSection('registro')}
              className="bg-[#FFD84D] text-[#0D2C63] font-semibold py-3 px-6 rounded-full text-lg flex items-center justify-center hover:bg-yellow-400 transition-all duration-300 shadow-md"
              aria-label="Analyze as a traveler"
            >
              → Quiero explorar como viajero
            </button>
            <button
              onClick={() => scrollToSection('registro')}
              className="bg-[#3CD28C] text-[#0D2C63] font-semibold py-3 px-6 rounded-full text-lg flex items-center justify-center hover:bg-green-400 transition-all duration-300 shadow-md"
              aria-label="Register my destination"
            >
              → Quiero explorar como aliado
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Scroll Indicator */}
      <div className="absolute bottom-8 left-20 animate-bounce">
        <button
          onClick={() => scrollToSection('que-es')}
          className="text-white hover:text-[#FFD84D] transition-colors"
          aria-label="Scroll down to learn more"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;