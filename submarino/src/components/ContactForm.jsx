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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="mt-12 max-w-md w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-600">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white">Contáctanos</h2>
          <p className="mt-2 text-sm text-gray-400">
            Empezá el viaje con un simple paso
          </p>
        </div>
        {submitted && (
          <div className="bg-green-500 text-white text-center p-3 rounded">
            ¡Gracias por tu mensaje!
          </div>
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 gap-4">
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
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.nombre ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300`}
              />
              {errors.nombre && <p className="text-orange-500 text-sm mt-2">{errors.nombre}</p>}
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
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.email ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300`}
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
                className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.telefono ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300`}
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
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-700 bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300"
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
              className={`appearance-none rounded-md block w-full px-3 py-2 border ${errors.mensaje ? 'border-orange-500' : 'border-gray-700'} bg-gray-900 placeholder-gray-500 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition duration-300`}
              rows="4"
            ></textarea>
            {errors.mensaje && <p className="text-orange-500 text-sm mt-2">{errors.mensaje}</p>}
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-105 duration-300"
            >
              Enviar
            </button>
          </div>
        </form>
        <div className="text-center text-gray-400 text-sm mt-6">
          <p>Este sitio y sus formularios están protegidos por reCAPTCHA y la <a href="#" className="text-green-400 hover:underline">Política de privacidad</a> y <a href="#" className="text-green-400 hover:underline">Condiciones de servicio</a> de Google.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;