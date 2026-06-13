import { X, ExternalLink, PlayCircle } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="w-full aspect-video sm:aspect-[21/9] bg-zinc-950 relative overflow-hidden rounded-t-2xl">
          {project.mediaType === 'video' ? (
            <video 
              src={project.mediaUrl} 
              controls 
              className="w-full h-full object-contain bg-zinc-950"
            />
          ) : (
            <img 
              src={project.mediaUrl} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-500/20 text-red-400 border border-red-500/20">
                {project.status}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Case Study Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tags */}
          <div>
            <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-3">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium text-zinc-300 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Context / Purpose */}
              <div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  Contexto y Propósito
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {project.caseStudy?.context || project.description}
                </p>
              </div>

              {/* What it does */}
              {project.caseStudy?.whatItDoes && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">¿Qué hace?</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.caseStudy.whatItDoes}
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
               {/* What it solves */}
               {project.caseStudy?.whatItSolves && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">¿Qué problema resuelve?</h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {project.caseStudy.whatItSolves}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action Footer */}
          {project.liveUrl && (
            <div className="pt-6 border-t border-zinc-800">
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium shadow-lg shadow-red-500/20 transition-all"
              >
                <PlayCircle className="w-5 h-5" />
                Ver Proyecto en Vivo
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
