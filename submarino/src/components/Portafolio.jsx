import { useState } from 'react';
import staticImage1 from '../assets/imgs/static1.png';
import animatedImage1 from '../assets/gifts/animated1.gif';
import staticImage2 from '../assets/imgs/static2.png';
import animatedImage2 from '../assets/gifts/animated2.gif';

const Portafolio = () => {
    const allProjects = [
        {
            id: 1,
            title: "Nihilum",
            staticImage: staticImage1,
            animatedImage: animatedImage1,
            link: "#"
        },
        {
            id: 2,
            title: "Piedra / Soil",
            staticImage: staticImage2,
            animatedImage: animatedImage2,
            link: "#"
        },
        {
            id: 3,
            title: "Proyecto 3",
            staticImage: staticImage1,
            animatedImage: animatedImage1,
            link: "#"
        },
        {
            id: 4,
            title: "Proyecto 4",
            staticImage: staticImage2,
            animatedImage: animatedImage2,
            link: "#"
        },
        {
            id: 5,
            title: "Proyecto 5",
            staticImage: staticImage1,
            animatedImage: animatedImage1,
            link: "#"
        },
        {
            id: 6,
            title: "Proyecto 5",
            staticImage: staticImage1,
            animatedImage: animatedImage1,
            link: "#"
        },
    
     
        // Agrega más proyectos según sea necesario
    ];

    const [visibleProjects, setVisibleProjects] = useState(6);

    const handleLoadMore = () => {
        setVisibleProjects(prevVisibleProjects => prevVisibleProjects + 3);
    };

    const handleMouseEnter = (e, animatedImage) => {
        e.currentTarget.src = animatedImage + '?a=' + Math.random(); // Forzar la recarga del GIF
    };

    const handleMouseLeave = (e, staticImage) => {
        e.currentTarget.src = staticImage;
    };

    return (
        <section id="Portafolio" className="text-white pt-32" style={{
            backgroundImage: `linear-gradient(0deg, #1A3661, #244980)`, // Replaced HSLA with Hex for the linear gradient
            backgroundColor: '#224273' // Background color as fallback
        }}>
            <div  className="container mx-auto px-16 sm:px-0 lg:px-60">
                <h2 className="text-5xl text-center font-bold  mb-02 text-orange-500 ">Portafolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pt-14">
                    {allProjects.slice(0, visibleProjects).map((project) => (
                        <div 
                            key={project.id} 
                            className="relative bg-gray-200 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_5px_rgba(255,87,34,0.6)]"
                        >
                            <a href={project.link} className="block w-full h-64">
                                <img 
                                    className="w-full h-full object-cover"
                                    src={project.staticImage}
                                    alt={project.title}
                                    onMouseEnter={(e) => handleMouseEnter(e, project.animatedImage)}
                                    onMouseLeave={(e) => handleMouseLeave(e, project.staticImage)}
                                />
                            </a>
                        </div>
                    ))}
                </div>
                {visibleProjects < allProjects.length && (
                    <div className="flex justify-center mt-8">
                        <button 
                            onClick={handleLoadMore} 
                            className="mb-64 px-8 py-3 bg-orange-500 border-2 border-white text-white text-1xl font-bold shadow-lg transition-all duration-100 ease-in-out focus:outline-none focus:ring-4 focus:ring-hover-orange focus:ring-opacity-50 relative top-4 backdrop-blur-lg rounded-full hover:shadow-[0_0_70px_4px_rgba(255,87,34,.5)]">
                            Más proyectos
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Portafolio;