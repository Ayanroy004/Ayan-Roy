export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription?: string;
  technologies: string[];
  keyFeatures: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  category: 'Full-Stack' | 'Frontend' | 'Machine Learning' | 'Web App';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    icon: string;
  }[];
}

export interface JourneyStep {
  phase: string;
  title: string;
  focus: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  status: string;
  description: string;
  period?: string;
}

export const portfolioData = {
  profile: {
    name: 'Ayan Roy',
    initials: 'AR',
    title: 'Full-Stack Developer',
    roleTagline: 'Full-Stack Developer | MCA Student | Problem Solver',
    educationCurrent: 'Master of Computer Applications (MCA)',
    educationPrevious: 'Bachelor of Computer Applications (BCA)',
    location: 'Bainchi, Hooghly, 712134, West Bengal, India',
    email: 'royayan004@gmail.com',
    github: 'https://github.com/Ayanroy004',
    linkedin: 'https://www.linkedin.com/in/ayanroy0/',
    status: 'Open to Opportunities',
    heroKicker: "HELLO, I'M AYAN ROY",
    heroHeading: 'Building Digital Experiences Through Code.',
    heroSubheading:
      'I transform ideas into functional, responsive and scalable web applications using modern technologies.',
    introBio:
      'I am a passionate Full-Stack Developer and MCA student who enjoys building modern, scalable, and user-friendly web applications. I have experience working with frontend and backend technologies, developing real-world projects, and continuously improving my problem-solving and programming skills.',
    aboutParagraphs: [
      'I am an MCA student with a background in Computer Applications and a strong interest in software development. My journey started with programming fundamentals and gradually expanded into frontend and backend development.',
      'I enjoy understanding how applications work behind the scenes, solving programming problems, designing user-friendly interfaces, and building practical projects.',
      'My goal is to become a skilled software engineer by continuously learning, experimenting with new technologies, and developing solutions that solve real-world problems.',
    ],
    quickCards: [
      {
        label: 'Education',
        value: 'BCA Graduate | Currently Pursuing MCA',
        detail: 'Strong computer science & application fundamentals',
      },
      {
        label: 'Focus',
        value: 'Full-Stack Web Development',
        detail: 'Modern frontend, performant APIs & robust databases',
      },
      {
        label: 'Interest',
        value: 'Technology, Innovation & Problem Solving',
        detail: 'Exploring scalable architectures & creative engineering',
      },
    ],
  },

  services: [
    {
      id: '01',
      title: 'Frontend Development',
      description: 'Building responsive, modern and interactive user interfaces.',
      details:
        'Crafting responsive, high-performance web experiences with React, Next.js, and modern CSS architecture with strict attention to layout and typography.',
      tech: ['React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3'],
    },
    {
      id: '02',
      title: 'Backend Development',
      description: 'Creating APIs, server-side logic and database integration.',
      details:
        'Architecting structured RESTful services, secure server logic, and structured database schemas using Node.js, Express, Spring Boot, and Python.',
      tech: ['Node.js', 'Express.js', 'Spring Boot', 'Java', 'PHP'],
    },
    {
      id: '03',
      title: 'Full-Stack Development',
      description: 'Developing complete web applications from frontend to backend.',
      details:
        'Bridging user-facing interfaces with server data pipelines, authentication, state management, and production-ready deployments.',
      tech: ['MERN Stack', 'Spring & React', 'REST APIs', 'Cloud Deployments'],
    },
    {
      id: '04',
      title: 'Problem Solving',
      description: 'Writing efficient code and solving programming challenges.',
      details:
        'Applying foundational data structures, algorithmic analysis, and object-oriented design patterns to solve real-world programming hurdles.',
      tech: ['C', 'Java', 'Data Structures', 'OOP', 'Algorithm Design'],
    },
  ],

  skillCategories: [
    {
      category: 'Frontend',
      description: 'Creating responsive, accessible and interactive user interfaces',
      skills: [
        { name: 'HTML5', icon: 'html5' },
        { name: 'CSS3', icon: 'css3' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'React.js', icon: 'react' },
        { name: 'Next.js', icon: 'nextjs' },
        { name: 'Tailwind CSS', icon: 'tailwindcss' },
      ],
    },
    {
      category: 'Backend',
      description: 'Building server-side architectures, services, and APIs',
      skills: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'Java', icon: 'java' },
        { name: 'PHP', icon: 'php' },
      ],
    },
    {
      category: 'Database',
      description: 'Managing structured and document-oriented data storage',
      skills: [
        { name: 'MongoDB', icon: 'mongodb' },
        { name: 'MySQL', icon: 'mysql' },
      ],
    },
    {
      category: 'Programming & CS Fundamentals',
      description: 'Core computation principles and object-oriented paradigms',
      skills: [
        { name: 'C', icon: 'c' },
        { name: 'Java', icon: 'java' },
        { name: 'Data Structures and Algorithms', icon: 'dsa' },
        { name: 'Object-Oriented Programming', icon: 'oop' },
        { name: 'Problem Solving', icon: 'problemSolving' },
      ],
    },
    {
      category: 'Tools',
      description: 'Development environment, version control and testing utilities',
      skills: [
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
        { name: 'VS Code', icon: 'vscode' },
        { name: 'Postman', icon: 'postman' },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      id: 'edu-01',
      degree: 'Master of Computer Applications (MCA)',
      status: 'Currently Pursuing',
      description:
        'Advanced studies in computer applications, software development, programming, and computer science.',
    },
    {
      id: 'edu-02',
      degree: 'Bachelor of Computer Applications (BCA)',
      status: 'Completed',
      description:
        'Built a foundation in programming, computer applications, database management, and web development.',
    },
  ] as EducationItem[],

  projects: [
    {
      id: 'smartkrishi',
      title: 'SmartKrishi',
      subtitle: 'Agricultural Marketplace',
      description:
        'A web-based agricultural marketplace connecting farmers and wholesalers, allowing users to explore agricultural products and market prices.',
      detailedDescription:
        'SmartKrishi bridges the gap between grassroots agricultural producers and commercial buyers. The platform provides a transparent trading environment with real-time commodity pricing from regional agricultural markets (mandis), direct seller listings, and streamlined procurement workflows.',
      technologies: ['React.js', 'Spring Boot', 'Java', 'MySQL'],
      keyFeatures: [
        'Direct farmer-to-wholesaler marketplace catalog',
        'Live regional market (mandi) commodity price trend tracker',
        'Intuitive harvest inventory and order management system',
        'Secure multi-user workflows designed for desktop & mobile accessibility',
      ],
      image: '/src/assets/images/smartkrishi_preview_1794064559119.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/ayan-roy/smartkrishi',
      category: 'Full-Stack',
    },
    {
      id: 'vitality',
      title: 'Vitality Physiotherapy Website',
      subtitle: 'Healthcare & Wellness Platform',
      description:
        'A responsive physiotherapy website designed to showcase services, provide business information, and make it easier for customers to connect and book appointments.',
      detailedDescription:
        'A digital portal for a specialized rehabilitation and sports medicine clinic. It enables patients to discover clinical treatment programs, review therapist credentials, and schedule consultation requests with ease.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      keyFeatures: [
        'Interactive treatment directory with rehabilitation programs',
        'Streamlined appointment inquiry and booking request system',
        'Therapist credentials, specialties, and timetable overview',
        'High-contrast, accessible patient-centric user interface',
      ],
      image: '/src/assets/images/vitality_preview_1794064559726.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/ayan-roy/vitality-physiotherapy',
      category: 'Full-Stack',
    },
    {
      id: 'wedding-invite',
      title: 'Wedding Invitation Web Application',
      subtitle: 'Multilingual Digital Invitation',
      description:
        'An interactive digital wedding invitation featuring multilingual content, multiple invitation pages, RSVP functionality, and a personalized experience.',
      detailedDescription:
        'An interactive celebration experience replacing paper invites with dynamic ceremony pages, timeline details, event directions, and synchronized guest RSVP submission.',
      technologies: ['React.js', 'Vite', 'JavaScript', 'Google Sheets Integration'],
      keyFeatures: [
        'Multi-screen animated celebration invite cards',
        'Multilingual language toggle for international and regional guests',
        'Instant RSVP capture with real-time Google Sheets backend sync',
        'Interactive event itinerary with venue maps and ceremony timings',
      ],
      image: '/src/assets/images/wedding_invite_preview_1794064560189.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/ayan-roy/wedding-invitation-app',
      category: 'Frontend',
    },
    {
      id: 'emotion-ai',
      title: 'Emotion Classification System',
      subtitle: 'Computer Vision & Deep Learning',
      description:
        'A machine learning project that analyzes facial expressions and classifies emotions using a trained neural network model.',
      detailedDescription:
        'An end-to-end intelligent computer vision application that processes live camera or image inputs to predict facial expressions with probabilistic confidence scores across primary emotion categories.',
      technologies: ['Python', 'Flask', 'Machine Learning', 'TensorFlow/Keras'],
      keyFeatures: [
        'Facial feature landmark detection and region normalization',
        'Convolutional Neural Network (CNN) trained for 7-class emotion mapping',
        'Interactive web dashboard displaying real-time confidence distributions',
        'Comparative evaluation analytics and model performance reporting',
      ],
      image: '/src/assets/images/emotion_ai_preview_1794064563010.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/ayan-roy/emotion-classification',
      category: 'Machine Learning',
    },
    {
      id: 'pvc-card-generator',
      title: 'PVC ID Card Generator',
      subtitle: 'Print Production Utility',
      description:
        'A web-based ID card generation tool designed to create and manage printable ID cards.',
      detailedDescription:
        'A specialized productivity tool for educational institutions and corporate teams to batch-design, format, and generate dual-sided CR80 PVC identity credentials with automated barcode and QR code generation.',
      technologies: ['React.js', 'Flask', 'Python'],
      keyFeatures: [
        'Real-time dual-sided (front & back) ID card visual editor',
        'Automated barcode and dynamic QR code generation from record data',
        'Batch data handling and alignment controls for standard PVC dimensions',
        'Export-ready print layouts optimized for physical card printers',
      ],
      image: '/src/assets/images/pvc_card_preview_1794064561296.jpg',
      demoUrl: '#',
      githubUrl: 'https://github.com/ayan-roy/pvc-id-card-generator',
      category: 'Web App',
    },
  ] as Project[],

  journey: [
    {
      phase: '01',
      title: 'Programming Fundamentals',
      focus: 'C and Java Foundations',
      description:
        'Developed a disciplined understanding of computational logic, memory organization, pointers, and object-oriented principles using C and Java.',
      technologies: ['C', 'Java', 'Algorithmic Logic', 'Data Structures'],
    },
    {
      phase: '02',
      title: 'Web Development Basics',
      focus: 'HTML, CSS & JavaScript Core',
      description:
        'Mastered the core building blocks of the web—semantic markup, responsive styling, CSS box model, DOM manipulation, and asynchronous JavaScript.',
      technologies: ['HTML5', 'CSS3', 'ES6+ JavaScript', 'DOM API'],
    },
    {
      phase: '03',
      title: 'Frontend Development',
      focus: 'Modern React.js & Next.js Ecosystem',
      description:
        'Transitioned into component-driven architecture, state management, client routing, hooks lifecycle, and building accessible UI components with Tailwind CSS.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Component Design'],
    },
    {
      phase: '04',
      title: 'Backend Development',
      focus: 'Node.js, Express.js & Database Systems',
      description:
        'Learned to engineer RESTful APIs, manage sessions, build middleware, and query both relational (MySQL) and document databases (MongoDB).',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
    },
    {
      phase: '05',
      title: 'Full-Stack Development',
      focus: 'Building Complete Real-World Applications',
      description:
        'Combined frontend interfaces with backend services to build production-style full-stack projects including SmartKrishi, Vitality, and internal tools.',
      technologies: ['Full-Stack MERN', 'Spring Boot', 'System Design', 'Git Workflow'],
    },
    {
      phase: '06',
      title: 'Continuous Learning',
      focus: 'Modern Tools, Emerging Tech & Performance',
      description:
        'Continuously expanding knowledge in advanced software patterns, machine learning integrations, code optimization, and modern developer tooling.',
      technologies: ['Python & ML', 'TypeScript', 'Clean Architecture', 'Modern Dev Tools'],
    },
  ] as JourneyStep[],

  resume: {
    filePath: '/resume/Ayan_Roy_CV.pdf',
    fileName: 'Ayan_Roy_CV.pdf',
    lastUpdated: 'November 2026',
    heading: 'Want to Know More About My Journey?',
    description:
      'Explore my academic background, technical skills, projects and development journey.',
  },

  contact: {
    heading: "Let's Build Something Together.",
    description:
      'Have an interesting project, collaboration idea, or opportunity? Feel free to connect with me.',
    email: 'ayan20045roy@gmail.com',
    location: 'West Bengal, India',
    github: 'https://github.com/ayan-roy',
    linkedin: 'https://linkedin.com/in/ayan-roy',
  },
};
