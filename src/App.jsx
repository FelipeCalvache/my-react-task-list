
import { useState } from 'react';
import './App.css'
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { TasksList } from './components/TasksList'

function App() {
const [tasks, setTasks] = useState([])

  return (
    <main style={{minWidth: '500px'}}>
    <Header tasks={tasks} setTasks={setTasks}/>
    <TasksList tasks={tasks} setTasks={setTasks}/>
    <Footer/>
    </main>
  )
}

export default App
