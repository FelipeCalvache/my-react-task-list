import { Task } from "./Task";

export function TasksList({ tasks, setTasks }) {
  function handleClickDelete(taskName) {
    let resultAfterDeletion = tasks.filter((task) => task !== taskName);
    setTasks(resultAfterDeletion);
  }

  function handleClickEdit(editTask, task) {
    let index = tasks.indexOf(task);
    let newTasks = tasks.map((task,i) => (i===index ? editTask : task))
    setTasks(newTasks)
  }

  return (
    <ul
      style={{
        listStyle: "none",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {tasks.map((task) => (
        <Task
          key={task}
          task={task}
          handleClickEdit={handleClickEdit}
          handleClickDelete={handleClickDelete}
        />
      ))}
    </ul>
  );
}
