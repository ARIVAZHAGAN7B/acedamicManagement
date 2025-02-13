import React, { useState } from "react";

const AllStudents = () => {
  const [alldata,setAllData] = useState("")
  const handleClick = async() => {
    const res = await fetch ("http://localhost:5050/api/allstudents")
    const data = await res.json();
    setAllData(data.res)
  }
  return (
    <>
    <h1></h1>
    <button onClick={handleClick}>Getdetails</button>
    </>
  );
};

export default AllStudents;
