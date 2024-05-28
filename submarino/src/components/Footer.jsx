import { useEffect, useState } from 'react';
import submarineVideo from '../assets/videos/submarino0.mp4'; // Ajusta la ruta según la estructura de tu proyecto
import { FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado
import { MdLocationOn, MdEmail } from 'react-icons/md'; // Asegúrate de tener react-icons instalado

const Footer = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden hidden md:block">
      {/* Video de fondo */}
      <video autoPlay loop muted className="absolute z-0 w-full h-full object-cover">
        <source src={submarineVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Divisor oscuro para mejorar la visibilidad del texto */}
      <div className="absolute z-10 w-full h-full bg-black opacity-90"></div>
      {/* Contenido del footer sobre el video */}
      <div className="relative z-20 text-white">
        <footer className="p-10">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
            <div className="pr-4">
              <h4 className="font-bold mb-3 text-xl">Navegación</h4>
              <ul>
                <li className="hover:underline cursor-pointer text-base"><a href="#nosotros">Nosotros</a></li>
                <li className="hover:underline cursor-pointer text-base"><a href="#soluciones">Soluciones</a></li>
                <li className="hover:underline cursor-pointer text-base"><a href="#portafolio">Portafolio</a></li>
                <li className="hover:underline cursor-pointer text-base"><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-xl">Ubicación</h4>
              <p className="flex items-center mb-2 text-base">
                <MdLocationOn className="text-orange-600 mr-2 text-3xl" />
                Buenos Aires, Argentina.
              </p>
              <p className="flex items-center text-base">
                <MdEmail className="text-orange-600 mr-2 text-3xl" />
                <a href="mailto:submarino-creativo@gmail.com">Submarino-creativo@gmail.com</a>
              </p>
            </div>
            <div className="flex flex-col justify-end items-end">
              <div className="flex space-x-6 pb-20">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-600 transform transition-transform duration-300 hover:scale-110">
                  <FaInstagram className="w-10 h-10"/>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-600 transform transition-transform duration-300 hover:scale-110">
                  <FaLinkedin className="w-10 h-10"/>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="bg-gray-950 bg-opacity-90 text-white text-sm py-8">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center flex-wrap">
            <p className="mb-2 font-bold text-lg text-center">
              GRUPO SUBMARINO SRL | SUBMARINO GRUPO LLC. DE ARGENTINA. CON AMOR A TODO LATAM Y AL MUNDO 🗺️❤️
            </p>
            <p className="mb-2 text-center text-base">
            © 2021 – 2024 Submarino. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 mt-4 text-base">
              <a href="#" className="hover:underline">POLÍTICA DE PRIVACIDAD</a>
              <a href="#" className="hover:underline">TÉRMINOS Y CONDICIONES</a>
            </div>
          </div>
        </div>
      </div>
      {/* Botón para subir arriba */}
      {showButton && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-44 right-14 bg-violet-700 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition-transform transform hover:scale-110 duration-300 z-30"
        >
          <FaArrowUp className="w-6 h-6"/>
        </button>
      )}
    </div>
  );
};

export default Footer;