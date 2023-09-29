import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {FacebookFilled,GoogleOutlined,TwitterOutlined} from '@ant-design/icons';

const Login = () => {
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const navigate =useNavigate();

    const authenticateEmployee=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/user/authenticate",{
            email:email,
            password:password
        }).then(res=>{
            window.localStorage.setItem("jwt",res.data)
             navigate(`/todoList/${email}`)
        }).catch(error=>{
            console.log(error)
            alert('Wrong Username or Password ')
        })
    }
  return (
    <div className="App1">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label><b>Email</b></label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            value={email}
           onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label><b>Password</b></label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <a type="submit" className="btn btn-primary" onClick={(e)=>authenticateEmployee(e)}>
            Login
          </a>
          <div className='d-grid slide'>
         <span>Don't have an account? <a href='/register'>SignUp</a> </span>
          </div>
          <div className='socialLogin'>
           <a href="https://www.google.co.in/"><GoogleOutlined className="socialIcon" style={{color:"red"}}/></a>
           <a href="https://tinyurl.com/4wbxejf3"><FacebookFilled className="socialIcon"  style={{color:"blue"}}/></a>
           <a href="https://twitter.com/login?lang=en"> <TwitterOutlined className="socialIcon" style={{color:"cyan"}}/></a>
          </div>
          
        </div>
      </div>
    </form>
  </div>
  )
}

export default Login