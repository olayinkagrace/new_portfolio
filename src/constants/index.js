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
  job,
  beebuy,
  whatsapp,
  gym,
  vanlife,
  millionaire,
  threejs,
  tee,
  java,
  msql,
  reactnative,
  bootstrap,
  express,
  graphQL,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend",
    icon: web,
  },
  {
    title: "Backend",
    icon: mobile,
  },
  {
    title: "mobile",
    icon: backend,
  }
]
  

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
    name: "Next JS",
    icon: html,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "GraphQl",
    icon: graphQL,
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "SQL",
    icon: msql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  {
    testimonial:
      "I have to say this, the website you made for my business is superb... Thank you!",
    name: "Esther",
    designation: "CEO",
    company: "Tee Square Couture",
    image: tee,
  },
];

const projects = [
  {
    name: "BeeBuy",
    description:
      "An e-commerce website where users can conviently purchase products ranging fron different categories. Sellers can also create an admin account which enables them display available products for sales.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "node js",
        color: "blue-text-gradient",
      },
      {
        name: "express js",
        color: "green-text-gradient",
      },
      {
        name: "restApi",
        color: "red-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: beebuy,
    source_code_link: "https://github.com/olayinkagrace/beebuy",
    demo_link: "https://beebuyapp.onrender.com",
  },

  {
    name: "Van Life",
    description:
      "This web app allows van owners to post their vans for hires and also interest people can connect",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
    ],
    image: vanlife,
    source_code_link: "https://github.com/olayinkagrace/van-life",
    demo_link: "https://van-life-t4zz.onrender.com",
  },

  {
    name: "Gym",
    description:
      "A fully responsive web base website for users who are interested in staying fit. Users can register and sign up for their preferred classes based on their leisure time ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link: "https://github.com/olayinkagrace/gym",
    demo_link: "https://gym-0zsr.onrender.com/",
  },
  {
    name: "Who wants to be a millionaire",
    description:
      "This app is similiar to the popular 'who wants to be a millionaira game'. Each correctquestion has a reward and the user is moved up the ladder for a tougher question and more reward",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
    ],
    image: millionaire,
    source_code_link: "https://github.com/olayinkagrace/millionaire-quiz-app",
    demo_link: "https://ogmillionaire.netlify.app/",
  },
  {
    name: "WhatsApp Clone",
    description:
      "A chatting app which can be use to stay in touch with friends, lovers and family, anytime and anywhere.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "graphQL",
        color: "green-text-gradient",
      },
      {
        name: "react navigation",
        color: "pink-text-gradient",
      },
      {
        name: "AWS amplify",
        color: "red-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: whatsapp,
    source_code_link: "https://github.com/olayinkagrace/ogwhatsapp",
    demo_link:
      "https://expo.dev/@olayinkagrace/client?serviceType=classic&distribution=expo-go",
  },
  {
    name: "Job It",
    description:
      "A mobile application that enables users browse developer jobs, view estimated salary and other requirements for the job and also easily apply for the job if interested.",
    tags: [
      {
        name: "restApi",
        color: "blue-text-gradient",
      },
      {
        name: "react native",
        color: "green-text-gradient",
      },
      {
        name: "react navigation",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "red-text-gradient",
      },
    ],
    image: job,
    source_code_link: "https://github.com/olayinkagrace/job-search-app",
    demo_link:
      "https://expo.dev/@olayinkagrace/Job_App?serviceType=classic&distribution=expo-go",
  },
];

export { services, technologies, experiences, testimonials, projects };
