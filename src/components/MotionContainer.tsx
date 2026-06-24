import { motion } from "motion/react";
import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center"
    >
      {children}
    </motion.div>
  );
};

export const AboutPage = () => (
  <PageWrapper>
    <About />
  </PageWrapper>
);
export const ExperiencePage = () => (
  <PageWrapper>
    <Experience />
  </PageWrapper>
);
export const SkillsPage = () => (
  <PageWrapper>
    <Skills />
  </PageWrapper>
);
export const ProjectsPage = () => (
  <PageWrapper>
    <Projects />
  </PageWrapper>
);
