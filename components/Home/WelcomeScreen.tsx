"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

const PeopleAnimation = dynamic(() => import("@/components/Home/PeopleAnimation"), { ssr: false });

interface WelcomeScreenProps {
  show: boolean;
  onFinish: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ show, onFinish }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: "-100vh" }}
          animate={{ y: 0 }}
          exit={{ opacity: 0, y: "100vh" }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-[var(--colour-accent)] to-[var(--colour-secondary)]"
        >
          {/* People animation behind text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none select-none">
            <div className="w-[80vw] h-[80vh] opacity-60">
              <PeopleAnimation />
            </div>
          </div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-title text-5xl md:text-8xl text-black text-center drop-shadow-lg relative z-20"
          >
            Welcome <br /> to <br /> Computer Science Society
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WelcomeScreen;
