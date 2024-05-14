import Logo from '../assets/imgs/Logo.png'; // Asegúrate de que la ruta sea correcta
import { RiMenu3Fill, RiCloseLargeLine } from "react-icons/ri";
import { useState } from 'react';


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className="flex items-center justify-between xl:justify-start w-full py-4 px-4 h-[10vh] bg-black text-white z-50">
            <div className="xl:w-1/6 text-center -mt-4">
                <a href="#">
                    <img src={Logo} alt="Submarino Logo" className="h-16 mr-10 mt-2" />
                </a>
            </div>
           
            <nav className={`fixed bg-black w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500`}>
                <a href="#" className="text-white py-2 text-xl">Nosotros</a>
                <a href="#" className="text-white py-2 text-xl">Soluciones</a>
                <a href="#" className="text-white py-2 text-xl">Portafolio</a>
                <a href="#" className="text-white py-2 text-xl">Contacto</a>
            </nav>

            <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden text-2xl p-2 text-orange-600">
                {showMenu ? <RiCloseLargeLine/> : <RiMenu3Fill/>}

            </button>
        </header>
    );
}
 
export default Header;