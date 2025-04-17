import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import {
  SiExpress,
  SiJsonwebtokens,
  SiMongoose,
  SiNextdotjs,
  SiPrisma,
  SiSocketdotio,
  SiWebrtc,
} from "react-icons/si";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaFigma,
  FaDocker,
  FaGitAlt,
  FaLinux,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiTypescript,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiFlutter,
} from "react-icons/si";
import { DiJava, DiTerminal } from "react-icons/di";

import skill_share_certificate from "./assets/certif_page-0001.jpg";
import { VscJson } from "react-icons/vsc";

export const tabs = [
  { name: "About", id: "hero" },
  { name: "Skill", id: "skill" },
  { name: "Projects", id: "projects" },
  { name: "Experiences", id: "experiences" },
  { name: "Achievements", id: "achievements" },
];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        icon: <FaHtml5 color="#e34f26" />,
      },
      {
        skill: "CSS",
        icon: <FaCss3Alt color="#1572B6" />,
      },
      {
        skill: "JavaScript",
        icon: <SiJavascript color="#f7df1e" />,
      },
      {
        skill: "Tailwind",
        icon: <SiTailwindcss color="#06b6d4" />,
      },
      {
        skill: "Bootstrap",
        icon: <SiBootstrap color="#7952B3" />,
      },
      {
        skill: "React",
        icon: <FaReact color="#61DAFB" />,
      },
      {
        skill: "Flutter",
        icon: <SiFlutter color="#02569B" />,
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node JS",
        icon: <FaNodeJs color="#339933" />,
      },
      {
        skill: "TypeScript",
        icon: <SiTypescript color="#3178c6" />,
      },
      {
        skill: "Java",
        icon: <DiJava color="#f89820" />,
      },
      {
        skill: "Python",
        icon: <FaPython color="#3776AB" />,
      },
      {
        skill: "PHP",
        icon: <SiPhp color="#777BB4" />,
      },
      {
        skill: "MySQL",
        icon: <SiMysql color="#4479A1" />,
      },
      {
        skill: "MongoDB",
        icon: <SiMongodb color="#47A248" />,
      },
      {
        skill: "Prisma",
        icon: <SiPrisma />,
      },
    ],
  },
  {
    title: "Others",
    data: [
      {
        skill: "Figma",
        icon: <FaFigma color="#F24E1E" />,
      },
      {
        skill: "Docker",
        icon: <FaDocker color="#2496ED" />,
      },
      {
        skill: "Git",
        icon: <FaGitAlt color="#F05032" />,
      },
      {
        skill: "Linux",
        icon: <FaLinux color="#FCC624" />,
      },
      {
        skill: "Bash",
        icon: <DiTerminal color="#4EAA25" />,
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    title: "FilmLane",
    images: [
      "https://raw.githubusercontent.com/DeepBlue-dot/FilmLane/refs/heads/main/assets/pelicula_1_png%20by%20Ramiro.jpeg",
      "https://raw.githubusercontent.com/DeepBlue-dot/FilmLane/refs/heads/main/assets/pelicula_1_png%20by%20Ramiro.jpeg",
    ],
    category: "Web",
    description: `This modern movie streaming platform harnesses TMDB's extensive data to deliver real-time browsing of movies and TV shows. 
                  Crafted with TypeScript, React, and Node.js, it features secure JWT authentication, personalized watchlists, and a resume-enabled watch history. 
                  Its responsive UI, and robust backend with Express, Prisma, and MySQL create an engaging user experience.`,
    demoLink: "https://github.com/DeepBlue-dot/FilmLane",
    githubLink: "https://github.com/DeepBlue-dot/FilmLane",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479A1" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        iconColor: "#3178C6",
      },
      {
        name: "Prisma",
        icon: <SiPrisma />,
      },
    ],
  },
  {
    id: 1,
    title: "PicShare",
    images: [
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050629.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050700.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050747.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050759.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050900.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050921.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415050932.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/PicShare/refs/heads/main/assets/ScreenShot%20Tool%20-20250415051011.png",
    ],
    category: "Web",
    description: `A full-stack web application inspired by Pinterest, built with React (frontend), Node.js (backend), and MongoDB (database). This project allows users to create, view, like, and save posts with images, as well as organize them into boards.`,
    demoLink: "https://github.com/DeepBlue-dot/PicShare",
    githubLink: "https://github.com/DeepBlue-dot/PicShare",
    stack: [
      {
        name: "ReactJs",
        icon: <DiReact />,
        iconColor: "skyblue",
      },
      {
        name: "NodeJs",
        icon: <FaNodeJs />,
        iconColor: "green",
      },
      {
        name: "ExpressJs",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "Mongoose",
        icon: <SiMongoose />,
        iconColor: "#000000",
      },
      {
        name: "Jsonwebtokens",
        icon: <SiJsonwebtokens />,
      },
    ],
  },
  {
    id: 1,
    title: "VibeCall",
    images: [
      "https://raw.githubusercontent.com/DeepBlue-dot/VibeCall/refs/heads/main/assets/vibecall-UI.png",
    ],
    category: "Web",
    description: `A minimalist 1:1 video calling platform using WebRTC for peer-to-peer video/audio and Next.js API routes for signaling (no separate server). 
                  Features device selection, real-time chat, and connection status tracking.`,
    demoLink: "https://github.com/DeepBlue-dot/PicShare",
    githubLink: "https://github.com/DeepBlue-dot/PicShare",
    stack: [
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        iconColor: "#000000",
      },
      {
        name: "WebRTC",
        icon: <SiWebrtc />,
        iconColor: "#333333",
      },
      {
        name: "Socket.IO",
        icon: <SiSocketdotio />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        iconColor: "#38BDF8",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        iconColor: "limegreen",
      },
      {
        name: "Mongoose",
        icon: <SiMongoose />,
        iconColor: "#000000",
      },
    ],
  },
  {
    id: 1,
    title: "BioTech-WebSite",
    images: [
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415045931.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050026.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050049.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050118.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050140.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050158.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050224.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050249.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050300.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/BioTech-WebSite/refs/heads/main/resource/design/done/ScreenShot%20Tool%20-20250415050314.png",
    ],
    category: "Web",
    description: `A modern, responsive website for the BioTech Research Institute, designed to showcase ongoing research, achievements, team members, and key updates in biotechnology. 
                  Built using HTML, CSS, and JavaScript, this website serves as a central hub for researchers, collaborators, and the public to stay informed about groundbreaking advancements in the field.`,
    demoLink: "https://deepblue-dot.github.io/BioTech-WebSite/",
    githubLink: "https://github.com/DeepBlue-dot/BioTech-WebSite",
    stack: [
      {
        name: "HTML",
        icon: <FaHtml5 color="#e34f26" />,
        iconColor: "green",
      },
      {
        name: "CSS",
        icon: <FaCss3Alt color="#1572B6" />,
        iconColor: "green",
      },
      {
        name: "JavaScript",
        icon: <SiJavascript color="#f7df1e" />,
        iconColor: "green",
      },
      {
        name: "Figma",
        icon: <FaFigma color="#F24E1E" />,
      },
    ],
  },
  {
    id: 2,
    title: "ID-card-Replacement-system",
    images: [
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-23.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-25.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-25_1.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-26.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-26_1.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-28.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-28_1.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-28_2.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-29.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-30.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-30_1.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-32.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-32_1.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-33.png",
      "https://raw.githubusercontent.com/DeepBlue-dot/ID-card-Replacement-system/refs/heads/main/about/images/2025-04-15_12-33_1.png",
    ],
    category: "Apps",
    description: `The ID Card Replacement (Appointment) System for AASTU Students aims to streamline the process of replacing lost or damaged ID cards at AASTU. The current process is often cumbersome and time-consuming for both students and administrative staff. This system aims to modernize and simplify the process, improving the overall student experience and administrative efficiency.`,
    demoLink: "https://github.com/DeepBlue-dot/ID-card-Replacement-system/",
    githubLink: "https://github.com/DeepBlue-dot/ID-card-Replacement-system/",
    stack: [
      {
        name: "Java",
        icon: <DiJava color="#f89820" />,
      },
      {
        name: "JavaFX",
        icon: <DiJava color="#f89820" />,
      },
      {
        name: "Undertow",
        icon: <DiJava color="#f89820" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql color="#4479A1" />,
      },
    ],
  },
  {
    id: 2,
    title: "Futter-App",
    images: [
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    ],
    category: "Apps",
    description: `A Flutter Quiz App is a lightweight, cross‑platform mobile project that presents shuffled multiple‑choice questions from JSON, 
                  shows real‑time correct/incorrect feedback, and tracks your score with a progress bar. 
                  Built with Flutter’s Material widgets and simple state management, 
                  it offers smooth animations and a summary screen to review your results or retry.`,
    demoLink: "https://github.com/DeepBlue-dot/futter-first-app",
    githubLink: "https://github.com/DeepBlue-dot/futter-first-app",
    stack: [
      {
        name: "Flutter",
        icon: <SiFlutter color="#02569B" />,
      },
      {
        name: "JSON",
        icon: <VscJson color="#000000" />,
      },
      {
        name: "Figma",
        icon: <FaFigma color="#F24E1E" />,
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Federal_Police_Commission_of_Ethiopia_Coat_of_Arms_and_Logo.png/250px-Federal_Police_Commission_of_Ethiopia_Coat_of_Arms_and_Logo.png",
    role: "Frontend Intern",
    company: "Ethiopian Federal Police",
    date: "Summer 2023",
    desc: "Interned over the summer, building and maintaining frontend tools using Angular, React, and Tailwind CSS; collaborated with team members using Git for version control.",
    skills: ["Angular", "React", "Tailwind CSS", "Git"],
    doc: "",
  },
  {
    id: 1,
    img: "./images/Skill-Spectrum-logo.jpg",
    role: "Python Instructor",
    company: "Skill-Spectrum",
    date: "September 2021 - June 2023",
    desc: "Taught Python programming to university students, covering fundamentals, data structures, and project-based learning. Developed curriculum modules, delivered lectures and hands-on labs, assessed student progress, and provided mentorship, leading to improved coding proficiency and successful project completions.",
    skills: ["Python"],
    doc: "./docs/certif.pdf",
  },
];

export const achievements = [
  {
    image: skill_share_certificate,
    review: `Certifies teaching proficiency in Python and related tools, with a focus on delivering structured programming education and mentoring students.`,
    doc: "./docs/certif.pdf",
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "yeabsira710@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone Number",
    value: "+251948168057",
    icon: <IoCallOutline />,
  },
  {
    title: "Address",
    value: "Ethiopia, Addis Ababa",
    icon: <IoLocationOutline />,
  },
];

export const socialHandles = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/DeepBlue-dot",
  },
  {
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/yeabsira-fikadu-36908b321",
  },
  {
    name: "Telegram",
    icon: <FaTelegram />,
    link: "https://t.me/YeabsiraF",
  },
  {
    name: "Email",
    icon: <MdOutlineAlternateEmail />,
    link: "mailto:yeabsira710@gmail.com",
  },
];

export const footer = [
  {
    title: "Explore",
    routes: [
      { name: "About", id: "hero" },       // Updated from "About Me" to "About" with hero ID
      { name: "Skill", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Projects", id: "projects" },
      { name: "Experiences", id: "experiences" }, // Added new experiences section
      { name: "Achievements", id: "achievements" }, // Fixed casing to match tabs
    ],
  },
  {
    title: "Others",
    routes: [
      { name: "Privacy Policy" },
      { name: "Terms and Conditions" },
      { name: "Cookie Policy" },
    ],
  },
];
