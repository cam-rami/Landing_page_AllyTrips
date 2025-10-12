import React, { useState, useEffect } from 'react';

import Logo from "./../assets/AllYtripsAzul.png";
import LogoBlanco from "./../assets/allyTrips.png"

/**
 * Header Component
 * Responsive navigation with mobile hamburger menu
 * Includes smooth scroll to sections and sticky behavior
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: '¿Qué es?', sectionId: 'que-es' },
    { label: 'Modelo Pionero', sectionId: 'pioneros' },
    { label: 'Testimonios', sectionId: 'testimonios' },
    { label: '¿Cómo funciona?', sectionId: 'como-funciona' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white shadow-md'
      : 'bg-primary/30 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="container-custom py-4 flex items-center justify-between" aria-label="Main navigation">
        <div className="flex items-center">
          <img src={isScrolled ? Logo : LogoBlanco}
                alt="AllyTrips"
                className="w-8 h-auto transition-all duration-300"
              />
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`ml-3 text-2xl md:text-3xl font-display font-bold transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}
            aria-label="AllyTrips Home"
          >
            AllyTrips
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <li key={item.sectionId}>
              <button
                onClick={() => scrollToSection(item.sectionId)}
                className={`font-medium transition-colors hover:text-secondary ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => scrollToSection('registro')}
              className="btn-primary text-sm"
              aria-label="Pre-register now"
            >
              Preinscríbete ahora
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className={`w-6 h-6 transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-fade-in"
            role="menu"
          >
            <ul className="py-4">
              {menuItems.map((item) => (
                <li key={item.sectionId} role="none">
                  <button
                    onClick={() => scrollToSection(item.sectionId)}
                    className="block w-full text-left px-6 py-3 text-gray-700 hover:bg-secondary hover:text-white transition-colors"
                    role="menuitem"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li role="none" className="px-6 pt-2">
                <button
                  onClick={() => scrollToSection('registro')}
                  className="btn-primary w-full text-center"
                  role="menuitem"
                >
                  Preinscríbete ahora
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
