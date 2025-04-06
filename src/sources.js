import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaTelegram } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import { SiAdobexd } from "react-icons/si";
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

import client1 from "./assets/client-1.jpeg";
import client2 from "./assets/client-2.jpeg";
import client3 from "./assets/client-3.jpeg";
import client4 from "./assets/client-4.jpeg";
import client5 from "./assets/client-5.jpeg";

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
    title: "AI Powered School",
    images: [
      "https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png",
      "https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png",
      "https://cdn.dribbble.com/userupload/10064191/file/original-091c06a630285b93a5f81e29e882fe3c.png",
    ],
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "XD",
        icon: <SiAdobexd />,
        iconColor: "skyblue",
      },
    ],
  },
  {
    id: 2,
    title: "E-Commerce Application",
    images: [
      "https://cdn.dribbble.com/userupload/8002230/file/original-c8eec16edea4d5c836b2bfabe7fbaa5a.jpg",
    ],
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
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
    ],
  },
  {
    id: 3,
    title: "Robotic Engineering Web Application",
    images: [
      "https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png",
      "https://s3-alpha.figma.com/hub/file/5101537097/c4a1ed2c-4ab9-43fb-a248-d7ac6b0c3161-cover.png",
    ],
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
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
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
      {
        name: "MongoDBT",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    id: 4,
    title: "Project Management application",
    images: [
      "https://miro.medium.com/v2/resize:fit:1400/1*6iO0wm8q4cByvxY6kB9WiQ.png",
    ],
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
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
    ],
  },
  {
    id: 5,
    title: "Mobile bank - App Design",
    images: [
      "https://i.pinimg.com/originals/a0/be/c3/a0bec3706210e6ab28470eee95bf5889.png",
    ],
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "Figma",
        icon: <CgFigma />,
        iconColor: "orangered",
      },
    ],
  },
  {
    id: 6,
    title: "Quiz App Development",
    images: [
      "https://i.pinimg.com/originals/b3/35/02/b33502e465346ace2a7f1df203d851a3.jpg",
    ],
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stack: [
      {
        name: "React Native",
        icon: <TbBrandReactNative />,
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
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/neurobit.jpeg?alt=media&token=1cacbb7b-e5ea-4efb-9b3d-f5a31b9564ad",
    role: "Frontend Engineer Intern",
    company: "Neurobit",
    date: "June 2023 - Nov 2023",
    desc: "Enhanced user experiences on Neurobit PSG & Hybrid, Portals by resolving bugs & reduced load time by 40%. Built Neurobit Analytics portal using React Js with seamless interaction of REST APIs using AXIOS optimized with React Query. Refactored previous code to TypeScript, updated with new dependency and integrated Vite with Jest for Unit Testing.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Screenshot%20from%202024-01-25%2022-38-31.png?alt=media&token=2785903f-1a4e-41f5-afd2-6adcfe56d058",
  },
  {
    id: 1,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "DevOps & Fullstack Engineering Intern",
    company: "Flipr Inovations Pvt. Ltd.",
    date: "Aug 2023 - Oct 2023",
    desc: "Built Flipr Connect Platforms using React Js integrated GraphQL with AXIOS, created High level Design and Figma design. Built Backend with GraphQL and Node JS and connected with MongoDb - Reducing API calls by 20%. Dockerized and automated with Kubernetes & Jenkins CI/CD deployed in AWS-EC2 added Prometheus & Grafana for monitoring.",
    skills: [
      "Docker",
      "Terraform",
      "AWS",
      "EC2",
      "Portainer",
      "Nginx",
      "JavaScript",
      "TypeScript",
      "Node Js",
      " Next Js",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1696514649120.jpeg?alt=media&token=e7f6757b-edfa-4138-a692-d6709eeef3e2",
  },
  {
    id: 2,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Rudraksha.jpeg?alt=media&token=8f83f41e-d0a1-486f-9c7f-dd4cd1d09e8d",
    role: "Android Developer Intern",
    company: "Rudraksha Welffare Foundation",
    date: "June 2021 - Oct 2021",
    desc: "• Built RudraShakti - Astrologer App, with MVVM Architecture using Java and Android Studio integrating Firebase SDK. Created One to One video call integration with Socket.IO and Firebase cloud functions and integrated with Retrofit. Created Low Level Design and converted Figma design to XML code.",
    skills: [
      "Android",
      "Java",
      "Kotlin",
      "XML",
      "Node Js",
      "Cloud Firestore",
      "Firebase",
      "Figma",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/buckoid-917cf.appspot.com/o/WhatsApp%20Images%202023-05-05%20at%2012.07.39%20AM.jpeg?alt=media&token=9f0e1648-568b-422d-bd0b-1f125f722245",
  },
  {
    id: 3,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/flipr.jpeg?alt=media&token=1d72532a-45eb-4c1a-a81a-c9bed9fec543",
    role: "Fullstack Externship",
    company: "Flipr",
    date: "June 2023 - July 2023",
    desc: "Built an employee management full stack web app used Docker and deployed on AWS ec2. I was the top performer in the program.",
    skills: [
      "ReactJS",
      "Redux",
      "NodeJs",
      "Material UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Docker",
      "AWS",
      "MongoDB",
    ],
    doc: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/1691181448873.jpeg?alt=media&token=ee85eb8f-7247-43cd-9a1d-ce9f58ea62a6",
  },
  {
    id: 4,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/gdsc.jpeg?alt=media&token=c162329c-efaa-4be8-a173-8d3f4c48ea70",
    role: "Android Developer",
    company: "DSC KIIT",
    date: "Nov2021 - Present",
    desc: "As an Android developer at the Google Developers Student Club (GDCS), I have had the opportunity to work on exciting projects and collaborate with talented developers who share my passion for technology. Through my involvement with GDCS, I have also had the opportunity to host and participate in numerous events, including hackathons, study jams, and workshops.",
    skills: [
      "Leadership",
      "Mobile Application Development",
      "Kotlin",
      "XML",
      "Figma",
    ],
  },
  {
    id: 5,
    img: "https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/girlScript.jpeg?alt=media&token=e656a621-cf3c-4230-bf0f-e74b4cec6035",
    role: "Open Source Contributor ",
    company: "GirlScript Summer of Code",
    date: "May 2023 - Present",
    desc: "Contributed to different open-source projects and learn from industry experts",
  },
];

export const clients = [
  {
    image: client1,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laboris`,
  },
  {
    image: client2,
    name: "Richael Linda",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: client3,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
           veniam, quis nostrud exercitation ullamco laborisveniam, quis nostrud 
           exercitation ullamco laborisveniam, quis nostrud exercitation ullamco laboris`,
  },
  {
    image: client4,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    image: client5,
    name: "Ndubisi John",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];

export const contactOptions = [
  {
    title: "Email",
    value: "mradinuba@gmail.com",
    icon: <MdOutlineAlternateEmail />,
  },
  {
    title: "Phone Number",
    value: "+2348149121918",
    icon: <IoCallOutline />,
  },
  {
    title: "Address",
    value: "Gwarinpa, Abuja, Nigeria",
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
      { name: "About Me", id: "about" },
      { name: "Skill", id: "skill" },
    ],
  },
  {
    title: "Trusted",
    routes: [
      { name: "Services", id: "services" },
      { name: "Projects", id: "projects" },
      { name: "Achievements", id: "Achievements" },
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
