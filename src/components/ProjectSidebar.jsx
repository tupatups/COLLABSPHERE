import Button from "./Button";
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <aside className="w-1/3 px-8 py-16 shadow-x1 bg-cyan-800 text-gray-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold text-[2.4rem] text-gray-200">
        CollabSphere
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <p className="text-[1.3rem] mt-6 py-4 px-2 font-bold">My Workspaces</p>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-gray-200 bg-gray-800 transition duration-250 ease-in hover:text-xl hover:bg-stone-600 rounded-xl";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-gray-800 text-stone-100 rounded-xl";
          } 

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
      <div class="rounded-lg bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg shadow-[#a4a4a4,#ffffff]"></div>
    </aside>
    </>
  );
}
