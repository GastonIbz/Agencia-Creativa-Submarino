
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
              <p className="mb-12 text-lg md:text-5xl text-orange">Navegando en soluciones creativas</p>
              <button className="mb-60 px-8 py-3 bg-custom-blue border-2 border-white text-white text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-hover-orange focus:ring-opacity-70 relative top-4 backdrop-blur-lg rounded-full hover:shadow-[0_0_20px_4px_rgba(255,87,34,.5)]">
  Sumergete
</button>
          </div>
      </section>
  );
}

export default Hero;