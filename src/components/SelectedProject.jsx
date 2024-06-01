import GanttChart from "./GanttChart";
import Tasks from "./Tasks";
import classes from "../style/ganttChart.module.css";
import style from '../style/newProject.module.css';

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDueDate = new Date(project.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  const formattedStartDate = new Date(project.startDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <>
      <div class={style.selectedProjectContainer}>
        <header class={style.header}>
          <div class={style.topContainer}>
            <h1 class={style.title}>
              {project.title}
            </h1>
            <button
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-gray-100 my-4">
            {formattedStartDate} - {formattedDueDate}
          </p>
          <p className="text-gray-100 whitespace-pre-wrap my-4">
            {project.description}
          </p>
        </header>
        <Tasks
          onAdd={onAddTask}
          onDelete={onDeleteTask}
          tasks={tasks.filter((task) => task.projectId === project.id)}
        />
      </div>

      {/* This will be the Gantt chart */}
    </>
  );
}
