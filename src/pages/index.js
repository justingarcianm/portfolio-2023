// import { Inter } from 'next/font/google'

import Hero from "@/UI/sections/hero";
import Projects from "@/UI/sections/projects";
import Contact from "@/UI/sections/contact";

import { GlobalState } from "@/context/global.context";
import { useEffect } from "react";

function Home({ projects, categories, skills }) {
  const { setActiveProjects, setProjectCategories, setProjectSkills } = GlobalState();

  useEffect(() => {
    setActiveProjects(projects);
    setProjectCategories(categories);
    setProjectSkills(skills);
  }, [setActiveProjects, setProjectCategories, setProjectSkills, projects, categories, skills]);

  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}

export async function getServerSideProps() {
  const URL = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` : "http://localhost:3000";

  const data = await fetch(`${URL}/api/projects`);
  const catData = await fetch(`${URL}/api/categories`);
  const skillData = await fetch(`${URL}/api/skills`);

  const projects = await data.json();
  const categories = await catData.json();
  const skills = await skillData.json();

  return {
    props: {
      projects,
      categories,
      skills,
    },
  };
}

export default Home;
