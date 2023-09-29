import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {

    const {email,id} = useParams(); 
    const [a,setA] = useState(0);
    const [task, setTask] = useState('')
    const navigate =useNavigate();
    const api = 'http://localhost:8080/task/getUserId'+'/'+email;
    useEffect(()=>{
        axios.get(api)
        .then((response)=>{
             setA(response.data);
          }).catch(error=>{
              console.log(error);
        })
      },[])
    const editTask =(e)=>{
        e.preventDefault();
        axios.put("http://localhost:8080/task/editTask"+"/"+id,{
            user_id:a,
            task:task,
        }).then(res=>{
             console.log(res.data)
            
            alert("Task Edited")
            navigate(-1);
        }).catch(error=>{
            console.log(error)
            alert('error')
        })
    }

    const handler = (e)=>{
        e.preventDefault();
       navigate(-1);      
    }


    return (
        <div>
             <div className='button-container'>
    <span><a className='btn btn-warning' onClick={handler}>Back to List</a></span>
    </div>
    <br />
            <h1 className='top'>TodoList</h1>

            <div className="form-group mt-3">
                <label><h4>Edit The Task</h4></label>
                <input
                    type="text"
                    className="form-control mt-1"
                    placeholder="Enter the Revised Task"
                    name="task"
                    id="task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
            </div><br />
            <button className="btn btn-primary" onClick={(e) => editTask(e)}>Save</button>

        </div>
    )
}

export default EditTask