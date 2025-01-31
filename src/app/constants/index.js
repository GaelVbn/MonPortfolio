import project1 from "../assets/projects/Carby.png";
import project2 from "../assets/projects/moviz.png";
import hackatweet from "../assets/projects/hackatweet.png";
import blog from "../assets/projects/blog.png";

export const HERO_CONTENT = `Hi, I'm Gael. 👋🏻
I'm a passionate 26-year-old web and mobile developer.   🚀`;

export const ABOUT_TEXT = `Hello! My name is Gael, and I am a passionate 26-year-old web and mobile developer. From a young age, I have always been fascinated by technology and how it can transform our daily lives.

My journey into development began recently with the program at La Capsule. This BootCamp, specialized in full-stack web and mobile application development, allowed me to affirm my passion for web and mobile development from my very first lines of code. During this training, I learned to master JavaScript as well as libraries such as React and React Native.

At the end of my training, I had the opportunity to participate in a mobile application project focused on ecology and our environmental impact. This project allowed me to hone my skills in both back-end and front-end development.

My goal is to continue evolving as a developer, learning new technologies, and working on innovative projects. I am always looking for new opportunities and challenges to tackle. 

Feel free to contact me if you have interesting projects or collaborations in mind. Thank you for taking the time to read my story!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Carby",
    image: project1,
    url: "./Carby",
    description:
      "Carby aims to empower and inform users about climate issues while providing a fun and engaging experience. This app is designed for individuals concerned about their environmental impact, seeking to adopt more sustainable lifestyles, and interested in managing their personal carbon footprint.",
    technologies: ["React-Native", "Expo", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Blog",
    image: blog,
    url: "https://verse-versed.netlify.app/",
    description:
      "This project is a personal blog developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) that allows me to share articles on topics I am passionate about. Inspired by Medium's clean and minimalist style, I designed a user interface that emphasizes readability and the reading experience. With the integration of Editor.js, writing articles becomes intuitive and seamless, providing an enjoyable experience for both the author and the readers.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Hackatweet",
    image: hackatweet,
    url: "https://hackatweet-frontend-7shu.vercel.app/",
    description:
      "Hackatweet is an application project developed during a hackathon as part of my training at La Capsule. The app replicates key features of X (formerly known as Twitter), allowing users to join the community by signing up, posting tweets, and sharing trends.",
    technologies: ["React", "PostgreSQL", "Node.js", "Express"],
  },
  {
    title: "MyMoviz",
    image: project2,
    description:
      "MyMoviz is a sleek and user-friendly application that provides access to the latest movies through a powerful API. With MyMoviz, you can easily browse the newest releases, rate films with a star system. You can also save your top picks by adding them to your personal favorites list, which can be quickly accessed via a convenient popover feature, ensuring your favorite movies are always just a click away.",
    url: "https://my-moviz-frontend-fawn.vercel.app",
    technologies: ["React", "CSS", "API"],
  },
];

export const CONTACT = {
  address: "Grenoble, France, 38100",
  phoneNo: "+33 6 58 40 96 72",
  email: "gael.vanbeveren98@gmail.com",
};
