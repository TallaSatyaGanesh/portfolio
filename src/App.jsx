import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowDown,
  Award,
  Briefcase,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Cpu,
  GraduationCap,
  Layers,
  Mail,
  Menu,
  Send,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

import profileImage from "./assets/passport_image.jpeg";
import project01Image from "./assets/project01_assistive.png";
import project02Image from "./assets/project02_genes.png";
import project03Image from "./assets/project03_grocery.png";
import project04Image from "./assets/project04_ecommerce.png";
import project05Image from "./assets/project05_whiteboard.png";
import project06Image from "./assets/project06_rfp.png";

// ==========================================
// PORTFOLIO DATA (Strictly preserved data)
// ==========================================

const personalData = {
  name: "Satya Ganesh Talla",
  shortName: "Satya Ganesh",
  heroName: "SATYA GANESH",
  role: "Software Developer & AI/ML Engineer",
  location: "Andhra Pradesh, India",
  email: "tallaganesh17@gmail.com",
  github: "https://github.com/TallaSatyaGanesh",
  linkedin: "https://linkedin.com/in/talla-satya-ganesh-0a26842ba",
  hackerrank: "https://www.hackerrank.com/profile/tallaganesh17",
  bio: "A passionate Computer Science undergraduate dedicated to crafting clean, scalable software, machine learning architectures, and research solutions. Specializing in high-performance full-stack development, AI/ML pipelines, and bioinformatics data discovery.",
};

// Hero scrub timeline states inspired by reference video (00:00 - 00:07) with Midnight Aurora gradient accents
const heroTimelineStates = [
  {
    id: 0,
    tabLabel: "CREATIVE DEVELOPER",
    headingPre: "HI, I'M SATYA GANESH",
    headingMain: "CREATIVE",
    headingSub: "DEVELOPER",
    gradientClass: "text-gradient-cyan",
    accentColor: "#22D3EE",
    specTag: "[ EXPERTISE: FULL STACK / DATA / CLOUD ]",
    specDescription:
      "Available for: Building responsive, scalable applications and intelligent systems using modern technologies.",
    focusAreas: ["Modern Web Apps", "Component Architecture", "Interactive UX"],
  },
  {
    id: 1,
    tabLabel: "AI & MACHINE LEARNING",
    headingPre: "HI, I'M SATYA GANESH",
    headingMain: "AI & MACHINE",
    headingSub: "LEARNING",
    gradientClass: "text-gradient-violet",
    accentColor: "#A78BFA",
    specTag: "[ SPECIALTY: INTELLIGENT SYSTEMS ]",
    specDescription:
      "Specialized in machine learning pipelines, computer vision models, and cancer hub gene research.",
    focusAreas: ["Computer Vision", "Bioinformatics", "Predictive ML"],
  },
  {
    id: 2,
    tabLabel: "SCALABLE SYSTEMS",
    headingPre: "HI, I'M SATYA GANESH",
    headingMain: "SCALABLE",
    headingSub: "SYSTEMS",
    gradientClass: "text-gradient-magenta",
    accentColor: "#E879F9",
    specTag: "[ FOCUS: ARCHITECTURE & BACKEND ]",
    specDescription:
      "Architecting enterprise Java backends, relational database systems, and agentic AI workflows.",
    focusAreas: ["Relational Databases", "Enterprise Java", "Agentic Workflows"],
  },
];

const navigationLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Expertise" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

// Marquee skills list for the continuous dual-ticker (reference video 00:10)
const marqueeRow1 = [
  "Python",
  "Java",
  "C Programming",
  "SQL",
  "MySQL",
  "HTML5",
  "CSS3",
  "JavaScript",
  "JSP",
  "Servlets",
  "JDBC",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "REST APIs",
];

const marqueeRow2 = [
  "Data Preprocessing",
  "Feature Selection",
  "Computer Vision",
  "YOLOv8",
  "OpenCV",
  "Tesseract OCR",
  "Git & GitHub",
  "VS Code",
  "Jupyter Notebook",
  "Google Colab",
  "Kaggle",
  "Salesforce Apex",
  "LWC",
  "Bioinformatics",
  "Agentic AI",
];

const skillsCategories = [
  {
    category: "Programming",
    icon: Code2,
    badge: "CORE LANGUAGES",
    items: ["Python", "Java", "C", "SQL"],
    accentHex: "#A855F7",
    glowClass: "glow-purple-top",
    borderClass: "border-[#A855F7]/65 hover:border-[#A855F7] shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    badgeBg: "border-[#A855F7]/60 bg-[#A855F7]/25 text-[#D8B4FE]",
  },
  {
    category: "Web Technologies",
    icon: Layers,
    badge: "FULL STACK",
    items: ["HTML", "CSS", "JavaScript", "JSP", "Servlets", "JDBC"],
    accentHex: "#6366F1",
    glowClass: "glow-blue-top",
    borderClass: "border-[#536DFE]/65 hover:border-[#536DFE] shadow-[0_0_20px_rgba(83,109,254,0.3)]",
    badgeBg: "border-[#536DFE]/60 bg-[#536DFE]/25 text-[#C7D2FE]",
  },
  {
    category: "Machine Learning",
    icon: Cpu,
    badge: "AI & DATA",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Feature Selection",
    ],
    accentHex: "#EC4899",
    glowClass: "glow-pink-top",
    borderClass: "border-[#FF3DCE]/65 hover:border-[#FF3DCE] shadow-[0_0_20px_rgba(255,61,206,0.3)]",
    badgeBg: "border-[#FF3DCE]/60 bg-[#FF3DCE]/20 text-[#FBCFE8]",
  },
  {
    category: "Developer Tools",
    icon: Terminal,
    badge: "TOOLING",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Kaggle",
    ],
    accentHex: "#A855F7",
    glowClass: "glow-purple-top",
    borderClass: "border-[#E040FB]/65 hover:border-[#E040FB] shadow-[0_0_20px_rgba(224,64,251,0.3)]",
    badgeBg: "border-[#E040FB]/60 bg-[#E040FB]/20 text-[#F5D0FE]",
  },
  {
    category: "Database",
    icon: Sparkles,
    badge: "STORAGE",
    items: ["MySQL"],
    accentHex: "#6366F1",
    glowClass: "glow-blue-top",
    borderClass: "border-[#00E5FF]/65 hover:border-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.3)]",
    badgeBg: "border-[#00E5FF]/60 bg-[#00E5FF]/20 text-[#A5F3FC]",
  },
];

