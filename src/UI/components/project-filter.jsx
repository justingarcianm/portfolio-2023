import { GlobalState } from "@/context/global.context";

const ProjectFilter = (projects) => {
  const { activeProjects, projectCategories, projectSkills } = GlobalState();

  return (
    <div className="my-4 bg-accent dark:bg-accent-dark text-primary rounded-md shadow-sm p-4 flex justify-between items-center">
      <div className="flex justify-start gap-2 items-center">
        <h4 className="text-l font-bold">Filter by skill:</h4>
        <div className="flex justify-start gap-4 items-center">
          {projectSkills &&
            projectSkills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="cursor-pointer"
                >
                  {skill.title}
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex justify-start gap-2 items-center">
        <h4 className="text-l font-bold">Filter by category:</h4>
        <select
          name="categories"
          id="project-categories"
          className="text-primary bg-transparent outline-none"
        >
          <option value="all">All</option>
          {projectCategories &&
            projectCategories.map((category) => (
              <option
                key={category.id}
                value={category.title}
              >
                {category.title}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectFilter;