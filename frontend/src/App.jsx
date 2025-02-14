import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AppLayout from "./AppLayout/AppLayout";
import Login from "./Pages/Login/Login";

function App() {
  const [role, setRole] = useState(localStorage.getItem("userRole") || null);
  const [userdata,setUserdata] = useState({name:"",class:""}); 
  useEffect(() => {
    if (role) {
      localStorage.setItem("userRole", role);
    }
  }, [role]);

  return (
    <BrowserRouter>
      {!role ? (
        <Login setRole={setRole} setUserdata={setUserdata} />
      ) : (
        <>
          <Navbar role={role} userdata={userdata} />
          <AppLayout role={role} userdata={userdata} />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
