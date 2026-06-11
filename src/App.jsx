import { useState } from 'react';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import ProjectCard from './components/ProjectCard';
import { projects } from './data/projects';

function App() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'Todos') return true;
    return project.status === filter;
  });

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-indigo-500/30">
      {/* Background decorative elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        <Hero />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <FilterBar currentFilter={filter} onFilterChange={setFilter} />
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-slate-500">
              <p className="text-lg">No hay proyectos que coincidan con este filtro.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
