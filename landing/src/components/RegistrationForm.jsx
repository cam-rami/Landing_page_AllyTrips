import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../supabaseClient';

/**
 * Registration Form Component
 * Pre-registration form with validation and API integration
 */
const RegistrationForm = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    ciudad: '',
    pais: 'Colombia',
    whatsapp: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.ciudad.trim()) {
      newErrors.ciudad = 'La ciudad es requerida';
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = 'El número de WhatsApp es requerido';
    } else if (!/^\+?[0-9]{10,15}$/.test(formData.whatsapp.replace(/\s/g, ''))) {
      newErrors.whatsapp = 'Número de WhatsApp inválido';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  // PEGA ESTA NUEVA VERSIÓN
    const handleSubmit = async (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      setIsSubmitting(true);
      setSubmitStatus(null);

      const { error } = await supabase
        .from('registrations') // <-- Asegúrate que 'registrations' sea el nombre de tu tabla
        .insert([formData]);

      if (error) {
        console.error('Error al registrar en Supabase:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        setFormData({
          nombre: '',
          email: '',
          ciudad: '',
          pais: 'Colombia',
          whatsapp: ''
        });

        setTimeout(() => setSubmitStatus(null), 5000);
      }

      setIsSubmitting(false);
    };

  return (
    <section id="registro" className="section-padding bg-gray-50" ref={sectionRef}>
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-4">
            Únete a la <span className="text-secondary">revolución</span> del viaje
          </h2>
          <p className="text-lg text-gray-600">
            Regístrate ahora y sé uno de los primeros en descubrir la nueva forma de viajar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card" noValidate>
          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-secondary/20 border-l-4 border-secondary rounded" role="alert">
              <p className="text-secondary font-semibold">
                ¡Registro exitoso! Pronto te contactaremos.
              </p>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border-l-4 border-red-500 rounded" role="alert">
              <p className="text-red-700 font-semibold">
                Hubo un error al enviar tu registro. Por favor, intenta de nuevo.
              </p>
            </div>
          )}

          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="nombre" className="block text-gray-700 font-semibold mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.nombre ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
              placeholder="Tu nombre completo"
              aria-required="true"
              aria-invalid={!!errors.nombre}
              aria-describedby={errors.nombre ? 'nombre-error' : undefined}
            />
            {errors.nombre && (
              <p id="nombre-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.nombre}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Correo electrónico *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
              placeholder="tu@email.com"
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.email}
              </p>
            )}
          </div>

          {/* City and Country */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="ciudad" className="block text-gray-700 font-semibold mb-2">
                Ciudad *
              </label>
              <input
                type="text"
                id="ciudad"
                name="ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.ciudad ? 'border-red-500' : 'border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
                placeholder="Tu ciudad"
                aria-required="true"
                aria-invalid={!!errors.ciudad}
                aria-describedby={errors.ciudad ? 'ciudad-error' : undefined}
              />
              {errors.ciudad && (
                <p id="ciudad-error" className="mt-1 text-sm text-red-500" role="alert">
                  {errors.ciudad}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="pais" className="block text-gray-700 font-semibold mb-2">
                País
              </label>
              <input
                type="text"
                id="pais"
                name="pais"
                value={formData.pais}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                placeholder="Tu país"
              />
            </div>
          </div>

          {/* WhatsApp Field */}
          <div className="mb-8">
            <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border ${
                errors.whatsapp ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-secondary transition-all`}
              placeholder="+57 300 123 4567"
              aria-required="true"
              aria-invalid={!!errors.whatsapp}
              aria-describedby={errors.whatsapp ? 'whatsapp-error' : undefined}
            />
            {errors.whatsapp && (
              <p id="whatsapp-error" className="mt-1 text-sm text-red-500" role="alert">
                {errors.whatsapp}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full btn-primary py-4 text-lg ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            aria-label="Submit registration form"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar datos'}
          </button>

          <p className="text-sm text-gray-500 text-center mt-4">
            * Campos obligatorios
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
