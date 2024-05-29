import GanttChart from "./GanttChart";
import Tasks from "./Tasks";
import classes from "../style/ganttChart.module.css";
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
      <div className="w-[34rem] h-[31rem] mt-10 border-solid border-3 bg-gray-300 rounded-xl p-6 mb-16">
        <header className="pb-4 mb-4 border-b-2 border-stone-500">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-stone-600 mb-2">
              {project.title}
            </h1>
            <button
              className="text-stone-600 hover:text-stone-950"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
          <p className="mb-4 text-stone-400">
            {formattedStartDate} - {formattedDueDate}
          </p>
          <p className="text-stone-600 whitespace-pre-wrap">
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
