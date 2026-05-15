// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Aakash's Portfolio",
  description:
    "Full Stack Developer specializing in Java, Spring Boot, React.js and AI Integration using LangChain and Google Gemini.",
  og: {
    title: "Aakash Vajpayee Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Aakash Vajpayee",
  logo_name: "AakashVajpayee",
  nickname: "Akaizen",
  subTitle:
    "Full Stack Developer with expertise in Java, Spring Boot, React.js and AI Integration. Building production-grade apps and multi-agent AI systems.",
  resumeLink:
    "https://docs.google.com/document/d/1ZopcrbLdpNDzFXekO9HPgwqyWnTuYiC9qLCeWG5HH-g/edit?usp=sharing",
  portfolio_repository: "#",
  githubProfile: "https://github.com/Aakash-vajpayee",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Aakash-vajpayee",
  // linkedin: "www.linkedin.com/in/aakashvajpayee",
  // gmail: "vajpayeeaakash1@gmail.com",
  // gitlab: "https://gitlab.com/Aakash-vajpayee",
  // twitter: "https://x.com/VajpayeeAa28436",

  {
    name: "Github",
    link: "https://github.com/Aakash-vajpayee",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/aakashvajpayee",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@scriptsagedev",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:vajpayeeaakash1@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/VajpayeeAa28436",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building production-grade REST APIs using Java & Spring Boot",
        "⚡ Developing responsive UI with React.js, Redux Toolkit & Tailwind CSS",
        "⚡ JWT Authentication & secure route protection across full applications",
        "⚡ Real-time features using Socket.IO integrations",
        "⚡ Optimized database operations using Hibernate ORM",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          // style: {
          //   color: "#CC6699",
          // },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring-icon",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
          // style: {
          //   color: "#CB3837",
          // },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#323330",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          // style: {
          //   color: "#663399",
          // },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing responsive and user-friendly interfaces for web applications",
        "⚡ Creating wireframes, layouts and component flows for better user experience",
        "⚡ Implementing clean UI using Tailwind CSS with reusable React components",
        "⚡ Understanding design principles to bridge gap between design and development",
      ],
      softwareSkills: [
        {
          skillName: "React.js",
          fontAwesomeClassname: "logos:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: { color: "#38BDF8" },
        },
      ],
    },
    {
      title: "AI & LLM Integration",
      fileName: "AiLLMImg",
      skills: [
        "⚡ Building multi-agent AI systems using LangChain & Google Gemini API",
        "⚡ Role-based prompt engineering for domain-specific reasoning",
        "⚡ Automated workflows with asynchronous AI pipelines",
        "⚡ Secure API management with rate-limit error handling",
        "⚡ Architecting enterprise-grade multi-agent orchestration systems",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "LangChain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "logos:openai-icon",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "logos:google-gemini",
          style: {
            color: "",
          },
        },
      ],
    },
    {
      title: "Database & Cloud/DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing and managing databases using MongoDB, MySQL & PostgreSQL",
        "⚡ Full-stack deployment — React frontend on Vercel, Node.js backend on Render with MongoDB Atlas",
        "⚡ Deploying and scaling applications on AWS EC2 & S3 cloud infrastructure",
        "⚡ Containerizing applications using Docker for consistent environments",
        "⚡ Version control, branching & team collaboration using Git & GitHub",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql-icon",
          // style: {
          //   color: "#326CE5",
          // },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          // style: {
          //   color: "#0089D6",
          // },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "logos:github-icon",
          // style: {
          //   color: "#0089D6",
          // },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "logos:vercel-icon",
          style: {
            color: "#0089D6",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Aakash_Vajpayee/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/akashbajpai167",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/akaizen",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@akashbajpai167/",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/aakashvajpayee",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "CSJM University, Kanpur",
      subtitle: "Bachelor of Computer Applications (BCA)",
      logo_path: "iiitk_logo.png",
      alt_name: "CSJM University",
      duration: "2024 - Present",
      descriptions: [
        "⚡ Studying core subjects like Data Structures, Algorithms, DBMS, Operating Systems and Computer Networks.",
        "⚡ Completed additional certifications in Full Stack Development, Generative AI and UI/UX Design.",
        "⚡ Actively building real-world projects combining Java, Spring Boot, React.js and AI integrations.",
      ],
      website_link: "https://www.csjmu.ac.in",
    },
    {
      title: "University of Lucknow",
      subtitle: "Bachelor of Science (B.Sc.) in Mathematics",
      logo_path: "iu_logo.png",
      alt_name: "University of Lucknow",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ Studied core Mathematics subjects including Calculus, Algebra, Statistics and Numerical Methods.",
        "⚡ Developed strong analytical and logical thinking skills applicable to software development.",
        "⚡ Built foundation in problem-solving which helps in Data Structures and Algorithm design.",
      ],
      website_link: "https://www.lkouniv.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DeepLearning in AI",
      subtitle: "- HP Life",
      logo_path: "hp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1hijYEsq_z1zDUKd6tC2hAnRUMXUvDRhT/view?usp=sharing",
      alt_name: "HP",
      color_code: "#FFBB0099",
    },
    {
      title: "Full Stack Development — Delta",
      subtitle: "- Apna College",
      logo_path: "apna_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1WC3NnvK6pIgtMLoltVRTCAVwNRSHRcw_/view?usp=sharing",
      alt_name: "Apna College",
      color_code: "#fff",
    },
    {
      title: "Introduction to Generative AI",
      subtitle: "- Google Cloud & Simplilearn",
      logo_path: "google_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/13Cpufbj9nDE-gvWz7-Hpq3b5zj6WgMe5/view?usp=sharing",
      alt_name: "Google Cloud",
      color_code: "#4285F499",
    },
    {
      title: "Automate with n8n",
      subtitle: "- Let's Upgrade",
      logo_path: "let_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1rixU1_ucxa1nnIRsIkslxO13HGz5UKpL/view?usp=sharing",
      alt_name: "Lets Upgrate",
      color_code: "#b15026a3",
    },
    {
      title: "Ethically Hack the Planet",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link: "#",
      alt_name: "Udemy",
      color_code: "#fff",
    },
    {
      title: "Social Media Marketing",
      subtitle: "- HP Foundation",
      logo_path: "hp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1VofKTXhUpT2E8OgcIDptWY0Xw-fF90YC/view?usp=sharing",
      alt_name: "HP",
      color_code: "#f4656599",
    },
    {
      title: "Data Science & Analytics",
      subtitle: "- HP",
      logo_path: "hp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/16-0PsFphTdKecea3W-FPzIEmgSWKRbsp/view?usp=sharing",
      alt_name: "HP",
      color_code: "#16d8bb",
    },

    {
      title: "Cybersecurity Foundations",
      subtitle: "- Linkedin Learning",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1CSDECJ0oPOtnW34Vaj5wFCY3Nc3XRMH1/view?usp=sharing",
      alt_name: "GCP",
      color_code: "#fdfbfb",
    },
    {
      title: "Generative AI",
      subtitle: "- PW & Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1jijZhq2wmbL4h30fYeKUJ9EQg5hH2oPe/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#e1decdb0",
    },
    {
      title: "RDBMS PostgreSQL Training",
      subtitle: "- IIT Bombay",
      logo_path: "iit_bom_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/135tkb4Z2_HiYxKZiCaXK1rmGvNKWrWya/view?usp=sharing",
      alt_name: "IIT",
      color_code: "#f4429899",
    },

    {
      title: "Cybersecurity Terminology",
      subtitle: "- Linkedin Learning",
      logo_path: "project_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/120AyWuxrRmRn9YfxIQ-p7mLy6lXWysiF/view?usp=sharing",
      alt_name: "NPTEL",
      color_code: "#fff",
    },
    {
      title: "Cybersecurity Awareness",
      subtitle: "- HP",
      logo_path: "hp_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1i9BJlWr7JHNhKk5dXfyFyDgZyel943J1/view?usp=sharing",
      alt_name: "HP",
      color_code: "#7348a1",
    },

    {
      title: "Namaste JavaScript",
      subtitle: "- Namaste Dev",
      logo_path: "namaste_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1E6mdI6nOnQ5WudLjRtNS1M7mVSzNtfRq/view?usp=sharing",
      alt_name: "PW",
      color_code: "#b94949",
    },
    {
      title: "Full Stack Development",
      subtitle: "- PW",
      logo_path: "physics_logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1xXlJ8AEfsUobQsJX7EivGPFiGuKftarj/view?usp=sharing",
      alt_name: "PW",
      color_code: "#fff",
    },
    {
      title: "Backend Development",
      subtitle: "- PW",
      logo_path: "pw_img.png",
      certificate_link:
        "https://drive.google.com/file/d/1MpWO2ku17_MK2OCVDV1AOFSk8EseEKKd/view?usp=sharing",
      alt_name: "PW",
      color_code: "#000",
    },
  ],
};

// // Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work Experience and Internship",
  description:
    "I am a Full Stack Developer with hands-on internship experience at GvCloud Secure Pvt. Ltd., where I built production-grade modules using Java, Spring Boot, React.js, and MongoDB. I specialize in building scalable REST APIs, JWT authentication, and multi-agent AI systems using LangChain and Google Gemini.",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Java Full Stack Developer",
          company: "GvCloud Secure Pvt. Ltd.",
          company_url: "https://gvcloudsecure.com/",
          logo_path: "gvcloud_logo.png",
          duration: "April 2025 - October 2025",
          location: "New Delhi, On-Site",
          description:
            "Deployed 5+ full-stack modules using Spring Boot and React. Engineered 10+ RESTful APIs reducing manual processing time by ~40%. Implemented JWT-based authentication across 100% of protected routes.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Java Full Stack Developer",
          company: "GvCloud Secure Pvt. Ltd.",
          company_url: "https://gvcloudsecure.com/",
          logo_path: "gvcloud_logo.png",
          duration: "April 2025 - October 2025",
          location: "New Delhi, On-Site",
          description:
            "Deployed 5+ full-stack modules using Spring Boot and React. Engineered 10+ RESTful APIs reducing manual processing time by ~40%. Implemented JWT-based authentication across 100% of protected routes.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        //   {
        //     title: "Google Explore ML Facilitator",
        //     company: "Google",
        //     company_url: "https://about.google/",
        //     logo_path: "google_logo.png",
        //     duration: "June 2019 - April 2020",
        //     location: "Hyderabad, Telangana",
        //     description:
        //       "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //     color: "#4285F4",
        //   },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects reflect my passion for building end-to-end solutions — from production-grade full stack web applications using Java, Spring Boot and React.js, to intelligent multi-agent AI systems powered by LangChain and Google Gemini. I love turning real-world problems into scalable, impactful software.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //  {
    //     id: "hirehub-job-portal",
    //     name: "HireHub — Full Stack Job Portal",
    //     createdAt: "2025-04-01T00:00:00Z",
    //     description: "Built a complete job portal with role-based access, JWT auth, Cloudinary integration. Deployed on Vercel & Render.",
    //     url: "https://github.com/Aakash-vajpayee/hirehub",
    //   },
    //   {
    //     id: "ai-medical-diagnostic",
    //     name: "AI Agents for Medical Diagnostic",
    //     createdAt: "2025-10-01T00:00:00Z",
    //     description: "Multi-agent AI system using LangChain & Google Gemini for automated medical report evaluation with specialized agents.",
    //     url: "https://github.com/Aakash-vajpayee/ai-medical-diagnostic",
    //   },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashu.png",
    description:
      "I am available on almost every social media. Feel free to reach out — I usually reply within 24 hours. I can help you with Java, Spring Boot, React.js, Node.js, AI Integration and Full Stack Development.",
  },
  blogSection: {
    title: "Spectrum",
    subtitle:
      "I love sharing my learning journey — from building full stack apps to exploring AI integrations and developer tips.",
    link: "https://github.com/Aakash-vajpayee",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Laxmi Nagar, New Delhi, 110092",
    locality: "New Delhi",
    country: "India",
    region: "Delhi",
    postalCode: "110092",
    streetAddress: "Laxmi Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/1rhrDW6j82rsCjHk9",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
