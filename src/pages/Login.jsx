import React, { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import api from '../services/api';

function Login() {
    const [form , setForm] = useState({
        email:"",
        password:""
    })

    const navigate = useNavigate()

    const handleChange = (e)=>{
        setForm({...form, [e.target.name]:e.target.value});
    };

    const login =  async()=>{
        const  res = await api.post("/auth/login" , form);
        
        localStorage.setItem("token" , res.data.token);
        localStorage.setItem("user" , JSON.stringify(res.data.user));
        navigate("/chat");



    };


  return (

    <>
        <h2>Login</h2>
        <input name="email" type='email' placeholder='Email' onChange={handleChange} />
        <input name="password" type='password' placeholder='Password' onChange={handleChange} />

        <button onClick={login}>Login</button>
    </>
    
  )
}

export default Login;