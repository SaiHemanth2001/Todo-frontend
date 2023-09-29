import React, { useEffect, useState } from 'react'
import './TodoList.css'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios';
const TodoList = () => {
    const {email} = useParams();
    const [task, setTask] = useState('')
    const navigate =useNavigate();
    const [a,setA] = useState(0);
    const [tasks,setTasks] = useState([]);
    const api = 'http://localhost:8080/task/getUserId'+'/'+email;
    const api1 = 'http://localhost:8080/task/getByEmail'+'/'+email;
    useEffect(()=>{
      axios.get(api)
      .then((response)=>{
           setA(response.data);
        }).catch(error=>{
            console.log(error);
      })
    },[])
    useEffect(()=>{
    axios.get(api1)
    .then((response)=>{
            setTasks(response.data)
        }).catch(error=>{
            console.log(error);
        })
    },[])

    const saveTask =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/task/addtask",{
            user_id:a,
            task:task,
        }).then(res=>{
             console.log(res.data)
            navigate(`/todoList/${email}`)
            alert("Task Added")
            window.location.reload()
        }).catch(error=>{
            console.log(error)
            alert('error')
        })
    }


    

    const deleteTask= (e,task_id) =>{
        e.preventDefault();
        axios.delete(`http://localhost:8080/task/deleteTask/${task_id}`)
        .then((res)=>{
            console.log(res);
            navigate(`/todoList/${email}`)
            window.location.reload()
        })
        .catch(error=>{
            console.log(error);
            alert('error')
        })
    }
  return (
    <div>
        <h1 className='top'>TodoList</h1>

        <div className="form-group mt-3">
            <label><h4>Enter The Task</h4></label>
                 <input
                     type="text"
                        className="form-control mt-1"
                    placeholder="Enter the Task"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
        </div><br />
        <button className="btn btn-primary" onClick={(e) => saveTask(e)}>Add Task</button>

        <br /><br /><br /><br /><br /><br /><br /><br />
        
        <h2 className='text-center'>Tasks</h2>
       <table className="table table-bordered table-striped" >
        <thead>
         <tr>
            <th> Task</th>
            <th> Edit</th>
            <th>Delete</th>  
         </tr>         
        </thead>
        <tbody>
            {
                tasks.map(
                    task1 =>
                    <tr key={task1.task_id}>
                        <td>{task1.task}</td>
                        <td><a href={`/editTask/${email}/${task1.task_id}`} className='btn btn-primary'>Edit Task</a></td>
                        <td><a className='btn btn-danger' onClick={(e)=>deleteTask(e,task1.task_id)}>Delete</a></td>
                    </tr>
                )
            }
        </tbody>
      </table>

    
    
    </div>
  )
}

export default TodoList