import { useState } from 'react'; 

export function TaskManager(){
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    const addTask = (newInput) => {
        if (!newInput || newInput.trim() === ""){
            alert("Error! No text inputted.")
        }else{
        const newTask = {
            id: Date.now(),
            title: newInput,
            completed: false 
        }
    setTasks([...tasks, newTask])
    setInput('')
        }
    }

    const toggleTaskCompletion = (taskID) => {
        const reformattedTask = tasks.map(
            (task) => 
            taskID === task.id
            ? {...task, completed: !task.completed }
            : task
        )
        setTasks(reformattedTask)           
    }

return(
    <>
    <h1>Task Page</h1>
    <form onSubmit={e => {
        e.preventDefault() 
        addTask(input)}}>
        <label> Enter Task:
        <input
            value = {input}
            onChange={e => setInput(e.target.value)}
        /> 
        </label> 

        <button type="submit">Update Tasks</button> 
              
    </form>

    <h3>Current Tasks</h3>
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} | Complete: {task.completed ? "True": "False"}
                    <button onClick={e => {
                        toggleTaskCompletion(task.id)
                        }}>Done!
                    </button>
                </li>
            ))}
        </ul>
    </>
)
}
