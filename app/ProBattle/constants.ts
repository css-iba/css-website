interface Sponsor {
  logoUrl: string;
  size?: string;
}

interface TeamContact {
  name: string;
  title: string;
  isAdmin?: boolean;
  avatarUrl?: string;
  email?: string;
  phone?: string;
};

interface ModuleCardProps {
  name: string;
  description: string;
  minParticipants: number;
  maxParticipants: number;
  price: number;
  guideLink: string;
  category?: string;
  Tier?: number[];
}

const sponsors: Sponsor[] = [
  {
    logoUrl: "/ProBattle/HBL.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/Daraz.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/Allied.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/Careem.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/Systems.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/Toyota.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/MLSA.png",
    size: "large"
  },
  {
    logoUrl: "/ProBattle/RoboAutomators.png",
    size: "small"
  },
  {
    logoUrl: "/Home/notion-logo.png",
    size: "large"
  },
  {
    logoUrl: "/Home/DC_Donates_logo.png",
    size: "large"
  },
  {
    logoUrl: "/ProBattle/Kalsoft.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/SudoWare.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/IBM.png",
    size: "small"
  },
  {
    logoUrl: "/ProBattle/BankAlHabib.png",
    size: "small"
  }
];

const contacts: TeamContact[] = [
  {
    name: "Abdullah Tariq",
    title: "COO",
    isAdmin: true,
    email: "Abdullah.Tariq.29123@khi.iba.edu.pk",
    phone: "",
    avatarUrl: "/Home/Abdullah.jpg"
  },
  {
    name: "Zainab Irfan",
    title: "CEO",
    isAdmin: true,
    email: "z.ansari.29091@khi.iba.edu.pk",
    phone: "",
    avatarUrl: "/Home/Zainab.jpg"
  },
  {
    name: "Bisma Kasbati",
    title: "CFO",
    isAdmin: true,
    email: "b.kasbati.28671@khi.iba.edu.pk",
    phone: "",
    avatarUrl: "/Home/Bisma.jpg"
  },
  {
    name: "Muhammad Arrayyan Asad",
    title: "EC Operations/Logistics",
    email: "M.Arrayyan.30557@khi.iba.edu.pk",
    phone: "(+92) 311-4976336",
    avatarUrl: ""
  },
  {
    name: "Abdul Haseeb",
    title: "EC Registrations",
    email: "",
    phone: "(+92) 332-3450675",
    avatarUrl: ""
  }
];

