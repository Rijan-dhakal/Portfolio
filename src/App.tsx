import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./components/theme-provider";
import Hero from "./components/Hero";
import { AnimatePresence } from "motion/react";
import {
  AboutPage,
  ExperiencePage,
  ProjectsPage,
  SkillsPage,
} from "./components/MotionContainer";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col relative isolate overflow-hidden text-on-background scroll-smooth">
          {/* Main Container */}
          <main className="relative z-10 grow w-full flex flex-col items-center pb-24">
            <Hero />

            {/* Navbar */}
            <Navbar />

            {/* Navigation */}
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<AboutPage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
