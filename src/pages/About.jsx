import fotoV1 from '../assets/v1.png'; 
import fotoV2 from '../assets/v2.png'; 
import fotoV3 from '../assets/v3.jpg'; 

export default function About() {
  return (
    <section 
      id="about" 
      className="-mx-6 md:-mx-12 px-6 md:px-12 py-20 flex flex-col gap-16 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800/40"
    >
      
      {/* BAGIAN ATAS: Tumpukan Foto & Teks Deskripsi */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 w-full">
        
        {/* KIRI: Tumpukan Foto Kreatif Sesuai Gambar image_06f787.png */}
        <div className="flex-1 relative w-full lg:max-w-[440px] h-[380px] hidden md:block">
          
          {/* Gambar 1: Paling Belakang (Kiri Atas) -> Pakai v1.png */}
          <div className="absolute top-0 left-0 w-[60%] h-[65%] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-900 transition-all duration-500 hover:z-30 group">
            <img 
              src={fotoV1} 
              alt="Rizki Kasim v1" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>

          {/* Gambar 2: Paling Depan (Tengah) -> Pakai v2.png */}
          <div className="absolute top-1/4 left-1/4 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900 transition-all duration-500 z-10 hover:z-30 group">
            <img 
              src={fotoV2} 
              alt="Rizki Kasim v2" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>

          {/* Gambar 3: Kanan Bawah -> Pakai v3.jpg */}
          <div className="absolute bottom-0 right-0 w-[50%] h-[55%] rounded-3xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-900 transition-all duration-500 hover:z-30 group">
            <img 
              src={fotoV3} 
              alt="Rizki Kasim v3" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out transform group-hover:scale-105"
            />
          </div>

        </div>

        {/* KANAN: Penjelasan Teks About (Font Diperbesar) */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              About <span className="text-brand">Me?</span>
            </h2>
          </div>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Halo! Gw Muhamad Rizki Kasim, seorang mahasiswa Teknologi Informasi semester akhir yang berfokus di bidang Frontend dan Mobile Development. Gw suka banget nge-explore pembuatan UI/UX web yang interaktif, clean, dan super mulus.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
            Selain berkutat dengan slicing desain ke React atau Flutter, gw juga punya minat mendalam di arsitektur IoT dan optimasi model kecerdasan buatan (AI) lewat teknik kompresi seperti pruning dan quantization. Kombinasi ini bikin gw selalu tertantang buat ngebuat aplikasi yang ga cuma estetik, tapi juga kenceng dan efisien!
          </p>
        </div>

      </div>

      {/* BAGIAN BAWAH: SKILL BARS LAYOUT (Clean - Icon Dihilangkan) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full pt-6">
        
        {/* CARD 1: MOBILE */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Mobile</h3>
          </div>
          <div className="space-y-4">
            <SkillBar label="Flutter (Dart)" percentage="95%" />
            <SkillBar label="Firebase" percentage="85%" />
          </div>
        </div>

        {/* CARD 2: BACKEND */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Backend</h3>
          </div>
          <div className="space-y-4">
            <SkillBar label="Laravel (PHP)" percentage="90%" />
            <SkillBar label="MySQL / PostgreSQL" percentage="80%" />
          </div>
        </div>

        {/* CARD 3: AI & IoT */}
        <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border border-slate-200/60 dark:border-slate-800/80 space-y-6">
          <div className="flex items-center">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI & IoT</h3>
          </div>
          <div className="space-y-4">
            <SkillBar label="Python (TensorFlow)" percentage="75%" />
            <SkillBar label="IoT Architecture" percentage="85%" />
          </div>
        </div>

      </div>

    </section>
  );
}

// Komponen Reusable progress bar
function SkillBar({ label, percentage }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-semibold text-slate-700 dark:text-slate-300">
        <span>{label}</span>
        <span>{percentage}</span>
      </div>
      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-brand rounded-full transition-all duration-1000 ease-out"
          style={{ width: percentage }}
        />
      </div>
    </div>
  );
}