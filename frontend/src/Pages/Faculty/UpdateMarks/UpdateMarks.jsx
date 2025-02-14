import React, { useState } from "react";

const UpdateMarks = () => {
  const [userMark,setUserMark] = useState({
    studentname:"",
    sub1:"",
    sub2:"",
    sub3:"",
    sub4:"",
    sub5:"",
  })

  const handleChange = (e) => {
    setUserMark({
      ...userMark,
      [e.target.name]:e.target.value
    })
  }

  const handleClick = async() => {
    const res = await fetch ("http://localhost:5050/api/updatemarks",{
      method:"POST",
      headers:{"Content-Type" : "application/json"},
      body:JSON.stringify(userMark),
    })
  }
  return (
    <>
    <div>
      <br/>
      <input type="name" value={userMark.studentname} name="studentname" placeholder="Studentname" onChange={handleChange}/>
      <input type="number" value={userMark.sub1} name="sub1" placeholder="Sub1" onChange={handleChange} />
      <input type="number" value={userMark.sub2} name="sub2" placeholder="Sub2" onChange={handleChange} />
      <input type="number" value={userMark.sub3} name="sub3" placeholder="Sub3" onChange={handleChange} />
      <input type="number" value={userMark.sub4} name="sub4" placeholder="Sub4" onChange={handleChange} />
      <input type="number" value={userMark.sub5} name="sub5" placeholder="Sub5" onChange={handleChange} />
      <button onClick={handleClick}>Update</button>
    </div>
    </>
  );
};

export default UpdateMarks;
