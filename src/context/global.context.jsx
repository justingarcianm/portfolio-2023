import { createContext, useContext, useState } from "react";

const StateWrapper = createContext();

const StateProvider = ({ children }) => {
  const [activeProjects, setActiveProjects] = useState([]);
  const [projectCategories, setProjectCategories] = useState([]);
  const [projectSkills, setProjectSkills] = useState([]);

  return <StateWrapper.Provider value={{ activeProjects, setActiveProjects, projectCategories, setProjectCategories, projectSkills, setProjectSkills }}>{children}</StateWrapper.Provider>;
};

const GlobalState = () => useContext(StateWrapper);

export { GlobalState, StateProvider };
