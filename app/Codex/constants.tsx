import { Code, Users, Award, Rocket } from "lucide-react";

interface Events {
    name: string;
    detail: string;
    link: string;
    link_text: string;
}

interface Data {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

interface Resource {
    id: number;
    title: string;
    href: string;
    description: string;
    author: {
        name: string;
        imageUrl: string;
    };
}

const events: Events[] = [
    {
        name: "Tech Carnival 2025 — Launch Event",
        detail:
            "Join us for the grand launch: a full-day Tech Carnival featuring a Competitive Programming module with Beginner and Advanced tracks (prize pool awaiting top performers), booths from leading tech companies, interactive game stalls, hands-on robotics showcases including Robo-Soccer and other student projects, plus FIFA and immersive VR experiences. Network with mentors, try demos, and win big — don’t miss the action!",
        link: "/Launch",
        link_text: "Register Now",
    },
];

const data: Data[] = [
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-100">
                <Code className="w-8 h-8 text-blue-600" />
            </span>
        ),
        title: "Coding Sessions",
        desc: "Hands-on workshops and coding challenges for all levels.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-green-100">
                <Users className="w-8 h-8 text-green-600" />
            </span>
        ),
        title: "Community",
        desc: "Connect with fellow tech enthusiasts and mentors.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-100">
                <Award className="w-8 h-8 text-yellow-600" />
            </span>
        ),
        title: "Competitions",
        desc: "Participate in exciting coding competitions and win prizes.",
    },
    {
        icon: (
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-purple-100">
                <Rocket className="w-8 h-8 text-purple-600" />
            </span>
        ),
        title: "Growth",
        desc: "Expand your skills and portfolio through real projects.",
    },
];

const resources: Resource[] = [
    {
        id: 1,
        title: 'Graph Visualization Tool',
        href: 'https://graphvizs.vercel.app/',
        description:
            'A graph visualization tool to create, edit, and visualize graphs easily. This can also be used to run algorithms on graphs such as DFS, BFS, Dijkstra, etc. Ideal for students and professionals looking to understand graph theory concepts interactively.',
        author: {
            name: 'Abdullah Tariq',
            imageUrl: '/Home/Abdullah.jpg',
        },
    },
    {
        id: 2,
        title: 'Memory Visualizer',
        href: 'https://humblepenguinn.github.io/mv/',
        description:
            'Realtime memory visualizer for C++ built for beginners. It helps users understand how memory allocation works in C++ programs by providing a graphical representation of stack and heap memory, making debugging and learning easier.',
        author: {
            name: 'Shaharyar Ahmed',
            imageUrl: '',
        },
    },
    {
        id: 3,
        title: 'Boryn - Programming Language',
        href: 'https://boryn-website.vercel.app/',
        description:
            'Boryn is a programming language built from scratch in C++, designed for beginners which is both easy and fun to use. Its online IDE lets users write and run code instantly, making learning fun and interactive.',
        author: {
            name: 'Musab Bin Majid',
            imageUrl: '/Codex/Musab.jpg',
        }, 
    }
];

export { data, events, resources };
