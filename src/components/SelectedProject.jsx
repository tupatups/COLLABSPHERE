import GanttChart from "./GanttChart";
import Tasks from "./Tasks";
import style from "../style/selectedProject.module.css";
import style2 from "../style/selectedGanttChart.module.css";
import NewTask from "./NewTask";

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
            <h1 class={style.title}>{project.title}</h1>

            {/* Changes, ensure that the onDelete will pass the project id of selected project */}
            <button onClick={() => onDelete(project)}>Delete</button>
          </div>
          <p class={style.date}>
            {formattedStartDate} - {formattedDueDate}
          </p>
          <p class={style.description}>{project.description}</p>
        </header>
        <Tasks
          onAdd={onAddTask}
          onDelete={onDeleteTask}
          tasks={tasks.filter((task) => task.projectId === project.id)}
        />
        <NewTask projectId= {project.id} onAdd={onAddTask}/>
      </div>

      {/* This will be the Gantt chart */}

      <div class={style2.container}>
        
       <GanttChart />
      </div>
    </>
  );
}
