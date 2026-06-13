import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { languages } from '../data/skills';

export default function Languages() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-10"
      >
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Globe2 className="w-6 h-6 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white print:text-zinc-900">Idiomas</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
        {languages.map((lang, idx) => (
          <motion.div 
            key={lang.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="flex flex-col p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 print:bg-white print:border-zinc-200 print:p-4"
          >
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-xl font-bold text-white print:text-zinc-900">{lang.name}</h3>
              <span className="text-sm font-medium text-red-400 print:text-red-600">{lang.level}</span>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden print:bg-zinc-200">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percentage}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                className="h-full bg-red-500 rounded-full print:bg-red-500"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
