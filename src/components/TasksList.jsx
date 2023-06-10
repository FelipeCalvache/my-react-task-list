import { Task } from "./Task";

export function TasksList({tasks}){



return (
  <ul style={{listStyle:'none', padding:'0px', display:'flex', flexDirection:'column', gap:'10px'}}>
    {tasks.map(task => <Task key={task} task={task}/> )}
  </ul>
);
}