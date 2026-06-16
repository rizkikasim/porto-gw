export default function Experience() {
  
  // Data list pengalaman lu, lu bisa tambah atau ubah teksnya di sini pelan-pelan nanti bro
  const experiences = [
    {
      id: 1,
      role: "Karya Multi Solution Indonesia",
      company: "Smart Building Project",
      period: "Juni 2025 - Augst 2025",
      description: "Contributed to the development of an ESP32-based Smart Building system integrated with advanced sensors. Focused on hardware-to-software integration, telemetry data collection, and optimizing local communication nodes for seamless automation."
    },
    {
        id: 2,
        role: "Head Of Business Development",
        company: "Al-Fath",
        period: "Feb 2025 - Des 2025",
        description: "Responsible for driving business growth and strategic partnerships."
    },
    {
        id: 3,
        role: "Asistent Laboratorium Iot",
        company: "Telkom University",
        period: "Sep 2025 - Jun 2026",
        description: "Assisted in managing the IoT laboratory, supporting students with projects, and maintaining lab equipment."
    },
    {
        id: 4,
        role: "Project Manager",
        company: "MQFM Company",
        period: "Nov 2025 - Jan 2026",
        description: "Led cross-functional teams to deliver projects on time and within budget, ensuring alignment with organizational goals and stakeholder expectations."
    }, 
    {
        id: 5,
        role: "Frontend Developer ",
        company: "Khadijah Islamic School",
        period: "Feb 2026 - Mar 2026",
        description: "Developed and maintained the frontend of the school's website, ensuring a responsive and user-friendly interface for students, parents, and staff."
    }
  ];

  return (
    <section id="experience-section" className="py-12 w-full text-slate-900 dark:text-white">
      
      {/* HEADER SEKSI EXPERIENCE (Center Style mirip Featured Projects) */}
      <div className="flex justify-center items-center mb-16 text-center">
        <div className="space-y-2 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My <span className="text-brand">Experience</span>
          </h2>
          <p className="text-base text-slate-500 dark:text-slate-400 font-medium">
            A journey of engineering practice, professional internships, and technological development.
          </p>
        </div>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="max-w-3xl mx-auto relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 sm:ml-auto">
        
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-12 relative pl-8 sm:pl-10 group">
            
            {/* TITIK TIMELINE (Bullet Node) ber-efek Glow Toska */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-brand transition-all duration-300 group-hover:scale-125 group-hover:bg-brand shadow-sm shadow-brand/50" />
            
            {/* KONTEN DETAIL PENGALAMAN (Clean Slicing) */}
            <div className="space-y-3">
              
              {/* Baris Atas: Role & Periode */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="space-y-0.5">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand transition-colors duration-300">
                    {exp.role}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-slate-500 dark:text-slate-400">
                    {exp.company}
                  </p>
                </div>
                
                {/* Badge Periode Waktu */}
                <span className="inline-flex sm:self-start px-3 py-1 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-800/60 tracking-wide uppercase">
                  {exp.period}
                </span>
              </div>

              {/* Paragraf Deskripsi Kerja */}
              <p className="text-base font-medium text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}