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
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 1800,
    guideLink: 'https://example.com/guides/web-dev',
    category: 'Technical'
  },
  {
    name: 'Business Intelligence',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 1800,
    guideLink: 'https://example.com/guides/data-structures',
    category: 'Technical'
  },
  {
    name: 'Natural Language Processing',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 6000,
    guideLink: 'https://example.com/guides/mobile-dev',
    category: 'Technical'
  },
  {
    name: 'Machine Learning',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'UI/UX Design',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'Database Design',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'Capture The Flag',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'Speed Debugging',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'Competitive Programming',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Technical'
  },
  {
    name: 'Maze Following Robot',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Robotics'
  },
  {
    name: 'Robot War Light Weight',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Robotics'
  },
  {
    name: 'Robot Soccer',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Robotics'
  },
  {
    name: 'Line Following Robot',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Robotics'
  },
  {
    name: 'Vibe Coding',
    description:
      'Vibe Coding is an interactive programming module that introduces participants to the basics of coding through creativity and experimentation. From simple animations to small digital projects, this module helps learners understand logic, develop problem-solving skills, and express their ideas through code in a fun and engaging way.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Non-Technical'
  },
  {
    name: 'Escapistan',
    description:
      'Escapistan is a fast-paced escape-room module filled with physical puzzles, locked secrets, and time-sensitive challenges. Teams must collaborate, think quickly, and solve their way out before the clock hits zero.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Non-Technical'
  },
  {
    name: 'Tech Tank',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'Non-Technical'
  },
  {
    name: 'Competitive Programming',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'High School'
  },
  {
    name: 'Speed Debugging',
    description:
      '',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'High School'
  },
  {
    name: 'Innovate Lab',
    description:
      'Innovate Lab\'s signature STEM module puts your creativity and engineering instincts to the test! From building impact-proof designs to crafting bold structural creations, this hands-on experience challenges participants to think critically, experiment fearlessly, and bring ideas to life. Get ready to build, break, learn, and innovate—one structure at a time.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'High School'
  },
  {
    name: 'Cipher',
    description:
      'Cipher is a conspiracy-driven investigation module where participants dig into suspicious clues, unravel hidden motives, and piece together complex theories. It\'s all about sharp observation, critical thinking, and exposing the truth behind the mystery.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
    category: 'High School'
  },

];

export { sponsors, contacts, modulesData };
