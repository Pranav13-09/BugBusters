import React, { useState ,useEffect} from "react";
import { signIn,useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function login(props) {

     const router = useRouter();
      const { data: session, status } = useSession();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [type, setType] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email, pass, type);
        try{
            const response = await signIn("credentials", {
            email: email,
            password: pass,
            type:type,
            });
            console.log(response,"i am here")
            router.push("/authenticated")
        }catch(err){
          console.log(err,"i am error")
        }
  
    }

  //    useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.push('/authenticated'); // Redirect to '/authenticated' route upon successful authentication
  //   }
  // }, [status, router]);


  return (
   <div className="auth-form-container">
            <h2>Login to Your Account</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <label htmlFor="userRole">User Role</label>
                <select value={type} onChange={(e) => setType(e.target.value)} id="userRole" name="userRole">
                    <option value="" disabled>Select user role</option>
                    <option value="author">Author</option>
                    <option value="user">User</option>
                    <option value="expert">Subject Expert</option>
                </select>
                <div className="forgot-password-link">
                <a href="#">Forgot your password?</a>
            </div>
                <button type="submit" classname="submit1" >Login</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
  );
}
