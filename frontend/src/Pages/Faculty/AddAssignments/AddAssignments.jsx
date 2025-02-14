import React, { useState } from "react";

const AddAssignments = () => {
  const[assignments,setAssignments] = useState({
    classs:"",
    taskname:"",
    description:"",
    date:""
  });

  const handleChange = (e) => {
    setAssignments({
      ...assignments,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async() => {
    const res = await fetch("http://localhost:5050/api/addassignments",{
      method:"POST",
      headers:{"Content-Type" : "application/json" },
      body:JSON.stringify(assignments)
    })
  }
  return (
    <>
    <div>
      <br/>
      <input type="text" value={assignments.classs} onChange={handleChange} name="classs" placeholder="Class" />
      <input type="text" value={assignments.taskname} onChange={handleChange} name="taskname" placeholder="Taskname" />
      <input type="text" value={assignments.description} onChange={handleChange} name="description" placeholder="Description" />
      <input type="datetime-local" value={assignments.date} onChange={handleChange} name="date" placeholder="End Date" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
    </>
  );
};

export default AddAssignments;
