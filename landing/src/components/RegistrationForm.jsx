import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    celular: "",
    ciudad: "",
    rol: "Viajero",
    aceptar: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = type === "checkbox" ? checked : value;
    let error = "";

    switch (name) {
      case "nombre":
        // Solo letras y espacios
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]*$/.test(newValue)) {
          error = "Solo se permiten letras y espacios.";
          return setErrors((prev) => ({ ...prev, [name]: error }));
        }
        // Capitalizar primera letra de cada palabra
        newValue = newValue
          .split(" ")
          .map(
            (w) =>
              w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
          )
          .join(" ");
        setErrors((prev) => ({ ...prev, [name]: "" }));
        break;

      case "email":
        // Bloquear si hay más de una @ o más de un .
        const atCount = (newValue.match(/@/g) || []).length;
        const dotCount = (newValue.match(/\./g) || []).length;
        if (atCount > 1 || dotCount > 1) {
          error = "El correo solo puede tener una '@' y un punto.";
          return setErrors((prev) => ({ ...prev, [name]: error }));
        }
        setErrors((prev) => ({ ...prev, [name]: "" }));
        break;

      case "celular":
        // Solo números
        if (!/^[0-9]*$/.test(newValue)) {
          error = "Solo se permiten números.";
          return setErrors((prev) => ({ ...prev, [name]: error }));
        }
        setErrors((prev) => ({ ...prev, [name]: "" }));
        break;

      default:
        setErrors((prev) => ({ ...prev, [name]: "" }));
        break;
    }

    // Actualiza el valor si no hay error
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ["nombre", "email", "celular", "ciudad", "rol"];
    const newErrors = {};

    requiredFields.forEach((field) => {
      if (!formData[field] || formData[field].trim() === "") {
        newErrors[field] = "Este campo es obligatorio.";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Texto Izquierda */}
        <div className="md:w-1/2 text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004AAD] leading-tight">
              Sé parte <br /> <span className="text-primary">de AllyTrips</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Estamos construyendo <br />
            el primer ecosistema de turismo colaborativo en{" "}
            <span className="font-semibold text-primary">Colombia</span>.
          </p>
          <p className="text-gray-700 text-lg">
            Si quieres ser parte desde el comienzo.
          </p>
        </div>

        {/* Formulario Derecha */}
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-800"
        >
          {/* Nombre */}
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-sm font-medium text-gray-700 mb-1">
              Nombre completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Nombre completo"
              className={`px-4 py-2 rounded-lg bg-gray-100 border ${
                errors.nombre ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD]`}
            />
            {errors.nombre && (
              <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>
            )}
          </div>

          {/* Correo */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Correo electrónico"
              className={`px-4 py-2 rounded-lg bg-gray-100 border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD]`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Celular */}
          <div className="flex flex-col">
            <label htmlFor="celular" className="text-sm font-medium text-gray-700 mb-1">
              Celular <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
              placeholder="Celular"
              className={`px-4 py-2 rounded-lg bg-gray-100 border ${
                errors.celular ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD]`}
            />
            {errors.celular && (
              <p className="text-red-500 text-sm mt-1">{errors.celular}</p>
            )}
          </div>

          {/* Ciudad */}
          <div className="flex flex-col">
            <label htmlFor="ciudad" className="text-sm font-medium text-gray-700 mb-1">
              Ciudad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="ciudad"
              name="ciudad"
              value={formData.ciudad}
              onChange={handleChange}
              placeholder="Ciudad"
              className={`px-4 py-2 rounded-lg bg-gray-100 border ${
                errors.ciudad ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD]`}
            />
            {errors.ciudad && (
              <p className="text-red-500 text-sm mt-1">{errors.ciudad}</p>
            )}
          </div>

          {/* Rol */}
          <div className="flex flex-col md:col-span-2">
            <label htmlFor="rol" className="text-sm font-medium text-gray-700 mb-1">
              Selecciona tu rol <span className="text-red-500">*</span>
            </label>
            <select
              id="rol"
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className={`px-4 py-2 rounded-lg bg-gray-100 border ${
                errors.rol ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD]`}
            >
              <option>Viajero</option>
              <option>Anfitrión</option>
              <option>Proveedor</option>
            </select>
            {errors.rol && <p className="text-red-500 text-sm mt-1">{errors.rol}</p>}
          </div>

          {/* Botón */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full md:w-auto bg-accent text-[#1A1A1A] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
            >
              <span className="text-xl">→</span> Preinscribirme
            </button>
          </div>

          {/* Checkbox */}
          <div className="md:col-span-2 flex items-start mt-3">
            <input
              type="checkbox"
              id="aceptar"
              name="aceptar"
              checked={formData.aceptar}
              onChange={handleChange}
              className="mr-2 mt-1"
            />
            <label htmlFor="aceptar" className="text-sm text-gray-600 leading-snug">
              Acepto recibir información sobre el lanzamiento y novedades de AllyTrips
            </label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
