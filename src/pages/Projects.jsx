import { projectsData } from '../data/projects';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section id="projects" className="py-12">
      
{/* HEADER SECTION (Ikon Sudah Dihapus Bersih, Murni Center) */}
      <div className="flex justify-center items-center mb-12 text-center">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            <span className="text-brand">Featured</span> Projects
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            A showcase of engineering solutions and user-centric applications.
          </p>
        </div>

        
        {/* Ikon Dekorasi Device/Code Kanan Atas */}
        <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-brand border border-slate-200/50 dark:border-slate-800">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 2 0 002-2V5a2 2 0 002-2H4a2 2 0 00-2 2v14a2 2 0 002 2zM10 11l-2 2m0 0l2 2m-2-2h8m-2-4l2 2m0 0l-2 2m2-2H8" />
          </svg>
        </div>
      </div>

      {/* GRID CARDS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-sm border border-slate-200/60 dark:border-slate-800/80 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
          >
            {/* Gambar Project */}
            <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Konten Card */}
            <div className="p-6 flex flex-col flex-1 space-y-4">
              
              {/* Tags / Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span 
                    key={idx} 
                    className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200/30 dark:border-slate-800/40 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Judul & Deskripsi */}
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tombol Aksi di bagian bawah (Code & Demo) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {/* Tombol Code */}
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  Code
                </a>
                
                {/* Tombol Demo (Menggunakan warna brand toska lu #00AA97) */}
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand hover:bg-brand-hover text-white font-semibold text-sm transition-all shadow-md shadow-brand/10 hover:shadow-brand/20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Demo
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}