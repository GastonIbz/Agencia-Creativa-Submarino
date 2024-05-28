import { FaGoogle, FaYoutube, FaInstagram, FaSearch, FaDesktop, FaAd } from 'react-icons/fa';

const Card = () => {
    const services = [
        {
            title: "Google Ads",
            description: "Anuncios de texto en la página principal ",
            icon: <FaGoogle className="text-blue-600 text-3xl"/>
        },
        {
            title: "YouTube",
            description: "Anuncios de video en YouTube.",
            icon: <FaYoutube className="text-red-600 text-3xl"/>
        },
        {
            title: "Social Media",
            description: "Administramos y publicitamos tus RS",
            icon: <FaInstagram className="text-pink-600 text-3xl"/>
        },
        {
            title: "SEO",
            description: "Permite aumentar la cantidad y calidad del tráfico hacia tu sitio web.",
            icon: <FaSearch className="text-green-600 text-3xl"/>
        },
        {
            title: "Sitios Web",
            description: "Creamos sitios web para que las marcas puedan mostrar sus productos",
            icon: <FaDesktop className="text-indigo-600 text-3xl"/>
        },
        {
            title: "Programática",
            description: " utilizar estadísticas de público y tecnología para adaptar los mensajes",
            icon: <FaAd  className="text-purple-600 text-3xl"/>
        }
    ];

    return (
        <div id="Nosotros" className="text-gray-900 pt-32 pb-80" style={{
            backgroundImage: `radial-gradient(circle at 66% 40%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%, transparent 3%, transparent 100%),

                               radial-gradient(circle at 64% 14%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 28% 95%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 3%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 44% 75%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 3%, transparent 3%, transparent 100%),
                             
                               radial-gradient(circle at 21% 85%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 76% 27%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 97% 12%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 55% 89%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 11% 47%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 65% 40%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 98% 38%, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.02) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 46% 88%, rgba(255,255,255,0.01) 0%, rgba(255,255,255,0.01) 5%, transparent 3%, transparent 100%),
                               radial-gradient(circle at 47% 39%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.03) 5%, transparent 3%, transparent 100%),
                               linear-gradient(0deg, #244980, #4575BD)` // Replaced HSLA with Hex
        }}>
            <h2  className="text-5xl text-orange-500 font-bold text-center mb-0 pt-36">Servicios</h2>
            <div  className="container mx-auto px-2 pt-20">
                <div className="flex flex-wrap justify-center">
                    {services.map((service, index) => (
                        <div key={index} className="m-2 w-full  mt-12 sm:w-1/23 md:w-1/3 lg:w-1/4">
                            <div className="bg-white p-10 pt-6 rounded-lg shadow-lg hover:shadow-xl hover:shadow-orange-600/50 transition-shadow duration-400 ease-in-out flex flex-col items-center text-center" style={{ minHeight: '300px' }}>
                                <div className="mb-4">{service.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="font-sans text-l">{service.description}</p>
                                
                            </div>
                            
                        </div>
                        
                    ))}
                </div>
            </div>
            <div className=" h-1 w-full mt-1"></div>
        </div>
    );
};

export default Card;