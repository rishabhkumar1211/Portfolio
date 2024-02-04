import {
  mobile,
  backend,
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
  carrent,
  movies,
  ecomm,
  carsgame,
  threejs,
  costa,
  selectsource,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React Native Developer",
    company_name: "Select Source International",
    icon: selectsource,
    iconBg: "#383E56",
    date: "March 2022 - Jun 2022",
    points: [
      "Developing and maintaining web applications using React Native and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Appolo Costa Cloud",
    icon: costa,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Developed and implemented a robust software solution that revolutionized the approval processes across departments, ensuring seamless coordination and reducing time-to-approval by 50%; this resulted in improved efficiency, enhanced collaboration, and accelerated project delivery timelines(Paperless Office).",
      "Successfully created Data Management System using React.js, Material-Ui, Redux that allows users to upload, delete, download, favoriting, and sharing files and folders similar to Google Drive that reduces the real paper-work by 100% .",
      "Collaborated with developers to design and develop a user- friendly front-end interface of RTI (Right to Information) application with an optimized user experience; boosted user engagement by 25% and reduced bounce rate by 15% .",
      "Orchestrated the development of algorithms, API integration and flowchart with a team of 5 developers ; delivered a fully functional and scalable application that processed 50K+ data points daily with 99% accuracy .",
      "Resolve the daily basis issue, bug or any additional feature that provided in Jira by Testing Unit which makes application bug-free and updated to the current requirement by 100% .",
    ],
  },
];

const projects = [
  {
    name: "MOVIESVERSE",
    description:
      "A simple web app made with REACT to search any movie and Web/TV show. Technology used are react.js , material-ui, tmdb-api for all data related queries,redux-toolkit, redux-toolkit-query.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "material-ui",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: movies,
    source_code_link: "https://github.com/rishabhkumar1211/MOVIESVERSE",
  },
  {
    name: "Two Cars-MASTER GAME",
    description:
      "Utilize HTML, CSS and JavaScript to create a interactive game, featuring two cars and challenging obstacles ; increased user engagement and retention by 40% through immersive gameplay mechanics.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carsgame,
    source_code_link: "https://github.com/rishabhkumar1211/TWOCARS-MASTER",
  },
  {
    name: "Products",
    description:
      "Elevate your business with our high-performance MERN stack e-commerce platform. Featuring an intuitive admin panel, Stripe payment integration, cloud deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
    ],
    image: ecomm,
    source_code_link: "https://github.com/rishabhkumar1211/Ecommerce-Frontend",
  },
];

export { services, technologies, experiences, projects };
