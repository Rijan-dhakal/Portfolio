import { motion } from "motion/react";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "Figma", "Vercel"],
  },
];

const SkillsPage = () => {
  return (
    <section
      className="w-full max-w-3xl mb-32 relative z-10 mx-auto px-4"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant shadow-sm flex flex-col"
      >
        <h3 className="font-headline-md text-3xl md:text-4xl text-on-surface text-center md:text-left mb-12">
          Skills
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col space-y-4"
            >
              <h4 className="font-label-caps text-sm tracking-widest text-on-surface-variant uppercase border-b border-outline-variant pb-2">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-label-caps text-xs tracking-wider text-on-surface border border-outline px-3 py-1.5 rounded-sm hover:bg-surface-variant hover:text-on-surface transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsPage;
