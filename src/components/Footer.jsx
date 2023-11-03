import { useContext } from "react";
import "./footer.css";
import { ThemeContext } from "../context/themeContext";
export function Footer({ setTasks, pendingTasks, setPendingTasks }) {
  function handleClickDeleteAll() {
    setTasks([]);
    setPendingTasks(0);
    localStorage.clear();
  }

  const {theme} = useContext(ThemeContext)

  return (
    <footer className={`footer-${theme}`}>
      <p>You have {pendingTasks} pending tasks</p>
      <button
        className={`footer-button-${theme}`}
        onClick={handleClickDeleteAll}
      >
        Clear all
      </button>
    </footer>
  );
}
