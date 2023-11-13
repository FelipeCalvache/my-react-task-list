import { VscTrash } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { useContext, useState } from "react";
import "./task.css";
import { ThemeContext } from "../context/themeContext";

export function Task({
  task,
  handleClickDelete,
  handleClickEdit,
  setPendingTasks,
  pendingTasks,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(task.active);

  const handleCheckboxChange = () => {
    let newTaskActive = { ...task };
    newTaskActive.active = !newTaskActive.active;
    console.log(newTaskActive);
    handleClickEdit(newTaskActive, task);
    toggleChecked();
  };

  function toggleChecked() {
    setIsChecked(!isChecked);
    isChecked
      ? setPendingTasks(pendingTasks + 1)
      : setPendingTasks(pendingTasks - 1);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    form.active = isChecked;
    handleClickEdit(form, task);
    setIsEditing(false);
  }

  const { theme } = useContext(ThemeContext);

  return (
    <li className={`li-${theme}`}>
      <form className={`form-${theme}`} onSubmit={handleSubmit}>
        <label className={`label-${theme}`} htmlFor="checkBox">
          <input
            className={`radio-button-${theme}`}
            onClick={() => handleCheckboxChange(isChecked)}
            type="radio"
            id="checkBox"
            checked={isChecked}
            readOnly
          />
        </label>
        {isEditing ? (
          <input
            className={`input-text-${theme}`}
            name="task"
            type="text"
            defaultValue={task.task}
            autoFocus
          />
        ) : (
          <p
            className={`p-${theme}`}
            style={{
              textDecoration: isChecked ? "line-through" : "",
            }}
          >
            {task.task}
          </p>
        )}
      </form>
      <div>
        <FiEdit className={`fi-edit-${theme}`} onClick={handleEdit} />
        <VscTrash
          className={`vsc-trash-${theme}`}
          onClick={() => handleClickDelete(task, isChecked)}
        />
      </div>
    </li>
  );
}
