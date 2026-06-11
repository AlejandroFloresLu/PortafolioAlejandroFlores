import { FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Alejandro
        </h1>
        <h2 className="text-xl sm:text-2xl text-indigo-400 font-medium mb-6">
          Ingeniero de Software / Full-Stack Developer
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
          Construyendo aplicaciones web modernas, escalables y con interfaces de usuario excepcionales.
          Apasionado por el código limpio, el diseño minimalista y la innovación constante.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <a 
          href="https://github.com/usuario" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
        >
          <FaGithub className="w-5 h-5" />
          <span>GitHub</span>
        </a>
        <a 
          href="https://linkedin.com/in/usuario" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 hover:text-indigo-200 border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300 backdrop-blur-sm"
        >
          <FaLinkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a 
          href="/cv.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/50 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/50 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
        >
          <FileText className="w-5 h-5" />
          <span>Curriculum</span>
        </a>
      </div>
    </section>
  );
}
