export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi helper buat scroll smooth ke seksi di atas pas link diklik
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Di sini udah gw ubah jadi w-full murni murni mentok layar tanpa margin negatif bro, jadi ga bakal ilang lagi
    <footer className="w-full px-6 md:px-12 py-12 bg-brand text-white border-t border-brand-hover mt-auto">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        
        {/* KONTEN UTAMA FOOTER (3 Kolom biar padet) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          
          {/* KOLOM 1: Nama & Tagline Ringkas */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight">
              Dev<span className="text-teal-200">Portfolio</span>
            </h3>
            <p className="text-sm text-teal-50 font-medium max-w-xs leading-relaxed mx-auto md:mx-0">
              Muhamad Rizki Kasim — Student of Information Technology & Frontend Developer focusing on modern interfaces and robust engineering solutions.
            </p>
          </div>

          {/* KOLOM 2: Navigasi Cepat (Quick Links) */}
          <div className="space-y-3">
            <h4 className="text-md font-bold tracking-wide text-teal-100">Quick Links</h4>
            <ul className="text-sm font-semibold space-y-2 text-teal-50">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-teal-200 transition-colors">
                  Back to Top
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-teal-200 transition-colors">
                  About Me
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-teal-200 transition-colors">
                  Featured Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-teal-200 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: Jejaring Sosial / Media Utama */}
          <div className="space-y-3">
            <h4 className="text-md font-bold tracking-wide text-teal-100">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4 text-sm font-semibold text-teal-50">
              <a href="https://linkedin.com/in/muhamad-rizki-kasim" target="_blank" rel="noreferrer" className="hover:text-teal-200 transition-colors">
                LinkedIn
              </a>
              <span>•</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-teal-200 transition-colors">
                GitHub
              </a>
              <span>•</span>
              <a href="mailto:rizkikasim224@gmail.com" className="hover:text-teal-200 transition-colors">
                Email
              </a>
            </div>
          </div>

        </div>

        {/* PEMBATAS GARIS TIPIS */}
        <hr className="border-teal-600/40" />

        {/* BAGIAN BAWAH: Hak Cipta & Teknis */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-teal-100">
          <p>
            &copy; {currentYear} <span className="text-white font-bold">Muhamad Rizki Kasim</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <span className="text-white animate-pulse">❤️</span> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}