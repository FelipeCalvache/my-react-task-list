import { Footer } from "./Footer"
import { Header } from "./Header"
import { TasksList } from "./TasksList"
import './container.css'

export const Container = ({tasks,setTasks,setPendingTasks,pendingTasks}) => {
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
}
