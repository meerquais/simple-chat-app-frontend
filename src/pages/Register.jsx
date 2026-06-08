import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import api from '../services/api';

function Register() {
    const [form , setForm] = useState({
        username:"",
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };

    const register =  async()=>{
        await api.post("/auth/register" , form);
        navigate("/");
    };


  return (

    <>
        <h2>Register</h2>
        <input name="username" placeholder='Username' onChange={handleChange} />
        <input name="email" type='email' placeholder='Email' onChange={handleChange} />
        <input name="password" type='password' placeholder='Password' onChange={handleChange} />

        <button onClick={register}>Register</button>
    </>
    
  )
}

export default Register