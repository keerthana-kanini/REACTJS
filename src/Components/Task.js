import React, { useState } from "react";

export const Task=() => 
{
    const [task,setTask] = useState ([]);

    //Add Task
    const [inputvalue,setInputvalue] = useState('');

    const AddTask =() =>{
        if(inputvalue){
            const newTask = {
                id:Date.now(),
                title:inputvalue
            };

            setTask((prevTask)=> [...prevTask,newTask])
            setInputvalue('')
        }
    }

    const RemoveTask = (taskid) => 
    {
        setTask((prevTask)=> prevTask.filter((task)=>task.id !== taskid))
    }

    return (
        <div>
            <h1>LIST OF ITEMS</h1>
            <div>
                <input type="text" value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
                <button className="btn btn-info" onClick={AddTask}>Add Task</button>
            </div>

            <ul>
                {task.map((items)=>
                <li key={items.id}>
                    {items.title}
<button className="btn btn-danger" onClick={()=>RemoveTask(items.id)}>Remove</button>
                </li>
                )}
            </ul>
        </div>
    )
  }