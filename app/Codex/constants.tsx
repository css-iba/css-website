import { Code, Users, Award, Rocket } from "lucide-react";

// Icons for Events from lucide-react
import { ExternalLink, File, UsersRound } from "lucide-react";

interface Events {
    name: string;
    detail: React.ReactNode;
    link: string;
    link_text: string;
    link_icon: React.ReactNode;
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
        name: "Hello World — Launch Event",
        detail: (
            <>
                <p className="font-text text-md mb-2">Full day of tech fun and learning! Join us for:</p>
                <ul className="list-disc list-inside space-y-1 px-4 font-text">
                    <li>Competitive Programming (Beginner & Advanced tracks — prize pool for top performers)</li>
                    <li>Booths from tech companies and interactive game stalls</li>
                    <li>Hands-on robotics showcases (including Robo-Soccer) and student projects</li>
                    <li>FIFA and immersive VR experiences</li>
                </ul>
                <p className="font-text text-md mt-2">Network with mentors, try demos, and win prizes — don&apos;t miss the action!</p>
            </>
        ),
        link: "/Launch",
        link_text: "Register Now",
        link_icon: <ExternalLink className="w-4 h-4" />,
    },
    {
        name: "Python 101: Getting started with Python",
        detail: (
            <>
                <p className="font-text text-md mb-2">Join us for an introductory session on Python programming on Wednesday 12<sup>th</sup> November! This event is perfect for beginners looking to learn the basics of Python, including syntax, data types, and simple programming concepts.</p>
                <ul className="list-disc list-inside space-y-1 px-4 font-text">
                    <li>Introduction to Python syntax and structure</li>
                    <li>Understanding data types and variables</li>
                    <li>Writing simple programs, loops and conditionals</li>
                    <li>Discussing the uses cases of python</li>
                </ul>
                <p className="font-text text-md mt-2">Whether you&apos;re new to programming or looking to expand your skills, this session will provide a solid foundation in Python. Don&apos;t miss out on this opportunity to kickstart your coding journey!</p>
            </>
        ),
        link: "https://github.com/Abdullahprogramme/Python-basics",
        link_text: "View on GitHub",
        link_icon: <File className="w-4 h-4" />,
    },
    {
        name: "Code Clash",
        detail: (
            <>
                <p className="font-text text-md mb-2">Get ready for a short and exciting coding competition designed to test your problem-solving skills and coding speed! Whether you&apos;re a beginner or an experienced coder, Code Clash offers a fun and challenging environment to showcase your abilities.</p>
                <ul className="list-disc list-inside space-y-1 px-4 font-text">
                    <li>2 to 3 coding problems to solve within a limited time</li>
                    <li>Problems designed for various skill levels</li>
                    <li>DataCamp licenses for winners</li>
                    <li>Certificates for winners</li>
                </ul>
                <p className="font-text text-md mt-2">Join us for Code Clash and put your coding skills to the test in a friendly and competitive atmosphere. Don&apos;t miss out on the chance to win exciting prizes and recognition!</p>
                <button data-problem-trigger="code-clash" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">Open to see solutions</button>
            </>
        ),
        link: "https://chat.whatsapp.com/LM8BwRVyqha33PXq1JJfmU",
        link_text: "Join Community",
        link_icon: <UsersRound className="w-4 h-4" />,
    },
    {
        name: "Code Clash 2.0",
        detail: (
            <>
                <p id="codeclash2" className="font-text text-md mb-2">Get ready for another short and exciting coding competition designed to test your problem-solving skills and coding speed! Whether you&apos;re a beginner or an experienced coder, Code Clash 2.0 offers a fun and challenging environment to showcase your abilities.</p>
                <ul className="list-disc list-inside space-y-1 px-4 font-text">
                    <li>2 to 3 coding problems to solve within a limited time</li>
                    <li>Problems designed for various skill levels</li>
                    <li>DataCamp licenses for winners</li>
                    <li>Certificates for winners</li>
                </ul>
                <p className="font-text text-md mt-2">Join us for Code Clash 2.0 and put your coding skills to the test in a friendly and competitive atmosphere. Don&apos;t miss out on the chance to win exciting prizes and recognition!</p>
                <button data-problem-trigger="code-clash-2" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors duration-300">Open to see solutions</button>
            </>
        ),
        link: "/CodeClash2",
        link_text: "Register Now",
        link_icon: <ExternalLink className="w-4 h-4" />,
    }
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
