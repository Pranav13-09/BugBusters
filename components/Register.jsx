import React, { useState ,useEffect} from "react";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';

const Register = ({ setCurrentForm }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [experience, setExperience] = useState("");
  const [qualification, setQualification] = useState("");
  const [category, setCategory] = useState("");

    const router = useRouter();
  const { data: session, status } = useSession();

  const showLogin = () => {
    setCurrentForm("login");
  };

    useEffect(() => {
    console.log("i am here okkk")
    if (status === "authenticated") {
      if (type == "user") {
        router.push("/authenticated");
      } else if (type == "author") {
        router.push("/authenticated");
      } else if (type == "subjectExpert") {
        router.push("/authenticated");
      } else {
        router.push("/authenticated");
      }
    }
    console.log("i am here okk")
  }, [session,router]);

  const handleSubmit = async (e) => {
    const info = {
      degree:qualification,
      experience:experience,
      domain: category
    }
    e.preventDefault();
    try {
      const response = await axios.post(`/api/auth/register`, {
        name: name,
        email: email,
        password: pass,
        type: type,
        info:info
      });
      toast.success("Registeration Succesful.Please Login to continue")
      console.log("I am sent");
      setEmail("");
      setPass("");
      setName("")
      setCategory("");
      setQualification("")
      setExperience("")
      console.log(response, "i am response");
    } catch (e) {
      console.log(e, "i am error");
    }
  };

  return (
    <>
        <div className="flex w-screen h-screen justify-center items-center bg-slate-300">
      <img src="/logo.jpg" className="w-7/12 h-3/4" />
      <div className="flex flex-col items-center w-4/12 h-3/4 p-5 bg-slate-200 overflow-auto">
        <h1 className="text-2xl text-blue-900 font-bold">Register</h1>
        <div className="w-4/5 text-md mt-2">Name</div>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className="w-4/5 mt-1 p-2 bg-white rounded-lg"
        />
        <div className="w-4/5 text-md mt-2">Email</div>
        <input
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setEmail(e.target.value)}
          className="w-4/5 mt-1 p-2 bg-white rounded-lg"
        />
        <div className="w-4/5 text-md mt-2">Password</div>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPass(e.target.value)}
          className="w-4/5 mt-1 p-2 bg-white rounded-lg"
        />
        <div className="w-4/5 text-md mt-2">User Role</div>
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
        {type === "author" && (
          <>
            <div className="w-4/5 text-md mt-2">Experience</div>
            <input
              type="number"
              className="w-4/5 mt-1 p-2 bg-white rounded-lg"
              onChange={(e) => setExperience(e.target.value)}
            />

            <select
              onChange={(e) => setQualification(e.target.value)}
              className="mt-3 p-2 w-4/5 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Qualification
              </option>
              <option value="0">None</option>
              <option value="1">UG</option>
              <option value="2">PG</option>
              <option value="3">PHD</option>
            </select>

            <select
              onChange={(e) => setCategory(e.target.value)}
              className="mt-3 p-2 w-4/5 border rounded-lg"
            >
              <option value="-" disabled selected>
                Select Qualification Category
              </option>
              <option value="ayurveda">Ayurveda</option>
              <option value="yoga">Yoga</option>
              <option value="unani">Unani</option>
              <option value="siddha">Siddha</option>
              <option value="homeopathy">Homeopathy</option>
            </select>
          </>
        )}
        <div
          onClick={handleSubmit}
          className="w-4/5 text-xl mt-5 p-2 text-center rounded-lg text-white bg-blue-900 hover:cursor-pointer "
        >
          Register
        </div>
        <div
          onClick={showLogin}
          className="flex w-4/5 text-blue-500 cursor-pointer justify-center mt-1"
        >
          Already have an account? Login
        </div>
      </div>
       </div>  

       <ToastContainer
          position="top-right"
          autoClose={4000}
          className=" font-medium"
        />
    </>
  
  );
};

export default Register;
