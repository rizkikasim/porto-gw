import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import TravelKuyDemo from './pages/projects/TravelKuyDemo';

// =========================================================
// KOMPONEN FOOTER LANGSUNG DI SINI BIAR GA ILANG LAGI
// =========================================================
function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="w-full px-6 md:px-12 py-12 bg-brand text-white border-t border-brand-hover mt-auto">
      <div className="max-w-6xl mx-auto w-full space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-center md:text-left">
          <div className="space-y-3">
            <h3 className="text-xl font-bold tracking-tight">
              Dev<span className="text-teal-200">Portfolio</span>
            </h3>
            <p className="text-sm text-teal-50 font-medium max-w-xs leading-relaxed mx-auto md:mx-0">
              Muhamad Rizki Kasim — Student of Information Technology & Frontend Developer focusing on modern interfaces and robust engineering solutions.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-md font-bold tracking-wide text-teal-100">Quick Links</h4>
            <ul className="text-sm font-semibold space-y-2 text-teal-50">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-teal-200 transition-colors">Back to Top</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-200 transition-colors">About Me</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-teal-200 transition-colors">Featured Projects</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-200 transition-colors">Contact</button></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-md font-bold tracking-wide text-teal-100">Connect</h4>
            <div className="flex justify-center md:justify-start gap-4 text-sm font-semibold text-teal-50">
              <a href="https://linkedin.com/in/muhamad-rizki-kasim" target="_blank" rel="noreferrer" className="hover:text-teal-200 transition-colors">LinkedIn</a>
              <span>•</span>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-teal-200 transition-colors">GitHub</a>
              <span>•</span>
              <a href="mailto:rizkikasim224@gmail.com" className="hover:text-teal-200 transition-colors">Email</a>
            </div>
          </div>
        </div>
        <hr className="border-teal-600/40" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-teal-100">
          <p>&copy; {currentYear} <span className="text-white font-bold">Muhamad Rizki Kasim</span>. All rights reserved.</p>
          <p className="flex items-center gap-1.5">Built with <span className="text-white animate-pulse">❤️</span> using React & Tailwind</p>
        </div>
      </div>
    </footer>
  );
}

// =========================================================
// MAIN APP COMPONENT
// =========================================================
const DummyPage = ({ title }) => <div className="text-center text-xl p-10 font-medium text-slate-500">{title} Section Coming Soon!</div>;

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-500 font-sans flex flex-col">
        
        {/* NAVBAR */}
        <nav className="w-full border-b border-slate-200/60 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur sticky top-0 z-50 transition-colors duration-500">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              Dev<span className="text-brand">Portfolio</span>
            </span>
            <div className="hidden md:flex items-center gap-8 font-medium text-[15px] text-slate-500 dark:text-slate-400">
              <NavbarLink to="/" label="Home" />
              <NavbarLink to="/about" label="About" />
              <NavbarLink to="/skills" label="Skills" />
              <NavbarLink to="/projects" label="Projects" />
              <NavbarLink to="/research" label="Research" />
              <NavbarLink to="/experience" label="Experience" />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className={`relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out ${darkMode ? 'bg-brand' : 'bg-slate-300 dark:bg-slate-700'}`}
              >
                <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-md transition duration-300 ${darkMode ? 'translate-x-7' : 'translate-x-0'}`} />
              </button>
              <a href="#resume" className="hidden sm:inline-block px-5 py-2 rounded-full bg-brand text-white font-medium text-sm">Download Resume</a>
            </div>
          </div>
        </nav>

        {/* MAIN CONTENT */}
        <main className="max-w-6xl mx-auto w-full px-6 py-12 flex-1 animate-fade-in">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<DummyPage title="Skills" />} />
            <Route path="/projects" element={<DummyPage title="Projects" />} />
            <Route path="/research" element={<DummyPage title="Research" />} />
            <Route path="/experience" element={<DummyPage title="Experience" />} />

            {/* projects */}
            <Route path="/projects/travel-kuy" element={<TravelKuyDemo />} />
          </Routes>
        </main>

        {/* PEMANGGILAN FOOTER MANDIRI */}
        <Footer />

      </div>
    </Router>
  );
}

function NavbarLink({ to, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link to={to} className={`relative py-1 transition-colors hover:text-brand ${isActive ? 'text-brand font-semibold' : ''}`}>
      {label}
      {isActive && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand rounded-full" />}
    </Link>
  );
}