import React, { useState } from "react";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import ME from "../public/bg5.png";

const App = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => setCurrentForm(formName);

  return (
    <>
      {currentForm === "login" ? (
        <Login setCurrentForm={setCurrentForm} />
      ) : (
        <Register setCurrentForm={setCurrentForm} />
      )}
    </>
  );
};

export default App;
