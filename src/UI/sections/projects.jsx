import { motion } from "framer-motion";

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

const Projects = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container mx-auto py-8">
        <h2 className="font-bold text-6xl text-center text-accent dark:text-accent-dark">My Projects</h2>
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="py-8 flex justify-center items-center gap-8 flex-wrap lg:flex-nowrap"
        >
          <motion.div variants={variant}>
            <Project />
          </motion.div>
          <motion.div variants={variant}>
            <Project />
          </motion.div>
          <motion.div variants={variant}>
            <Project />
          </motion.div>
        </motion.div>
        <a
          href="#"
          target="_blank"
          className="rounded-full py-2 px-4 text-primary bg-accent dark:bg-accent-dark text-center w-fit mx-auto"
        >
          View more on my github
        </a>
      </div>
      <div></div>
    </section>
  );
};

export default Projects;
