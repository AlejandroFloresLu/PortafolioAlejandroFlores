import { ExternalLink, Code2 } from 'lucide-react';

export default function ProjectCard({ project }) {
  const { 
    title, 
    category, 
    status, 
    description, 
    tags, 
    mediaType, 
    mediaUrl, 
    githubUrl, 
    liveUrl 
  } = project;

  const statusColors = {
    'Producción': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    'En Desarrollo': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    'Hobby': 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  };

  const statusColor = statusColors[status] || 'bg-slate-500/10 text-slate-400 border-slate-500/20';

  return (
    <div className="group flex flex-col bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/60 hover:border-slate-700 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300">
      
      {/* Media Section */}
      <div className="relative aspect-video overflow-hidden bg-slate-800">
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
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-900/60 text-slate-300 border border-slate-700/50 backdrop-blur-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-2 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-md border border-slate-700/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons Section */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-800/60">
          <a 
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white border border-slate-700/50 transition-colors text-sm font-medium"
          >
            <Code2 className="w-4 h-4" />
            Código
          </a>
          
          {liveUrl ? (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white shadow-lg shadow-indigo-500/20 transition-all text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          ) : (
            <button 
              disabled
              className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-slate-800/20 text-slate-500 border border-slate-800/30 cursor-not-allowed text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4 opacity-50" />
              Demo (N/A)
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
