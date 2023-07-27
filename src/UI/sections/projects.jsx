import { motion } from "framer-motion";

import ProjectFilter from "../components/project-filter";
import Project from "../components/project";

const variant = {
  initial: {
    opacity: 0,
    y: 15,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.5,
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Projects = ({ projects }) => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-8">
        <h2 className="font-bold text-6xl text-center text-accent dark:text-accent-dark pb-6 uppercase">My Projects</h2>
        <ProjectFilter />
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-8 grid grid-cols-3 justify-center items-center gap-8"
        >
          {projects
            ? projects.map((project) => {
                return (
                  <motion.div
                    variants={variant}
                    key={project.id}
                  >
                    <Project project={project} />
                  </motion.div>
                );
              })
            : "Loading projects..."}
        </motion.div>
        <a
          href="#"
          target="_blank"
          className="rounded-full py-2 px-4 text-white bg-accent dark:bg-accent-dark text-center w-fit mx-auto flex uppercase dark:hover:bg-accent-hover hover:bg-accent-hover-dark transition-all"
        >
          View more on my github
        </a>
      </div>
      <div></div>
    </section>
  );
};

export default Projects;
