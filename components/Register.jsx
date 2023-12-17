import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

 const Register = (props) => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
        console.log("I am sending")
        console.log(name, email,pass,user,"i am all the info" )
        const response = await axios.post(`/api/auth/register`, {
        name:name,
        email: email,
        password: pass,
        type: user,
        });
        console.log("I am sent")
        console.log(response,"i am response")
        
        }catch(e){
        console.log(e,"i am error")
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <label htmlFor="userRole">User Role</label>
                <select value={user} onChange={(e) => setUser(e.target.value)} id="userRole" name="userRole">
                    <option value="" disabled>Select user role</option>
                    <option value="author">Author</option>
                    <option value="user">User</option>
                    <option value="expert">Subject Expert</option>
                </select>
            <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}

export default Register