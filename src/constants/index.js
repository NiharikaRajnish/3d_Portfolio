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
      title: "Full Stack Web / Mobile Developer",
      icon: web,
    },
    {
      title: "UX / UI Designer",
      icon: mobile,
    },
    {
      title: "Python / Java Software Engineer",
      icon: backend,
    },
    {
      title: "Data Engineer",
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
    title: "React.js Developer",
    company_name: "Practices in Enabling Technologies (PiET) Lab.",
    icon: starbucks,
    iconBg: "#0000",
    date: "Sep 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "KPM Power",
    icon: tesla,
    iconBg: "#000000",
    date: "Sep 2024 - Dec 2024",
    points: [
      "Leading the development of a dynamic UX/UI interface that interfaces directly with a advanced battery management system, prioritizing user experience while delivering actionable insights and operational efficiency.",
      "Providing comprehensive support to the Development Team through a variety of tasks, including coding, debugging, and optimizing processes to streamline project workflows.",
      "Conducting comprehensive quality analysis and testing of web interfaces to ensure high standards of functionality, reliability, and user satisfaction, employing a meticulous approach to problem-solving and quality assurance.",
    ],

  },
  {
    title: "Software Engineer",
    company_name: "Hydro One",
    icon: tesla,
    iconBg: "#000000",
    date: "May 2022 -Sep 2023",
    points: [
      "Empowered field engineers by managing day-to-day operations of the Protection and Control Management Information System (PCMIS), utilizing SQL Server Management Studio to extract crucial data through custom SQL database queries.",
      "Engineered and executed robust data audit protocols by leveraging VBA code in Excel spreadsheets.",
      "Assisted with the development of a Natural Language Processing application, employing Machine Learning to identify patterns and trends in data, and provide insights to categorize workplace injuries/safety reports. ",
      "Delivered comprehensive support for multiple applications, including MS Access, MS SharePoint, SAP, and Microsoft Dynamics CRM, while orchestrating seamless upgrade deployments with Information Service Providers"
    ],
  },
  {
    title: "Angular Web Developer",
    company_name: "CIBC",
    icon: shopify,
    iconBg: "#000000",
    date: "May 2021-Sept 2021",
    points: [
      "Engaged in the end-to-end technical design, development, and seamless integration of cross-functional, multi-platform application systems.",
      'Led the development efforts for the enhancement of the "Investors Edge" a trading platform enhancement: online and mobile trading platform. ',
      "Crafted robust, scalable code using cutting-edge technologies such as Angular, TypeScript, HTML, and CSS. Ensured the platform's adaptability to evolving market demands.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Online Marketing Assistant",
      company_name: "Brand Energy Digital Marketing",
      icon: meta,
      iconBg: "#000000",
      date: "Jan 2020 – May 2021",
      points: [
        "Assisted in developing and executing digital marketing campaigns across various platforms, including social media, email, and display advertising.",
        "Demonstrated proficiency with Google Analytics & Google Tag Manager to analyze campaign performance and track key metrics.",
        "Applied experience with enhanced e-commerce solutions such as Shopify, BigCommerce, WooCommerce to develop and implement e-commerce strategies that drive sales and conversions.",
        "Stayed updated on industry trends and best practices in digital marketing, online advertising, and social media to propose innovative strategies.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Nia proved me wrong.",
      name: "Sara Lee",
      designation: "Senior Full Stack Developer",
      company: "CIBC",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
  
    {
      testimonial:
        "After Nia optimized our website, our traffic increased by 50%. We can't thank her enough!",
      name: "Lisa Wang",
      designation: "Head of Sales",
      company: "Brand Energy Digital",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },

    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Nia does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Le-Pa Visualizer",
      description:
        "Web-based platform that allows users (University Professors) to visualize adaptive learning pathways. Built with React.js and D3.JS library",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Restapi",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/LePa-YU/d3_graph",
    },
    {
      name: "Style House E-Commerce",
      description:
        "An e-commerce website application built using MongoDB, Express, React, and Node.js (MERN stack). It provides a platform for users to browse products, add them to the cart, and make purchases.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Node.js",
          color: "green-text-gradient",
        },
        {
          name: "MondoDB",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/NiharikaRajnish/ecom_website?tab=readme-ov-file",
    },
    {
      name: "Zebra11 Converter",
      description:
        "Java web application to convert musical tablature for guitar, bass, or drums into Music XML files, or sheet music.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Spring Boot",
          color: "green-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Madison-Hartley/Hashir-Jamil-EECS-2311-Group11",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };