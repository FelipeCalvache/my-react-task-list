import { Link } from "react-router-dom";
import "./navBar.css";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export function NavBar() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`nav-bar-${theme}`}>
      <ul className={`nav-bar-options-${theme}`}>
        <Link className={`link-${theme}`} to="/">
          Home 🏡
        </Link>
        <Link className={`link-${theme}`} to="/tasks">
          Tasks ✍️
        </Link>
      </ul>
    </div>
  );
}
