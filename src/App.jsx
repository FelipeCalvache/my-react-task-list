import { useState } from "react";
import "./App.css";
import { Container } from "./components/Container";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [pendingTasks, setPendingTasks] = useState(tasks.length);

  const [theme, setTheme] = useState("claro");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main className={`main-${theme}`}>
        <Container
          tasks={tasks}
          setTasks={setTasks}
          pendingTasks={pendingTasks}
          setPendingTasks={setPendingTasks}
        />
      </main>
    </ThemeContext.Provider>
  );
}

export default App;
