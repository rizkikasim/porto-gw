// 1. Berikan nama variabel import yang unik dan beda satu sama lain bro
import imgTravelKuy from '../assets/travelKuy.png';
import imgWhyTravel from '../assets/Why-Travel.jpeg'; 
import imgKhadijah from '../assets/khadijah.png'; 
import imgpmbm from '../assets/pmbm.png'; 

export const projectsData = [
  {
    id: 1,
    title: "Khadijah Preschool Website",
    description: "Responsive preschool website with online registration, payment integration, and program information management.",
    image: imgKhadijah, // Ganti dengan nama variabel import yang benar
    tags: ["IOT", "DEEP LEARNING"],
    codeLink: "https://github.com/Chaerozi/Khadijah-Landing.git",
    demoLink: "https://khadijah-landing-stage.pacemodddd-dev.me/"
  },
  {
    id: 2,
    title: "Travel Kuy",
    description: "Biometric and geolocation-based attendance tracking for enterprise built with cross-platform efficiency.",
    image: imgTravelKuy, // Memakai gambar travelKuy.png
    tags: ["FLUTTER", "FIREBASE"],
    codeLink: "https://github.com/rizkikasim/Travelkuy.git",
    demoLink: "/projects/travel-kuy"
  },
  {
    id: 3,
    title: "Web Profile Why Travel",
    description: "Full-stack inventory management and sales platform designed for large-scale operations and robust management.",
    image: imgWhyTravel, // Tanda kutip dihapus, dan panggil nama variabel barunya yang bener bro
    tags: ["React"],
    codeLink: "https://github.com/rizkikasim/whyTravel.git",
    demoLink: "https://why-travel.vercel.app/"
  },
  {
    id: 4,
    title: "Project Title 4",
    description: "A full-stack web-based school admission system developed for MIN3 Karanganyar using Laravel and MySQL. This platform modernizes the student enrollment process by features a multi-step registration form, multi-program support (Tahfidz, Unggulan, Fullday), and a real-time tracking system. Equipped with a robust administrative dashboard to efficiently manage applicants' data and verification status.",
    image: imgpmbm, // Ganti dengan nama variabel import yang benar
    tags: ["Tag1", "Tag2"],
    codeLink: "https://github.com/rizkikasim/PMBM_MIN3_KARAYANGAN.git",
    demoLink: "https://demo.com"
  }
];