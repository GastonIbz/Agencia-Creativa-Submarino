
import submarineVideo from '../assets/videos/submarino0.mp4';
const Hero = () => {
    const scrollToSoluciones = () => {
        const solucionesSection = document.getElementById('Soluciones');
        if (solucionesSection) {
          solucionesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
  return (
      <section className="relative w-full h-screen flex items-center justify-center">
          <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover z-0">
              <source src={submarineVideo} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          {/* Overlay para mejorar la legibilidad del texto */}
          <div className="absolute w-full h-full bg-black opacity-50 z-1"></div>
          <div className="relative z-10 text-center text-white">
              <p className="pb-12 text-lg md:text-4xl text-orange">Navegando en soluciones creativas</p>
            
              <button
  className="mb-36 px-5 py-2 bg-custom-blue border-2 border-orange-500 text-white text-l  shadow-lg transition-all duration-100 ease-in-out focus:outline-none focus:ring-4 focus:ring-hover-orange focus:ring-opacity-50 relative top-4 backdrop-blur-lg rounded-full hover:shadow-[0_0_70px_4px_rgba(255,87,34,.5)]"
  onClick={scrollToSoluciones}
>
Conocenos 🌎
</button>
</div>

   {/* Texto e íconos en el fondo */}
   <div className="absolute bottom-16 left-7  px-4 sm:px-8 lg:px-16 xl:px-16 py-8  flex justify-between items-end">
                <div className="text-white text-xl md:text-xl pl-14 ">
                    Submarino | Soluciones 
                </div>
                
        
            </div>
        </section>
    );
}

export default Hero;