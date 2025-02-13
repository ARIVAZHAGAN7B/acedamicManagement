import React, { useState } from "react";

const AddClasses = () => {
  const [allocateClass,setAllocateClass] = useState({
    name:"",
    first:"",
    second:"",
    third:"",
    fourth:"",
    fifth:"",
  })

  const handleChange = (e) => {
    setAllocateClass({
      ...allocateClass,
      [e.target.name]:e.target.value
    })
  }

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/addclasses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(allocateClass),
      });
  
      const data = await res.json();
  
      if (res.ok) {
        alert(data.message);
        setAllocateClass({ name: "", first: "", second: "", third: "", fourth: "", fifth: "" });
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };
  
  return (
    <>
    <h1></h1>
    <input type="name" value={allocateClass.name} onChange={handleChange} name="name" placeholder="FacultyName"/>
    <input type="name"  value={allocateClass.first} onChange={handleChange} name="first" placeholder="FirstHour"/>
    <input type="name" value={allocateClass.second} onChange={handleChange} name="second" placeholder="SecondHour"/>
    <input type="name"  value={allocateClass.third} onChange={handleChange} name="third" placeholder="ThirdHour"/>
    <input type="name"  value={allocateClass.fourth} onChange={handleChange} name="fourth" placeholder="FourtHour"/>
    <input type="name"  value={allocateClass.fifth} onChange={handleChange} name="fifth" placeholder="FifthHour"/>
    <button onClick={handleClick}>Add</button>
    </>
  );
};

export default AddClasses;
