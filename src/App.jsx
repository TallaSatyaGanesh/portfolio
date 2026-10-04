import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  Briefcase,
  Code2,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
  Award,
  Layers3,
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
    title:
      "Vision-Based Assistive Perception System with Voice Assistance",
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
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "STRING Database"],
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
    tech: ["Python", "Agentic AI", "RFP Analysis", "Proposal Responses"],
    details: [
      "Organizes RFP analysis into a workflow for understanding proposal requirements.",
      "Supports the preparation of proposal responses based on the RFP content.",
      "Designed as an AI-assisted tool for the proposal response process.",
    ],
    github: "https://github.com/TallaSatyaGanesh/agentic-rfp-system",
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

function App() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-cyan-300 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-cyan-400/10 bg-[#05080d]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-xl font-bold tracking-tight transition hover:text-cyan-300"
          >
            TSG<span className="text-zinc-600">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-cyan-300">
              About
            </a>

            <a href="#skills" className="transition hover:text-cyan-300">
              Skills
            </a>

            <a
              href="#experience"
              className="transition hover:text-cyan-300"
            >
              Experience
            </a>

            <a href="#projects" className="transition hover:text-cyan-300">
              Projects
            </a>

            <a
              href="#education"
              className="transition hover:text-cyan-300"
            >
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/20 px-4 py-2 text-sm text-zinc-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-300"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.055] blur-[120px]" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-500">
                Computer Science Engineer
              </p>

              <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                Talla Satya{" "}
                <span className="text-zinc-500">Ganesh.</span>
              </h1>

              <h2 className="mt-7 max-w-3xl text-2xl font-medium text-zinc-300 sm:text-3xl">
                Computer Science Engineer | AI/ML & Software Developer 🚀
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg">
                Computer Science undergraduate with a strong foundation in
                software development, machine learning, and problem-solving.
                Passionate about building practical and scalable technology
                solutions.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-medium text-black transition hover:bg-cyan-200 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                >
                  View My Projects

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-cyan-400/20 px-6 py-3 font-medium text-zinc-200 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500">
                <span className="flex items-center gap-2">
                  <Code2 size={16} />
                  Python · Java · SQL
                </span>

                <span className="flex items-center gap-2">
                  <MapPin size={16} />
                  Andhra Pradesh, India
                </span>
              </div>
            </motion.div>

            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-5 rounded-[2.5rem] border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.10)]" />

                <div className="relative overflow-hidden rounded-[2.2rem] border border-cyan-400/20 bg-white/[0.04] shadow-[0_0_100px_rgba(34,211,238,0.12)] transition duration-500 hover:scale-[1.02]">
                  <img
                    src={profileImage}
                    alt="Talla Satya Ganesh"
                    className="h-[420px] w-[340px] object-cover sm:h-[500px] sm:w-[400px]"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0a1118]/95 px-5 py-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-widest text-cyan-400/60">
                    Currently
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-200">
                    B.Tech CSE · 2023–2027
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.a
            href="#about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600 transition hover:text-white"
          >
            <ArrowDown className="animate-bounce" />
          </motion.a>
        </section>

        {/* About */}
        <section
          id="about"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          {/* Ambient background glow */}
          <div className="pointer-events-none absolute left-[5%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-0 right-[8%] h-80 w-80 rounded-full bg-cyan-400/[0.025] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl">
            {/* Section heading */}
            <div className="mb-14 flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300/70" />

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70">
                01 — About Me
              </p>
            </div>

            {/* Main About Layout */}
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT — About Content */}
              <motion.div
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.045] via-white/[0.02] to-transparent p-8 sm:p-10 lg:p-12"
              >
                <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-cyan-400/[0.06] blur-[80px] transition duration-700 group-hover:bg-cyan-400/[0.10]" />

                <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-cyan-400/10" />

                <div className="absolute right-14 top-14 h-12 w-12 rounded-full border border-cyan-400/10" />

                <div className="relative">
                  <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-4 py-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />

                    <span className="text-xs uppercase tracking-[0.22em] text-cyan-300/80">
                      Who I Am
                    </span>
                  </div>

                  <h2 className="max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                    Building technology
                    <br />
                    with <span className="text-zinc-500">purpose.</span>
                  </h2>

                  <div className="my-10 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />

                  <div className="max-w-2xl space-y-6">
                    <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                      I'm a Computer Science undergraduate with a strong
                      foundation in software development, machine learning,
                      and problem-solving.
                    </p>

                    <p className="text-base leading-8 text-zinc-400 sm:text-lg">
                      I have hands-on experience in full-stack development and
                      machine learning, along with research experience in
                      bioinformatics. I enjoy solving real-world problems and
                      continuously learning emerging technologies.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-2">
                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400">
                      Software Development
                    </span>

                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400">
                      AI / ML
                    </span>

                    <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-zinc-400">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT SIDE */}
              <div className="grid gap-6">
                <motion.div
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-cyan-400/[0.06] via-white/[0.025] to-transparent p-7 sm:p-8"
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.08] blur-[70px]" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                          <Layers3
                            size={17}
                            className="text-cyan-300"
                          />
                        </div>

                        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                          Core Focus
                        </p>
                      </div>

                      <Sparkles
                        size={17}
                        className="text-cyan-300/50"
                      />
                    </div>

                    <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      <div className="group/card rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">
                        <Code2
                          size={18}
                          className="text-cyan-300/80 transition group-hover/card:text-cyan-300"
                        />

                        <p className="mt-5 text-sm font-medium leading-5 text-zinc-200">
                          Software
                          <br />
                          Development
                        </p>
                      </div>

                      <div className="group/card rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">
                        <Sparkles
                          size={18}
                          className="text-cyan-300/80 transition group-hover/card:text-cyan-300"
                        />

                        <p className="mt-5 text-sm font-medium leading-5 text-zinc-200">
                          Machine
                          <br />
                          Learning
                        </p>
                      </div>

                      <div className="group/card rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.04]">
                        <Award
                          size={18}
                          className="text-cyan-300/80 transition group-hover/card:text-cyan-300"
                        />

                        <p className="mt-5 text-sm font-medium leading-5 text-zinc-200">
                          Problem
                          <br />
                          Solving
                        </p>
                      </div>
                    </div>

                    <div className="mt-7 border-t border-white/10 pt-5">
                      <p className="text-sm leading-6 text-zinc-500">
                        Turning ideas into practical, scalable technology
                        solutions.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="grid grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-transparent p-7 sm:p-8"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/[0.08] blur-3xl transition duration-500 group-hover:bg-cyan-300/[0.15]" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                          Experience
                        </p>

                        <Briefcase
                          size={17}
                          className="text-cyan-300/60"
                        />
                      </div>

                      <p className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                        3
                      </p>

                      <p className="mt-2 text-sm text-zinc-500">
                        Internships
                      </p>

                      <div className="mt-6 h-1 w-10 rounded-full bg-cyan-300/70 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="group relative overflow-hidden rounded-[2.5rem] border border-cyan-400/15 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.025] to-transparent p-7 sm:p-8"
                  >
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/[0.08] blur-3xl transition duration-500 group-hover:bg-cyan-300/[0.15]" />

                    <div className="relative">
                      <div className="flex items-center justify-between">
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                          Portfolio
                        </p>

                        <Code2
                          size={17}
                          className="text-cyan-300/60"
                        />
                      </div>

                      <p className="mt-8 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                        6
                      </p>

                      <p className="mt-2 text-sm text-zinc-500">
                        Projects
                      </p>

                      <div className="mt-6 h-1 w-10 rounded-full bg-cyan-300/70 transition-all duration-500 group-hover:w-16" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="relative overflow-hidden border-t border-white/10 px-6 py-32"
        >
          <div className="pointer-events-none absolute left-[8%] top-20 h-72 w-72 rounded-full bg-cyan-400/[0.035] blur-[120px]" />

          <div className="pointer-events-none absolute bottom-0 right-[5%] h-80 w-80 rounded-full bg-cyan-400/[0.025] blur-[130px]" />

          <div className="relative mx-auto max-w-7xl">
            <div className="mb-14 flex items-center gap-4">
              <span className="h-px w-10 bg-cyan-300/70" />

              <p className="text-sm uppercase tracking-[0.3em] text-cyan-400/70">
                02 — Skills
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Technologies I{" "}
                  <span className="text-zinc-500">work with.</span>
                </h2>
              </div>

              <p className="max-w-md text-base leading-7 text-zinc-500 lg:justify-self-end">
                A practical toolkit built through software development,
                machine learning, database work, and hands-on project
                experience.
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.045] via-white/[0.02] to-transparent p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] sm:p-8"
                >
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.06] blur-[60px] transition duration-500 group-hover:bg-cyan-400/[0.12]" />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/60">
                          0{index + 1}
                        </p>

                        <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">
                          {skill.category}
                        </h3>
                      </div>

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-sm font-medium text-cyan-300/70 transition duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/[0.09] group-hover:text-cyan-300">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>

                    <div className="my-6 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/10 to-transparent" />

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-black/20 px-3.5 py-2 text-sm text-zinc-400 transition duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] hover:text-cyan-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className="mt-7 h-1 w-8 rounded-full bg-cyan-300/60 transition-all duration-500 group-hover:w-14" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              03 — Experience
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Internship experience.
            </h2>

            <div className="mt-14 space-y-6">
              {internships.map((internship, index) => (
                <motion.div
                  key={internship.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-9"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-5">
                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.06] text-cyan-300 sm:flex">
                        <Briefcase
                          size={20}
                          className="text-zinc-400"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold">
                          {internship.role}
                        </h3>

                        <p className="mt-2 text-zinc-400">
                          {internship.company}
                        </p>
                      </div>
                    </div>

                    <span className="text-sm font-medium tracking-widest text-cyan-400/60">
                      {internship.duration}
                    </span>
                  </div>

                  <p className="mt-7 max-w-4xl leading-7 text-zinc-500">
                    {internship.description}
                  </p>

                  <ul className="mt-5 space-y-2 text-sm leading-6 text-zinc-500">
                    {internship.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              04 — Projects
            </p>

            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Things I've built.
              </h2>

              <p className="max-w-md text-sm leading-6 text-zinc-600">
                A selection of academic, research, AI, and full-stack
                projects.
              </p>
            </div>

            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/25 hover:shadow-[0_25px_80px_rgba(0,0,0,0.35)] sm:p-10"
                >
                  <div className="mb-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-600">
                      {project.number}
                    </span>

                    {project.status && (
                      <span className="rounded-full border border-cyan-400/15 bg-cyan-400/[0.05] px-3 py-1 text-xs text-cyan-300/80">
                        {project.status}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-5 leading-7 text-zinc-500">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm leading-6 text-zinc-500">
                    {project.details.map((detail) => (
                      <li key={detail} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/5 bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400 transition hover:border-cyan-400/25 hover:text-cyan-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
                    >
                      View on GitHub
                      <ExternalLink size={15} />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
                {/* Education */}
        <section
          id="education"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              05 — Education
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Academic background.
            </h2>

            <div className="mt-14 space-y-5">
              <EducationCard
                degree="Bachelor of Technology in Computer Science and Engineering"
                institution="Lakireddy Bali Reddy College of Engineering"
                location="Andhra Pradesh"
                duration="2023 – 2027"
                result="CGPA: 7.96 / 10"
              />

              <EducationCard
                degree="Intermediate (Class XII)"
                institution="SriChaitanya Junior College"
                location="Amalapuram, Andhra Pradesh"
                duration="2020 – 2022"
                result="Percentage: 80.2%"
              />

              <EducationCard
                degree="Secondary School Education (Class X)"
                institution="ZPP High School"
                location="Cheyyeru, Andhra Pradesh"
                duration="2019 – 2020"
                result="Percentage: 86%"
              />
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              06 — Certifications
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Learning beyond the classroom.
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {certifications.map((certification, index) => (
                <motion.div
                  key={certification}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -15 : 15,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.06] to-white/[0.015] p-5 transition hover:-translate-y-1 hover:border-cyan-400/25"
                >
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.45)]" />

                  <p className="text-sm leading-6 text-zinc-400">
                    {certification}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/10 px-6 py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-400/60">
              07 — Contact
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                  Let's build something{" "}
                  <span className="text-zinc-500">meaningful.</span>
                </h2>

                <p className="mt-7 max-w-xl text-lg leading-8 text-zinc-500">
                  I'm open to opportunities where I can apply my skills in
                  software development, AI/ML, and technology-driven problem
                  solving.
                </p>
              </div>

              <div className="lg:pt-3">
                <a
                  href="mailto:tallaganesh17@gmail.com"
                  className="flex items-center gap-4 border-b border-white/10 py-5 text-zinc-300 transition hover:text-white"
                >
                  <Mail size={20} />
                  <span>tallaganesh17@gmail.com</span>
                </a>

                <a
                  href="https://github.com/TallaSatyaGanesh"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-white/10 py-5 text-zinc-300 transition hover:text-white"
                >
                  <Code2 size={20} />
                  <span>GitHub</span>
                  <ExternalLink size={15} className="ml-auto" />
                </a>

                <a
                  href="https://linkedin.com/in/talla-satya-ganesh-0a26842ba"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-white/10 py-5 text-zinc-300 transition hover:text-white"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-zinc-300 text-xs font-bold text-black">
                    in
                  </span>

                  <span>LinkedIn</span>

                  <ExternalLink size={15} className="ml-auto" />
                </a>

                <a
                  href="https://www.hackerrank.com/profile/tallaganesh17"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border-b border-white/10 py-5 text-zinc-300 transition hover:text-white"
                >
                  <Code2 size={20} />

                  <span>HackerRank</span>

                  <ExternalLink size={15} className="ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-cyan-400/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Talla Satya Ganesh</p>

          <p>Built with React · Vite · Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <p className="text-2xl font-semibold text-white">{value}</p>

      <p className="mt-1 text-sm text-zinc-600">{label}</p>
    </div>
  );
}

function EducationCard({
  degree,
  institution,
  location,
  duration,
  result,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/[0.02] sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-5">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300 sm:flex">
            <GraduationCap
              size={20}
              className="text-zinc-400"
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold leading-7">
              {degree}
            </h3>

            <p className="mt-2 text-zinc-400">
              {institution}
            </p>

            <p className="mt-1 text-sm text-zinc-600">
              {location}
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-sm text-zinc-600">
            {duration}
          </p>

          <p className="mt-2 text-sm font-medium text-zinc-300">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;