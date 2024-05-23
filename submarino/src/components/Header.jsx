import Logo from '../assets/imgs/Logo.png'; // Asegúrate de que la ruta sea correcta
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { useState } from 'react';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <header className="flex items-center justify-between w-full py-4 px-4 h-[10vh] bg-black-transparent text-white z-50 fixed top-0 left-0 right-0">
            <div className="xl:w-1/6 text-center -mt-4">
                <a href="#">
                    <img src={Logo} alt="Submarino Logo" className="h-16 mt-4" />
                </a>
            </div>
            {/* Menú Escritorio */}
            <nav className="hidden xl:flex bg-transparent w-full h-full items-center justify-end gap-11 mr-10 z-50">
    <a href="#Soluciones" className="text-white py-3 text-xl transition duration-500 ease-in-out px-4 rounded-full bg-transparent hover:bg-primary">
        Soluciones
    </a>
    <a href="#Nosotros" className="text-white py-3 text-xl transition duration-500 ease-in-out px-4 rounded-full bg-transparent hover:bg-primary">
        Nosotros
    </a>
    <a href="#Portafolio" className="text-white py-3 text-xl transition duration-500 ease-in-out px-4 rounded-full bg-transparent hover:bg-primary">
        Portafolio
    </a>
    <a href="#Contacto" className="text-white py-3 text-xl transition duration-500 ease-in-out px-4 rounded-full bg-transparent hover:bg-primary">
        Contacto
    </a>
</nav>
           {/* Menú Móvil */}
           <nav className={`fixed bg-black bg-opacity-40 w-[86%] md:w-[40%] xl:hidden h-full ${showMenu ? "left-0" : "-left-full"} top-0 flex flex-col items-center justify-center gap-10 transition-all duration-500 backdrop-blur-md z-50`}>
                <a href="#Soluciones" className="text-white py-2 text-xl">Soluciones</a>
                <a href="#Nosotros" className="text-white py-2 text-xl">Nosotros</a>
                <a href="#Portafolio" className="text-white py-2 text-xl">Portafolio</a>
                <a href="#Contacto" className="text-white py-2 text-xl">Contacto</a>
            </nav>


            <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2 text-orange-600">
                {showMenu ? <RiCloseLargeLine/> : <RiMenu3Fill/>}
            </button>
        </header>
    );
}
 
export default Header;