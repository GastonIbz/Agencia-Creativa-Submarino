import submarineVideo from '../assets/videos/submarino8.mp4';
import backgroundImage from '../assets/imgs/Subma.png';


const Video = () => {
 
    return (
        <div id="Nosotros" className="relative w-full h-screen overflow-hidden bg-black">
            {/* Imagen de fondo con efecto de opacidad suave */}
            <img 
                src={backgroundImage} 
                alt="Submarine" 
                className="absolute inset-0 w-full h-full object-cover opacity-25" 
                style={{ transition: 'opacity 0.5s ease-in-out' }} 
            />

            {/* Contenedor de video centrado con bordes y sombras suaves */}
            <div className="relative flex justify-center items-center h-full pt-0">
                <video
                    className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-2/3 h-auto  border-4 border-orange-600 rounded shadow-xl transition-all duration-300 ease-in-out"
                    src={submarineVideo}
                    type="video/mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
                >
                    Your browser does not support the video tag.
                </video>
            </div>

            </div>
 
    );
}

export default Video;