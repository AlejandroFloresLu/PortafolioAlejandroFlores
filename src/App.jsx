import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Languages from './components/Languages';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import { projects } from './data/projects';
import { Code2 } from 'lucide-react';

function App() {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Todos') return true;
    return project.status === filter;
  });

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-red-500/30 relative print:bg-white print:text-zinc-900">
      <Navbar />

      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden print:hidden">
        <div className="absolute top-[20%] right-[5%] w-[60%] h-[60%] rounded-full bg-red-900/15 blur-[150px]" />
      </div>

      <div className="relative z-10 pt-16 md:pt-20">
        
        <motion.div id="inicio" initial="hidden" animate="visible" variants={sectionVariants}>
          <Hero />
        </motion.div>
        
        <motion.div id="experiencia" className="scroll-mt-24" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <Experience />
        </motion.div>

        <div id="habilidades" className="scroll-mt-24">
          <Skills />
          <Languages />
        </div>

        <motion.section 
          id="proyectos"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 print:py-8 scroll-mt-24"
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={sectionVariants}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-6">
             <div className="flex items-center gap-3">
              <div className="p-2 bg-red-500/10 rounded-lg print:border print:border-red-200">
                <Code2 className="w-6 h-6 text-red-500" />
              </div>
              <h2 className="text-3xl font-bold text-white print:text-zinc-900">Proyectos Destacados</h2>
            </div>
            <div className="print:hidden">
              <FilterBar currentFilter={filter} onFilterChange={setFilter} />
            </div>
          </div>
          
          {filteredProjects.length > 0 ? (
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 print:grid-cols-2"
            >
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onOpenModal={setSelectedProject}
                />
              ))}
            </motion.div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-zinc-500 print:hidden">
              <p className="text-lg">No hay proyectos que coincidan con este filtro.</p>
            </div>
          )}
        </motion.section>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants}>
          <Certificates />
        </motion.div>

        <div id="contacto" className="print:hidden scroll-mt-24">
          <Contact />
        </div>
        
        <footer className="text-center py-10 border-t border-zinc-800/60 text-zinc-500 text-sm print:py-4 print:border-zinc-200 print:text-zinc-600">
          <p>© {new Date().getFullYear()} Alejandro. Todos los derechos reservados.</p>
        </footer>
      </div>

      <div className="print:hidden">
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      </div>
    </div>
  );
}

export default App;
