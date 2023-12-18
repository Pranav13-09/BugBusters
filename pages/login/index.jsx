import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function login() {

      const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user, setUser] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email, pass, user);
          const response = await signIn("credentials", {
      email: email,
      password: pass ,
      user:user ,
    });
    console.log(response,"i am here")
    }


  return (
   <div className="auth-form-container">
            <h2>Login to Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="userRole">User Role</label>
                <select value={user} onChange={(e) => setUser(e.target.value)} id="userRole" name="userRole">
                    <option value="" disabled>Select user role</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <div className="forgot-password-link">
                <a href="#">Forgot your password?</a>
            </div>
                <button type="submit">Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
  );
}
