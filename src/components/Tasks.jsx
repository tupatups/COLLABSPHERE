import React from "react";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 ? (
        <p className="text-gray-100 my-4">This project does not have any tasks yet.</p>
      ) : (
        <ul className="p-4 mt-8 rounded-xl bg-stone-200 overflow-y-auto max-h-[30rem]">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4 text-gray-900 uppercase">
              <span className="max-w-[300px]">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
