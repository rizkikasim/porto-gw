import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import fotoBaim from '../assets/baim.JPG';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';

export default function Home() {
  const location = useLocation();

  // Efek pintar: kalau balik dari halaman demo, dia bakal otomatis scroll smooth ke seksi yang dituju
  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      // Bersihkan state agar tidak berulang pas di-refresh
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const handleViewProjectsClick = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-24">
      
      {/* 1. HERO SECTION */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 min-h-[calc(100vh-160px)] py-6">
        
        {/* BAGIAN KIRI: Teks & Penjelasan Hero */}
        <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Muhamad Rizki <span className="text-brand">Kasim</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
            Building the future of modern applications through elegant Flutter interfaces, robust Laravel backends, and innovative AI/IoT research.
          </p>

          {/* Tombol Aksi di bawah teks */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 pt-4">
            {/* Tombol ini juga kita buat bisa diklik langsung scroll smooth ke seksi proyek di bawah */}
            <button 
              onClick={handleViewProjectsClick}
              className="w-full sm:w-auto px-6 py-3 bg-brand hover:bg-brand-hover text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-brand/20 hover:-translate-y-0.5"
            >
              View Projects 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <button className="w-full sm:w-auto px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-all hover:-translate-y-0.5">
              Download Resume
            </button>
          </div>
        </div>

        {/* BAGIAN KANAN: Tempat Foto */}
        <div className="flex-1 flex justify-center lg:justify-end relative">
          <div className="absolute -inset-1.5 bg-brand/10 dark:bg-brand/20 rounded-[2.5rem] blur-xl opacity-70 transform rotate-3 scale-95"></div>
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-[2.5rem] overflow-hidden bg-slate-200 dark:bg-slate-800 border-4 border-white dark:border-slate-900 shadow-2xl">
            <img 
              src={fotoBaim} 
              alt="Developer Avatar" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500 transform hover:scale-105"
            />
          </div>
        </div>

      </div>

      {/* 2. ABOUT SECTION dengan Wrapper ID Anchor presisi */}
      <div id="about">
        <About />
      </div>

      <div id="experience">
        <Experience />
      </div>

      {/* 3. PROJECTS SECTION (ID projects sudah ada di dalam file Projects.jsx lu bro) */}
      <Projects />

      {/* 4. CONTACT SECTION dengan Wrapper ID Anchor presisi */}
      <div id="contact">
        <Contact />
      </div>

    </div>
  );
}