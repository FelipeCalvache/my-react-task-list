import { VscTrash } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export function Task({
  task,
  handleClickDelete,
  handleClickEdit,
  setPendingTasks,
  pendingTasks,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = () => {
    console.log("isCheked " + isChecked);
    setIsChecked(!isChecked);
    isChecked
      ? setPendingTasks(pendingTasks + 1)
      : setPendingTasks(pendingTasks - 1);
  };

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    handleClickEdit(form.editTask, task);
    setIsEditing(false);
  }

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#e2e2e2",
        borderRadius: "8px",
        padding: "0px 1.2em",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "center", gap: "5px" }}
      >
        <label
          htmlFor="checkBox"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input
            onClick={handleCheckboxChange}
            type="radio"
            id="checkBox"
            checked={isChecked}
            readOnly
            style={{ margin: "0px", width: "20px" }}
          />
        </label>
        {isEditing ? (
          <input
            name="editTask"
            type="text"
            defaultValue={task}
            autoFocus
            style={{
              height: "58px",
              border: "none",
              backgroundColor: "#e2e2e2",
              outline: "none",
              fontSize: "16px",
              fontFamily:
                "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
              fontStyle: "italic",
            }}
          />
        ) : (
          <p
            style={{
              marginBottom: "20px",
              textDecoration: isChecked ? "line-through" : "",
            }}
          >
            {task}
          </p>
        )}
      </form>
      <div style={{ display: "flex", gap: "10px" }}>
        <FiEdit
          onClick={handleEdit}
          style={{ color: "#7cb0ff", cursor: "pointer" }}
        />
        <VscTrash
          onClick={() => handleClickDelete(task, isChecked)}
          style={{ color: "#f5636a", cursor: "pointer" }}
        />
      </div>
    </li>
  );
}
