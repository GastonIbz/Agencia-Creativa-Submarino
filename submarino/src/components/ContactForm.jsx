import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let errors = {};
    if (!formData.nombre) errors.nombre = 'El nombre es obligatorio';
    if (!formData.email) {
      errors.email = 'El email es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }
    if (!formData.telefono) errors.telefono = 'El teléfono es obligatorio';
    if (!formData.mensaje) errors.mensaje = 'El mensaje es obligatorio';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Aquí puedes añadir la lógica para enviar los datos, como una petición HTTP.
      console.log(formData);
      setSubmitted(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        mensaje: ''
      });
    }
  };

  return (
    <div id="Contacto" className="flex flex-col items-center justify-center py-32 px-4 sm:px-6 lg:px-8" style={{
      backgroundImage: `linear-gradient(0deg, #0B1A30, #1A3661)`
    }}>
      <div className="mb-12 sm:max-w-md space-y-4 bg-gray-800 p-4 sm:p-8 rounded-lg shadow-lg border border-orange-600">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl font-base text-orange-600">Contáctanos</h2>
          <p className="mt-2 text-lg sm:text-base text-gray-400">
            El equipo de submarino estará encantado de hablar contigo!
          </p>
        </div>
        {submitted && (
          <div className="bg-orange-500 text-white text-center p-3 rounded">
            ¡Gracias por tu mensaje navegante, el equipo de submarino te contestará pronto!
          </div>
        )}
        <form className="mt-8 space-y-2" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-3">
            <div>
              <label htmlFor="nombre" className="sr-only">Nombre</label>
              <input
                id="nombre"
                name="nombre"
                type="text"
                required
                placeholder="Nombre *"
                value={formData.nombre}
                onChange={handleChange}
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.nombre ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:py-3 transition duration-300`}
              />
              {errors.nombre && <p className="text-orange-500 text-xl mt-2">{errors.nombre}</p>}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.email ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:py-3 transition duration-300`}
              />
              {errors.email && <p className="text-orange-500 text-sm mt-2">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="telefono" className="sr-only">Teléfono</label>
              <input
                id="telefono"
                name="telefono"
                type="text"
                required
                placeholder="Teléfono *"
                value={formData.telefono}
                onChange={handleChange}
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.telefono ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:py-3 transition duration-300`}
              />
              {errors.telefono && <p className="text-orange-500 text-sm mt-2">{errors.telefono}</p>}
            </div>
            <div>
              <label htmlFor="empresa" className="sr-only">Empresa</label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                placeholder="Empresa"
                value={formData.empresa}
                onChange={handleChange}
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:py-3 transition duration-300"
              />
            </div>
          </div>
          <div>
            <label htmlFor="mensaje" className="sr-only">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              placeholder="Mensaje *"
              value={formData.mensaje}
              onChange={handleChange}
              className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.mensaje ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm sm:py-3 transition duration-300`}
              rows="4"
            ></textarea>
            {errors.mensaje && <p className="text-orange-500 text-sm mt-2">{errors.mensaje}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-purple-900 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="text-center text-gray-400 text-sm mt-6">
          <p>Este sitio y sus formularios están protegidos por reCAPTCHA y la <a href="#" className="text-orange-600 hover:underline">Política de privacidad</a> y <a href="#" className="text-orange-600 hover:underline">Condiciones de servicio</a> de Google.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;