import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <section
      className="w-full max-w-3xl mb-32 relative z-10 mx-auto px-4"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-surface-container-lowest rounded-xl p-8 md:p-12 border border-outline-variant shadow-sm flex flex-col space-y-8"
      >
        <h3 className="font-headline-md text-3xl md:text-4xl text-on-surface flex items-center gap-2">
          Hello <span className="animate-pulse">👋</span>
        </h3>

        <div className="space-y-6 font-body-lg text-lg text-on-surface-variant leading-relaxed">
          <p>
            I am a full stack developer who loves writing maintainable and
            scalable code to solve real world problems by building from
            responsive frontend to a reliable backend systems.
          </p>
          <p>
            While I am comfortable working on the full stack, my primary focus
            is in backend development. Here's my tech stack:{" "}
          </p>

          <ul className="space-y-3 pl-2">
            <li className="flex items-center gap-3">
              <img
                src="https://skillicons.dev/icons?i=nextjs&size=70"
                alt="Next.js logo"
                className="h-10 w-10"
                loading="lazy"
              />
              <strong className="text-on-surface font-semibold">Next.js</strong>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://skillicons.dev/icons?i=nodejs&size=70"
                alt="Node.js logo"
                className="h-10 w-10"
                loading="lazy"
              />
              <strong className="text-on-surface font-semibold">Node.js</strong>
            </li>
            <li className="flex items-center gap-3">
              <img
                src="https://skillicons.dev/icons?i=ts&size=70"
                alt="TypeScript logo"
                className="h-10 w-10"
                loading="lazy"
              />
              <strong className="text-on-surface font-semibold">
                TypeScript
              </strong>
            </li>
          </ul>

          <p>
            Feel free to explore my work, skills, and projects, and contact me
            if you think I'm a good fit.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
