import { LinkIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const Project = () => {
  return (
    <div className="rounded shadow-md">
      <div className="p-4">
        <h3 className="text-xl font-bold">Project Title</h3>
        <div className="flex justify-start items-center gap-2 flex-wrap py-4">
          <p className="font-semibold">Tech Stack: </p>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <span className="rounded-2xl text-primary bg-accent dark:bg-accent-dark py-1 px-4">React</span>
            <span className="rounded-2xl text-primary bg-accent dark:bg-accent-dark py-1 px-4">Tailwind CSS</span>
            <span className="rounded-2xl text-primary bg-accent dark:bg-accent-dark py-1 px-4">Next JS</span>
          </div>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, eum.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, eum.</p>
        <div className="flex justify-end gap-4 items-center">
          <a href="#">
            <LinkIcon />
          </a>
          <a href="#">
            <CodeBracketIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
