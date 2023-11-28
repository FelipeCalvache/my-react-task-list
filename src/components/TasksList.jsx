import { Task } from "./Task";

export function TasksList({ tasks, setTasks, setPendingTasks, pendingTasks }) {

  function handleClickDelete(task, isChecked) {
    let resultAfterDeletion = tasks.filter((item) => item.task !== task.task);
    setTasks(resultAfterDeletion);
    localStorage.setItem("tasks", JSON.stringify(resultAfterDeletion));
    isChecked ? '' : setPendingTasks(pendingTasks-1)
  }

  function handleClickEdit(editTask, task) {
    let index = tasks.findIndex(item => item.task === task.task);
    let newTasks = [...tasks]
    newTasks[index] = editTask
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
      {tasks?.map((item) => (
        <Task
          key={item.id}
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
