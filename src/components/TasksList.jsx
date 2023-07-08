import { Task } from "./Task";

export function TasksList({ tasks, setTasks, setPendingTasks, pendingTasks }) {

  function handleClickDelete(task, isChecked) {
    console.log(task)
    let resultAfterDeletion = tasks.filter((item) => item.task !== task.task);
    console.log(resultAfterDeletion)
    setTasks(resultAfterDeletion);
    localStorage.setItem("tasks", JSON.stringify(resultAfterDeletion));
    isChecked ? '' : setPendingTasks(pendingTasks-1)
  }

  function handleClickEdit(editTask, task) {
    console.log(editTask)
    console.log(task)
    let index = tasks.findIndex(item => item.task === task.task);
    console.log(index)
    let newTasks = [...tasks]
    newTasks[index] = editTask 
    console.log(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setTasks(newTasks);
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
      {tasks.map((item) => (
        <Task
          key={item.task}
          task={item}
          handleClickEdit={handleClickEdit}
          handleClickDelete={handleClickDelete}
          setPendingTasks={setPendingTasks}
          pendingTasks={pendingTasks}
        />
      ))}
    </ul>
  );
}
