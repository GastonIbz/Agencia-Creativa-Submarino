import { FaGoogle, FaYoutube, FaInstagram, FaSearch, FaDesktop, FaAd } from 'react-icons/fa';

const Card = () => {
  const services = [
    {
      title: "Google Ads",
      description: "Anuncios de texto en la página principal",
      icon: <FaGoogle className="text-blue-600 text-3xl" />
    },
    {
      title: "YouTube",
      description: "Anuncios de video en YouTube.",
      icon: <FaYoutube className="text-red-600 text-3xl" />
    },
    {
      title: "Social Media",
      description: "Administramos y publicitamos tus RS",
      icon: <FaInstagram className="text-pink-600 text-3xl" />
    },
    {
      title: "SEO",
      description: "Permite aumentar la cantidad y calidad del tráfico hacia tu sitio web.",
      icon: <FaSearch className="text-green-600 text-3xl" />
    },
    {
      title: "Sitios Web",
      description: "Creamos sitios web para que las marcas puedan mostrar sus productos",
      icon: <FaDesktop className="text-indigo-600 text-3xl" />
    },
    {
      title: "Programática",
      description: "Utilizar estadísticas de público y tecnología para adaptar los mensajes",
      icon: <FaAd className="text-purple-600 text-3xl" />
    }
  ];

  return (
    <div id="Soluciones" className="text-gray-900 pt-8" style={{
      backgroundImage: `linear-gradient(0deg, #244980, #4575BD)`
    }}>
      <h2  className="text-5xl text-orange-500 font-bold text-center mb-0 pt-32">Soluciones</h2>
      <div className="container mx-auto pt-0">
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <div key={index} className="m-2 w-full mt-12 sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="bg-white p-10 pt-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-600/50 transition-shadow duration-300 ease-in-out flex flex-col items-center text-center" style={{ minHeight: '255px' }}>
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="font-sans text-xl">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;