const internships = [
  {
    roleNumber: "01",
    role: "Research Intern - Bioinformatics",
    company: "National Institute of Technology (NIT) Warangal",
    duration: "May 2026 - Jul 2026",
    focus: "Cancer Research & Genomic Machine Learning",
    accentHex: "#14B8A6",
    glowClass: "glow-teal-top",
    cardBorder: "border-[#14B8A6]/45 hover:border-[#14B8A6]/80",
    tagColor: "text-[#14B8A6]",
    durationBadge: "border-[#14B8A6]/50 bg-[#14B8A6]/20 text-[#14B8A6]",
    description:
      "Conducted genomic data preprocessing and gene expression analysis for cancer research. Developed machine learning pipelines for biomarker identification and disease prediction.",
    points: [
      "Applied feature selection techniques and protein-protein interaction (PPI) network analysis.",
      "Performed literature review, computational validation, and documented research findings.",
    ],
    tech: ["Bioinformatics", "Machine Learning", "Python", "PPI Networks", "Feature Selection"],
  },
  {
    roleNumber: "02",
    role: "Java Full Stack Developer Virtual Intern",
    company: "EduSkills - AICTE Virtual Internship",
    duration: "Jan 2026 - Mar 2026",
    focus: "Enterprise Web Applications & Databases",
    accentHex: "#10B981",
    glowClass: "glow-emerald-top",
    cardBorder: "border-[#10B981]/45 hover:border-[#10B981]/80",
    tagColor: "text-[#10B981]",
    durationBadge: "border-[#10B981]/50 bg-[#10B981]/20 text-[#10B981]",
    description:
      "Developed full-stack web applications using Java, JSP, Servlets, JDBC, MySQL, HTML, CSS, and JavaScript.",
    points: [
      "Implemented CRUD operations and integrated databases for dynamic web applications.",
      "Strengthened object-oriented programming, backend development, and database management skills.",
    ],
    tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "HTML / CSS", "JavaScript"],
  },
  {
    roleNumber: "03",
    role: "Salesforce Developer Virtual Intern",
    company: "SmartBridge & Salesforce - AICTE Virtual Internship",
    duration: "May 2025 - Jul 2025",
    focus: "Cloud Architecture & Custom Apex Development",
    accentHex: "#22D3EE",
    glowClass: "glow-cyan-top",
    cardBorder: "border-[#22D3EE]/45 hover:border-[#22D3EE]/80",
    tagColor: "text-[#22D3EE]",
    durationBadge: "border-[#22D3EE]/50 bg-[#22D3EE]/20 text-[#22D3EE]",
    description:
      "Completed hands-on training in Salesforce Administration and Apex development.",
    points: [
      "Created data models, custom objects, relationships, and configured security profiles.",
      "Developed custom Apex triggers, asynchronous jobs, and test classes to automate business logic.",
    ],
    tech: ["Salesforce", "Apex", "LWC", "Object Relationships", "Security Management"],
  },
];

const projects = [
  {
    number: "01",
    image: project01Image,
    title: "Vision-Based Assistive Perception System with Voice Assistance",
    subTitle: "Assistive Computer Vision & Speech Platform",
    status: "Ongoing",
    category: "AI & Computer Vision",
    accentHex: "#3B82F6",
    glowClass: "glow-blue-top",
    borderClass: "border-[#3B82F6]/45 hover:border-[#3B82F6]/85",
    badgeClass: "border-[#3B82F6]/50 bg-[#3B82F6]/20 text-[#60A5FA]",
    description:
      "An AI-powered assistive perception system designed to support visually impaired users through real-time object detection, obstacle detection, scene understanding, and text recognition.",
    tech: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "Tesseract OCR",
      "gTTS / pyttsx3",
      "Computer Vision",
    ],
    details: [
      "Implemented a multi-stage computer vision pipeline for image preprocessing and object detection.",
      "Integrated OCR-based text extraction and context-aware information fusion.",
      "Designed voice assistance to convert detected objects, obstacles, and text into real-time speech feedback.",
    ],
    github:
      "https://github.com/TallaSatyaGanesh/vision-based-assistive-perception-system",
  },
  {
    number: "02",
    image: project02Image,
    title: "Hub Gene Identification in Cervical Cancer",
    subTitle: "Genomic Machine Learning & PPI Network Analysis",
    status: "Completed",
    category: "Bioinformatics & ML",
    accentHex: "#A855F7",
    glowClass: "glow-purple-top",
    borderClass: "border-[#A855F7]/45 hover:border-[#A855F7]/85",
    badgeClass: "border-[#A855F7]/50 bg-[#A855F7]/20 text-[#C084FC]",
    description:
      "An end-to-end machine learning project for identifying hub genes associated with cervical cancer using gene expression data and protein-protein interaction networks.",
    tech: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "STRING Database",
    ],
    details: [
      "Performed data preprocessing and feature selection to identify relevant gene expression features.",
      "Applied protein-protein interaction (PPI) network analysis.",
      "Evaluated machine learning models using multiple performance metrics.",
    ],
    github:
      "https://github.com/TallaSatyaGanesh/Cervical-Cancer-Hub-Gene-Identification",
  },
  {
    number: "03",
    image: project03Image,
    title: "Online Grocery Management System",
    subTitle: "Full-Stack Inventory & Order Processing",
    status: "Completed",
    category: "Enterprise Java",
    accentHex: "#EC4899",
    glowClass: "glow-pink-top",
    borderClass: "border-[#EC4899]/45 hover:border-[#EC4899]/85",
    badgeClass: "border-[#EC4899]/50 bg-[#EC4899]/20 text-[#F472B6]",
    description:
      "A full-stack web application for online grocery shopping and inventory management with role-based transactional workflows.",
    tech: [
      "Java",
      "JSP",
      "Servlets",
      "JDBC",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    details: [
      "Implemented CRUD operations for products, customers, and orders.",
      "Integrated secure database functionality using JDBC and MySQL.",
      "Designed responsive interfaces and backend functionality for order processing.",
    ],
  },
  {
    number: "04",
    image: project04Image,
    title: "E-Commerce Website",
    subTitle: "Modern Responsive Shopping Experience",
    status: "Completed",
    category: "Web Engineering",
    accentHex: "#6366F1",
    glowClass: "glow-blue-top",
    borderClass: "border-[#6366F1]/45 hover:border-[#6366F1]/85",
    badgeClass: "border-[#6366F1]/50 bg-[#6366F1]/20 text-[#818CF8]",
    description:
      "A responsive e-commerce website with a modern interface, real-time cart manipulation, and interactive shopping experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    details: [
      "Implemented product listing and category filtering.",
      "Developed shopping cart functionality and interactive UI components.",
      "Optimized the website for desktop and mobile responsiveness.",
    ],
  },
  {
    number: "05",
    image: project05Image,
    title: "AI Voice Controlled Smart Whiteboard",
    subTitle: "Voice-Driven GUI & Interactive Canvas",
    status: "Completed",
    category: "AI & Desktop App",
    accentHex: "#22D3EE",
    glowClass: "glow-cyan-top",
    borderClass: "border-[#22D3EE]/45 hover:border-[#22D3EE]/85",
    badgeClass: "border-[#22D3EE]/50 bg-[#22D3EE]/20 text-[#22D3EE]",
    description:
      "An AI-powered digital whiteboard that enables hands-free creation of diagrams, shapes, objects, and educational notes through voice commands.",
    tech: [
      "Python",
      "PyQt6",
      "OpenAI Whisper",
      "SoundDevice",
      "FFmpeg",
      "NLP",
    ],
    details: [
      "Built a speech-processing pipeline using OpenAI Whisper and audio preprocessing.",
      "Implemented intent classification for real-time voice command recognition.",
      "Developed a PyQt6 GUI with voice-driven drawing, text generation, object rendering, undo/redo, and multi-page workspace support.",
    ],
    github:
      "https://github.com/TallaSatyaGanesh/AI-Voice-Controlled-Smart-Whiteboard",
  },
  {
    number: "06",
    image: project06Image,
    title: "Agentic AI RFP Analysis & Proposal Response System",
    subTitle: "Autonomous RFP Parsing & Synthesis",
    status: "Completed",
    category: "Agentic AI",
    accentHex: "#A855F7",
    glowClass: "glow-purple-top",
    borderClass: "border-[#A855F7]/45 hover:border-[#EC4899]/85",
    badgeClass: "border-[#EC4899]/50 bg-[#EC4899]/20 text-[#F472B6]",
    description:
      "An Agentic AI project focused on analyzing Requests for Proposals (RFPs) and supporting proposal response preparation through automated workflows.",
    tech: [
      "Python",
      "Agentic AI",
      "RFP Analysis",
      "Proposal Responses",
    ],
    details: [
      "Organizes RFP analysis into a workflow for understanding proposal requirements.",
      "Supports the preparation of proposal responses based on the RFP content.",
      "Designed as an AI-assisted tool for the proposal response process.",
    ],
    github:
      "https://github.com/TallaSatyaGanesh/agentic-rfp-system",
  },
];

