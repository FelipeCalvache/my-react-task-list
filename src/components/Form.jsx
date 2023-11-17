import { useContext, useState } from "react";
import "./form.css";
import { ThemeContext } from "../context/themeContext";
export function Form() {
  const { theme } = useContext(ThemeContext);

  const [user, setUser] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    let form = Object.fromEntries(new window.FormData(event.target));
    setUser(form);
    auth(form);
    event.target.reset();
  }

  function auth(form) {
    fetch("http://localhost:5000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        // Almacenar el JWT en el almacenamiento local
        console.log(data)
        localStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("Error de inicio de sesión:", error);
      });
  }

  return (
    <div className={`form-container-${theme}`}>
      <form className={`form2-${theme}`} onSubmit={handleSubmit}>
        <h2>Todo app</h2>
        <input
          type="text"
          name="username"
          id="usernaeme"
          className={`input2-${theme}`}
          autoFocus={false}
          placeholder="User name"
        />
        <input
          type="text"
          name="password"
          id="password"
          className={`input2-${theme}`}
          placeholder="Password"
        />
        <button type="submit" className={`button-${theme}`}>
          Log In
        </button>
      </form>
    </div>
  );
}
