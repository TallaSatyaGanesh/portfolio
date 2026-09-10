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
} from "lucide-react";

import profileImage from "./assets/passport_image.jpeg";

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
  },
  {
    number: "02",
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
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-xl font-bold tracking-tight">
            TSG<span className="text-zinc-600">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>
            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>
            <a href="#education" className="transition hover:text-white">
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 px-4 py-2 text-sm transition hover:bg-white hover:text-black"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
          <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl" />

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
                  className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
                >
                  View My Projects
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>

                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 font-medium transition hover:bg-white/10"
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
                <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <img
                    src={profileImage}
                    alt="Talla Satya Ganesh"
                    className="h-[420px] w-[340px] object-cover sm:h-[500px] sm:w-[400px]"
                  />
                </div>

                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#111113]/90 px-5 py-4 backdrop-blur-xl">
                  <p className="text-xs uppercase tracking-widest text-zinc-600">
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
        <section id="about" className="border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
              01 — About Me
            </p>

            <div className="grid gap-12 lg:grid-cols-2">
              <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Building technology with{" "}
                <span className="text-zinc-500">purpose.</span>
              </h2>

              <div>
                <p className="text-lg leading-8 text-zinc-500">
                  I'm a Computer Science undergraduate with a strong
                  foundation in software development, machine learning, and
                  problem-solving.
                </p>

                <p className="mt-6 text-lg leading-8 text-zinc-500">
                  I have hands-on experience in full-stack development and
                  machine learning, along with research experience in
                  bioinformatics. I enjoy solving real-world problems and
                  continuously learning emerging technologies.
                </p>

                {/* Updated: CGPA removed because it is already shown above */}
                <div className="mt-8 grid max-w-md grid-cols-2 gap-4">
                  <Stat value="3" label="Internships" />
                  <Stat value="5" label="Projects" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
              02 — Skills
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Technologies I work with.
            </h2>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-7"
                >
                  <h3 className="text-lg font-semibold">{skill.category}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-400"
                      >
                        {item}
                      </span>
                    ))}
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
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
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
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex gap-5">
                      <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] sm:flex">
                        <Briefcase size={20} className="text-zinc-400" />
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

                    <span className="text-sm text-zinc-600">
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
        <section id="projects" className="border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
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
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20 sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-600">
                      {project.number}
                    </span>

                    {project.status && (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-500">
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
                        className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-zinc-400"
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
                      className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-300 transition hover:text-white"
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
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
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
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
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
                  className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                >
                  <div className="h-2 w-2 rounded-full bg-zinc-500" />

                  <p className="text-sm leading-6 text-zinc-400">
                    {certification}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-white/10 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-zinc-600">
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
      <footer className="border-t border-white/10 px-6 py-8">
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
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-5">
          <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 sm:flex">
            <GraduationCap size={20} className="text-zinc-400" />
          </div>

          <div>
            <h3 className="text-lg font-semibold leading-7">{degree}</h3>

            <p className="mt-2 text-zinc-400">{institution}</p>

            <p className="mt-1 text-sm text-zinc-600">{location}</p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <p className="text-sm text-zinc-600">{duration}</p>

          <p className="mt-2 text-sm font-medium text-zinc-300">
            {result}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;