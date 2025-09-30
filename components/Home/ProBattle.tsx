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

const ProBattle: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-4 md:px-12 md:ml-20 gap-8 mt-20">
      <div className="flex-1 order-1">

        {/* Heading */}
        <motion.h2
          className="font-heading text-3xl md:text-4xl colour-text mb-6 mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          custom={isMobile}
          variants={textVariants}
        >
          ProBattle `26
          <span className="pointer-events-none select-none inline-block align-middle mr-2 mt-2" style={{ verticalAlign: "middle" }}>
            <Image
              src="/Home/ProBattle.png"
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
        >
          At the IBA Computer Science Society (CSS), we believe in the power of collaboration. Our community brings together peers and mentors who are dedicated to helping each other succeed.
          It&apos;s the perfect place to <span className="text-amber-500">learn, share, and grow</span> in the world of computer science.
        </motion.p>

        <motion.p
          className="font-text mt-4 text-[15px] md:text-[17px] colour-text text-justify tracking-tight mx-4 md:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          variants={textVariants}
          custom={isMobile}
          transition={{ delay: 0.2 }}
        >   
          <span className="text-amber-500">ProBattle 2024</span> stands as one of our flagship events, meticulously designed to provide participants with opportunities to <span className="text-amber-500">test their skills, explore cutting-edge technologies, and gain insights from industry leaders.</span>
          By fostering a collaborative environment, ProBattle inspires creativity, encourages the exchange of ideas, and ensures a platform where participants can truly thrive.
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
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
          >
            <Button asChild variant="default" className="mt-4 ml-4 md:ml-0 md:mt-4 font-text text-sm colour-box-secondry colour-text flex items-center gap-2">
              <Link className="hover:underline flex items-center gap-2" href="/ProBattle">
                Discover More
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
        <Image src="/Home/ProBattle.jpg" alt="Society" width={320} height={320} className="rounded-xl border-2 border-[var(--colour-secondary)] w-84 h-48 md:w-110 md:h-80 object-cover" />
      </motion.div>
    </section>
  );
};

export default ProBattle;