const educationData = [
  {
    roleNumber: "01",
    level: "Bachelor of Technology",
    degree: "Computer Science and Engineering",
    institution: "Lakireddy Bali Reddy College of Engineering",
    location: "Andhra Pradesh, India",
    period: "2023 - 2027",
    grade: "CGPA: 7.96 / 10",
    isCurrent: true,
    accentHex: "#F59E0B",
    glowClass: "glow-orange-top",
    borderClass: "border-[#F59E0B]/50 bg-gradient-to-b from-[#261508]/90 to-[#180D04]/90",
    gradeColor: "text-[#F59E0B]",
    highlights:
      "Focusing on foundational software systems, machine learning architectures, and research methodologies.",
  },
  {
    roleNumber: "02",
    level: "Intermediate",
    degree: "Class XII (MPC)",
    institution: "SriChaitanya Junior College",
    location: "Amalapuram, Andhra Pradesh",
    period: "2020 - 2022",
    grade: "Percentage: 80.2%",
    isCurrent: false,
    accentHex: "#F97316",
    glowClass: "glow-orange-top",
    borderClass: "border-[#F97316]/45 bg-gradient-to-b from-[#241206]/90 to-[#160A03]/90",
    gradeColor: "text-[#F97316]",
    highlights: "Mathematics, Physics, and Chemistry core analytical foundation.",
  },
  {
    roleNumber: "03",
    level: "Secondary School Education",
    degree: "Class X",
    institution: "ZPP High School",
    location: "Cheyyeru, Andhra Pradesh",
    period: "2019 - 2020",
    grade: "Percentage: 86.0%",
    isCurrent: false,
    accentHex: "#EAB308",
    glowClass: "glow-orange-top",
    borderClass: "border-[#EAB308]/45 bg-gradient-to-b from-[#261808]/90 to-[#180E04]/90",
    gradeColor: "text-[#EAB308]",
    highlights: "Foundational education with academic excellence in science and mathematics.",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "AWS-CCP",
    accentHex: "#22D3EE",
  },
  {
    title: "Generative AI Essentials",
    issuer: "TCS iON Career Edge",
    code: "GEN-AI",
    accentHex: "#14B8A6",
  },
  {
    title: "Programming Essentials in C",
    issuer: "Cisco Networking Academy",
    code: "CISCO-C",
    accentHex: "#06B6D4",
  },
  {
    title: "Python Foundation Certification",
    issuer: "Infosys Springboard",
    code: "INFY-PY",
    accentHex: "#10B981",
  },
  {
    title: "Advanced Certificate in LSRW Skills",
    issuer: "Language & Communication Skills",
    code: "LSRW-ADV",
    accentHex: "#22D3EE",
  },
  {
    title: "Employability Skills Certification",
    issuer: "Wadhwani Skilling",
    code: "WADH-SKILL",
    accentHex: "#14B8A6",
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function App() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Live Transmission Form State (Reference Video 00:14)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const currentState = heroTimelineStates[activeTimelineIdx];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationLinks
        .map((link) => document.getElementById(link.id))
        .filter(Boolean);

      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const nextTimelineState = () => {
    setActiveTimelineIdx((prev) => (prev + 1) % heroTimelineStates.length);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const sender = `${formData.firstName} ${formData.lastName}`.trim() || "Inquirer";
    const subject = encodeURIComponent(`Portfolio Inquiry from ${sender}`);
    const body = encodeURIComponent(
      `From: ${sender} (${formData.email || "Not specified"})\n\nMessage:\n${formData.message || "Hi Satya, I would like to connect."}`
    );
    window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-[#04060F] text-[#F8FAFC] selection:bg-[#00E5FF] selection:text-[#04060F] antialiased relative">
      {/* NEON AMBIENT ORBS */}
      <div className="fixed inset-0 pointer-events-none z-0 cinema-grid opacity-50" />
      <div className="fixed -top-32 -left-24 w-[800px] h-[800px] pointer-events-none z-0 rounded-full bg-[#00E5FF]/[0.28] blur-[120px]" />
      <div className="fixed -top-10 -right-24 w-[850px] h-[850px] pointer-events-none z-0 rounded-full bg-[#A855F7]/[0.28] blur-[130px]" />
      <div className="fixed top-[42%] -left-12 w-[700px] h-[700px] pointer-events-none z-0 rounded-full bg-[#2979FF]/[0.24] blur-[120px]" />
      <div className="fixed top-[58%] -right-12 w-[750px] h-[750px] pointer-events-none z-0 rounded-full bg-[#FF3DCE]/[0.24] blur-[130px]" />
      <div className="fixed bottom-0 left-[18%] w-[700px] h-[700px] pointer-events-none z-0 rounded-full bg-[#00E676]/[0.18] blur-[130px]" />
      <div className="fixed bottom-0 right-[12%] w-[600px] h-[600px] pointer-events-none z-0 rounded-full bg-[#FF9100]/[0.16] blur-[120px]" />

      {/* ==========================================
          HEADER & FLOATING PILL NAVBAR (Midnight Aurora Edition)
         ========================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-5">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          {/* Brand Logo with Electric Cyan Dot */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-1.5 focus:outline-none group"
          >
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F8FAFC] group-hover:text-white transition-colors">
              Satya Ganesh
            </span>
            <span className="text-[#00E5FF] text-xl font-bold leading-none drop-shadow-[0_0_12px_rgba(0,229,255,0.9)]">
              .
            </span>
          </button>

          {/* Center Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#536DFE]/40 bg-[#070A1A]/90 px-6 py-2.5 backdrop-blur-xl shadow-[0_10px_40px_rgba(4,6,15,0.9),0_0_30px_rgba(0,229,255,0.15),inset_0_1px_0_rgba(255,255,255,0.08)]">
            {navigationLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-3 py-1 text-xs transition-all rounded-full ${
                    isActive
                      ? "text-[#00E5FF] bg-gradient-to-r from-[#00E5FF]/20 via-[#536DFE]/20 to-[#A855F7]/20 border border-[#00E5FF]/50 font-semibold shadow-[0_0_18px_rgba(0,229,255,0.5)]"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#536DFE]/10 font-medium transition-all"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Button: Pill */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("contact")}
              className="rounded-full border border-[#00E5FF]/60 bg-gradient-to-r from-[#00E5FF]/20 via-[#2979FF]/20 to-[#A855F7]/20 px-5 py-2 text-xs font-semibold text-[#00E5FF] transition hover:border-[#00E5FF] hover:bg-gradient-to-r hover:from-[#00E5FF]/30 hover:via-[#2979FF]/30 hover:to-[#A855F7]/30 hover:shadow-[0_0_25px_rgba(0,229,255,0.5)] hover:text-white"
            >
              Resume
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#94A3B8] hover:text-[#00E5FF] lg:hidden rounded-lg border border-[#536DFE]/40 bg-[#070A1A] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-3 mx-auto max-w-lg rounded-2xl border border-[#536DFE]/40 bg-[#070A1A]/95 p-5 backdrop-blur-2xl shadow-[0_25px_60px_rgba(4,6,15,0.95),0_0_40px_rgba(83,109,254,0.2)] lg:hidden"
            >
              <div className="grid grid-cols-2 gap-2">
                {navigationLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`rounded-lg px-4 py-2.5 text-left text-xs font-medium transition ${
                      activeSection === link.id
                        ? "bg-gradient-to-r from-[#00E5FF]/25 to-[#A855F7]/25 text-[#00E5FF] font-semibold border border-[#00E5FF]/50 shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                        : "text-[#A1A1AA] hover:bg-white/5 hover:text-[#F8FAFC]"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ==========================================
          HERO SECTION (Midnight Aurora Scrub Layout)
         ========================================== */}
      <section
        id="hero" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 lg:px-16 bg-gradient-to-br from-[#06091A] via-[#0A0D28] via-[#0C1230] to-[#070914]"
      >
        {/* Top Segmented Scrub Timeline (Reference Video 00:00) */}
        <div className="mx-auto max-w-2xl w-full pt-4">
          <div className="flex items-center justify-center gap-3">
            {heroTimelineStates.map((state, idx) => (
              <button
                key={state.id}
                onClick={() => setActiveTimelineIdx(idx)}
                className="group flex-1 flex flex-col items-center gap-1.5 focus:outline-none"
              >
                <div
                  className={`h-[2px] w-full rounded-full transition-all duration-300 ${
                    activeTimelineIdx === idx ? "bg-gradient-to-r from-[#00E5FF] via-[#536DFE] via-[#A855F7] to-[#FF3DCE] shadow-[0_0_20px_rgba(0,229,255,1),0_0_35px_rgba(255,61,206,0.8)]"
                      : "bg-white/15 group-hover:bg-white/30"
                  }`}
                />
                <span
                  className={`text-[9px] sm:text-[10px] font-mono tracking-widest uppercase transition-colors ${
                    activeTimelineIdx === idx
                      ? "text-[#00E5FF] font-semibold drop-shadow-[0_0_10px_rgba(0,229,255,0.9)]"
                      : "text-[#A1A1AA]/60 group-hover:text-[#A1A1AA]"
                  }`}
                >
                  {state.tabLabel}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Hero Spread: Heading & Role (Left) | Micro-Specs & Actions (Right) */}
        <div className="mx-auto max-w-7xl w-full my-auto py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Heading & Role (Cols 1-7) */}
          <div className="lg:col-span-7 min-w-0 text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                <p className="font-mono text-xs sm:text-sm uppercase tracking-widest font-semibold mb-3 bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(83,109,254,0.5)]">
                  {currentState.headingPre}
                </p>

                <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-[3.3rem] xl:text-[4.1rem] 2xl:text-[4.6rem] font-bold uppercase tracking-tight leading-[1.05] break-words">
                  <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2979FF] via-[#536DFE] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(0,229,255,0.6)]">
                    {currentState.headingMain}
                  </span>
                  <span className="block font-semibold bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#FF9100] bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(255,61,206,0.6)]">
                    {currentState.headingSub}
                  </span>
                </h1>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Micro-Specs & Actions (Cols 8-12) */}
          <div className="lg:col-span-5 min-w-0 w-full max-w-xl mx-auto lg:max-w-none text-center lg:text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentState.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-5 rounded-2xl border border-[#536DFE]/60 bg-gradient-to-br from-[#0D1240]/95 via-[#13154A]/95 to-[#1A0F4A]/95 p-6 sm:p-7 xl:p-8 backdrop-blur-md glow-indigo-top shadow-[0_15px_60px_rgba(4,6,15,0.9),0_0_50px_rgba(83,109,254,0.35),inset_0_1px_0_rgba(83,109,254,0.2)]"
              >
                <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-[#00E5FF] drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">
                  {currentState.specTag}
                </div>

                <p className="text-xs sm:text-sm leading-relaxed text-[#A1A1AA]">
                  {currentState.specDescription}
                </p>

                {/* Focus Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 pt-1">
                  {currentState.focusAreas.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[#536DFE]/50 bg-[#536DFE]/15 px-2.5 py-1 text-[11px] font-mono text-[#C7D2FE] hover:border-[#00E5FF]/70 hover:bg-[#00E5FF]/15 hover:text-[#00E5FF] transition shadow-[0_0_10px_rgba(83,109,254,0.2)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex items-center justify-center lg:justify-start gap-3 pt-3">
                  <button
                    onClick={() => scrollTo("projects")}
                    className="rounded-full bg-gradient-to-r from-[#00E5FF] via-[#2979FF] to-[#536DFE] px-5 sm:px-6 py-2.5 text-xs font-bold text-[#04060F] transition hover:shadow-[0_0_35px_rgba(0,229,255,0.9),0_0_60px_rgba(41,121,255,0.5)] hover:brightness-115 shadow-[0_0_20px_rgba(0,229,255,0.5)]"
                  >
                    See My Work
                  </button>
                  <button
                    onClick={() => scrollTo("contact")}
                    className="rounded-full border border-[#FF3DCE]/70 bg-gradient-to-r from-[#E040FB]/25 via-[#FF3DCE]/25 to-[#A855F7]/20 px-5 sm:px-6 py-2.5 text-xs font-semibold text-[#F8FAFC] transition hover:border-[#FF3DCE] hover:bg-gradient-to-r hover:from-[#E040FB]/40 hover:via-[#FF3DCE]/40 hover:to-[#A855F7]/35 hover:shadow-[0_0_30px_rgba(255,61,206,0.6)]"
                  >
                    Contact Me
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Hero Bottom Bar: Scroll to Scrub Indicator (Reference video 00:00 bottom left) */}
        <div className="mx-auto max-w-7xl w-full flex items-center justify-between border-t border-[#536DFE]/30 pt-5">
          <button
            onClick={nextTimelineState}
            className="group flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#94A3B8] hover:text-[#00E5FF] transition-colors"
          >
            <ArrowDown
              size={13}
              className="text-[#00E5FF] transition-transform group-hover:translate-y-0.5 animate-bounce drop-shadow-[0_0_6px_rgba(0,229,255,0.9)]"
            />
            <span>↓ SCROLL TO SCRUB TIMELINE</span>
          </button>

          <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-[#A1A1AA]/70">
            <span>ANDHRA PRADESH, INDIA</span>
            <span>•</span>
            <span className="bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent font-semibold">B.TECH CSE 2023-2027</span>
          </div>
        </div>
      </section>

      {/* ==========================================
          ABOUT SECTION ("1.0 // THE ORIGIN" from Reference Video 00:08)
         ========================================== */}
      <section id="about" className="relative border-t border-[#00E5FF]/40 bg-gradient-to-br from-[#06111E] via-[#071A2E] via-[#07213A] to-[#061730] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">
              1.0 // THE ORIGIN
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              About & Architectural Vision
            </h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-center">
            {/* Left Card: Portrait Card with Open to Opportunities Pill (00:08) */}
            <div className="relative rounded-3xl border border-[#00E5FF]/60 bg-gradient-to-b from-[#0A1E42]/95 to-[#061428]/95 p-6 sm:p-7 glow-cyan-top shadow-[0_20px_60px_rgba(4,6,15,0.9),0_0_50px_rgba(0,229,255,0.35),inset_0_1px_0_rgba(0,229,255,0.15)]">
              <div className="aspect-[4/4.8] w-full rounded-2xl overflow-hidden bg-neutral-900 border-2 border-[#00E5FF]/70 shadow-[0_0_40px_rgba(0,229,255,0.5),0_0_80px_rgba(0,229,255,0.2)] mb-5 relative">
                <img
                  src={profileImage}
                  alt="Satya Ganesh Talla"
                  className="h-full w-full object-cover grayscale-[15%] contrast-[1.05] transition duration-500 hover:grayscale-0"
                />
              </div>

              {/* Status Pill Badge (Reference video 00:08) */}
              <div className="flex items-center justify-between rounded-xl border border-emerald-400/30 bg-emerald-950/40 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300 font-semibold">
                    OPEN TO OPPORTUNITIES
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#22D3EE]">2026</span>
              </div>
            </div>

            {/* Right Column: "Hello, I'm Satya Ganesh Talla" + Bio + 3 Metadata Cards (00:08) */}
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-2 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">
                Hello, I'm
              </p>
              <h3 className="font-display text-3xl sm:text-5xl font-bold text-[#F8FAFC] tracking-tight">
                Satya Ganesh Talla
              </h3>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-[#A1A1AA]">
                {personalData.bio}
              </p>

              {/* 3 Stat Cards in a Row (Reference Video 00:08) */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-[#00E5FF]/60 bg-gradient-to-b from-[#0B2240]/95 to-[#071A32]/95 p-4 transition hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] glow-cyan-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]">
                  <p className="font-display text-base font-bold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">Full-Stack</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] mt-1 font-semibold">
                    ARCHITECTURE
                  </p>
                </div>

                <div className="rounded-xl border border-[#536DFE]/60 bg-gradient-to-b from-[#0D164A]/95 to-[#08113A]/95 p-4 transition hover:border-[#536DFE] hover:shadow-[0_0_30px_rgba(83,109,254,0.5)] glow-blue-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]">
                  <p className="font-display text-base font-bold bg-gradient-to-r from-[#536DFE] to-[#A855F7] bg-clip-text text-transparent">AI / ML</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] mt-1 font-semibold">
                    BIOINFORMATICS
                  </p>
                </div>

                <div className="rounded-xl border border-[#00E676]/50 bg-gradient-to-b from-[#062918]/95 to-[#041E12]/95 p-4 transition hover:border-[#00E676] hover:shadow-[0_0_30px_rgba(0,230,118,0.4)] glow-green-top shadow-[0_10px_30px_rgba(4,6,15,0.7)]">
                  <p className="font-display text-base font-bold bg-gradient-to-r from-[#00E676] to-[#14B8A6] bg-clip-text text-transparent">Available</p>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-[#CBD5E1] mt-1 font-semibold">
                    FOR HIRE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SKILLS / TECHNOLOGIES SECTION (Marquee Ticker from Reference Video 00:10)
         ========================================== */}
      <section id="skills" className="relative border-t border-[#A855F7]/50 bg-gradient-to-br from-[#0D0920] via-[#130A32] via-[#190C3E] to-[#0F0828] py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mb-14 text-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#A855F7] to-[#FF3DCE] bg-clip-text text-transparent">
            II. TECHNICAL STACK
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-lg mx-auto">
            Full-stack expertise across modern web development, artificial intelligence, and cloud infrastructure.
          </p>
        </div>

        {/* Dual Infinite Horizontal Marquee Rows (Reference video 00:10) */}
        <div className="space-y-4 py-2">
          {/* Row 1: Leftward Marquee */}
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee gap-3">
              {[...marqueeRow1, ...marqueeRow1].map((tech, idx) => (
                <div
                  key={`row1-${idx}`}
                  className="rounded-full border border-[#A855F7]/60 bg-gradient-to-r from-[#1A0D44]/90 to-[#200F4A]/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#D8B4FE] hover:border-[#A855F7] hover:bg-[#A855F7]/30 hover:text-white hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] transition whitespace-nowrap cursor-default shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward Marquee */}
          <div className="relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee-reverse gap-3">
              {[...marqueeRow2, ...marqueeRow2].map((tech, idx) => (
                <div
                  key={`row2-${idx}`}
                  className="rounded-full border border-[#536DFE]/60 bg-gradient-to-r from-[#120E42]/90 to-[#191448]/90 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#C7D2FE] hover:border-[#536DFE] hover:bg-[#536DFE]/30 hover:text-white hover:shadow-[0_0_25px_rgba(83,109,254,0.6)] transition whitespace-nowrap cursor-default shadow-[0_0_20px_rgba(83,109,254,0.3)]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structured Capabilities Cards Below Marquee */}
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillsCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.category}
                className={`rounded-2xl border ${cat.borderClass} bg-gradient-to-br from-[#120A30]/90 to-[#0D0825]/90 p-6 ${cat.glowClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg border bg-gradient-to-br from-white/10 to-white/5"
                    style={{ color: cat.accentHex }}
                  >
                    <Icon size={16} />
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#A1A1AA]">
                    0{i + 1} // <span style={{ color: cat.accentHex }}>{cat.badge}</span>
                  </span>
                </div>

                <h3 className="font-display text-base font-bold text-[#F8FAFC] mb-3">
                  {cat.category}
                </h3>

                <div className="flex flex-wrap gap-1.5">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/15 bg-[#07050F]/70 px-2.5 py-1 text-xs text-[#B8C0CC] hover:text-[#F8FAFC] hover:border-[#A855F7]/60 hover:bg-[#A855F7]/15 transition font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          EXPERIENCE SECTION (Glowing Horizontal Cards from Reference Video 00:11)
         ========================================== */}
      <section id="experience" className="relative border-t border-[#00E676]/40 bg-gradient-to-br from-[#060E12] via-[#071A18] via-[#071F1C] to-[#06120E] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#00E676] to-[#14B8A6] bg-clip-text text-transparent">
              III. WORK EXPERIENCE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Career Trajectory & Internships
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {internships.map((internship) => (
              <div
                key={internship.role}
                className={`group relative flex flex-col justify-between rounded-2xl border ${internship.cardBorder} bg-gradient-to-br from-[#071510]/90 to-[#060E0C]/90 p-7 ${internship.glowClass} transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_50px_rgba(4,6,15,0.85)]`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs flex items-center gap-1.5" style={{ color: internship.accentHex }}>
                      <Briefcase size={13} />
                      // ROLE {internship.roleNumber}
                    </span>
                    <span className={`rounded-md border px-2 py-0.5 text-[9px] font-mono ${internship.durationBadge}`}>
                      {internship.duration}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                    {internship.role}
                  </h3>

                  <p className="mt-1 text-xs font-semibold text-[#A1A1AA]">
                    {internship.company}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-[#A1A1AA]">
                    {internship.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3">
                    {internship.points.map((pt) => (
                      <div key={pt} className="flex items-start gap-2 text-[11px] leading-relaxed text-[#A1A1AA]">
                        <CheckCircle2 size={13} className="mt-0.5 shrink-0" style={{ color: internship.accentHex }} />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1">
                  {internship.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-[#00E676]/25 bg-[#00E676]/10 px-2 py-0.5 text-[10px] font-mono text-[#6EE7B7]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          PROJECTS SECTION ("Featured Engineering Projects" from Reference Video 00:12 - 00:13)
         ========================================== */}
      <section id="projects" className="relative border-t border-[#2979FF]/50 bg-gradient-to-br from-[#070D1E] via-[#0E0C2E] via-[#160C38] to-[#0E0620] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#2979FF] via-[#536DFE] to-[#A855F7] bg-clip-text text-transparent">
              IV. PORTFOLIO WORK
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC]">
              Featured Engineering Projects
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#A1A1AA] max-w-lg mx-auto">
              Selected production software, AI pipelines, and bioinformatics research systems.
            </p>
          </div>

          {/* High-Tech Terminal / Code Styled Cards (Reference video 00:13) with Midnight Aurora Accents */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.number}
                className={`group flex flex-col justify-between rounded-2xl border ${project.borderClass} bg-gradient-to-br from-[#0D0D28]/95 to-[#08081A]/95 p-5 ${project.glowClass} transition-all duration-300 hover:scale-[1.02] shadow-[0_20px_50px_rgba(4,6,15,0.85)]`}
              >
                <div>
                  {/* Card Top Label Bar */}
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#A1A1AA] pb-3 border-b border-white/[0.06] mb-4">
                    <span>// PROJECT {project.number}</span>
                    <span className={`rounded border px-1.5 py-0.5 ${project.badgeClass}`}>
                      [ {project.category.toUpperCase()} ]
                    </span>
                  </div>

                  {/* Thumbnail frame with project image */}
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {project.status && (
                      <span className="absolute top-2.5 right-2.5 rounded border border-[#00E5FF]/60 bg-[#04060F]/85 px-2 py-0.5 text-[9px] font-mono text-[#00E5FF] backdrop-blur-md shadow-[0_0_10px_rgba(0,229,255,0.4)]">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-display text-base font-bold text-[#F8FAFC] group-hover:text-white transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[11px] font-mono text-[#A1A1AA]">
                    {project.subTitle}
                  </p>

                  <p className="mt-3 text-xs leading-relaxed text-[#A1A1AA]">
                    {project.description}
                  </p>

                  {/* Bullet points */}
                  <div className="mt-4 space-y-1.5 border-t border-white/[0.06] pt-3">
                    {project.details.map((d) => (
                      <div key={d} className="flex items-start gap-1.5 text-[11px] text-[#A1A1AA] leading-snug">
                        <span className="font-mono mt-0.5" style={{ color: project.accentHex }}>›</span>
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions & Tech Tags */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-white/[0.04] px-3 py-1 text-[10px] font-mono uppercase text-[#F8FAFC] transition"
                      style={{
                        borderColor: `${project.accentHex}40`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = project.accentHex;
                        e.currentTarget.style.color = "#080B16";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.04)";
                        e.currentTarget.style.color = "#F8FAFC";
                      }}
                    >
                      <span>[ CODE -&gt; ]</span>
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-[#A1A1AA]/60">
                      [ ACADEMIC ]
                    </span>
                  )}

                  <span className="font-mono text-[9px] text-[#A1A1AA]">
                    SYS // 0{project.number}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          EDUCATION & CERTIFICATIONS SECTION
         ========================================== */}
      <section id="education" className="relative border-t border-[#FFD740]/40 bg-gradient-to-br from-[#160E04] via-[#1E1206] via-[#221504] to-[#180F03] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14">
            <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-2 font-semibold bg-gradient-to-r from-[#FFD740] to-[#FF9100] bg-clip-text text-transparent">
              V. ACADEMIC PEDIGREE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC]">
              Education & Verified Credentials
            </h2>
          </div>

          {/* Education Cards */}
          <div className="grid gap-6 md:grid-cols-3 mb-12">
            {educationData.map((edu) => (
              <div
                key={edu.institution}
                className={`rounded-2xl border p-6 ${edu.borderClass} ${edu.glowClass} transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(255,145,0,0.15)]`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="flex items-center gap-1" style={{ color: edu.accentHex }}>
                    <GraduationCap size={13} />
                    // {edu.roleNumber}
                  </span>
                  <span className="text-[#A1A1AA]">{edu.period}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-[#F8FAFC]">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-xs text-[#A1A1AA] font-medium">
                  {edu.institution}
                </p>
                <p className="mt-0.5 text-[10px] font-mono text-[#A1A1AA]/70">
                  {edu.location}
                </p>

                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className={`font-mono text-xs font-semibold ${edu.gradeColor}`}>
                    {edu.grade}
                  </span>
                  {edu.isCurrent && (
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-0.5 text-[9px] font-mono text-emerald-300">
                      CURRENT
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Sub-grid */}
          <div id="certifications" className="pt-6">
            <p className="font-mono text-xs uppercase tracking-widest mb-6 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">
              Verified Industry Certifications
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert, idx) => (
                <div
                  key={cert.title}
                  className="rounded-xl border border-[#00E5FF]/50 bg-gradient-to-b from-[#081E2E]/95 to-[#051220]/95 p-4 flex items-center justify-between hover:border-[#00E5FF] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] hover:scale-[1.02] transition shadow-[0_10px_30px_rgba(4,6,15,0.8)]"
                >
                  <div className="flex items-center gap-3">
                    <Award size={16} className="shrink-0" style={{ color: cert.accentHex }} />
                    <div>
                      <p className="font-display text-xs font-bold text-[#F8FAFC] leading-tight">
                        {cert.title}
                      </p>
                      <p className="text-[10px] font-mono text-[#A1A1AA] mt-0.5">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-[9px]" style={{ color: cert.accentHex }}>
                    #{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CONTACT & LIVE INTERACTION FORM (Midnight Aurora Edition)
         ========================================== */}
      <section id="contact" className="relative border-t border-[#FF3DCE]/50 bg-gradient-to-br from-[#120520] via-[#190638] via-[#1E0730] to-[#0E0318] px-6 sm:px-10 lg:px-16 py-24 sm:py-32 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          {/* Top Overline */}
          <span className="font-mono text-xs uppercase tracking-[0.25em] block mb-6 font-semibold bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#A855F7] bg-clip-text text-transparent">
            // LIVE INTERACTION MODE
          </span>

          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left Column: Heading, Subtitle & Live JSON Payload Preview Box */}
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#F8FAFC] leading-tight">
                Let's Build Something Exceptional.
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-[#A1A1AA] max-w-md">
                Fill out the transmission form or preview live contact stream directly below.
              </p>

              {/* Live JSON Payload Box with Aurora Syntax Accents */}
              <div className="mt-8 rounded-2xl border border-[#E040FB]/60 bg-gradient-to-b from-[#260C38]/95 to-[#180520]/95 p-5 font-mono text-xs shadow-2xl relative glow-pink-top shadow-[0_20px_60px_rgba(4,6,15,0.95),0_0_50px_rgba(224,64,251,0.35),inset_0_1px_0_rgba(224,64,251,0.15)]">
                <div className="flex items-center justify-between text-[10px] text-[#A1A1AA] pb-3 border-b border-white/[0.06] mb-3">
                  <span className="bg-gradient-to-r from-[#E040FB] to-[#A855F7] bg-clip-text text-transparent font-semibold">// payload_preview.json</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    LIVE_STREAM
                  </span>
                </div>

                <div className="space-y-1.5">
                  <p>
                    <span className="text-[#00E5FF] font-semibold">sender: </span>
                    <span className="text-[#F8FAFC]">
                      "{formData.firstName || formData.lastName
                        ? `${formData.firstName} ${formData.lastName}`.trim()
                        : "Awaiting Name..."}"
                    </span>
                  </p>
                  <p>
                    <span className="text-[#00E5FF] font-semibold">email: </span>
                    <span className="text-[#A78BFA]">
                      "{formData.email ? formData.email : "user@domain.com"}"
                    </span>
                  </p>
                  <p>
                    <span className="text-[#00E5FF] font-semibold">message: </span>
                    <span className="text-[#F8FAFC]">
                      "{formData.message
                        ? formData.message.slice(0, 45) + (formData.message.length > 45 ? "..." : "")
                        : "Awaiting Message..."}"
                    </span>
                  </p>
                  <p>
                    <span className="text-[#00E5FF] font-semibold">destination: </span>
                    <span className="text-[#E040FB] font-semibold">"{personalData.email}"</span>
                  </p>
                </div>

                {/* Copy email helper */}
                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-[10px] text-[#A1A1AA]">
                    Direct inbox: {personalData.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E040FB] hover:text-[#FF3DCE] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={11} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={11} />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Transmission Form */}
            <div className="rounded-2xl border border-[#A855F7]/65 bg-gradient-to-b from-[#260E3A]/95 to-[#180A26]/95 p-6 sm:p-8 glow-purple-top shadow-[0_20px_60px_rgba(4,6,15,0.95),0_0_50px_rgba(168,85,247,0.35),inset_0_1px_0_rgba(168,85,247,0.15)]">
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#A1A1AA] mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      placeholder="Jane"
                      className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-[#A1A1AA] mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      placeholder="Doe"
                      className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="jane@company.com"
                    required
                    className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase text-[#A1A1AA] mb-1.5">
                    Type your message here...
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Hello Satya, we would like to discuss..."
                    required
                    className="w-full rounded-xl border border-[#A855F7]/40 bg-[#0D0520]/85 px-3.5 py-2.5 text-xs text-[#F8FAFC] placeholder-[#A1A1AA]/50 focus:border-[#E040FB] focus:outline-none focus:ring-2 focus:ring-[#E040FB]/30 transition hover:border-[#A855F7]/60 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-[#E040FB] via-[#FF3DCE] to-[#A855F7] py-3.5 text-xs font-bold text-white transition hover:shadow-[0_0_40px_rgba(224,64,251,0.8),0_0_70px_rgba(255,61,206,0.4)] hover:brightness-110 flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(224,64,251,0.4)]"
                >
                  <Send size={13} />
                  <span>Send Message</span>
                </button>

                <p className="text-[10px] font-mono text-center text-[#A1A1AA] pt-1">
                  Guaranteed response within 24-48 hours. No spam ever.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          CINEMATIC FOOTER FINALE (Midnight Aurora Signature)
         ========================================== */}
      <footer className="relative border-t border-[#A855F7]/50 bg-gradient-to-b from-[#0E0620] via-[#09040F] to-[#030106] px-6 sm:px-10 lg:px-16 pt-20 pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          {/* 3-Column Metadata Header */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-14 border-b border-white/[0.06] text-xs font-mono">
            <div>
              <p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#00E5FF] to-[#2979FF] bg-clip-text text-transparent">
                // System Architecture
              </p>
              <p className="text-[#F8FAFC]">
                Full-Stack Web Engineering
              </p>
              <p className="text-[#A1A1AA]">
                AI & Machine Learning Solutions
              </p>
            </div>

            <div>
              <p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#A855F7] to-[#536DFE] bg-clip-text text-transparent">
                // Status
              </p>
              <div className="flex items-center gap-2 text-[#F8FAFC]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open to Opportunities</span>
              </div>
              <button
                onClick={() => scrollTo("contact")}
                className="text-[11px] text-[#94A3B8] hover:text-[#00E5FF] underline mt-1 transition-colors"
              >
                (View More)
              </button>
            </div>

            <div>
              <p className="uppercase tracking-widest text-[10px] mb-1 font-semibold bg-gradient-to-r from-[#FF3DCE] to-[#E040FB] bg-clip-text text-transparent">
                // Region
              </p>
              <p className="text-[#F8FAFC]">
                Andhra Pradesh, India
              </p>
              <p className="text-[#A1A1AA] text-[11px]">
                IST / UTC+5:30
              </p>
            </div>
          </div>

          {/* Giant Bold Name Across Screen: Cyan-to-Violet-to-Magenta Gradient (Reference video 00:15) */}
          <div className="py-12 sm:py-20 text-center select-none">
            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] xl:text-[9.5rem] font-bold uppercase tracking-tight leading-none bg-gradient-to-r from-[#00E5FF] via-[#536DFE] via-[#A855F7] via-[#FF3DCE] to-[#FFD740] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(83,109,254,0.4)]">
              {personalData.heroName}
            </h2>
          </div>

          {/* Bottom Bar: Direct Email, Social Links & Copyright */}
          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A1A1AA]">
            <a
              href={`mailto:${personalData.email}`}
              className="text-[#00E5FF] hover:text-[#A855F7] transition-colors flex items-center gap-1.5 font-medium drop-shadow-[0_0_6px_rgba(0,229,255,0.4)]"
            >
              <Mail size={13} />
              <span>{personalData.email}</span>
            </a>

            <div className="flex items-center gap-4">
              <a
                href={personalData.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.6)] transition-all"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#A855F7] hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.6)] transition-all"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href={personalData.hackerrank}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FF3DCE] hover:drop-shadow-[0_0_6px_rgba(255,61,206,0.6)] transition-all"
              >
                HackerRank
              </a>
            </div>

            <div className="flex items-center gap-4">
              <span>© 2026 {personalData.name}</span>
              <button
                onClick={() => scrollTo("hero")}
                className="hover:text-[#00E5FF] hover:drop-shadow-[0_0_6px_rgba(0,229,255,0.6)] transition-all"
              >
                ↑ Top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

