
import submarineVideo from '../assets/videos/submarino0.mp4';
const Hero = () => {
  return (
      <section className="relative w-full h-screen flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-0">
              <source src={submarineVideo} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>
          <div className="relative z-10 text-center text-white">
              <p className="mb-64 text-lg md:text-4xl text-orange">Navegando en soluciones creativas</p>
              <button className="mb-12 px-6 py-2 bg-orange-700 border-2 border-white text-white text-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-orange-400 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 relative top-4">
                   Sumergete
                </button>
          </div>
      </section>
  );
}

export default Hero;