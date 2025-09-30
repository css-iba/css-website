

import { FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// variants for text: from top (hidden) to its position (visible)
const textVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const members = [
  {
    name: "Zainab Irfan",
    position: "CEO",
    img: "/Home/Zainab.jpg",
    linkedin: "https://www.linkedin.com/in/zainab-irfan-ansari-2065b2377/",
    instagram: "https://www.instagram.com/zainabirfan4?igsh=NXIxYTZkcGNhdWc3",
  },
  {
    name: "Abdullah Tariq",
    position: "COO",
    img: "/Home/Abdullah.jpg",
    linkedin: "https://www.linkedin.com/in/abdullahtariq78/",
    instagram: "https://www.instagram.com/abdullahtariq62?igsh=OWp0bG4yb2xpb2lm",
  },
  {
    name: "Bisma Asif",
    position: "CFO",
    img: "/Home/Bisma.jpg",
    linkedin: "https://www.linkedin.com/in/bisma-asif-998293220/",
    instagram: "https://www.instagram.com/bismakasbati?igsh=b3lyeXZwemVycW1o",
  },
];

const TeamSection: React.FC = () => (
  <section className="py-12 px-4 md:px-12 mt-30 min-h-[600px] colour-bg mb-20">
    <div className="justify-center items-center mb-30">

      <motion.h2 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1.0 }}
        variants={textVariants}
        className="font-heading text-4xl md:text-5xl colour-text mb-6 text-center"
      >
          Meet our team
      </motion.h2>

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 1.0 }}
        variants={textVariants}
        className="text-center font-text md:text-lg text-[#bfc8e6] max-w-3xl mb-10 mx-auto"
      >
        We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our members.
      </motion.p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-45 place-items-center max-w-4xl mx-auto">
      {members.map((dev) => (
        <div key={dev.name} className="flex flex-col items-center bg-[#1a2236] rounded-2xl py-10 px-4 shadow-lg w-[300px] md:w-[320px] h-[420px] md:h-[420px]">
          <div className="w-50 h-50 rounded-full overflow-hidden mb-6 flex items-center justify-center">
            <Image src={dev.img} alt={dev.name} width={160} height={160} className="object-cover w-full h-full rounded-full" />
          </div>
          <span className="font-heading text-lg md:text-xl text-white text-center mb-1">{dev.name}</span>
          <span className="font-text text-md text-[#bfc8e6] text-center mb-4">{dev.position}</span>
          <div className="flex gap-4 mt-2">
            <Link href={dev.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#bfc8e6] hover:text-[#fff]">
              <FaInstagram className="w-7 h-7" />
            </Link>
            <Link href={dev.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#bfc8e6] hover:text-[#fff]">
              <FaLinkedin className="w-7 h-7" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
