import { CodeBracketIcon } from "@heroicons/react/24/outline";

import GithubIcon from "../icons/github";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          <p>&copy; Designed and created by CodingJustin {new Date().getFullYear()} </p>
          <GithubIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
