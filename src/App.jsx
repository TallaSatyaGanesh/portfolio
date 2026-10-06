import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  Briefcase,
  CheckCircle2,
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";

import profileImage from "./assets/passport_image.jpeg";

import project01Image from "./assets/project01_assistive.png";
import project02Image from "./assets/project02_genes.png";
import project03Image from "./assets/project03_grocery.png";
import project04Image from "./assets/project04_ecommerce.png";
import project05Image from "./assets/project05_whiteboard.png";
import project06Image from "./assets/project06_rfp.png";

const skills = [
  {
    category: "Programming",
    items: ["Python", "Java", "C", "SQL"],
  },
  {
    category: "Web Technologies",
    items: ["HTML", "CSS", "JavaScript", "JSP", "Servlets", "JDBC"],
  },
  {
    category: "Machine Learning",
    items: [
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Data Preprocessing",
      "Feature Selection",
    ],
  },
  {
    category: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "Google Colab",
      "Kaggle",
    ],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
];

const internships = [
  {
    role: "Research Intern – Bioinformatics",
    company: "National Institute of Technology (NIT) Warangal",
    duration: "May 2026 – Jul 2026",
    description:
      "Conducted genomic data preprocessing and gene expression analysis for cancer research. Developed machine learning pipelines for biomarker identification and disease prediction.",
    points: [
      "Applied feature selection techniques and protein-protein interaction (PPI) network analysis.",
      "Performed literature review, computational validation, and documented research findings.",
    ],
  },
  {
    role: "Java Full Stack Developer Virtual Intern",
    company: "EduSkills – AICTE Virtual Internship",
    duration: "Jan 2026 – Mar 2026",
    description:
      "Developed full-stack web applications using Java, JSP, Servlets, JDBC, MySQL, HTML, CSS, and JavaScript.",
    points: [
      "Implemented CRUD operations and integrated databases for dynamic web applications.",
      "Strengthened object-oriented programming, backend development, and database management skills.",
    ],
  },
  {
    role: "Salesforce Developer Virtual Intern",
    company: "SmartBridge & Salesforce – AICTE Virtual Internship",
    duration: "May 2025 – Jul 2025",
    description:
      "Completed hands-on training in Salesforce Administration and Apex development.",
    points: [
      "Worked with Lightning Web Components, Object Relationships, and Security Management.",
      "Built practical knowledge of CRM development using the Salesforce platform.",
    ],
  },
];

