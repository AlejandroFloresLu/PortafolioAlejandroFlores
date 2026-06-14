import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { skills } from '../data/skills';

export default function Skills() {
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
          <Code className="w-6 h-6 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white print:text-zinc-900">Habilidades Técnicas</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 print:grid-cols-3">
        {skills.map((skillGroup, groupIdx) => (
          <motion.div 
            key={skillGroup.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            className="p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 print:bg-white print:border-zinc-200 print:p-4"
          >
            <h3 className="text-lg font-bold text-white mb-6 print:text-zinc-900 print:mb-3">{skillGroup.category}</h3>
            <div className="flex flex-wrap gap-3">
              {skillGroup.items.map((item, idx) => (
                <motion.div 
                  key={item.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-3 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700/50 cursor-default print:bg-white print:border-zinc-300 print:py-1"
                >
                  <span className="text-lg print:text-sm">{item.icon}</span>
                  <span className="text-sm font-medium text-zinc-300 print:text-zinc-700">{item.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
