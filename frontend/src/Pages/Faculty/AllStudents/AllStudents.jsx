import React, { useState } from "react";

const AllStudents = () => {
  const [alldata, setAllData] = useState([]);

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/allstudents");
      const data = await res.json();
      console.log("Fetched Data:", data);

      if (Array.isArray(data)) {
      } else if (Array.isArray(data.res)) {
        setAllData(data.res); 
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>This page contains all Students' names and Classes</h1>
      <button onClick={handleClick}>Get Details</button>
      
      {alldata.length > 0 ? (
        <ul>
          {alldata.map((student, index) => (
            <li key={index}>
              Class: {student.class} | Name: {student.student_name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found</p>
      )}
    </>
  );
};

export default AllStudents;
