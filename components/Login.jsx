import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/router";

export default function login(props) {
  const router = useRouter();
  const { data: session, status } = useSession();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, pass, type);
    // try {
    //   const response = await signIn("credentials", {
    //     email: email,
    //     password: pass,
    //     type: type,
    //   });
    //   console.log(response, "i am here");
    //   router.push("/authenticated");
    // } catch (err) {
    //   console.log(err, "i am error");
    // }
  };

  //    useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.push('/authenticated'); // Redirect to '/authenticated' route upon successful authentication
  //   }
  // }, [status, router]);

  return (
    <div className="flex w-screen h-screen justify-center items-center bg-slate-300">
      <img src="/logo.jpg" className="w-7/12 h-2/3" />
      <div className="flex flex-col items-center justify-center w-4/12 h-2/3 p-5 bg-slate-200">
        <h1 className="text-3xl text-blue-900 font-bold">Login</h1>
        <div className="w-4/5 text-lg mt-3">Email</div>
        <input
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-4/5 mt-1 p-2 bg-white rounded-lg"
        />
        <div className="w-4/5 text-lg mt-3">Password</div>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
          className="w-4/5 mt-1 p-2 bg-white rounded-lg"
        />
        <div className="w-4/5 text-lg mt-3">User Role</div>
        <select
          onChange={(e) => setType(e.target.value)}
          className="mt-1 p-2 w-4/5 border rounded-lg"
        >
          <option value="-" disabled selected>
            Select User Type
          </option>
          <option value="user">User</option>
          <option value="author">Author</option>
          <option value="subjectExpert">Subject Expert</option>
          <option value="committee">Committee</option>
        </select>
        <div
          onClick={handleSubmit}
          className="w-4/5 text-xl mt-10 p-3 text-center rounded-lg text-white bg-blue-900"
        >
          Login
        </div>
      </div>
    </div>
  );
}
