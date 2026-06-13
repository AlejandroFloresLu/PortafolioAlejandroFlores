import { Award, ExternalLink } from 'lucide-react';
import { certificates } from '../data/certificates';

export default function Certificates() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Award className="w-6 h-6 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white print:text-zinc-900">Certificados y Educación</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 print:grid-cols-3">
        {certificates.map((cert) => (
          <div key={cert.id} className="flex flex-col p-6 bg-zinc-900/40 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors print:bg-white print:border-zinc-200 print:p-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-white mb-2 leading-snug print:text-zinc-900">{cert.title}</h3>
              <p className="text-zinc-400 text-sm print:text-zinc-700">{cert.issuer}</p>
            </div>
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-zinc-800/60 print:border-zinc-200">
              <span className="text-xs font-medium text-zinc-500 print:text-zinc-500">{cert.date}</span>
              {cert.url && cert.url !== '#' && (
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 transition-colors"
                  title="Ver Certificado"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
