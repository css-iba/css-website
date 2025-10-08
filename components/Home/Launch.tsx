import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";
import Link from "next/link";
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

// Variants for cards
const cardsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

const Launch: React.FC = () => {
  const [isMobile, setIsMobile] = React.useState(false);
    
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-8 pb-40 px-4 md:px-12 gap-8 mt-20 min-h-screen colour-box-secondary">
        <div className="mx-auto md:ml-20 pt-24 pb-12">
        
            {/* Title and Description */}
            <div className="mb-12">
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    custom={isMobile}
                    variants={textVariants}
                    className="font-heading mb-6 text-left text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl"
                    >
                    CSS Launch: Hello World
                </motion.h2>
                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    custom={isMobile}
                    variants={textVariants}
                    className="text-gray-600 font-text text-lg md:text-xl text-left max-w-4xl"
                    >
                    Get ready for a day of excitement and innovation as we unveil the CSS Launch: Hello World. 
                    This launch marks the beginning of a new year of CSS. Join us for fun, learning and networking with fellow programmers.
                </motion.p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* What We Offer Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={cardsVariants}
                >
                    <Card
                        className="border-0"
                        style={{
                            background: "linear-gradient(120deg, var(--colour-primary), var(--colour-secondary))",
                        }}
                    >
                        <CardHeader>
                            <CardTitle className="font-heading text-2xl colour-text">What We Offer</CardTitle>
                        </CardHeader>

                        <Separator className="bg-gray-400" />

                        <CardContent>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Food Stalls</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Networking Opportunities</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Laser Maze</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Competitive Programming</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Prize Pool</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Competitive Programming Card */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={cardsVariants}
                >
                    <Card 
                        className="border-0"
                        style={{
                            background: "linear-gradient(120deg, var(--colour-primary), var(--colour-secondary))",
                        }}
                    >
                        <CardHeader>
                            <CardTitle className="font-heading text-2xl colour-text">Competitive Programming</CardTitle>
                        </CardHeader>

                        <Separator className="bg-gray-400" />

                        <CardContent>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Mix Difficulty Levels</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Prize Money</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Learning Opportunity</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Check className="w-5 h-5 text-green-700 flex-shrink-0" />
                                    <span className="font-text text-white">Hands-on Experience</span>
                                </li>
                            </ul>

                            <Link href="/Launch" className="inline-block w-full mt-4">
                                <Button className="font-text text-lg w-full px-8 py-3 bg-[var(--colour-accent)] text-[var(--colour-bg)] hover:bg-[var(--colour-accent)]/90">
                                    Register Now
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    </section>
    );
};

export default Launch;
