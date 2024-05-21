import { useState } from 'react';
import { FaCommentAlt, FaTimes, FaPaperPlane } from 'react-icons/fa';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(true);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Initialize a new chat session when chat is opened
      setChatLog([
        { sender: 'bot', message: 'Hola navegante, mi nombre es IB-A. ¿En qué puedo ayudarte?' }
      ]);
    }
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
      processMessage(userInput);
    }
  };

  const handleButtonClick = (userMessage) => {
    processMessage(userMessage);
    setShowPrivacyPolicy(false);
  };

  const processMessage = (message) => {
    let botResponse = '';

    switch (message.toLowerCase()) {
      case 'quiero reservar una reunión':
        botResponse = 'Para reservar una reunión, por favor sigue el siguiente enlace: [enlace de reunión]';
        break;
      case 'quiero recibir presupuesto por correo':
        botResponse = 'Para recibir un presupuesto, por favor envíanos un correo a: [correo de contacto]';
        break;
      case 'quiero ofrecerte mis servicios':
        botResponse = 'Para ofrecer tus servicios, por favor visita nuestra sección de proveedores: [enlace de proveedores]';
        break;
      case 'soy cliente y necesito tu ayuda':
        botResponse = 'Para recibir ayuda, por favor contáctanos a través de nuestro soporte al cliente: [enlace de soporte]';
        break;
      default:
        botResponse = 'Lo siento, no entiendo tu solicitud. Por favor, intenta nuevamente.';
    }

    setChatLog([
      ...chatLog,
      { sender: 'user', message },
      { sender: 'bot', message: botResponse }
    ]);
    setUserInput('');
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-4 right-8 w-12 h-12 md:w-16 md:h-16 bg-orange-700 text-white p-2 md:p-4 rounded-full shadow-lg focus:outline-none flex items-center justify-center"
      >
        {isOpen ? (
          <FaTimes className="text-lg md:text-2xl" />
        ) : (
          <FaCommentAlt className="text-lg md:text-2xl" />
        )}
      </button>
      {isOpen && (
        <div className="fixed bottom-16 right-2 w-72 md:bottom-20 md:right-4 md:w-80 bg-white rounded-lg shadow-lg flex flex-col">
          <div className="bg-orange-700 text-white p-3 md:p-4 rounded-t-lg flex items-center justify-between">
            <img src="https://placehold.co/30x30" alt="IB-A Logo" className="w-12 h-12 md:w-12 md:h-12 rounded-full " />
            <span className="text-xl md:text-xl mr-36">IB-A</span>
            <button onClick={toggleChat} className="text-white">
              <FaTimes className="text-lg md:text-xl" />
            </button>
          </div>
          <div className="flex-1 p-4 md:p-2 overflow-y-auto">
            {chatLog.map((entry, index) => (
              <div key={index} className={`mb-2 text-xs md:text-sm ${entry.sender === 'bot' ? 'text-gray-800' : 'text-blue-900'}`}>
                {entry.message}
                <div className={`${entry.sender === 'user' ? 'text-right' : ''}`}>
                  {entry.sender === 'user' && (
                    <span className="text-xs text-gray-500">03:06 AM</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          {showPrivacyPolicy && (
            <div className="p-4 md:p-2">
              <div className="space-y-1 md:space-y-2">
                <button
                  onClick={() => handleButtonClick('Quiero reservar una reunión')}
                  className="w-full bg-white text-gray-900 border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-sm"
                >
                  <span>Quiero reservar una reunión</span>
                </button>
                <button
                  onClick={() => handleButtonClick('Quiero recibir presupuesto por correo')}
                  className="w-full bg-white text-gray-900 border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-sm"
                >
                  <span>Quiero recibir presupuesto por correo</span>
                </button>
                <button
                  onClick={() => handleButtonClick('Quiero ofrecerte mis servicios')}
                  className="w-full bg-white text-gray-900 border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-sm"
                >
                  <span>Quiero ofrecerte mis servicios</span>
                </button>
                <button
                  onClick={() => handleButtonClick('Soy cliente y necesito tu ayuda')}
                  className="w-full bg-white text-gray-900 border border-gray-900 py-1 md:py-2 rounded-lg flex items-center justify-center text-xs md:text-sm"
                >
                  <span>Soy cliente y necesito tu ayuda</span>
                </button>
              </div>
            </div>
          )}
          <div className="p-3 md:p-4 bg-gray-100 rounded-b-lg">
            <p className="text-xs mb-1 md:mb-2">
              Submarino utiliza la información que proporcionas para ponerse en contacto contigo en relación con contenido. consulta nuestra{' '}
              <a href="#" className="text-orange-500">política de privacidad</a>.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Escribe un mensaje"
                value={userInput}
                onChange={handleUserInput}
                className="w-full p-1 md:p-2 border border-gray-300 rounded-l-lg text-xs md:text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="p-0 md:p-2 bg-orange-700 text-white rounded-r-lg"
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;