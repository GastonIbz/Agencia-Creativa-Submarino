import submarineVideo from '../assets/videos/submarino0.mp4';
import videoPoster from '../assets/imgs/video-poster.png'; // Añade un poster para el video

const Hero = () => {
    const scrollToSoluciones = () => {
        const solucionesSection = document.getElementById('Nosotros');
        if (solucionesSection) {
          solucionesSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section className="relative w-full h-screen flex items-center justify-center">
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={videoPoster} // Añadir un poster para mostrar mientras carga el video
                className="absolute w-full h-full object-cover z-0"
                aria-label="Video de fondo de un submarino"
            >
                <source src={submarineVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay para mejorar la legibilidad del texto */}
            <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>

            <div className="relative z-10 text-center text-white">
                <p className="pb-12 text-xl font-semibold md:text-5xl text-orange">Navegando en soluciones creativas</p>

                <button
                    className="mb-36 px-6 py-4 bg-custom-blue border-2 border-orange-600 text-white text-xl font-semibold shadow-lg transition-all duration-100 ease-in-out focus:outline-none focus:ring-4 focus:ring-hover-orange focus:ring-opacity-50 relative top-0 backdrop-blur-lg rounded-full hover:shadow-[0_0_70px_4px_rgba(255,87,34,.5)]"
                    onClick={scrollToSoluciones}
                    aria-label="Botón para desplazarse a la sección de soluciones"
                >
                    Conocenos
                </button>
            </div>

            {/* Texto e íconos en el fondo */}
            <div className="absolute bottom-4 left-5 px-4 sm:px-8 lg:px-16 xl:px-16 py-8 flex justify-between items-end">
                <div className="hidden lg:block text-white font-bold text-xl">
                    Submarino - Agencia Creativa 
                </div>
            </div>
        </section>
    );
}

export default Hero;