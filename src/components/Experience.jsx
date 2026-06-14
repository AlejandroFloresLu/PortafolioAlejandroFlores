import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2 bg-red-500/10 rounded-lg">
          <Briefcase className="w-6 h-6 text-red-500" />
        </div>
        <h2 className="text-3xl font-bold text-white print:text-zinc-900">Experiencia Laboral</h2>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent print:before:via-zinc-300">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
            
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-zinc-950 bg-zinc-800 group-hover:bg-red-500 text-zinc-500 group-hover:text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm transition-colors duration-300 z-10">
              <div className="w-2 h-2 rounded-full bg-current"></div>
            </div>
            
            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors print:bg-white print:border-zinc-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                <h3 className="font-bold text-xl text-white print:text-zinc-900">{exp.role}</h3>
                <span className="text-xs font-medium px-3 py-1 bg-red-500/10 text-red-400 rounded-full w-fit print:text-red-600 print:bg-red-50">
                  {exp.period}
                </span>
              </div>
              <div className="text-zinc-300 font-medium mb-4 print:text-zinc-700">{exp.company}</div>
              <p className="text-zinc-400 leading-relaxed text-sm print:text-zinc-600">
                {exp.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
