import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// Variants for text blocks (heading, paragraphs, socials)
const textVariants = {
  hidden: (isMobile: boolean) => ({
    opacity: 0,
    x: isMobile ? 0 : 50,
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

const CodeX: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between py-12 px-4 md:mr-40 gap-8 mt-20">
      <div className="flex-1 order-1">

        {/* Heading */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl colour-text mb-6 mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          custom={isMobile}
        >
          CodeX `25
          <span
            className="pointer-events-none select-none inline-block align-middle mr-2 mt-2"
            style={{ verticalAlign: "middle" }}
          >
            <Image
              src="/Home/Codex.png"
              alt="Robot"
              width={32}
              height={32}
              className="w-15 h-15"
              style={{ transform: "translateY(-10%)" }}
            />
          </span>
        </motion.h2>

        {/* First Paragraph */}
        <motion.p
          className="font-text text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          custom={isMobile}
          transition={{ delay: 0.2 }}
        >
          CODEX, an initiative of the IBA Computer Science Society (CSS), is a
          dynamic tech-driven community bringing together over 300 active
          members across multiple platforms. It serves as a hub for students to{" "}
          <span className="text-amber-500">
            learn, collaborate, and showcase their talents
          </span>{" "}
          in the ever-evolving world of technology.
        </motion.p>

        {/* Second Paragraph */}
        <motion.p
          className="font-text mt-4 text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          custom={isMobile}
          transition={{ delay: 0.4 }}
        >
          From{" "}
          <span className="text-amber-500">
            coding competitions and hackathons to guest lectures and interactive
            workshops
          </span>
          , CODEX provides countless opportunities for growth. By fostering
          connections and promoting innovation, the community helps its members
          enhance their technical expertise, build meaningful networks, and stay
          at the forefront of emerging tech trends.
        </motion.p>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          custom={isMobile}
          transition={{ delay: 0.6 }}
        >
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="default"
              className="mt-4 ml-4 md:ml-0 md:mt-4 font-text text-sm colour-box-secondry colour-text flex items-center gap-2"
            >
              <Link
                className="hover:underline flex items-center gap-2"
                href="/Codex"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.button>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="flex-1 flex justify-center items-center order-2 md:mt-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={imageVariants}
        transition={{ delay: 0.8 }}
      >
        <Image
          src="/Home/Codex2.png"
          alt="Events"
          width={320}
          height={320}
          className="rounded-xl border-2 border-[var(--colour-secondary)] w-84 h-48 md:w-130 md:h-90 object-cover"
        />
      </motion.div>
    </section>
  );
};

export default CodeX;