const modulesData: ModuleCardProps[] = [
  {
    name: 'Web Development',
    description:
      'Participants will design and build a responsive full-stack web application focusing on clean UI, smooth functionality, and efficient code structure. This module emphasizes creativity, usability, and technical execution through hands-on development.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/12l9ynMDS7q3PbK1cFRn_0jSUV2-MDfth/view?usp=sharing',
    category: 'Technical',
    Tier: [1]
  },
  {
    name: 'Business Intelligence',
    description:
      'This module focuses on transforming raw data into meaningful insights using data visualization and analytical tools. Participants will explore decision-making techniques and learn how data-driven strategies support business growth.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/14Ua5OsaN7zKz7L25uyplfid2D6vJgfQs/view?usp=sharing',
    category: 'Technical',
    Tier: [1]
  },
  {
    name: 'Natural Language Processing',
    description:
      'Participants will work on building systems that understand and generate human language by combining information retrieval with language models. The module highlights context-aware responses and practical NLP applications.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1GDIj6oJ7a-Vo8D6G8b099hjSOGhUhdQQ/view?usp=sharing',
    category: 'Technical',
    Tier: [1]
  },
  {
    name: 'Machine Learning',
    description:
      'Teams will compete to build machine learning models using a provided dataset to achieve the best performance on unseen data. Rankings are based on evaluation metrics, encouraging innovation and strong modeling skills.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1TE-QRuBZzXKMdIBsF1UpfFvc-po8Xpx7/view?usp=sharing',
    category: 'Technical',
    Tier: [1]
  },
  {
    name: 'UI/UX Design',
    description:
      'This module challenges participants to redesign digital interfaces by improving usability, accessibility, and visual appeal. Teams analyze user journeys and propose design solutions that enhance overall user experience.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1lBWwWJRy57faJDgDk3Qc_1wx8ckdKO_l/view?usp=sharing',
    category: 'Technical',
    Tier: [2]
  },
  {
    name: 'Database Design',
    description:
      'Participants learn how to structure efficient database schemas and write meaningful queries using SQL. The focus is on data relationships, normalization, and building scalable, well-organized databases.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1mIwGQO810BgQxwlt5LXYDzRxeXWsJ68w/view?usp=sharing',
    category: 'Technical',
    Tier: [2]
  },
  {
    name: 'Cyber Warfare',
    description:
      'A cybersecurity-focused module where participants compete in a one-day cyber challenge featuring CTF clues, code-breaking puzzles, and cyber security trivia. Test your logic, speed, and teamwork in 5-6 hours of intense gameplay. Play smart. Play fast. Win big.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/14oIWz788aJ7kYQw2pKGq8iMTq9sBgyib/view?usp=sharing',
    category: 'Technical',
    Tier: [2]
  },
  {
    name: 'Speed Debugging',
    description:
      'This module tests participants\' ability to quickly identify and fix errors in code. It strengthens code-reading skills, logical reasoning, and confidence in solving problems under time pressure.',
    minParticipants: 1,
    maxParticipants: 2,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1Fs4xqgVoEyUCj4iMTueL8k0Mu9kTVK-8/view?usp=sharing',
    category: 'Technical',
    Tier: [2]
  },
  {
    name: 'Competitive Programming',
    description:
      'Participants solve algorithmic problems that require speed, accuracy, and strong logical thinking. This module emphasizes efficient problem-solving techniques and performance under competitive conditions.',
    minParticipants: 1,
    maxParticipants: 2,
    price: 2000,
    guideLink: 'https://drive.google.com/file/d/1QE5UlhRTnGIf8ozD5ErXFFMHTqWdkp_H/view?usp=sharing',
    category: 'Technical',
    Tier: [3]
  },
  {
    name: 'Robo Sumo',
    description:
      'Teams build and program robots to compete in sumo-style matches, aiming to push opponents out of a circular ring. The module emphasizes strategy, mechanical design, and precise control for effective competition.',
    minParticipants: 1,
    maxParticipants: 4,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1pY95MdPKTR7v51bw9AnCzP2gPqoWeIVs/view?usp=drive_link',
    category: 'Robotics',
    Tier: [2, 3]
  },
  {
    name: 'Robo Race (High School)',
    description:
      'This module challenges participants to design and program robots that can navigate a racecourse as quickly as possible. Speed, agility, and efficient pathfinding are key to winning the race.',
    minParticipants: 1,
    maxParticipants: 4,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1VRP_E6TfLLULEpQhDYR-jN4JFBTBojNM/view?usp=drive_link',
    category: 'Robotics',
    Tier: [2, 3]
  },
  {
    name: 'Robot Soccer',
    description:
      'This module combines robotics and strategy as teams build robots to compete in soccer matches. Participants focus on coordination, control systems, and teamwork-driven gameplay.',
    minParticipants: 1,
    maxParticipants: 4,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1uhitvjEZDdea2Sa_6f-NnH2LN-R9QWIi/view?usp=drive_link',
    category: 'Robotics',
    Tier: [2, 3]
  },
  {
    name: 'Line Following Robot (University)',
    description:
      'Participants create robots that follow a predefined path using sensors and control algorithms. Precision, speed, and accuracy play a critical role in successfully completing the track.',
    minParticipants: 1,
    maxParticipants: 4,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1gDhxdM82zDJARA4tlINwOlj5H5p46XUK/view?usp=drive_link',
    category: 'Robotics',
    Tier: [2, 3]
  },
  {
    name: 'Tech Tank',
    description:
      'A pitching competition where teams present innovative tech ideas to a panel of judges. Projects are evaluated based on creativity, feasibility, impact, and presentation quality.',
    minParticipants: 1,
    maxParticipants: 4,
    price: 3000,
    guideLink: 'https://drive.google.com/file/d/1Y5NUSuWBST1VohevTIFqZe14zPYn07DL/view?usp=sharing',
    category: 'Non-Technical',
    Tier: [3]
  },
  {
    name: 'FIFA',
    description:
      'A competitive gaming module where participants showcase their skills in FIFA matches. It emphasizes strategy, teamwork, and quick decision-making in a fast-paced virtual environment.',
    minParticipants: 0,
    maxParticipants: 1,
    price: 1500,
    guideLink: '',
    category: 'Non-Technical',
    Tier: [2]
  },

  {
    name: 'Vibe Coding',
    description:
      'An interactive coding module where participants explore programming through creativity and experimentation. From small projects to animations, it focuses on logic-building and creative expression.',
    minParticipants: 1,
    maxParticipants: 2,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1SKD8iVb4Jq0g_ftQ5ukIsgby2WAOwbyk/view?usp=sharing',
    category: 'Non-Technical',
    Tier: [1]
  },
  {
    name: 'Competitive Programming (High School)',
    description:
      'A beginner-friendly competitive programming module designed for high school students. It focuses on logical thinking, problem-solving techniques, and improving coding confidence.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 2500,
    guideLink: 'https://drive.google.com/file/d/1QE5UlhRTnGIf8ozD5ErXFFMHTqWdkp_H/view?usp=sharing',
    category: 'High School',
    Tier: [1]
  },
  // {
  //   name: 'Speed Debugging (High School)',
  //   description:
  //     'This module introduces high school students to debugging by identifying and fixing simple coding errors. It strengthens understanding of code flow and logical reasoning.',
  //   minParticipants: 1,
  //   maxParticipants: 3,
  //   price: 2500,
  //   guideLink: '',
  //   category: 'High School',
  //   Tier: [2]
  // },
  // {
  //   name: 'Innovate Lab',
  //   description:
  //     'A hands-on STEM experience where participants build and test creative structures and designs. The module encourages experimentation, teamwork, and innovative problem-solving.',
  //   minParticipants: 1,
  //   maxParticipants: 4,
  //   price: 3000,
  //   guideLink: 'https://drive.google.com/file/d/1LJydRh4T9yZyIM_v2Zp88e_b2UYZnYJi/view?usp=sharing',
  //   category: 'High School',
  //   Tier: [2, 3]
  // },
  // {
  //   name: 'Cipher',
  //   description:
  //     'A mystery-based investigation module where participants analyze clues, uncover hidden patterns, and solve interconnected challenges using critical thinking and observation skills.',
  //   minParticipants: 1,
  //   maxParticipants: 3,
  //   price: 3000,
  //   guideLink: '',
  //   category: 'High School',
  //   Tier: [3]
  // },
];


export { sponsors, contacts, modulesData };
