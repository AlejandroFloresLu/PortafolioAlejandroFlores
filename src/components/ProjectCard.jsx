import { ExternalLink, BookOpen } from 'lucide-react';

export default function ProjectCard({ project, onOpenModal }) {
  const { 
    title, 
    category, 
    status, 
    description, 
    tags, 
    mediaType, 
    mediaUrl, 
    liveUrl 
  } = project;

  const statusColors = {
    'Producción': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'En Desarrollo': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Hobby': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  };

  const statusColor = statusColors[status] || 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';

  return (
    <div className="group flex flex-col bg-zinc-900/40 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 hover:shadow-2xl hover:shadow-red-500/5 transition-all duration-300 print:bg-white print:border-zinc-200">
      
      {/* Media Section */}
      <div 
        className="relative aspect-video overflow-hidden bg-zinc-800 cursor-pointer print:hidden"
        onClick={() => onOpenModal(project)}
      >
        {mediaType === 'video' ? (
          <video 
            src={mediaUrl} 
            loop 
            muted 
            playsInline 
            autoPlay
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <img 
            src={mediaUrl} 
            alt={`Screenshot of ${title}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        )}
        
        {/* Overlay Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-2.5 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${statusColor}`}>
            {status}
          </span>
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-900/60 text-zinc-300 border border-zinc-700/50 backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 print:p-4">
        <h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors cursor-pointer w-fit print:text-zinc-900"
          onClick={() => onOpenModal(project)}
        >
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed print:text-zinc-600">
          {description}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-8 print:mb-2">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium text-zinc-400 bg-zinc-800/50 rounded-md border border-zinc-700/30 print:bg-zinc-100 print:text-zinc-700 print:border-zinc-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Section */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800/60 print:hidden">
          <button 
            onClick={() => onOpenModal(project)}
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-300 hover:text-white border border-zinc-700/50 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Caso de Estudio
          </button>
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 text-white shadow-lg shadow-red-500/20 transition-all text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
