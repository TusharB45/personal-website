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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];


const experiences = [
  {
    title: "Developer",
    company_name: "Here Technologies",
    icon: starbucks,
    iconBg: "white",
    date: "Feb 2025",
    points: [
      "Acquired expertise in proprietary tools, digital mapping software, and navigation data attributes, with a focus on market insights and business use cases.",
      "Processed and updated map data using source materials to code attributes such as road names, addresses, speed categories, intersection data, restricted driving maneuvers, and administrative/postal codes.",
      "Ensured high data quality by adhering to database specifications, project requirements, and quality standards, meeting deadlines for assigned tasks.",
      "Collaborated with team members to verify map stability and accuracy, while ensuring alignment with regional mapping standards and organizational processes.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who is as committed to their clients' success as Tushar is.",
    name: "Rajesh Iyer",
    designation: " COO",
    company: "DesiTech Solutions",
    image: "",
  },
  {
    testimonial:
      "After tushar optimized our website, our traffic shot up by 50%. We are beyond grateful!.",
    name: "Anita Verma",
    designation: "CFO",
    company: "DEF Corp",
    image: "",
  },
  {
    testimonial:
      "I thought it was impossible to make a website as stunning as our product, but Tushar proved me wrong",
    name: "Priya Sharma",
    designation: "CTO",
    company: "456 Enterprises",
    image: "",
  },
];

const projects = [
  {
    name: "Estate flex",
    description:
      "Web application that enables users to list their real estate properties, view estimated price ranges for properties, and locate available holdings based on preferable location.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind Css",
        color: "green-text-gradient",
      },
      {
        name: "Mongo DB",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/TusharB45/Estate-Flex",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, experiences, testimonials, projects };
