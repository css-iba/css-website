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
    phone: "(+92) 306-2927911",
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
  { name: "Faysal Pasha", title: "CO", isAdmin: true, email: "", phone: "" },
  { name: "Ammar Khan", title: "Mentor", isAdmin: true, email: "", phone: "" },
  { name: "Musab Bin Majid", title: "Tech Ec", isAdmin: true, email: "", phone: "" },
];

const modulesData: ModuleCardProps[] = [
  {
    name: 'Web Development',
    description:
      'Master modern web development with React, Next.js, and Tailwind CSS. Build responsive, scalable applications from scratch. Build responsive, scalable applications from scratch.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 5000,
    guideLink: 'https://example.com/guides/web-dev',
  },
  {
    name: 'Data Structures',
    description:
      'Deep dive into fundamental and advanced data structures. Learn algorithms optimization and competitive programming techniques.',
    minParticipants: 1,
    maxParticipants: 0,
    price: 3500,
    guideLink: 'https://example.com/guides/data-structures',
  },
  {
    name: 'Mobile Development',
    description:
      'Create native and cross-platform mobile applications using modern frameworks. Build iOS and Android apps efficiently.',
    minParticipants: 2,
    maxParticipants: 4,
    price: 6000,
    guideLink: 'https://example.com/guides/mobile-dev',
  },
  {
    name: 'Machine Learning',
    description:
      'Explore ML fundamentals, neural networks, and real-world applications. Build intelligent systems with Python and TensorFlow.',
    minParticipants: 1,
    maxParticipants: 3,
    price: 7500,
    guideLink: 'https://example.com/guides/ml',
  },
];

export { sponsors, contacts, modulesData };
