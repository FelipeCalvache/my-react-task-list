import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { TasksList } from "./TasksList";
import "./container.css";

export const Container = () => {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    console.log("llamando a la API");
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTasks(data)
        setPendingTasks(tasks.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="container">
      <Header
        tasks={tasks}
        setTasks={setTasks}
        setPendingTasks={setPendingTasks}
        pendingTasks={pendingTasks}
      />
      <TasksList
        tasks={tasks}
        setTasks={setTasks}
        setPendingTasks={setPendingTasks}
        pendingTasks={pendingTasks}
      />
      <Footer
        setTasks={setTasks}
        pendingTasks={pendingTasks}
        setPendingTasks={setPendingTasks}
      />
    </div>
  );
};
