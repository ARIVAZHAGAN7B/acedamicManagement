import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AppLayout from "./AppLayout/AppLayout";
import Login from "./Pages/Login/Login";

function App() {
  const [role, setRole] = useState(localStorage.getItem("userRole") || null);

  useEffect(() => {
    if (role) {
      localStorage.setItem("userRole", role);
    }
  }, [role]);

  return (
    <BrowserRouter>
      {!role ? (
        <Login setRole={setRole} />
      ) : (
        <>
          <Navbar role={role} />
          <AppLayout role={role} />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
