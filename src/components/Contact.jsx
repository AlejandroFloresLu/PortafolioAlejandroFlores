import { motion } from 'framer-motion';
import { Mail, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center bg-gradient-to-b from-zinc-900/50 to-zinc-950 p-8 sm:p-12 rounded-3xl border border-zinc-800 relative overflow-hidden"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-red-500/10 blur-[100px] pointer-events-none" />

        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 relative z-10">
          ¿Listo para trabajar juntos?
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mb-10 relative z-10">
          Actualmente estoy abierto a nuevas oportunidades laborales. Si buscas un desarrollador comprometido, apasionado por el código limpio y con enfoque en resultados, hablemos.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:tu@email.com" 
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold shadow-lg shadow-red-500/25 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Envíame un Correo
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://calendly.com/tu-usuario" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white font-bold border border-zinc-700 hover:border-zinc-600 transition-colors w-full sm:w-auto justify-center"
          >
            <Calendar className="w-5 h-5" />
            Agendar Reunión
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
