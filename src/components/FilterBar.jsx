import { Filter } from 'lucide-react';

export default function FilterBar({ currentFilter, onFilterChange }) {
  const filters = ['Todos', 'Producción', 'En Desarrollo', 'Hobby'];

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
      <div className="flex items-center gap-2 text-slate-400">
        <Filter className="w-5 h-5" />
        <span className="font-medium text-sm uppercase tracking-wider">Filtrar Proyectos</span>
      </div>
      
      <div className="flex flex-wrap items-center justify-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl">
        {filters.map((filter) => {
          const isActive = currentFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => onFilterChange(filter)}
              className={`
                px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${isActive 
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }
              `}
            >
              {filter}
            </button>
          );
        })}
      </div>
    </div>
  );
}
