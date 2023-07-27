import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import GithubIcon from "../icons/github";
import LinkedinIcon from "../icons/linkedin";

import { BsFillMoonFill, BsSunFill } from "react-icons/bs";

const Header = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          className="hover:text-accent-dark transition-all dark:hover:text-accent"
        >
          <BsSunFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="hover:text-accent-dark transition-all dark:hover:text-accent"
        >
          <BsFillMoonFill />
        </button>
      );
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 1 }}
      className="shadow-md fixed bg-primary dark:bg-primary-dark min-w-full z-50"
    >
      <div className="container px-4 mx-auto py-8">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="font-title text-2xl font-semibold text-accent dark:text-accent-dark tracking-wide flex items-center justify-center"
            passHref
          >
            CodingJustin
            <span className="animate-typing">_</span>
          </Link>
          <div className="flex justify-end items-center gap-4">
            <LinkedinIcon />
            <GithubIcon />
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
