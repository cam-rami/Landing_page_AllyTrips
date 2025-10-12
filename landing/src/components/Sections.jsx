import React, { useEffect, useRef } from 'react';
import imgAllyTrips from "../assets/94091.jpg";
import imgQueAllyTrips from "../assets/acogedor-dormitorio-con-sabanas-blancas-almohadas-azules-y-luz-de-puesta-de-sol.jpg";
import aliadoPionero from "../assets/un-tipo-alegre-invitando-la-gente-entrar-en-su-casa.jpg";
import viajepionero from "../assets/Viajepionero.jpg";
import PersonaEspalda from "./../assets/persona_espaldas.png";

// Hook for intersection observer animations
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
 * What Is AllyTrips Section
 */
export const WhatIsAllyTrips = () => {
  return (
    <section id="que-es" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
        {/* Imagen con texto encima */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <img
            src={imgQueAllyTrips}
            alt="Habitación AllyTrips"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-10 pb-30">
            <h3 className="text-white text-4xl md:text-5xl font-bold leading-snug">
              Explora.
              <br />
              Inspira.
              <br />
              Transforma.
            </h3>
          </div>
        </div>

        {/* Texto descriptivo */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
            ¿Qué es AllyTrips?
          </h2>
          <h3 className="text-xl md:text-1.5xl font-semibold text-secondary mb-5">
            Turismo con propósito, personas con impacto
          </h3>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            <strong>AllyTrips</strong> conecta a viajeros con aliados que comparten una misma
            visión: <strong>viajar, inspirar, cuidar y transformar.</strong>
          </p>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            En nuestra plataforma encontrarás un listado de hospedajes, experiencias culturales,
            ecológicas y comunitarias, diseñadas para quienes buscan vivir{" "}
            <strong>Colombia</strong> de una manera más consciente y humana.
          </p>
        </div>
      </div>
    </section>
  );
};


/**
 * Pionero o viajero Section
 */
export const PioneersSection = () => {
  const sectionRef = useScrollAnimation();

  const pioneers = [
    {
      title: "Viajero Pionero",
      image:
        "https://images.unsplash.com/photo-1502920514313-52581002a659?auto=format&fit=crop&w=800&q=80",
  bgColor: "bg-primary", // Azul AllyTrips
      description:
        "Descubrirás antes que nadie las primeras experiencias y hospedajes disponibles. Regístrate hoy y pronto conocerás nuestro plan de beneficios exclusivos para viajeros pioneros.",
      order: "image-first",
    },
    {
      title: "Aliado Pionero",
      image: aliadoPionero,
      bgColor: "bg-secondary", // Verde AllyTrips
      description:
        "Podrás ofrecer tu alojamiento o experiencia a una comunidad que valora el turismo con sentido. Inscríbete ahora y muy pronto sabrás más sobre los beneficios especiales pensados para nuestros aliados pioneros.",
      order: "text-first",
    },
  ];

  return (
    <section id="pioneros" className="bg-white pb-10" ref={sectionRef}>
      <div className="container-custom text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-10">
          Sé parte de los pioneros de AllyTrips
        </h2>
        <p className="text-gray-600 text-lg mx-auto leading-relaxed max-w-3xl mt-8">
          Estamos construyendo el primer ecosistema de turismo colaborativo en
          Colombia.
          <br />
          Si quieres ser parte desde el comienzo,{" "}
          <span className="font-semibold text-accent">
            ¡preinscríbete ahora mismo!
          </span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {pioneers.map((pioneer, index) => (
          <div
            key={index}
            data-animate
            className={`${pioneer.bgColor} text-white rounded-2xl shadow-lg flex flex-col items-center p-3`}
          >
            {/* --- Viajero Pionero (imagen arriba) --- */}
            {pioneer.order === "image-first" && (
              <>
                <div className="w-full flex justify-center mb-6">
                  <img
                    src={viajepionero}
                    alt={pioneer.title}
                    className="w-full rounded-lg object-cover max-h-60"
                    loading="lazy"
                  />
                </div>
                <div className="text-left w-full px-3 pb-4">
                  <h3 className="text-2xl font-bold mb-3">{pioneer.title}</h3>
                  <p className="text-base leading-relaxed">
                    {pioneer.description}
                  </p>
                </div>
              </>
            )}

            {/* --- Aliado Pionero (texto arriba, imagen abajo) --- */}
            {pioneer.order === "text-first" && (
              <>
                <div className="text-left w-full px-4 pb-6">
                  <h3 className="text-2xl font-bold mb-3">{pioneer.title}</h3>
                  <p className="text-base leading-relaxed">
                    {pioneer.description}
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <img
                    src={pioneer.image}
                    alt={pioneer.title}
                    className="w-full rounded-lg object-cover max-h-60"
                    loading="lazy"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

// Banner de llamada a la acción (CTABanner)
export const CTABanner = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-transparent mt-1 mb-16">
      <div
        className="max-w-5xl mx-auto bg-primary text-white rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between px-8 md:px-12 py-8 md:py-10 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 40%, rgba(255,255,255,0.1) 0%, transparent 70%), radial-gradient(circle at 80% 60%, rgba(0,0,0,0.15) 0%, transparent 70%)",
        }}
      >
        {/* Texto alineado a la izquierda */}
        <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-left leading-snug md:max-w-3xl">
          Regístrate hoy y muy pronto sabrás{' '}
          <span className="block md:inline">
            cómo ser parte de esta{' '}
            <span className="text-accent font-bold">
              nueva forma de viajar.
            </span>
          </span>
        </h2>

        {/* Botón alineado a la derecha */}
        <button
          onClick={() => scrollToSection("registro")}
          className="mt-6 md:mt-0 bg-accent text-primary font-semibold text-base md:text-lg px-6 md:px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 whitespace-nowrap"
        >
          → Preinscríbete ahora
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
 * Funcional Section
 */
export const HowItWorksSection = () => {
  return (
    <section id="como-funciona" className="bg-white py-16 px-6 text-white">
  <div className="max-w-6xl mx-auto bg-primary rounded-2xl shadow-2xl p-6 md:p-10 md:h-[640px]">

        
        {/* Título y descripción */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">
            Así funcionará AllyTrips
          </h2>
          <p className="text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl mx-auto md:mx-0 mt-3">
            En pocos meses presentaremos oficialmente la plataforma, pero desde ahora puedes
            ser parte del grupo que hará posible su inicio.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="md:flex md:items-center md:gap-10">
          
          {/* Imagen */}
          <div className="flex justify-center md:justify-start md:pl-1 flex-shrink-0">
            <img
              src={imgAllyTrips}
              alt="App AllyTrips"
              className="rounded-xl shadow-lg w-[300px] md:w-[400px] object-cover relative -translate-y-3 md:-translate-y-5"
            />
          </div>

          {/* Pasos */}
          <div className="flex flex-col justify-between h-[100%] md:h-[420px] space-y-6 md:space-y-5 flex-1 relative -translate-y-5">
            
            {/* Paso 1 */}
            <div className="flex items-start bg-[#1e4382]  rounded-lg p-6 md:p-7 gap-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-bold text-primary text-sm">
                01
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">1. Preinscríbete</h3>
                <p className="text-gray-100 text-base leading-snug">
                  Elige si quieres ser viajero o aliado y completa tus datos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start bg-[#1e4382]  rounded-lg p-6 md:p-7 gap-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center font-bold text-white text-sm">
                02
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  2. Conoce las experiencias
                </h3>
                <p className="text-gray-100 text-base leading-snug">
                  Muy pronto recibirás información sobre los primeros hospedajes y
                  actividades disponibles.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start bg-[#1e4382] rounded-lg p-6 md:p-7 gap-4 shadow-md hover:shadow-lg transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-orange flex items-center justify-center font-bold text-white text-sm">
                03
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  3. Conecta y transforma
                </h3>
                <p className="text-gray-100 text-base leading-snug">
                  A partir del lanzamiento, podrás vivir u ofrecer experiencias auténticas
                  con propósito.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/**
 * NUEVA SECCIÓN — Banner de Comunidad
 * (va debajo del formulario y antes del footer)
 */
export const CommunityBanner = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div
        className="relative w-full bg-cover bg-center h-[400px] md:h-[480px] lg:h-[520px] flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: `url(${PersonaEspalda})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="relative z-10 px-6 md:px-12">
          <h2 className="text-white font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 drop-shadow-lg">
            Muy pronto conocerás cómo hacer<br />
            parte de nuestra comunidad.
          </h2>
          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto drop-shadow-md">
            En <span className="font-semibold">AllyTrips</span> creemos que viajar no se trata solo de llegar a un destino,
            sino de inspirar cambios y dejar huella en el camino.
          </p>
        </div>
      </div>

      {/* Franja amarilla */}
      <div className="bg-[#D8B34A] py-4 md:py-6 text-center -mt-[2px]">
        <p className="font-display font-bold text-xl md:text-2xl lg:text-3xl text-[#113B7A]">
          Explora. Inspira. Transforma
        </p>
      </div>
    </section>
  );
};
