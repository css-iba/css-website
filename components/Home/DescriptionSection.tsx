"use client";

import * as React from "react";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const socials = [
  { icon: FaFacebook, href: "https://www.facebook.com/share/16zYAU4tV3/", label: "Facebook" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/company/iba-computer-science-society/", label: "LinkedIn" },
  { icon: FaInstagram, href: "https://www.instagram.com/css.iba", label: "Instagram" },
];

// Variants for text blocks (heading, paragraphs, socials)
const textVariants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    x: isMobile ? 0 : -50,
    y: isMobile ? -50 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

// Variants for image
const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};


const DescriptionSection: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 md:ml-20 gap-8 mt-20">
      <div className="flex-1 order-1 relative space-y-4">

        {/* Heading */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl colour-text mb-10 mx-4 md:mx-0 relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
        >
          About the Society
          <span className="absolute -top-0 right-1 md:-top-2 md:right-70 -z-1 pointer-events-none select-none">
            <Image
              src="/Home/Robot.png"
              alt="Robot"
              width={80}
              height={80}
              className="opacity-70 md:w-40 md:h-40 w-25 h-25"
              style={{ transform: "translateY(-50%)" }}
            />
          </span>
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          className="font-text text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
        >
          The{" "}
          <span className="text-amber-500">IBA Computer Science Society (CSS)</span> is the premier
          platform for students of the School of Mathematics and Computer Science (SMCS) at IBA.
          Since its establishment in 2013, CSS has been dedicated to fostering a strong foundation
          in computing, equipping students with essential technical skills, and nurturing a vibrant
          community of tech enthusiasts, coders, and innovators.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          className="font-text mt-4 text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
        >
          Through flagship events like <span className="text-amber-500">ProBattle</span>, one of
          Pakistan&apos;s largest competitive programming contests, as well as hands-on workshops,
          hackathons, and networking sessions, CSS creates opportunities for students to learn,
          collaborate, and grow. Driven by innovation and a passion for technology, the society
          continues to empower its members and expand its impact within and beyond IBA.
        </motion.p>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4 mt-4 mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--colour-text)] hover:text-[var(--colour-accent)] transition-colors"
            >
              <Icon className="w-6 h-6" />
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center items-center order-2 md:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={imageVariants}
      >
        <Image
          src="/Home/About.jpg"
          alt="Society"
          width={320}
          height={320}
          className="rounded-xl border-2 border-[var(--colour-secondary)] w-84 h-48 md:w-130 md:h-90 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default DescriptionSection;
