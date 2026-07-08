import { motion } from "motion/react";
import { Mail, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import picture from "../assets/picture.jpg";
import { ThemeToggle } from "./Toggle";

export default function Hero() {
  return (
    <section
      className="w-full flex flex-col items-center text-center mb-8 relative z-10 pt-8"
      id="hero"
    >
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-4xl w-full">
        <div className="absolute z-10 top-10 right-10">
          <ThemeToggle />
        </div>
        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 flex-1"
        >
          <h1 className="font-display-lg text-5xl md:text-7xl font-medium text-on-surface tracking-tight">
            Hi, I'm Rijan
          </h1>
          <h2 className="font-headline-md text-2xl md:text-3xl text-on-surface-variant max-w-md leading-relaxed">
            A learner and developer with a passion for learning and creating
            products.
          </h2>

          <div className="flex items-center gap-4 mt-8 bg-surface-container border border-outline-variant rounded-full px-6 py-3 shadow-sm">
            <a
              href="https://github.com/Rijan-dhakal"
              target="_blank"
              title="GitHub"
              rel="noopener noreferrer"
              className="text-on-surface hover:opacity-70 transition-opacity"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rijandhakal"
              target="_blank"
              title="LinkedIn"
              rel="noopener noreferrer"
              className="text-on-surface hover:opacity-70 transition-opacity"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rijandhakal86@outlook.com"
              title="Email"
              className="text-on-surface hover:opacity-70 transition-opacity"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="#"
              title="Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface hover:opacity-70 transition-opacity"
            >
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Image  */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="shrink-0 relative mt-8 md:mt-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 border border-outline-variant rounded-full overflow-hidden shadow-sm relative z-10 bg-surface-container">
            <img
              src={picture}
              alt="Photo of Rijan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
