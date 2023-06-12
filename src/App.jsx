
import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'

function App() {
const [tasks, setTasks] = useState([])
const [pendingTasks,setPendingTasks] = useState(0)

  return (
    <main
      style={{ minWidth: "500px", border: "solid black 1px", padding: "50px" }}
    >
      <Header tasks={tasks} setTasks={setTasks} setPendingTasks={setPendingTasks} pendingTasks={pendingTasks} />
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
    </main>
  ); 
}

export default App
