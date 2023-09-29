import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterUser = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate =useNavigate();
    const saveUser =(e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/user/register",{
            email:email,
            password:password,
        }).then(res=>{
             console.log(res.data)
            navigate("/")
            alert("Successfully Registered")
        }).catch(error=>{
            console.log(error)
            alert('error')
        })
    }
  return (
    <div>
         <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-5 offset-md-3 offset-md-3">
                        <h2 className="text-center">Register Customer</h2>
                        <div className="card-body">
                            <form>

                                <div className="form-group mt-3">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control mt-1"
                                        placeholder="Enter the Email Id"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="form-group mb-1">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        placeholder="Enter the password"
                                        name="password"
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-primary" onClick={(e) => saveUser(e)}>Submit</button>{" "}

                                <Link to="/" className="btn btn-danger">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default RegisterUser