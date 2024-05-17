import staticImage1 from '../assets/imgs/static1.png';
import animatedImage1 from '../assets/gifts/animated1.gif';
import staticImage2 from '../assets/imgs/static2.png';
import animatedImage2 from '../assets/gifts/animated2.gif';
// Añade más importaciones según sea necesario

const Portafolio = () => {
    const projects = [
        {
            id: 1,
            title: "Nihilum",
            description: "Descripción del caso de uso del proyecto Nihilum.",
            staticImage: staticImage1,  // Imagen estática importada
            animatedImage: animatedImage1  // GIF animado importado
        },
        {
            id: 2,
            title: "Piedra / Soil",
            description: "Descripción del caso de uso del proyecto Piedra / Soil.",
            staticImage: staticImage2,  // Imagen estática importada
            animatedImage: animatedImage2  // GIF animado importado
        },
        {
            id: 3,
            title: "Nihilum",
            description: "Descripción del caso de uso del proyecto Nihilum.",
            staticImage: staticImage1,  // Imagen estática importada
            animatedImage: animatedImage1  // GIF animado importado
        },
        {
            id: 4,
            title: "Piedra / Soil",
            description: "Descripción del caso de uso del proyecto Piedra / Soil.",
            staticImage: staticImage2,  // Imagen estática importada
            animatedImage: animatedImage2  // GIF animado importado
        },
        {
            id: 5,
            title: "Nihilum",
            description: "Descripción del caso de uso del proyecto Nihilum.",
            staticImage: staticImage1,  // Imagen estática importada
            animatedImage: animatedImage1  // GIF animado importado
        },
        {
            id: 6,
            title: "Piedra / Soil",
            description: "Descripción del caso de uso del proyecto Piedra / Soil.",
            staticImage: staticImage2,  // Imagen estática importada
            animatedImage: animatedImage2  // GIF animado importado
        },
        {
            id: 7,
            title: "Nihilum",
            description: "Descripción del caso de uso del proyecto Nihilum.",
            staticImage: staticImage1,  // Imagen estática importada
            animatedImage: animatedImage1  // GIF animado importado
        },
        {
            id: 8,
            title: "Piedra / Soil",
            description: "Descripción del caso de uso del proyecto Piedra / Soil.",
            staticImage: staticImage2,  // Imagen estática importada
            animatedImage: animatedImage2  // GIF animado importado
        },
        // Añade más proyectos según sea necesario
    ];

    return (
        <div id="Portafolio" className="bg-blue-400  py-20">
            <h2 className="text-5xl text-center font-bold text-orange-500 mb-12">Portafolio</h2>
            <div className="container mx-auto px-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="relative group bg-white shadow-lg rounded-lg overflow-hidden">
                            <img 
                                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                                src={project.staticImage}
                                alt={project.title}
                                onMouseEnter={(e) => e.currentTarget.src = project.animatedImage}
                                onMouseLeave={(e) => e.currentTarget.src = project.staticImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portafolio;