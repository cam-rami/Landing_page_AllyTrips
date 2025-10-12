import React, { useEffect, useRef } from 'react';
import PersonaEspalda from "./../assets/persona_espaldas.png";

// Hook para animaciones con Intersection Observer
const useScrollAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) {
      const elements = ref.current.querySelectorAll('[data-animate]');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

/**
 * Sección "Qué es AllyTrips"
 */
export const WhatIsSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section id="que-es" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className="grid md:grid-columns-2 gap-12 items-center">
          {/* Imagen */}
          <div data-animate className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Travelers exploring Colombia"
              className="rounded-2xl shadow-2xl w-full"
              loading="lazy"
            />
          </div>

          {/* Contenido */}
          <div data-animate className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
              ¿Qué es <span className="text-secondary">AllyTrips</span>?
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              AllyTrips es una innovadora plataforma de economía colaborativa que revoluciona
              la forma en que los colombianos viajan y descubren su país.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Conectamos a viajeros aventureros con anfitriones locales que ofrecen experiencias
              auténticas, alojamientos únicos y un conocimiento profundo de la cultura colombiana.
            </p>
            <ul className="space-y-4">
              {[
                'Experiencias auténticas con locales',
                'Economía colaborativa y sostenible',
                'Beneficios exclusivos para pioneros',
                'Comunidad de viajeros apasionados'
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg
                    className="w-6 h-6 text-secondary mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * Sección de Pioneros
 */
export const PioneersSection = () => {
  const sectionRef = useScrollAnimation();

  const pioneers = [
    {
      title: 'Viajero Pionero',
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Sé uno de los primeros en descubrir destinos únicos y recibe beneficios exclusivos.',
      benefits: ['Descuentos del 25%', 'Acceso prioritario', 'Comunidad exclusiva', 'Recompensas especiales']
    },
    {
      title: 'Aliado Pionero',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comparte tu espacio y gana ingresos adicionales mientras conoces viajeros increíbles.',
      benefits: ['Ingresos pasivos', 'Visibilidad destacada', 'Soporte dedicado', 'Sin comisiones iniciales']
    }
  ];

  return (
    <section id="pioneros" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-custom">
        <div data-animate className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Sé parte de los <span className="text-secondary">pioneros</span> de AllyTrips
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Los pioneros son la base de nuestra comunidad. Obtén beneficios exclusivos
            por ser de los primeros en unirte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pioneers.map((pioneer, index) => (
            <div
              key={index}
              data-animate
              className={'card hover:scale-105 transform transition-all duration-300 delay-${index * 100}' }
            >
              <img
                src={pioneer.image}
                alt={pioneer.title}
                className="w-full h-56 object-cover rounded-xl mb-6"
                loading="lazy"
              />
              <h3 className="text-2xl font-display font-bold text-primary mb-3">
                {pioneer.title}
              </h3>
              <p className="text-gray-600 mb-6">{pioneer.description}</p>
              <ul className="space-y-3">
                {pioneer.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-accent mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Banner CTA
 */
export const CTABanner = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-padding bg-primary">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Regístrate hoy y muy pronto sabrás cómo ser parte
          <br className="hidden md:block" />
          de esta nueva forma de viajar
        </h2>
        <button
          onClick={() => scrollToSection('registro')}
          className="btn-primary text-lg px-12 py-4"
          aria-label="Register now"
        >
          Únete como pionero
        </button>
      </div>
    </section>
  );
};

/**
 * Sección de Testimonios (nuevo diseño)
 */
export const TestimonialsSection = () => {
  const sectionRef = useScrollAnimation();

  const testimonials = [
    {
      name: 'María Castillo',
      role: 'Aliada Pionera en el Eje Cafetero',
      text:
        'Registré mi finca porque quiero que los viajeros conozcan el campo colombiano más allá del turismo tradicional. AllyTrips me permite compartirlo sin perder nuestras raíces.',
      variant: 'light',
    },
    {
      name: 'Daniel Zapata',
      role: 'Viajero Pionero en Bogotá',
      text:
        'Me preinscribí porque quiero viajar con sentido. No se trata solo de conocer lugares, sino de conectar con la gente que los hace únicos.',
      variant: 'green',
    },
    {
      name: 'Carolina Guzmán',
      role: 'Aliada Pionera en Palomino',
      text:
        'Tengo un apartamento frente al mar en Palomino y decidí publicarlo en AllyTrips porque quiero recibir personas que valoren la tranquilidad del lugar y el respeto por la naturaleza.',
      variant: 'light',
    },
    {
      name: 'Laura Rodríguez',
      role: 'Viajera Pionera en Medellín',
      text:
        'Estoy esperando el lanzamiento para elegir mi primera experiencia. Lo que más me gusta de AllyTrips es que puedo viajar sabiendo que cada viaje tiene un propósito.',
      variant: 'green',
    },
  ];

  return (
    <section id="testimonios" ref={sectionRef} className="relative section-padding bg-[#1FA97A]">
      <div className="container-custom relative">
        <div data-animate className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            Ya estamos transformando la forma de viajar
          </h2>
          <p className="mt-3 md:mt-4 text-white/90 text-base md:text-lg">
            Conoce algunos de los primeros pioneros que ya hacen parte de <span className="font-semibold">AllyTrips</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {testimonials.map((t, i) => {
            const isGreen = t.variant === 'green';
            return (
              <article
                key={i}
                data-animate
                className={`relative rounded-2xl p-6 shadow-xl min-h-[210px] ${
                  isGreen ? 'bg-[#BFE6C8]' : 'bg-white'
                }`}
              >
                <div className="mb-3 flex text-[#1FA97A]">
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="italic text-gray-700 mb-5 leading-relaxed">“{t.text}”</p>

                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-primary">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>

                <svg
                  className="absolute right-5 bottom-4 h-6 w-6 opacity-15 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6C5.42 6 4 7.43 4 9.2c0 1.78 1.42 3.21 3.17 3.21.17 0 .34-.02.5-.04-.2 1.54-1.21 2.87-2.67 3.52l.7 1.61C8.06 16.41 10 13.98 10 11c0-2.76-2.2-5-4.83-5zm9.66 0C15.08 6 13.66 7.43 13.66 9.2c0 1.78 1.42 3.21 3.17 3.21.17 0 .34-.02.5-.04-.2 1.54-1.21 2.87-2.67 3.52l.7 1.61C17.72 16.41 19.66 13.98 19.66 11c0-2.76-2.2-5-4.83-5z" />
                </svg>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/**
 * Sección Cómo Funciona
 */
export const HowItWorksSection = () => {
  const sectionRef = useScrollAnimation();

  const steps = [
    { number: '1', title: 'Regístrate', description: 'Crea tu perfil gratis y únete a la comunidad de pioneros de AllyTrips.' },
    { number: '2', title: 'Explora o Comparte', description: 'Descubre destinos únicos o comparte tu espacio con viajeros aventureros.' },
    { number: '3', title: 'Conecta y Disfruta', description: 'Crea conexiones auténticas y vive experiencias inolvidables.' },
  ];

  return (
    <section id="como-funciona" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div data-animate className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            ¿Cómo <span className="text-secondary">funciona</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tres simples pasos para comenzar tu aventura con AllyTrips
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} data-animate className={'text-center delay-${index * 100}'}>
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl font-display font-bold text-white">{step.number}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * NUEVA SECCIÓN — Banner de Comunidad
 * (va debajo del formulario y antes del footer)
 */
export const CommunityBanner = () =>{
  return (
    <section className="relative">
      <div
        className="relative w-full bg-cover bg-center min-h-[380px] md:min-h-[440px] lg:min-h-[500px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${PersonaEspalda})` }}
      >
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 px-6 md:px-12">
          <h2 className="text-white font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Muy pronto conocerás cómo hacer<br />
            parte de nuestra comunidad.
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto">
            En <span className="font-semibold">AllyTrips</span> creemos que viajar no se trata solo de llegar a un destino, sino de inspirar cambios y dejar huella en el camino.
          </p>
        </div>
      </div>

      <div className="bg-[#D8B34A] py-4 md:py-6 text-center">
        <p className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-[#113B7A]">
          Explora. Inspira. Transforma
        </p>
      </div>
    </section>
  );
};