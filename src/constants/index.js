import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  java,
  linux,
  bash,
  nodejs,
  mongodb,
  git,
  php,
  flutter,
  dart,
  firebase,
  sql,
  python,
  jiovio,
  freelancer,
  carrent,
  jobit,
  tripguide,
  horoscope,
  niral_backend,
  photo_studio,
  afar,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Bash",
    icon: bash,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Dart",
    icon: dart,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Self-Employed",
    icon: freelancer,
    iconBg: "#383E56",
    date: "Ongoing",
    points: [
      "Completed more than 5 projects for various clients, solving real-life problems using programming languages and frameworks.",
      "Delivered solutions in Python, Flutter, HTML, CSS, JavaScript, PHP, and more.",
      "Provided end-to-end development services including planning, design, implementation, and maintenance.",
      "Collaborated closely with clients to understand their requirements and deliver tailored solutions that meet their business needs.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "AFAR Technologies",
    icon: afar,
    iconBg: "#383E56",
    date: "Jan 2023 – Apr 2023",
    points: [
      "Designed and developed an application for cab booking, rental, and package delivery services similar to Uber.",
      "Developed and integrated backend APIs for seamless user authentication, ride booking, and payment processing.",
      "Reduced transaction time by 25% and increased successful bookings by 30%, significantly improving overall user experience.",
      "Technologies used: Flutter, Dart, Firebase, REST API, Microsoft SQL Server, Microsoft Azure, GetX, GMaps API.",
    ],
  },
  {
    title: "Flutter Developer",
    company_name: "Jiovio",
    icon: jiovio,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Planned, developed, tested, deployed, and maintained Flutter applications tailored for various healthcare needs.",
      "Implemented software changes and enhancements according to detailed design specifications, ensuring robust functionality and user satisfaction.",
      "Addressed complex challenges leveraging cutting-edge Cloud, Mobile, and App Technologies to deliver optimal solutions.",
      "Project links: AlloBaby App, AlloDoc App, SaveMom App.",
      "Technologies used: Flutter, Dart, Firebase, REST API, GetX, TensorFlow.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Horoscope Website",
    description:
      "A website that provides daily, weekly, and monthly horoscopes, along with detailed zodiac sign information and astrology-related content.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css, bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: horoscope,
    source_code_link: "https://astroselvendran.in/",
  },
  {
    name: "Photo Studio",
    description:
      "A web application for managing and showcasing a photo studio's portfolio, including features for photo uploads, gallery management, and client booking.",
    tags: [
      {
        name: "html, css",
        color: "blue-text-gradient",
      },
      {
        name: "javascript, jquery",
        color: "green-text-gradient",
      },
      {
        name: "php, mysql",
        color: "pink-text-gradient",
      },
    ],
    image: photo_studio,
    source_code_link: "https://github.com/VisaganSP/photo_studio/",
  },
  {
    name: "Niral Backend",
    description:
      "A backend service for handling user authentication, data management, and API interactions for a web application, built using modern backend technologies.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: niral_backend,
    source_code_link: "https://github.com/VisaganSP/niral_backend/",
  },
];

export { services, technologies, experiences, testimonials, projects };
