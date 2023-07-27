import { motion } from "framer-motion";

import Form from "../components/form";

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

const Contact = () => {
  return (
    <section className="flex justify-center items-center relative dark:bg-accent-dark bg-accent">
      <div className="container px-4 mx-auto py-16">
        <motion.div
          variants={variant}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-5 justify-between items-start gap-16"
        >
          <div className="col-span-5 lg:col-span-3">
            <h2 className="text-primary text-6xl font-bold pb-8 uppercase">Let&apos;s talk</h2>
            <p className="text-xl text-primary">
              {"I started learning web development in 2018 and I haven't stopped since. I appreciate how much I've been rewarded for my stubbornness. From tackling the basics to deploying fullstack apps, learned to appreciate my tenacity and love for problem solving. I live by the adage:"}
            </p>
            <p className="my-4 text-xl text-primary">
              <em>
                &quot;<strong>Luck</strong> is what happens when preparation meets opportunity.
              </em>{" "}
              &quot; &#45; Seneca
            </p>
            <p className="text-xl text-primary">
              {
                "Although I started my learning solo, I eventually found myself in a coding bootcamp in 2019 and found my love for teamwork and mentoring. I am very lucky to be in the position I am to have gone from coding in my spare time to it being my career. Thanks for reading! If you think I would be a good fit for your team, or just want to get to know me, send me a message."
              }
            </p>
          </div>
          <div className="col-span-5 lg:col-span-2 text-primary">
            <Form />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
