import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Link from "next/link";

import GithubIcon from "../icons/github";

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
          className="grid grid-cols-3 gap-2 items-center"
        >
          <BsSunFill />
        </button>
      );
    } else {
      return (
        <button
          onClick={() => setTheme("dark")}
          className="grid grid-cols-3 gap-2 items-center"
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
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center">
          <Link
            href={"/"}
            className="font-title text-2xl font-semibold text-accent dark:text-accent-dark "
            passHref
          >
            CodingJustin
          </Link>
          <div className="flex justify-normal items-center gap-4">
            <GithubIcon />
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
