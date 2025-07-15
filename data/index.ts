export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication",
      description: "Passionate mobile app developer with expertise in React Native, Kotlin, Flutter, and Django. Building real-time, user-friendly applications that make everyday life easier.",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "Mobile App Development Specialist",
      description: "Expert in React Native, Kotlin, Flutter with Firebase integration and real-time database management.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      description: "React.js, Django, Node.js, MongoDB, Firebase - Building scalable web and mobile solutions",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "AI/ML Enthusiast",
      description: "Custom U-Net architecture for image dehazing, achieving 99.9% SSIM and 52dB PSNR performance.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working on advanced mobile applications",
      description: "Screen Mirroring App, Family Locator System, and E-Learning platforms",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Ready to build your next mobile or web application?",
      description: "Let's create something amazing together with cutting-edge technology and seamless user experiences.",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    // MOBILE PROJECTS
    {
      title: "Screen Mirroring App",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=300&fit=crop",
      description: "Advanced screen mirroring app with browser mirroring, game streaming, screenshot capture, and screen recording. Built with Kotlin, featuring secure permission handling and optimized frame rate for smooth cross-device casting experience.",
      category: "Mobile",
      githubLink: "https://play.google.com/store/apps/details?id=com.gr.screenmirroring.miracast.casttotv.screenshare&pcampaignid=web_share"
    },
    {
      title: "Family Locator System",
      image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=400&h=300&fit=crop",
      description: "Secure location tracking system where family members can create/join groups and share live locations. Built with Jetpack Compose, JWT authentication, real-time location updates, and emergency alert triggering.",
      category: "Mobile",
      githubLink: "https://github.com/usmana5809/Family-locator-Jetpack_Compose"
    },
    {
      title: "E-Learning Mobile Application",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      description: "Interactive coding tutorials app with section-wise quizzes and dynamic content loading. Users can sign up, log in, view course content, and compete on leaderboard based on quiz scores. Integrated with Firebase for user progress and leaderboard stats.",
      category: "Mobile",
      githubLink: "https://github.com/ZunaishaN00R/E-Learning-App-in-Java-on-Android-Studio"
    },
    {
      title: "AuraUserve (Home Service App)",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop",
      description: "Mobile application for booking electricians, plumbers, cleaners, and other home service providers. Integrated Firebase for authentication and real-time database functionality with user-friendly UI and notification system.",
      category: "Mobile",
      githubLink: "https://github.com/mu2602659/AuraUserve-Mobile-App"
    },
    // WEB PROJECTS
    {
      title: "Home-Service-Connect Web App",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
      description: "Responsive web platform connecting users with verified service providers for household maintenance. Features service listings, booking UI, and responsive design for seamless user experience.",
      category: "Web",
      githubLink: "https://github.com/usmana5809/Home-Service-Connect-Web-App"
    },
    {
      title: "ShopVista E-commerce",
      image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=400&h=300&fit=crop",
      description: "Dynamic e-commerce site with cart, checkout, real-time product filtering, and order placement. Integrated Redux for efficient state management and scalability with responsive design across devices.",
      category: "Web",
      githubLink: "https://github.com/usmana5809/ShopVista-E-commerce"
    },
    {
      title: "Smart Learning Management System",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
      description: "Complete LMS platform with assignment upload, study material sharing, and attendance tracking. Teachers manage classrooms while students download content, submit assignments, and view deadlines with secure access control.",
      category: "Web",
      githubLink: "https://github.com/usmana5809/Smart-Learning-Management-System"
    },
    {
      title: "Music Player App",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
      description: "Responsive music player built with JavaScript, HTML, and CSS. Features song navigation, progress bar, play/pause controls, and automatic playback transitions between songs.",
      category: "Web",
      githubLink: "https://github.com/usmana5809/Music-Player-App"
    },
    {
      title: "Next.js Portfolio",
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop",
      description: "A modern, fast, and SEO-friendly personal portfolio built with Next.js. Features dynamic routing, server-side rendering, and a beautiful, responsive UI to showcase projects and skills.",
      category: "Web",
      githubLink: "#"
    },
    // AI & ML PROJECTS
    {
      title: "AI-Powered Image Dehazing System",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop",
      description: "Custom U-Net architecture for haze removal trained on 65,000+ hazy/clear image pairs. Real-time dehazing support for images and videos with 99.9% SSIM and 52dB PSNR, outperforming standard enhancement models.",
      category: "AI",
      githubLink: "https://github.com/ZunaishaN00R/Smog-Removal-in-python-from-image-and-video-A-Neural-Network-Based-Image-Dehazing-Tool/"
    },
    {
      title: "Web Scraper App",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      description: "Keyword-based content analysis on public webpages with live highlighting of matched keywords. Supports exporting results to CSV or TXT directly with detailed error handling for invalid URLs and network failures.",
      category: "AI",
      githubLink: "https://github.com/usmana5809/Web-Scraper-App"
    },
    {
      title: "Quran Recitation Audio Classification",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      description: "Machine learning project to classify different Quran recitations using audio preprocessing, feature extraction, and classification models for accurate recitation identification.",
      category: "AI",
      githubLink: "https://github.com/usmana5809/Quran-Recitation-Audio-Classification"
    },
    // OTHER PROJECTS
    {
      title: "Matrix Operations C++",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
      description: "C++ program performing matrix operations including addition, subtraction, multiplication, determinant calculation, matrix inversion, and symmetry checking for mathematical computations.",
      category: "Other",
      githubLink: "https://github.com/usmana5809/Matrix-Operations-Cpp"
    },
    {
      title: "Oracle Database Project",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      description: "Oracle Database project for social, financial, and university management systems with SQL scripts for database creation, data insertion, and comprehensive querying capabilities.",
      category: "Other",
      githubLink: "https://github.com/usmana5809/Oracle-Database-Project"
    },
    {
      title: "Bus Ticket Booking System",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop",
      description: "Comprehensive bus ticket booking and management system in C++ allowing users to book tickets, manage passenger details, and includes administrative functions for bus management.",
      category: "Other",
      githubLink: "https://github.com/usmana5809/Bus-Ticket-Booking-System"
    },
    {
      title: "Hospital Network Design",
      image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=300&fit=crop",
      description: "Network design for Melbourne Health Services focusing on security, operational efficiency, and cost-effectiveness through hierarchical network model and VLAN segmentation.",
      category: "Other",
      githubLink: "https://github.com/usmana5809/Hospital-Network-Design"
    }
  ];
  
  export const testimonials = [
    {
      quote:
        "Usmana demonstrated exceptional technical skills and dedication during our mobile app development project. His expertise in React Native and Firebase integration was invaluable in delivering a high-quality product on time.",
      name: "CodeSynergy Lab Team",
      title: "Mobile Application Development",
    },
    {
      quote:
        "Working with Usmana on the web development internship was a great experience. His ability to quickly learn new technologies and implement complex features made him an asset to our team.",
      name: "Crowdstrike Development Team",
      title: "Web Development Internship",
    },
    {
      quote:
        "Usmana's capstone project showcased his full-stack development capabilities. The AuraUserve mobile app and Home-Service-Connect web platform demonstrated his ability to build production-ready applications.",
      name: "Superior University Faculty",
      title: "Capstone Project Advisor",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "CodeSynergy Lab",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "Crowdstrike",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "Superior University",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "CodeSquad.AI",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "IEEE Society",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Mobile Application Developer",
      desc: "CodeSynergy Lab | Sep 2024 – Present | Developed a Screen Mirroring App with browser mirroring, game streaming, and media projection. Built a secure Family Locator System using Django, JWT authentication, and Jetpack Compose. Integrated UI/UX designs via Figma, Canva, and Google Web Designer. Created promotional content using CapCut. Contributed to full-stack mobile development with real-time database and Firebase integration.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Web Development Intern",
      desc: "Crowdstrike (Remote) | Jun 2024 – Aug 2024 | Built a responsive Music Player app using JavaScript, HTML, and CSS. Developed a React.js login system with Firebase authentication and integrated a keyword-based web scraper saving to TXT/CSV using Python and AI. Created and deployed a Next.js personal portfolio showcasing skills and project experience.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Capstone Project Lead",
      desc: "University-Based Program | Sep 2023 – Jun 2024 | Developed full-stack mobile and web solutions using React Native, Node.js, Firebase, and MongoDB. Led development of the AuraUserve-Mobile-App, enabling users to book home services with real-time Firebase data management, user authentication, and scalable architecture. Built the Home-Service-Connect Web App, a responsive platform connecting users with service providers for household maintenance. Demonstrated end-to-end development and integration of mobile and web solutions for production-level deployment.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Content Writer",
      desc: "CodeSquad.AI (Remote) | Nov 2022 – Feb 2023 | Wrote and edited content for websites, blogs, and marketing campaigns. Utilized SEO tools and performed content proofreading to meet quality standards.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/usmana5809",
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/usmana-22f/",
    },
    {
      id: 3,
      img: "/wha.svg",
      link: "https://wa.me/923314311640",
    },
  ];

