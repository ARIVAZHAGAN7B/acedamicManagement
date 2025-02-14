import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
function Login({ setRole,setUserdata }) {
  const Navigate = useNavigate();
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]:e.target.value
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5050/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      if (response.ok) {
        setRole(data.role);
        setUserdata({name:data.username});
        localStorage.setItem("userRole", data.role);
        Navigate(`/${data.role}`);
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="main-div">
      <h2>Login Page</h2>
      <div className="input-div">
      <input type="text" name="username" placeholder="Username" value={credentials.username}onChange={handleChange} className="input-tag"/>
      <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChange} className="input-tag"/>
      <button onClick={handleLogin} className="submit-btn">Login</button>
      </div>
    </div>
  );
}

export default Login;
