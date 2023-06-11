import { VscTrash } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";

export function Task({ task, handleClickDelete, handleClickEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  function handleEdit(){
    setIsEditing(true)
  }

  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    handleClickEdit(form.editTask, task)
    setIsEditing(false)
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
            onChange={handleCheckboxChange}
            type="checkbox"
            id="checkBox"
            checked={isChecked}
            style={{ margin: "0px" }}
          />
        </label>
        {isEditing ? (
          <input name="editTask" placeholder={task} />
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
          onClick={() => handleClickDelete(task)}
          style={{ color: "#f5636a", cursor: "pointer" }}
        />
      </div>
    </li>
  );
}
