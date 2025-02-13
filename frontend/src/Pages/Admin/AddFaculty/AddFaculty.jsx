import React, { useState } from "react";

const AddFaculty = () => {
  const [user,setUser] = useState({
    name:"",
    password:"",
    role:"faculty"
  })

  const handleClick = async(e) => {
    const res = await fetch("http://localhost:5050/api/addfaculty",{
      method:"POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
  }
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:e.target.value,
    })
  }
  return (
    <>
    <div>
      <h1></h1>
      <input type="name" value={user.name} name="name" onChange={handleChange}/>
      <input type="password" value={user.password} name="password" onChange={handleChange}/>
      <button onClick={handleClick}>Add</button>
    </div>
    </>
  );
};

export default AddFaculty;
