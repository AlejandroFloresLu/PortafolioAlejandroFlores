import { FileText, Download } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto gap-12 print:pt-0 print:pb-8">
      
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left print:text-left relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4 print:text-zinc-900 print:text-5xl">
          Hola, soy <span className="text-red-500">Alejandro Sebastián</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl text-zinc-200 font-bold mb-6 h-10 print:text-zinc-700">
          <Typewriter
            words={['Estudiante de Ing. en Sistemas', 'Desarrollador de Software', 'Creador de Soluciones']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto md:mx-0 text-lg mb-8 leading-relaxed print:text-zinc-600">
          Estudiante de Ingeniería en Sistemas de la Información en la PUCE, con sólida base en lógica de programación y gestión de bases de datos. Proactivo, con capacidad analítica y enfocado en el desarrollo de soluciones de software.
        </p>

        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 print:hidden">
          <button 
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5" />
            <span>Generar PDF</span>
          </button>
          <a 
            href="/CV_Alejandro_FLores_2026.pdf" 
            download="CV_Alejandro_FLores_2026.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FileText className="w-5 h-5" />
            <span>Ver Curriculum Base</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/alejandro-flores-19b6b63a4/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <FaLinkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Photo / Avatar Section */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0 print:w-48 print:h-48 mt-10 md:mt-0">
        {/* Glow behind photo */}
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl animate-pulse print:hidden"></div>
        
        {/* Floating Tech Icons */}
        <motion.div 
          animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -top-4 -left-4 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl z-20 print:hidden text-2xl"
        >
          ⚛️
        </motion.div>

        <motion.div 
          animate={{ y: [10, -10, 10], rotate: [0, -5, 5, 0] }} 
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 -right-6 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl z-20 print:hidden text-2xl"
        >
          🚀
        </motion.div>

        <motion.div 
          animate={{ y: [-8, 8, -8], x: [-5, 5, -5] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-2 left-10 bg-zinc-900 border border-zinc-800 p-3 rounded-xl shadow-xl z-20 print:hidden text-2xl"
        >
          💻
        </motion.div>

        {/* Image Container */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl print:border-zinc-200 print:shadow-none z-10 bg-zinc-900">
          <img 
            src="/foto_perfil.jpg" 
            alt="Alejandro Flores" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </section>
  );
}
