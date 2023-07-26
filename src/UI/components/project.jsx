import Image from "next/image";

import { BiLink } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const Project = ({ project }) => {
  console.log(project);
  const { title, repoLink, imageURL, id, description, demoLink, category, skills } = project;

  return (
    <div
      className="shadow-md rounded-md"
      id={`project-${id}`}
    >
      <Image
        src={imageURL}
        alt={title}
        height={200}
        width={500}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="flex justify-start items-center gap-2 flex-wrap py-4">
          <p className="font-semibold">Tech Stack: </p>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {skills &&
              skills.map((skill) => (
                <span
                  className="rounded-2xl text-primary bg-accent dark:bg-accent-dark py-1 px-4"
                  key={skill.id}
                >
                  {skill.title}
                </span>
              ))}
          </div>
        </div>
        {description}
        <div className="flex justify-between gap-4 items-center border-t-2 border-primary-dark pt-2 mt-2">
          <div>
            <h4 className="text-l font-bold">{category.title}</h4>
          </div>
          <div className="flex justify-center gap-4 items-center">
            <a
              href={repoLink}
              target="_blank"
            >
              <BiLink />
            </a>
            <a
              href={demoLink}
              target="_blank"
            >
              <BsGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
