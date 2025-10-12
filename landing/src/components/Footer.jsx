import React from 'react';

/**
 * Footer Component
 * Includes logo, links, social media, and brand slogan
 */
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const footerLinks = [
    { label: '¿Qué es AllyTrips?', sectionId: 'que-es' },
    { label: 'Modelo Pionero', sectionId: 'pioneros' },
    { label: 'Testimonios', sectionId: 'testimonios' },
    { label: 'Cómo funciona', sectionId: 'como-funciona' },
    { label: 'Registro', sectionId: 'registro' }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/allytrips',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/allytrips',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zM18.338 5.462a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/allytrips',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/allytrips',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-white py-16 md:py-20" role="contentinfo">
      <div className="container-custom">
        <div className="rounded-[28px] bg-[#0D2C63] text-white px-10 py-14 md:px-20 md:py-16 shadow-lg">
          <div className="grid md:grid-cols-4 gap-14 md:gap-16">
            {/* Brand */}
            <div className="md:col-span-1">
              <h3 className="text-4xl font-display font-bold mb-6">AllyTrips</h3>
              <p className="text-white/85 mb-8 leading-relaxed text-lg max-w-sm">
                La plataforma de economía colaborativa que conecta viajeros con destinos auténticos en Colombia.
                Aquí cada viaje deja un impacto positivo.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg">AllyTrips</h4>
              <ul className="space-y-3 text-base">
                {footerLinks.map((link) => (
                  <li key={link.sectionId}>
                    <button
                      onClick={() => scrollToSection(link.sectionId)}
                      className="text-white/85 hover:text-[#FFD84D] transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg">Contacto</h4>
              <ul className="space-y-3 text-base text-white/85">
                <li>(+57) 322 4566543</li>
                <li>info@allytrips.com</li>
                <li>Carrera 108 # 56 – 67</li>
                <li>Bogotá, Colombia</li>
              </ul>
            </div>

            {/* Roles */}
            <div>
              <h4 className="text-white font-semibold mb-5 text-lg">Roles</h4>
              <ul className="space-y-3 text-base">
                <li>
                  <button onClick={() => scrollToSection('registro')} className="text-white/85 hover:text-[#FFD84D] transition-colors">
                    Quiero explorar como aliado
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('registro')} className="text-white/85 hover:text-[#FFD84D] transition-colors">
                    Quiero explorar como viajero
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('pqrs')} className="text-white/85 hover:text-[#FFD84D] transition-colors">
                    PQR&apos;s
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 text-center text-base text-gray-600">
          Copyright &amp; design by{' '}
          <a href="#" className="text-[#0D2C63] font-semibold hover:underline">@AllyTrips</a> – 2025
        </div>
      </div>
    </footer>
  );
};

export default Footer;