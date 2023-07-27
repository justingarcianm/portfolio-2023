import { BsGithub } from "react-icons/bs";

const GithubIcon = () => {
  return (
    <a
      href="https://github.com/justingarcianm"
      target="_blank"
      className="text-xl text-primary-dark dark:text-primary transition-all hover:text-accent dark:hover:text-accent-dark"
    >
      <BsGithub />
    </a>
  );
};

export default GithubIcon;
