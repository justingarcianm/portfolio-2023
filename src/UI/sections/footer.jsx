import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";

const Footer = () => {
  return (
    <footer>
      <div className="container px-4 mx-auto py-8">
        <div className="flex justify-between items-center gap-8">
          <p>&copy; Designed and created by CodingJustin {new Date().getFullYear()} </p>
          <div className="flex items-center gap-4">
            <LinkedinIcon />
            <GithubIcon />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
