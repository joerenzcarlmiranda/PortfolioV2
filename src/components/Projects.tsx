import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  link?: string;
  linkText?: string;
  github?: string;
  gallery?: string[];
  longDescription?: string;
  technologies?: string[];
}

const projectsData: PortfolioItem[] = [
  {
    id: "p-ai-cust",
    image: "/AI-Powered Cusomer Satisfaction Measurement System 1.jpg",
    title: "AI Customer Satisfaction System",
    subtitle: "AI & Full Stack Web",
    description: "An advanced AI-powered system designed to measure and analyze customer satisfaction metrics in real-time.",
    gallery: [
      "/AI-Powered Cusomer Satisfaction Measurement System 1.jpg",
      "/AI-Powered Cusomer Satisfaction Measurement System 2.jpg",
      "/AI-Powered Cusomer Satisfaction Measurement System 3.jpg",
      "/AI-Powered Cusomer Satisfaction Measurement System 4.jpg",
      "/AI-Powered Cusomer Satisfaction Measurement System 5.jpg",
    ],
    longDescription: "This AI-powered customer satisfaction measurement system leverages modern machine learning alongside a robust web framework to capture, process, and visualize customer feedback. It provides actionable insights through a clean interface, helping businesses respond to user needs efficiently.",
    technologies: ["Laravel", "PHP", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    id: "p-madrid-barbershop",
    image: "/madrid2.png",
    title: "FadeLab Barbershop Suite",
    subtitle: "Business Management Platform",
    description: "A comprehensive management and scheduling solution crafted specifically for modern barbershops.",
    gallery: [
      "/madrid1.png",
      "/madrid2.png",
      "/madrid3.png",
      "/madrid4.png",
    ],
    longDescription: "Madrid Barbershop Suite is a full-featured business management platform that handles everything from appointment bookings and staff scheduling to inventory management and customer relationships. It streamlines day-to-day operations with an intuitive, clean interface.",
    technologies: ["Laravel", "PHP", "JavaScript","Livewire", "HTML", "CSS"],
  },
  {
    id: "p-clinic-system",
    image: "/CLINIC SYSTEM 1.png",
    title: "CareFlow Clinic Manager",
    subtitle: "Healthcare Platform",
    description: "An integrated clinic management and automated appointment scheduling system for healthcare providers.",
    gallery: [
      "/CLINIC SYSTEM 1.png",
      "/CLINIC SYSTEM 2.png",
      "/CLINIC SYSTEM 3.png",
      "/CLINIC SYSTEM 4.png",
    ],
    longDescription: "CareFlow is designed to modernize healthcare administration. It provides a seamless experience for patients booking appointments while offering clinic staff powerful tools for managing patient records, daily schedules, and overall clinic workflow efficiently.",
    technologies: ["Laravel", "PHP", "JavaScript", "Livewire", "HTML", "CSS"],
  },
  {
    id: "p-portfolio-generator",
    image: "/portfolio-generator 1.jfif",
    title: "ProFolio Builder",
    subtitle: "Resume & Portfolio Generator",
    description: "An intuitive system designed to generate professional, personalized portfolios and resumes effortlessly.",
    gallery: [
      "/portfolio-generator 1.jfif",
      "/portfolio-generator 2.jfif",
      "/portfolio-generator 3.jfif",
      "/portfolio-generator 4.jfif",
      "/portfolio-generator 5.jfif",
    ],
    longDescription: "ProFolio Builder empowers users to create stunning, responsive personal portfolios and professional resumes without needing to code. With dynamic templates and real-time previews, it helps professionals showcase their skills and experiences in the best light possible.",
    technologies: ["PHP", "Jquery", "Ajax", "JavaScript", "HTML", "CSS", "Bootsrap"],
  },
    {
    id: "p-alumni-system",
    image: "/alumni1.jfif",
    title: "Alumni Survey Management System",
    subtitle: "Web-based Alumni Tracking Information System",
    description: "A web-based platform designed to bridge the gap between an institution and its graduates.",
    gallery: [
      "/alumni1.jfif",
      "/alumni2.jfif",
      "/alumni3.jfif",
      "/alumni4.jfif",
      "/alumni5.jfif",
    ],
    longDescription: "A dynamic, web-based ecosystem engineered to bridge the gap between academic institutions and their graduates by cultivating a lifelong professional network. The platform empowers university communities to transform passive alumni lists into an active, engaged network by centralizing career opportunities, simplifying event coordination, and streamlining fundraising initiatives through a single, intuitive interface.",
    technologies: ["Laravel", "PHP", "JavaScript", "HTML", "CSS"],
  }
];

const experiencesData: PortfolioItem[] = [
  {
    id: "e-outsoar",
    image: "/outsoar 5.jpg",
    title: "Internship at OUTSOAR PH",
    subtitle: "Software Development Intern",
    description: "Internship at a flourishing full-service digital agency focusing on web, mobile, and AI solutions.",
    gallery: [
      "/outsoar 5.jpg",
      "/outsoar 6.jpg",
      "/outsoar 8.png",
      "/outsoar 9.jfif",
      "/outsoar 10.jfif",
      "/outsoar 7.jpg",
      "/outsoar 1.jpg",
      "/outsoar 2.jpg",
      "/outsoar 3.jfif",
      "/outsoar 4.jpg",
    ],
    longDescription: "Outsoar PH evolved from a small 2022 startup into a full-service digital agency focused on custom web/mobile development, WordPress, and AI integration with a 100% job success rate. The agency operates from San Carlos City, Philippines, under the mission 'Building Better, Faster, and Together'. You can learn more about Outsoar PH on their official website.",
},
  {
    id: "e-comelec",
    image: "/comelec4.jfif",
    title: "COMELEC DESO Technical Support",
    subtitle: "First Work Experience",
    description: "Provided technical support, maintenance, and troubleshooting for ACM machines during elections.",
    gallery:[
      "/comelec4.jfif",
      "/comelec2.jpeg",
      "/comelec3.jpg",
    ],
    longDescription: "Served as a DESO Technical Support representative for COMELEC. Responsible for the setup, maintenance, and troubleshooting of Automated Counting Machines (ACM) to ensure secure and uninterrupted voting processes.",
    technologies: ["Technical Support", "Hardware Troubleshooting", "System Maintenance"],
  },
  {
    id: "e-gdg",
    image: "/gdg 6.jfif",
    title: "Google Developer Group (GDG) Seminar",
    subtitle: "Baguio City",
    description: "Learned advanced development techniques using AI, Gemini, and Prompt Engineering.",
    gallery: [
      "/gdg 1.jfif",
      "/gdg 2.jfif",
      "/gdg 3.jfif",
      "/gdg 4.jfif",
      "/gdg 5.jfif",
      "/gdg 6.jfif",
      "/gdg 7.jfif",
      "/gdg 9.jfif",
      "/gdg 8.jfif",
      "/gdg10.jfif",
    ],
    longDescription: "Attended the GDG seminar in Baguio City focusing on Artificial Intelligence and Prompt Engineering. Gained practical experience in leveraging tools like Gemini and AI Studio to build smarter, AI-powered applications.",
    technologies: ["AI Studio", "Gemini", "Prompt Engineering"],
  }
];

const certificatesData: PortfolioItem[] = [
  {
    id: "c1",
    image: "/certificate 1.png",
    title: "Web Development Certification",
    subtitle: "Professional Certificate",
    description: "Completed comprehensive training in modern web development.",
    link: "/cert1.pdf",
    linkText: "View Certificate",
    gallery: ["/certificate 1.png"],
  },
  {
    id: "c2",
    image: "/cert2.jpg",
    title: "AI Webinar Certification at DMMMSU-SLU",
    subtitle: "Webinar Certificate",
    description: "A certificate I earned for attending a student-focused webinar on AI. It covered everything from basic AI concepts to real-world uses.",
    gallery: ["/cert2.jpg","/cert3.jpg"],

  },
  {
    id: "c3",
    image: "/acad5.jfif",
    title: "Academic and Competition Awards Certification",
    subtitle: "Academic Certificate",
    description: "A certificate celebrating my participation in an IT and academic competition. It was a great experience that let me push my coding and problem-solving skills.",
    gallery: ["/academic1.jpg","/academic2.jpg","/acad3.jfif","/acad6.jfif","/acad5.jfif"],
  },
];

const PortfolioCard = ({ item, onClick }: { item: PortfolioItem, onClick?: () => void }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-900/50">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm font-semibold text-orange-500 mb-1">{item.subtitle}</p>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
          {item.title}
        </h3>
        {item.description && (
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-1">
            {item.description}
          </p>
        )}
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50" onClick={(e) => e.stopPropagation()}>
          {item.github && (
            <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({ item, onClose }: { item: PortfolioItem, onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = item.gallery && item.gallery.length > 0 ? item.gallery : [item.image];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Auto-advance every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-slate-900/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white dark:bg-slate-900 w-full max-w-6xl max-h-full overflow-y-auto rounded-3xl shadow-2xl flex flex-col md:flex-row relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={20} />
          </button>

          {/* Left Column - Gallery Carousel (Bento-style large hero) */}
          <div className="w-full md:w-3/5 bg-slate-100 dark:bg-slate-900/50 relative group flex-shrink-0 min-h-[300px] md:min-h-[500px]">
            <img
              src={images[currentImageIndex]}
              alt={`${item.title} gallery ${currentImageIndex + 1}`}
              className="w-full h-full object-contain absolute inset-0 transition-opacity duration-500"
            />
            
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Column - Info */}
          <div className="w-full md:w-2/5 p-8 md:p-10 flex flex-col overflow-y-auto">
            <p className="text-orange-500 font-bold tracking-wide text-sm mb-2 uppercase">
              {item.subtitle}
            </p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              {item.title}
            </h2>
            
            <div className="prose dark:prose-invert prose-slate mb-8 flex-1">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                {item.longDescription || item.description}
              </p>
            </div>

            {item.technologies && item.technologies.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 uppercase tracking-wider">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-medium transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>{item.linkText || "Live Project"}</span>
                </a>
              )}
              {item.github && (
                <a
                  href={item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white rounded-xl font-medium transition-colors"
                >
                  <Github size={18} />
                  <span>Source Code</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"projects" | "experiences" | "certificates">("projects");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const getItems = () => {
    switch (activeTab) {
      case "projects": return projectsData;
      case "experiences": return experiencesData;
      case "certificates": return certificatesData;
      default: return projectsData;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Portfolio Showcase
          </h2>
          
          {/* Tabs */}
          <div className="inline-flex bg-slate-200 dark:bg-slate-800 rounded-full p-1 shadow-inner overflow-x-auto max-w-full">
            {["projects", "experiences", "certificates"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap ${
                  activeTab === tab
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-full shadow"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">{tab}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
             {getItems().map((item) => (
               <PortfolioCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
             ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {selectedItem && (
        <ProjectModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