const projects = [
  {
    number: "01",
    image: project01Image,
    title: "Vision-Based Assistive Perception System with Voice Assistance",
    status: "Ongoing",
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
    description:
      "A full-stack web application for online grocery shopping and inventory management.",
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
    description:
      "A responsive e-commerce website with a modern interface and interactive shopping experience.",
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
    description:
      "An Agentic AI project focused on analyzing Requests for Proposals (RFPs) and supporting proposal response preparation.",
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

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Generative AI Essentials – TCS iON Career Edge",
  "Programming Essentials in C – Cisco Networking Academy",
  "Python Foundation Certification – Infosys Springboard",
  "Advanced Certificate in LSRW Skills",
  "Employability Skills Certification – Wadhwani Skilling",
];

const navItems = [
  ["home", "Home", Sparkles],
  ["about", "About Me", Layers3],
  ["skills", "Skills", Code2],
  ["experience", "Experience", Briefcase],
  ["projects", "Projects", Code2],
  ["education", "Education", GraduationCap],
  ["certifications", "Certifications", Award],
  ["contact", "Contact", Mail],
];

function App() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map(([id]) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          );

        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.05, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    setMenuOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#02060a] text-zinc-100 selection:bg-cyan-300 selection:text-black">
      {/* Background Grid */}
      <div
        className="fixed inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_70%_18%,rgba(34,211,238,0.09),transparent_30%),radial-gradient(circle_at_35%_70%,rgba(34,211,238,0.04),transparent_28%)]" />

      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-50 hidden h-screen w-[245px] border-r border-white/[0.08] bg-[#03070c]/95 px-4 py-6 backdrop-blur-2xl lg:flex lg:flex-col">
        <div className="flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/50 bg-cyan-300/[0.06] text-xl text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)]">
            ✦
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wide">
              Satya Ganesh Talla
            </p>

            <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
              The Portfolio / 2026
            </p>
          </div>
        </div>

        <div className="mt-9 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Currently exploring
          </p>

          <p className="mt-3 text-sm font-medium leading-5 text-zinc-200">
            Building at the intersection of code & intelligence.
          </p>

          <p className="mt-4 text-[9px] text-zinc-600">
            B.Tech CSE · AI / ML
          </p>
        </div>

        <p className="mt-9 px-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-zinc-600">
          Explore
        </p>

        <nav className="mt-3 space-y-1">
          {navItems.map(([id, label, Icon]) => (
            <button
              key={id}
              onClick={() => goTo(id)}
              className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition ${
                active === id
                  ? "bg-cyan-400/[0.12] text-cyan-300"
                  : "text-zinc-500 hover:bg-white/[0.035] hover:text-zinc-200"
              }`}
            >
              <Icon size={14} />

              <span>{label}</span>

              {active === id && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.9)]" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto border-t border-white/[0.08] pt-5">
          <div className="flex items-center gap-2 px-2 text-[10px] font-medium text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.9)]" />
            Open to opportunities
          </div>

          <p className="mt-5 px-2 text-[8px] uppercase tracking-[0.25em] text-zinc-600">
            Let's build something
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#03070c]/85 px-5 py-4 backdrop-blur-xl lg:hidden">
        <div className="flex items-center justify-between">
          <button
            onClick={() => goTo("home")}
            className="text-sm font-semibold"
          >
            SGT<span className="text-cyan-300">.</span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 text-zinc-300"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 space-y-1 border-t border-white/10 pt-3">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className="block w-full rounded-lg px-3 py-2 text-left text-sm text-zinc-400 hover:bg-white/5 hover:text-white"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main className="lg:pl-[245px]">

        {/* HERO */}
        <section
          id="home"
          className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-14 lg:pt-16"
        >
          <div className="mx-auto grid w-full max-w-[1380px] items-center gap-10 xl:grid-cols-[1fr_1fr]">

            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-7 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                Available for work
              </div>

              <p className="text-[9px] uppercase tracking-[0.3em] text-cyan-300/70">
                Welcome to my portfolio
              </p>

              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-7xl xl:text-[6.3rem]">
                Hey, I'm
                <br />
                <span className="text-cyan-300">
                  Satya Ganesh
                </span>
                <br />
                Talla
                <span className="text-zinc-600">.</span>
              </h1>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-zinc-300">
                <span>Software Developer</span>
                <span className="text-cyan-300">/</span>
                <span>AI / ML</span>
                <span className="text-cyan-300">/</span>
                <span>Problem Solver</span>
              </div>

              <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                  I'm a Computer Science undergraduate with a strong foundation in software development, machine learning, and problem-solving. I have hands-on experience in full-stack development and machine learning, along with research experience in bioinformatics.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => goTo("projects")}
                  className="group inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"
                >
                  Explore my work
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>

                <button
                  onClick={() => goTo("contact")}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-zinc-200 hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  Let's connect
                </button>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python",
                  "Java",
                  "JavaScript",
                  "SQL",
                  "AI / ML",
                  "GitHub",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded border border-white/[0.08] bg-white/[0.02] px-2.5 py-1.5 text-[10px] text-zinc-500"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* HERO CIRCLE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative mx-auto flex h-[620px] w-full max-w-[680px] items-center justify-center"
            >
              <div className="pointer-events-none absolute h-[470px] w-[470px] rounded-full bg-cyan-400/[0.055] blur-[110px]" />

              <div className="pointer-events-none absolute h-[300px] w-[300px] rounded-full bg-cyan-300/[0.045] blur-[70px]" />

              <div className="absolute h-[535px] w-[535px] rounded-full border border-dashed border-cyan-300/[0.16]" />

              <div className="absolute h-[505px] w-[505px] animate-[spin_32s_linear_infinite] rounded-full border border-dashed border-white/[0.09]" />

              <div className="absolute h-[475px] w-[475px] animate-[spin_42s_linear_infinite_reverse] rounded-full border border-cyan-300/[0.06]" />

              <div className="absolute h-[440px] w-[440px] rounded-full border border-white/[0.08]" />

              <div className="absolute h-[390px] w-[390px] rounded-full border border-cyan-300/[0.11]" />

              <div className="absolute h-[335px] w-[335px] rounded-full border border-cyan-300/[0.15]" />

              <div className="absolute h-[275px] w-[275px] rounded-full border border-cyan-300/[0.20] shadow-[0_0_90px_rgba(34,211,238,0.10)]" />

              <span className="absolute left-[18%] top-[31%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,1)]" />

              <span className="absolute right-[18%] top-[29%] h-1 w-1 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

              <span className="absolute bottom-[28%] left-[19%] h-1 w-1 rounded-full bg-cyan-300/80" />

              <span className="absolute bottom-[25%] right-[19%] h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

              <span className="absolute left-1/2 top-[11%] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="absolute bottom-[11%] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-cyan-300/70" />

              {[
                {
                  label: "Projects",
                  target: "projects",
                  icon: Code2,
                  angle: -90,
                },
                {
                  label: "Skills",
                  target: "skills",
                  icon: Sparkles,
                  angle: -54,
                },
                {
                  label: "Education",
                  target: "education",
                  icon: GraduationCap,
                  angle: -18,
                },
                {
                  label: "Experience",
                  target: "experience",
                  icon: Briefcase,
                  angle: 18,
                },
                {
                  label: "Certifications",
                  target: "certifications",
                  icon: Award,
                  angle: 54,
                },
                {
                  label: "Contact",
                  target: "contact",
                  icon: Mail,
                  angle: 90,
                },
                {
                  label: "About",
                  target: "about",
                  icon: Layers3,
                  angle: 126,
                },
                {
                  label: "GitHub",
                  target: "projects",
                  icon: Code2,
                  angle: 162,
                },
                {
                  label: "AI / ML",
                  target: "skills",
                  icon: Sparkles,
                  angle: 198,
                },
                {
                  label: "Resume",
                  target: "contact",
                  icon: ExternalLink,
                  angle: 234,
                },
              ].map((node) => {
                const radius = 268;
                const angle = (node.angle * Math.PI) / 180;

                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                const Icon = node.icon;

                return (
                  <button
                    key={node.label}
                    onClick={() => goTo(node.target)}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                    className="group absolute left-1/2 top-1/2 z-20 flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full border border-white/[0.12] bg-[#071018]/95 text-zinc-500 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-300/60 hover:bg-cyan-300/[0.08] hover:text-cyan-300"
                  >
                    <Icon size={16} />

                    <span className="mt-1 text-[7px] leading-none">
                      {node.label}
                    </span>

                    <span className="pointer-events-none absolute -inset-1 rounded-full opacity-0 shadow-[0_0_30px_rgba(34,211,238,0.45)] transition group-hover:opacity-100" />
                  </button>
                );
              })}

              {/* Central Profile */}
              <div className="relative z-30 flex h-[205px] w-[205px] flex-col items-center justify-center rounded-full border border-cyan-300/70 bg-[#061018] shadow-[0_0_100px_rgba(34,211,238,0.20),inset_0_0_60px_rgba(34,211,238,0.05)]">
                <div className="pointer-events-none absolute inset-[8px] rounded-full border border-cyan-300/25" />

                <div className="pointer-events-none absolute inset-[18px] rounded-full border border-white/[0.06]" />

                <div className="pointer-events-none absolute inset-[29px] rounded-full border border-cyan-300/[0.08]" />

                <div className="absolute -inset-2 rounded-full bg-cyan-300/[0.08] blur-xl" />

                <div className="relative">
                  <div className="absolute -inset-3 rounded-full bg-cyan-300/10 blur-md" />

                  <img
                    src={profileImage}
                    alt="Satya Ganesh Talla"
                    className="relative h-[72px] w-[72px] rounded-full border border-cyan-300/60 object-cover shadow-[0_0_25px_rgba(34,211,238,0.18)]"
                  />
                </div>

                <p className="mt-3 text-center text-[15px] font-semibold leading-5 text-white">
                  Satya Ganesh
                  <br />
                  Talla<span className="text-cyan-300">.</span>
                </p>

                <p className="mt-1 text-[7px] uppercase tracking-[0.24em] text-cyan-300">
                  AI / ML · Developer
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_9px_rgba(52,211,153,0.9)]" />

                  <span className="text-[6px] uppercase tracking-[0.2em] text-zinc-600">
                    Available
                  </span>
                </div>
              </div>

              <div className="absolute left-[8%] top-[19%] rounded-full border border-white/[0.08] bg-[#061018]/85 px-3 py-1.5 text-[7px] uppercase tracking-[0.17em] text-zinc-500 backdrop-blur">
                Python
              </div>

              <div className="absolute right-[7%] top-[18%] rounded-full border border-white/[0.08] bg-[#061018]/85 px-3 py-1.5 text-[7px] uppercase tracking-[0.17em] text-zinc-500 backdrop-blur">
                Java
              </div>

              <div className="absolute bottom-[16%] left-[9%] rounded-full border border-white/[0.08] bg-[#061018]/85 px-3 py-1.5 text-[7px] uppercase tracking-[0.17em] text-zinc-500 backdrop-blur">
                ML
              </div>

              <div className="absolute bottom-[15%] right-[8%] rounded-full border border-white/[0.08] bg-[#061018]/85 px-3 py-1.5 text-[7px] uppercase tracking-[0.17em] text-zinc-500 backdrop-blur">
                SQL
              </div>

              <span className="absolute left-[21%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/70" />

              <span className="absolute right-[21%] top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-cyan-300/70" />

              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8px] uppercase tracking-[0.3em] text-zinc-600">
                Explore my profile
                <span className="ml-2 text-cyan-300">↗</span>
              </div>
            </motion.div>
          </div>

          <button
            onClick={() => goTo("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-cyan-300"
          >
            <ArrowDown size={18} className="animate-bounce" />
          </button>
        </section>

        {/* ABOUT */}
        <SectionShell
          id="about"
          number="01 / 07"
          eyebrow="About Me"
          title="About Me"
          subtitle="A little more about my background, interests, and technical journey."
        >
          <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/[0.08] bg-[#061018]/75 p-7 sm:p-10"
            >
              <p className="text-4xl text-cyan-300/40">“</p>

              <p className="mt-2 max-w-3xl text-xl leading-9 text-zinc-200 sm:text-2xl">
                I'm a Computer Science undergraduate with a strong foundation
                in software development, machine learning, and problem-solving.
                I have hands-on experience in full-stack development and
                machine learning, along with research experience in
                bioinformatics.
              </p>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-zinc-500">
                I enjoy solving real-world problems and continuously learning
                emerging technologies.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Software Development",
                  "AI / ML",
                  "Problem Solving",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded border border-cyan-300/10 bg-cyan-300/[0.03] px-3 py-2 text-xs text-zinc-400"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
              {[
                "Software Development",
                "Machine Learning",
                "Problem Solving",
                "Real-world Applications",
              ].map((x, i) => (
                <motion.div
                  key={x}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.018] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-cyan-300/[0.035]"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-semibold text-cyan-300">
                      0{i + 1}
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="text-zinc-600 group-hover:text-cyan-300"
                    />
                  </div>

                  <p className="mt-7 text-sm font-medium text-zinc-200">
                    {x}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-zinc-600">
                    Turning ideas into useful working technology.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <Metric value="3" label="Internships" />
            <Metric value="6" label="Projects" />
            <Metric value="7.96" label="CGPA / 10" />
          </div>
        </SectionShell>

        {/* SKILLS */}
        <SectionShell
          id="skills"
          number="02 / 07"
          eyebrow="Skills"
          title="Skills"
          subtitle="A practical collection of technologies built through projects, research, and hands-on development."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group min-h-[190px] rounded-xl border border-white/[0.08] bg-[#061018]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold text-cyan-300">
                    0{i + 1}
                  </span>

                  <Code2 size={15} className="text-cyan-300/60" />
                </div>

                <h3 className="mt-4 text-lg font-medium">
                  {skill.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-white/[0.08] px-2.5 py-1.5 text-[10px] text-zinc-500 transition group-hover:text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* EXPERIENCE */}
        <SectionShell
          id="experience"
          number="03 / 07"
          eyebrow="Experience"
          title="Experience"
          subtitle="Hands-on experience across research, full-stack development, and Salesforce."
        >
          <div className="relative border-l border-cyan-300/15 pl-7 sm:pl-10">
            {internships.map((item, i) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative mb-6 last:mb-0"
              >
                <span className="absolute -left-[34px] top-7 h-3 w-3 rounded-full border border-cyan-300 bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.65)] sm:-left-[49px]" />

                <div className="rounded-2xl border border-white/[0.08] bg-[#061018]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 sm:p-8">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        0{i + 1} · Experience
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.company}
                      </p>
                    </div>

                    <span className="rounded-full border border-cyan-300/10 bg-cyan-300/[0.04] px-3 py-1.5 text-[10px] text-cyan-200/70">
                      {item.duration}
                    </span>
                  </div>

                  <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-500">
                    {item.description}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {item.points.map((point) => (
                      <p
                        key={point}
                        className="flex gap-2 text-xs leading-6 text-zinc-500"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-1 shrink-0 text-cyan-300/60"
                        />
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* PROJECTS */}
        <SectionShell
          id="projects"
          number="04 / 07"
          eyebrow="Projects"
          title="Projects"
          subtitle="A collection of academic, research, AI, and full-stack projects."
        >
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded border border-cyan-300/50 bg-cyan-300/[0.06] px-3 py-2 text-[10px] text-cyan-200">
              All
            </span>

            <span className="rounded border border-white/[0.08] px-3 py-2 text-[10px] text-zinc-600">
              AI / ML
            </span>

            <span className="rounded border border-white/[0.08] px-3 py-2 text-[10px] text-zinc-600">
              Development
            </span>

            <span className="rounded border border-white/[0.08] px-3 py-2 text-[10px] text-zinc-600">
              Research
            </span>
          </div>

          <div className="grid gap-4 xl:grid-cols-2">
            {projects.map((project, i) => (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group overflow-hidden rounded-xl border border-white/[0.08] bg-[#061018]/75 transition duration-500 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="relative overflow-hidden border-b border-white/[0.08]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-3 top-3 rounded border border-white/10 bg-[#03070c]/85 px-2.5 py-1.5 text-[9px] text-zinc-300 backdrop-blur">
                    /{project.number}
                  </div>

                  {project.status && (
                    <div className="absolute right-3 top-3 rounded border border-cyan-300/20 bg-[#03070c]/85 px-2.5 py-1.5 text-[9px] text-cyan-200 backdrop-blur">
                      {project.status}
                    </div>
                  )}
                </div>

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-6 text-zinc-100">
                      {project.title}
                    </h3>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="shrink-0 rounded border border-white/10 p-2 text-zinc-500 transition hover:border-cyan-300/30 hover:text-cyan-200"
                      >
                        <Code2 size={15} />
                      </a>
                    )}
                  </div>

                  <p className="mt-4 text-xs leading-6 text-zinc-500">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-white/[0.07] px-2 py-1 text-[9px] text-zinc-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/[0.07] pt-5">
                    <p className="mb-3 text-[9px] uppercase tracking-[0.22em] text-zinc-600">
                      Project details
                    </p>

                    <ul className="space-y-2">
                      {project.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex gap-2 text-xs leading-5 text-zinc-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan-300/50" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      View on GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </SectionShell>

        {/* EDUCATION */}
        <SectionShell
          id="education"
          number="05 / 07"
          eyebrow="Education"
          title="Education"
          subtitle="Academic foundation behind the work."
        >
          <div className="relative ml-2 border-l border-cyan-300/15 pl-7 sm:pl-10">
            {[
              [
                "Bachelor of Technology",
                "Computer Science and Engineering",
                "Lakireddy Bali Reddy College of Engineering",
                "Andhra Pradesh",
                "2023 – 2027",
                "CGPA: 7.96 / 10",
                true,
              ],
              [
                "Intermediate",
                "Class XII",
                "SriChaitanya Junior College",
                "Amalapuram, Andhra Pradesh",
                "2020 – 2022",
                "Percentage: 80.2%",
                false,
              ],
              [
                "Secondary School Education",
                "Class X",
                "ZPP High School",
                "Cheyyeru, Andhra Pradesh",
                "2019 – 2020",
                "Percentage: 86%",
                false,
              ],
            ].map((item, i) => (
              <motion.div
                key={item[2]}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative mb-5 last:mb-0"
              >
                <span
                  className={`absolute -left-[35px] top-7 flex h-3 w-3 items-center justify-center rounded-full border ${
                    item[6]
                      ? "border-cyan-300 bg-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.7)]"
                      : "border-zinc-600 bg-[#02060a]"
                  } sm:-left-[49px]`}
                />

                <div
                  className={`rounded-2xl border p-6 sm:p-8 ${
                    item[6]
                      ? "border-cyan-300/25 bg-cyan-300/[0.035]"
                      : "border-white/[0.08] bg-[#061018]/70"
                  }`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.22em] text-cyan-300">
                        {item[0]}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold">
                        {item[1]}
                      </h3>

                      <p className="mt-2 text-sm text-zinc-400">
                        {item[2]}
                      </p>

                      <p className="mt-1 text-xs text-zinc-600">
                        {item[3]}
                      </p>
                    </div>

                    <div className="sm:text-right">
                      <p className="text-xs text-zinc-600">
                        {item[4]}
                      </p>

                      <p className="mt-2 text-sm font-medium text-cyan-200/80">
                        {item[5]}
                      </p>

                      {item[6] && (
                        <span className="mt-3 inline-flex rounded-full border border-cyan-300/20 px-2.5 py-1 text-[9px] text-cyan-200">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* CERTIFICATIONS */}
        <SectionShell
          id="certifications"
          number="06 / 07"
          eyebrow="Certifications"
          title="Certifications"
          subtitle="Credentials and focused learning that complement my technical foundation."
        >
          <div className="grid gap-2 md:grid-cols-2">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 rounded-xl border border-white/[0.08] bg-[#061018]/65 p-5 transition hover:border-cyan-300/25 hover:bg-cyan-300/[0.03]"
              >
                <span className="text-[10px] font-bold text-cyan-300">
                  0{i + 1}
                </span>

                <Award
                  size={16}
                  className="text-zinc-500 group-hover:text-cyan-300"
                />

                <p className="text-sm text-zinc-400">
                  {cert}
                </p>

                <ArrowUpRight
                  size={14}
                  className="ml-auto text-zinc-700 group-hover:text-cyan-300"
                />
              </motion.div>
            ))}
          </div>
        </SectionShell>

        {/* CONTACT */}
        <SectionShell
          id="contact"
          number="07 / 07"
          eyebrow="Contact"
          title="Contact"
          subtitle="I'm open to opportunities where I can apply my skills in software development, AI/ML, and technology-driven problem solving."
        >
          <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.035] p-7 sm:p-10">
              <p className="text-5xl font-semibold tracking-tight sm:text-7xl">
                Let's
                <br />
                <span className="text-cyan-300">connect.</span>
              </p>

              <p className="mt-7 max-w-md text-sm leading-7 text-zinc-500">
                Have an opportunity, project, or idea? I'd be happy to
                connect and explore how we can turn it into something useful.
              </p>

              <a
                href="mailto:tallaganesh17@gmail.com"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-black hover:bg-cyan-200"
              >
                <Mail size={15} />
                Email me
              </a>
            </div>

            <div className="rounded-2xl border border-white/[0.08] bg-[#061018]/75 p-5">
              {[
                [
                  "Email",
                  "tallaganesh17@gmail.com",
                  "mailto:tallaganesh17@gmail.com",
                  Mail,
                ],
                [
                  "GitHub",
                  "TallaSatyaGanesh",
                  "https://github.com/TallaSatyaGanesh",
                  Code2,
                ],
                [
                  "LinkedIn",
                  "Satya Ganesh Talla",
                  "https://linkedin.com/in/talla-satya-ganesh-0a26842ba",
                  Code2,
                ],
                [
                  "HackerRank",
                  "tallaganesh17",
                  "https://www.hackerrank.com/profile/tallaganesh17",
                  Code2,
                ],
              ].map(([label, text, href, Icon]) => (
                <a
                  key={label}
                  href={href}
                  target={
                    href.startsWith("http") ? "_blank" : undefined
                  }
                  rel={
                    href.startsWith("http") ? "noreferrer" : undefined
                  }
                  className="group flex items-center gap-4 border-b border-white/[0.07] px-3 py-5 last:border-0"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] text-zinc-500 group-hover:border-cyan-300/25 group-hover:text-cyan-300">
                    <Icon size={15} />
                  </span>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.18em] text-zinc-600">
                      {label}
                    </p>

                    <p className="mt-1 text-sm text-zinc-300">
                      {text}
                    </p>
                  </div>

                  <ExternalLink
                    size={14}
                    className="ml-auto text-zinc-700 group-hover:text-cyan-300"
                  />
                </a>
              ))}
            </div>
          </div>
        </SectionShell>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-6 py-7 lg:ml-[245px]">
        <div className="mx-auto flex max-w-[1380px] flex-col gap-2 text-[10px] text-zinc-600 sm:flex-row sm:justify-between">
          <p>© 2026 Satya Ganesh Talla</p>
          <p>Built with React · Vite · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

function SectionShell({
  id,
  number,
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section
      id={id}
      className="border-t border-white/[0.08] px-6 py-24 sm:px-10 sm:py-28 lg:px-14"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-cyan-300">
              {number}
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {title}
              <span className="text-cyan-300">.</span>
            </h2>
          </div>

          <p className="max-w-md text-xs leading-6 text-zinc-600 sm:text-sm">
            {subtitle}
          </p>
        </div>

        {children}
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#061018]/65 p-5">
      <p className="text-3xl font-semibold text-zinc-100">
        {value}
      </p>

      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
        {label}
      </p>
    </div>
  );
}

export default App;