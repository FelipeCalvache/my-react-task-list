import { useContext } from "react";
import './form.css'
import { ThemeContext } from "../context/themeContext";
export function Form() {

const {theme} = useContext(ThemeContext)

  return (
    <form>
      <input
        type="text"
        name="usernaeme"
        id="usernaeme"
        className={`input-${theme}`}
        autoFocus={false}
        placeholder="User name"
      />
      <input
        type="text"
        name="password"
        id="password"
        className={`input-${theme}`}
        placeholder="Password"
      />
      <button className={`button-${theme}`}>Log In</button>
    </form>
  );
}
