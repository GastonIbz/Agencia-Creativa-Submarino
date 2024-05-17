import { FaGoogle, FaYoutube, FaInstagram, FaSearch, FaDesktop, FaAd } from 'react-icons/fa';

const Card = () => {
    const services = [
        {
            title: "Google Ads",
            description: "Anuncios de texto en la página principal de Búsqueda de Google. Anuncios en sitios web asociados a la red publicitaria de Google (Red de Display)",
            icon: <FaGoogle className="text-blue-600 text-3xl"/>
        },
        {
            title: "YouTube",
            description: "Anuncios de video en YouTube que se muestran antes de que las personas vean un video.",
            icon: <FaYoutube className="text-red-600 text-3xl"/>
        },
        {
            title: "Social Media",
            description: "Administramos y publicitamos tus redes sociales con el objetivo de conseguir nuevos clientes y fidelizar los actuales.",
            icon: <FaInstagram className="text-pink-600 text-3xl"/>
        },
        {
            title: "SEO",
            description: "Permite aumentar la cantidad y calidad del tráfico hacia tu sitio web.",
            icon: <FaSearch className="text-green-600 text-3xl"/>
        },
        {
            title: "Sitios Web",
            description: "Creamos sitios web para que las marcas puedan mostrar sus productos y generar nuevas ventas desde sus anuncios.",
            icon: <FaDesktop className="text-indigo-600 text-3xl"/>
        },
        {
            title: "Programática",
            description: "La compra programática permite a las marcas utilizar estadísticas de público y tecnología para adaptar los mensajes y dirigirlos a la persona adecuada, en el momento y el contexto adecuados.",
            icon: <FaAd  className="text-purple-600 text-3xl"/>
        }
    ];

    return (
        <div  className="bg-blue-300 text-gray-900 py-5">
            <h2 className="text-4xl text-orange-500 font-bold text-center mb-">¿Cómo podemos ayudarte?</h2>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center items-stretch">
                    {services.map((service, index) => (
                        <div key={index} className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-500/50 transition-shadow duration-300 ease-in-out flex flex-col items-center text-center" style={{ minHeight: '350px' }}>
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-sm">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Card;