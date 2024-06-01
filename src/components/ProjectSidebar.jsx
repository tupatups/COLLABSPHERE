import Button from "./Button";
import style from '../style/projectSidebar.module.css';
export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <div class={style.sidebar}>
      <div class={style.titleLogo}>
        <h2 class={style.appTitle}>CollabSphere</h2>
      </div>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
        <p class={style.myWorkspace}>My Workspaces</p>
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
    </div>
    </>
  );
}
