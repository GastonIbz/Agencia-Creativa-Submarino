import { useState, useEffect } from 'react';
import { FaCommentAlt, FaTimes, FaArrowLeft } from 'react-icons/fa';
import logoChat from '../assets/imgs/logo-chat.png';

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [showOptions, setShowOptions] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleView = () => {
    setIsChatOpen(!isChatOpen);
    setShowOptions(true);
    setChatLog([]);
  };

  const handleOptionClick = (message) => {
    setChatLog([
      ...chatLog,
      { sender: 'user', message },
      { sender: 'bot', message: getBotResponse(message) }
    ]);
    setShowOptions(false);
  };

  const handleBackButtonClick = () => {
    setShowOptions(true);
    setChatLog([]);
  };

  const getBotResponse = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case 'quiero reservar una reunión':
        return 'Para reservar una reunión, por favor sigue el siguiente enlace: [enlace de reunión]';
      case 'quiero recibir presupuesto por correo':
        return 'Para recibir un presupuesto, por favor envíanos un correo a: [correo de contacto]';
      case 'quiero ofrecerte mis servicios':
        return 'Para ofrecer tus servicios, por favor visita nuestra sección de proveedores: [enlace de proveedores]';
      case 'soy cliente y necesito tu ayuda':
        return 'Para recibir ayuda, por favor contáctanos a través de nuestro soporte al cliente: [enlace de soporte]';
      default:
        return 'Lo siento, no entiendo tu solicitud. Por favor, elige una de las opciones disponibles.';
    }
  };

  // Verificar si es un dispositivo móvil
  if (isMobile) {
    return null;
  }

  return (
    <>
      <button
        onClick={toggleView}
        className="fixed bottom-4 right-12 w-12 h-12 md:w-16 md:h-16 bg-orange-700 text-white p-2 md:p-4 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
      >
        {isChatOpen ? (
          <FaTimes className="text-lg md:text-2xl" />
        ) : (
          <FaCommentAlt className="text-lg md:text-2xl" />
        )}
      </button>
      {isChatOpen && (
        <div className="fixed bottom-16 right-2 w-70 md:bottom-24 md:right-14 md:w-80 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-orange-700 text-white p-3 md:p-3 rounded-t-lg flex items-center justify-between">
            <img src={logoChat} alt="IB-A Logo" className="w-12 h-12 md:w-12 md:h-12 rounded-full" />
            <span className="text-xl md:text-xl font-bold mr-12">Chatea con IB-A</span>
            <button onClick={toggleView} className="text-white">
              <FaTimes className="text-lg md:text-xl" />
            </button>
          </div>
          <div className="p-3 md:p-4 bg-gray-200 rounded-b-lg text-center">
            <p className="text-xs md:text-xl">¡Hola! ¿En qué puedo ayudarte?</p>
          </div>
          <div className="flex-1 p-4 md:p-0 overflow-y-auto">
            {chatLog.map((entry, index) => (
              <div key={index} className={`mb-2 pl-2 pt-5 text-xs md:text-base ${entry.sender === 'bot' ? 'text-black' : 'text-blue-900'}`}>
                {entry.message}
              </div>
            ))}
          </div>
          {showOptions ? (
            <div className="p-3 md:p-4 bg-orange-200 rounded-b-lg">
              <div className="space-y-2">
                <button
                  onClick={() => handleOptionClick('Quiero reservar una reunión')}
                  className="w-full bg-gray-200 text-black border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-base transition duration-300 hover:bg-gray-400"
                >
                  <span>Quiero reservar una reunión</span>
                </button>
                <button
                  onClick={() => handleOptionClick('Quiero recibir presupuesto por correo')}
                  className="w-full bg-white text-black border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-base transition duration-300 hover:bg-gray-400"
                >
                  <span>Quiero recibir presupuesto por correo</span>
                </button>
                <button
                  onClick={() => handleOptionClick('Quiero ofrecerte mis servicios')}
                  className="w-full bg-white text-black border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-base transition duration-300 hover:bg-gray-400"
                >
                  <span>Quiero ofrecerte mis servicios</span>
                </button>
                <button
                  onClick={() => handleOptionClick('Soy cliente y necesito tu ayuda')}
                  className="w-full bg-white text-black border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-base transition duration-300 hover:bg-gray-400"
                >
                  <span>Soy cliente y necesito tu ayuda</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="p-3 md:p-5 bg-gray-300 rounded-b-lg">
              <button onClick={handleBackButtonClick} className="text-orange-600 hover:text-black flex items-center text-xl">
                <FaArrowLeft className="mr-3 mt-1" /> Volver a las opciones
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;