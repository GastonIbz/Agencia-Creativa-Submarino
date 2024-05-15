/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        primary: "#ff480046",
        secundary:"#ff5722",
        transparent:"#f34d0c00",
        'custom-blue': '#12003d1f',  // Tu color personalizado
        'hover-orange': '#ff5722',  // Un color naranja para el hover
     
       'black-transparent':"#00000050",
        boxShadow: {
          'custom-hover': '0 0 15px rgba(233, 67, 2, 0.795)',
          'custom-active': '0 3px 5px rgba(0, 0, 0, 0.2)',
          strong: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // Sombra más fuerte
        }
      }
      
    },
  },
  plugins: [],
}