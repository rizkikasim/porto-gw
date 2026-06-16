// 1. Berikan nama variabel import yang unik dan beda satu sama lain bro
import imgTravelKuy from '../assets/travelKuy.png';
import imgWhyTravel from '../assets/Why-Travel.png'; 
import imgKhadijah from '../assets/khadijah.png'; 
import imgpmbm from '../assets/pmbm.png'; 
import imgBimbelku from '../assets/Bimbelku.png';
import imgMQFM from '../assets/MQFM.png'; 

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
    title: "TravelKuy Platform",
    description: "A sleek and responsive cross-platform travel booking application developed with Flutter.",
    image: imgTravelKuy, // Memakai gambar travelKuy.png
    tags: ["FLUTTER", "FIREBASE"],
    codeLink: "https://github.com/rizkikasim/Travelkuy.git",
    demoLink: "/projects/travel-kuy"
  },
  {
    id: 3,
    title: "Web Profile Why Travel",
    description: "Full-stack inventory management and sales platform designed for large-scale operations.",
    image: imgWhyTravel, // Tanda kutip dihapus, dan panggil nama variabel barunya yang bener bro
    tags: ["React"],
    codeLink: "https://github.com/rizkikasim/whyTravel.git",
    demoLink: "https://why-travel.vercel.app/"
  },
  {
    id: 4,
    title: "PMBM MIN3 Karanganyar System",
    description: "A full-stack web-based school admission system developed for MIN3 Karanganyar using Laravel and MySQL. This platform modernizes the student enrollment process by features a multi-step registration form, multi-program support (Tahfidz, Unggulan, Fullday), and a real-time tracking system. Equipped with a robust administrative dashboard to efficiently manage applicants' data and verification status.",
    image: imgpmbm, // Ganti dengan nama variabel import yang benar
    tags: ["LARAVEL", "FILLAMENT"],
    codeLink: "https://github.com/rizkikasim/PMBM_MIN3_KARAYANGAN.git",
    demoLink: "https://demo.com"
  },
  {
    id: 5,
    title: "Rumah Sukses Tutoring Website",
    description: "Educational platform with online registration, program management, and responsive user experience.",
    image: imgBimbelku, // Ganti dengan nama variabel import yang benar
    tags: ["React"],
    codeLink: "https://github.com/Chaerozi/Bimbel.git",
    demoLink: "https://rumahsukses-stage.pacemodddd-dev.me/"
  },
  {
    id: 6,
    title: "MQFM Mobile App",
    description: "A mobile application for managing mosque activities, including event scheduling, donation tracking, and community engagement features.",
    image: imgMQFM, // Ganti dengan nama variabel import yang benar
    tags: ["Flutter", "Golang"],
    codeLink: "https://github.com/rizkikasim/MQ_FM_Mobile.git",
    demoLink: "https://mqfm-demo.vercel.app/"
  }
];