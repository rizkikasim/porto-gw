import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mantap bro! Pesan dari ${formData.name} berhasil dikirim.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="-mx-6 md:-mx-12 px-6 md:px-12 py-20 flex flex-col gap-12 bg-slate-100/40 dark:bg-slate-900/20 border-t border-slate-200/50 dark:border-slate-800/40"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto w-full">
        
        {/* KOLOM KIRI: Info Kontak & Sosial Media (SVG Pro) */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-2">
            <h4 className="text-sm font-bold tracking-widest text-slate-400 uppercase">CONTACT</h4>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Let's Work <span className="text-brand">Together!</span>
            </h2>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed max-w-md mx-auto lg:mx-0">
             Have a cool project idea, Just drop us a message!
          </p>

          {/* Info Detail dengan SVG Icon Profesional */}
          <div className="space-y-5 pt-4 inline-block text-left w-full max-w-md">
            
            {/* LOKASI */}
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-semibold group">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-colors duration-300 group-hover:border-brand/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="text-[16px]">Bandung, Indonesia</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-semibold group">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-colors duration-300 group-hover:border-brand/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L22 8m-9 13h4a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <a href="mailto:rizkikasim224@gmail.com" className="text-[16px] hover:text-brand transition-colors break-all">
                rizkikasim224@gmail.com
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-semibold group">
              <div className="p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-sm transition-colors duration-300 group-hover:border-brand/40">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-brand" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <a href="https://linkedin.com/in/muhamad-rizki-kasim" target="_blank" rel="noreferrer" className="text-[16px] hover:text-brand transition-colors">
                Muhamad Rizki Kasim
              </a>
            </div>

          </div>
        </div>

        {/* KOLOM KAIAN: Form Kontak Interaktif */}
        <div className="bg-white dark:bg-slate-950 p-8 rounded-3xl shadow-sm border border-slate-200/60 dark:border-slate-800/80 w-full max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nama</label>
              <input 
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Type here...?" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email</label>
              <input 
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="@gmail.ocm" 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Pesan</label>
              <textarea 
                rows="4"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="Type your message or job offer here..." 
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
              ></textarea>
            </div>

            {/* Tombol Kirim */}
            <button 
              type="submit" 
              className="w-full py-3.5 bg-brand hover:bg-brand-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-brand/10 hover:shadow-brand/20 flex items-center justify-center gap-2 hover:-translate-y-0.5"
            >
              <span>Kirim Pesan</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9-2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}