import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import splashScreenImg from '../../assets/Splash_Screen.png';
import deviceShowcaseImg from '../../assets/Device-Showcase.png';
// Import asset baru buat seksi 3 bro
import seatSelectImg from '../../assets/Seat-Select.png';

export default function TravelKuyDemo() {
  const { pathname } = useLocation();

  // Memastikan pas masuk halaman ini, browser otomatis scroll paling atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const handleExploreClick = () => {
    const element = document.getElementById('travelkuy-features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-6 space-y-28">
      
      {/* =========================================================
          1. HERO SECTION UTAMA (Seksi Atas)
          ========================================================= */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 min-h-[550px] w-full">
        
        {/* SISI KIRI: PENJELASAN TEKS & TOMBOL */}
        <div className="flex-1 space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand tracking-tight leading-[1.15]">
              Smart Way To <br />Plan Your <br />Journey
            </h1>
            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium leading-relaxed pt-2">
              Book tickets, manage schedules, and track your trips in one simple mobile application.
            </p>
          </div>

          <div className="pt-2">
            <button 
              onClick={handleExploreClick}
              className="px-6 py-3.5 bg-brand hover:bg-brand-hover text-white font-bold rounded-xl transition-all shadow-md shadow-brand/10 hover:shadow-brand/20 text-[15px] hover:-translate-y-0.5"
            >
              Explore Project
            </button>
          </div>
        </div>

        {/* SISI KANAN: LINGKARAN & MOCKUP HP */}
        <div className="flex-1 flex justify-center items-center w-full relative">
          <div className="relative w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] flex justify-center items-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00AA97]/30 via-[#00AA97]/5 to-transparent dark:from-[#00AA97]/20 dark:via-[#00AA97]/2 to-transparent" />
            <div className="absolute z-10 w-[65%] sm:w-[64%] max-w-[280px] filter drop-shadow-[0_25px_40px_rgba(0,170,151,0.3)] transition-transform duration-500 hover:scale-[1.03]">
              <img 
                src={splashScreenImg} 
                alt="TravelKuy Splash Screen" 
                className="w-full h-auto rounded-[40px] sm:rounded-[48px] object-contain"
              />
            </div>
          </div>
        </div>

      </section>


      {/* =========================================================
          2. SEKSI DESKRIPSI UTAMA (Seksi Tengah - Seamless Style)
          ========================================================= */}
      <section 
        id="travelkuy-features" 
        className="py-6 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full text-slate-900 dark:text-white"
      >
        
        {/* SISI KIRI: DEVICE SHOWCASE */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="w-full max-w-[480px] sm:max-w-[540px] filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 hover:scale-[1.02]">
            <img 
              src={deviceShowcaseImg} 
              alt="TravelKuy Device Showcase" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* SISI KANAN: JUDUL BESAR & PARAGRAF DESKRIPSI */}
        <div className="flex-1 space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            About <span className="text-brand">TravelKuy</span>
          </h2>
          <div className="space-y-5 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-base sm:text-lg">
            <p>
              <span className="text-slate-900 dark:text-white font-semibold">TravelKuy</span> is a Flutter-based mobile application designed to simplify the travel experience by providing an easy way to search routes, book transportation, and manage travel plans. With a modern and intuitive interface, the application helps users access travel information efficiently and conveniently within a single platform.
            </p>
          </div>
        </div>

      </section>


      {/* =========================================================
          3. SEKSI INTERACTIVE SEAT BOOKING (Seksi Bawah - Sesuai image_f9aabb.png)
          ========================================================= */}
      <section className="py-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16 w-full text-slate-900 dark:text-white">
        
        {/* SISI KIRI: TEKS JUDUL & SPESIFIKASI FITUR */}
        <div className="flex-1 space-y-6 text-center lg:text-left max-w-xl mx-auto lg:mx-0">
          
          {/* Judul Utama dengan warna toska penuh khas brand lu */}
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand">
            Interactive Seat Booking
          </h2>
          
          {/* Paragraf Penjelas */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
            TravelKuy allows users to view seat availability in real time and select seats based on their preferences for a more personalized travel experience.
           </p>

          {/* List Poin dengan Icon Checkmark Toska yang Udah Fiks (Sesuai image_f953c8.png) */}
          <div className="space-y-4 pt-2 text-left inline-block lg:block">
            
            {/* POIN 1 */}
            <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200 text-base sm:text-lg group">
              <span className="flex-shrink-0 p-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Interactive seat map</span>
            </div>

            {/* POIN 2 */}
            <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200 text-base sm:text-lg group">
              <span className="flex-shrink-0 p-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Real-time availability</span>
            </div>

            {/* POIN 3 */}
            <div className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200 text-base sm:text-lg group">
              <span className="flex-shrink-0 p-1 rounded-lg bg-teal-50 dark:bg-teal-950/40 text-brand">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Simple booking experience</span>
            </div>

          </div>

        </div>

{/* SISI KANAN: MOCKUP HP DENGAN LINGKARAN BACKGROUND GRADASI (SEKARANG JAUH LEBIH GEDE) */}
        <div className="flex-1 flex justify-center items-center w-full relative">
          
          {/* Ukuran container lingkaran dinaikin ke 500px biar makin megah */}
          <div className="relative w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] flex justify-center items-center">
            
            {/* Lingkaran Gradasi Memudar Halus */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#00AA97]/25 via-[#00AA97]/5 to-transparent dark:from-[#00AA97]/15 dark:via-[#00AA97]/2 to-transparent" />
            
            {/* Porsi lebar HP dinaikin ke 66% dan max-width dilonggarkan ke 280px biar gambarnya mantap gede */}
            <div className="absolute z-10 w-[68%] sm:w-[66%] max-w-[280px] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_25px_45px_rgba(0,0,0,0.4)] transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={seatSelectImg} 
                alt="TravelKuy Seat Selection" 
                className="w-full h-auto object-contain"
              />
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}