import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-lg text-gray-900"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-gray-200 hover:text-gray-300 bg-gray-700 p-1.5 font-bold rounded-lg hover:bg-gray-600"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
