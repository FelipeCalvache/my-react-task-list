import { VscTrash } from "react-icons/vsc";
import { FiEdit } from "react-icons/fi";


export function Task({task}) {
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
      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <label
          htmlFor="checkBox"
          style={{ display: "flex", alignItems: "center" }}
        >
          <input type="checkbox" id="checkBox" style={{ margin: "0px" }} />
        </label>
        <p style={{ marginBottom: "20px" }}>{task}</p>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <FiEdit style={{ color: "#7cb0ff" }} />
        <VscTrash style={{ color: "#f5636a" }} />
      </div>
    </li>
  );
}
