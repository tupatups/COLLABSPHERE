import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const startDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;
    const enteredStartDate = startDate.current.value;
    
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === "" || 
      enteredStartDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      startDate: enteredStartDate,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-gray-900 my-4">Invalid input</h2>
        <p className="text-gray-900 mb-4">
          Opss.. looks like you forgot to enter a value.
        </p>
        <p className="text-gray-900 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 ml-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-gray-200 hover:text-gray-100" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-gray-800 text-gray-100 hover:bg-gray-700"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={startDate} label="Start Date" />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
