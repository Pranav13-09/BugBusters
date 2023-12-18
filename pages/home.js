import React, { useState } from "react";
import  Login  from "../components/Login.jsx";
import  Register  from "../components/Register.jsx";
import ME from '../public/bg5.png';

const App = () => {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => setCurrentForm(formName);

  return (
    <div className="container">
      <div className="left_container">
        <img src="/bg5.png" alt="About Image" />
      </div>
      <div className="right_container">
        <div className="right_inside">
          {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />}
        </div>
      </div>
    </div>
  );
}

export default App;
