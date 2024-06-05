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
      <div className={style.sidebar}>
      <div className={style.titleLogo}>
        <h2 className={style.appTitle}>CollabSphere</h2>
      </div>
      <div>
        <p className={style.myWorkspace}>My Workspaces</p>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8 font-bold">
        {projects.map((project) => {
          return (
            <li key={project.id}>
              <button
                className={style.projectButton}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title} 
              </button>
            </li>
          );
        })}
      </ul>
      <div className="rounded-lg bg-gradient-to-tr from-gray-300 to-gray-500 shadow-lg shadow-[#a4a4a4,#ffffff]"></div>
    </div>
    </>
  );
}