// Add skills
export const skills = [
  "Frontend: React.js, HTML, CSS, Bootstrap",
  "Backend: Django (Python), Node.js",
  "Mobile Development: Jetpack Compose, Kotlin, React Native, Java, Flutter",
  "Database: MongoDB, Oracle, Firebase, SQLite, MySQL, PostgreSQL",
  "Tools: Git, VS Code, Android Studio, Postman, Microsoft Office (Word, Excel, PowerPoint, Access)",
  "Design & Editing: Figma (UI/UX Design), Canva, CapCut, Photoshop",
  "Other: AI/ML, Project Management, Data Entry",
  "Languages: Urdu (C1), Punjabi (C3), English (A1)"
];

// Add education
export const education = [
  {
    degree: "BSc Information Engineering Technology",
    university: "Superior University, Lahore",
    cgpa: "3.45",
    years: "2021 – 2025"
  }
];

// Add certifications
export const certifications = [
  {
    name: "AI/ML – NAVTTC",
    date: "March 2022 – Sep 2022",
    link: "https://drive.google.com/file/d/1fsYMm9DaEdMzGl1S2vOX57JXJHqp52rC/view"
  },
  {
    name: "Freelancing – DigiSkills",
    date: "July 2023 – Oct 2023",
    link: "https://drive.google.com/file/d/1MfYEg6-cr-ayv6KRQXdHF3apeXuB-oyY/view"
  },
  {
    name: "Search Engine Optimization – DigiSkills",
    date: "July 2023 – Oct 2023",
    link: "https://drive.google.com/file/d/1MadaS0atqqaOGoQWagLJV91cgfxyS_7q/view"
  }
];

// Add volunteering
export const volunteering = [
  {
    role: "Social Media Head",
    organization: "IEEE Society, Superior University",
    period: "Dec 2021 – Sep 2022",
    description: "Led strategic social media initiatives to enhance visibility and engagement. Designed content, managed digital campaigns, and analyzed performance metrics to grow the society’s digital presence and member interaction."
  }
  ];