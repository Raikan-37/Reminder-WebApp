import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Header from './components/Header'
import {useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'2st appointment',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        },
        {
            id:2,
            text:'2nd appointment',
            day:'Feb 10th at 2:30pm',
            reminder:false,
        },
        {
            id:3,
            text:'3rd appointment',
            day:'Feb 17th at 2:30pm',
            reminder:false,
        },
        {
            id:4,
            text:'4th appointment',
            day:'Feb 2th at 2:30pm',
            reminder:false,
        }
    ]
)

  //Add Task
  const addTask = (task)=>{
    const id  = Math.floor(Math.random()*1000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
    console.log(task)
  }

  //Delete Task
  const deleteTask = (id)=>{
    console.log(id)
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //Toggle Reminder
  const toggleReminder = (id)=>{
    console.log(id)
    setTasks(tasks.map((task)=>task.id==id ? {...task,reminder:!task.reminder} : task))
  }

  const OnAdd = ()=>{
    setShowAddTask(!showAddTask)
  }


  return (
    <div className="container">
    <Header OnAdd={OnAdd} showAdd={showAddTask}/>

    {showAddTask && <AddTask onAdd={addTask}/>}

    {tasks.length>0 ? <Tasks tasks={tasks} onDelete=
    {deleteTask} onToggle={toggleReminder}/>:'no Task to show'}
    </div>
  );
}



export default App;
