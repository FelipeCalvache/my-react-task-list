import { useContext, useState } from "react";
import "./header.css";
import { ThemeContext } from "../context/themeContext";
export function Header({ tasks, setTasks, setPendingTasks, pendingTasks }) {
  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    form.active = false;
    if (form.task === "") {
      return;
    }
    setTasks([form, ...tasks]);
    localStorage.setItem("tasks", JSON.stringify([form, ...tasks]));
    event.target.reset();
    setPendingTasks(pendingTasks + 1);
  }

  const [lightEmoji, setLightEmoji] = useState("☀️");

  const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme);

  function handleClick() {
    const toggleTheme = theme === "claro" ? "oscuro" : "claro";
    const toggleEmoji = lightEmoji === "☀️" ? "🌙" : "☀️";
    setLightEmoji(toggleEmoji);
    setTheme(toggleTheme);
  }

  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent:'space-between'
        }}
      >
        <h1 className={`h1-${theme}`}>Todo App</h1>
        <div id="toggle" onClick={handleClick}>
          {lightEmoji}
        </div>
      </div>
      <form className={`form-${theme}`} onSubmit={handleSubmit}>
        <input
          className={`input-${theme}`}
          name="task"
          placeholder="Add your new todo"
          autoFocus={false}
        ></input>
        <button className={`button-${theme}`} type="submit">
          +
        </button>
      </form>
    </header>
  );
}

