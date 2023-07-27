import LinkedinIcon from "../icons/linkedin";
import GithubIcon from "../icons/github";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
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
