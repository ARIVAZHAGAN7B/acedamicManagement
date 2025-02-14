import React, { useEffect, useState } from "react";

const Assignments = ({classes="C"}) => {
  const[assignments,setAssignments] = useState([]);
  useEffect(()=>{
    const fetchAssignments = async() => {
      const res = await fetch (`http://localhost:5050/api/assignments/${classes}`);
      const data = await res.json();
      setAssignments(data.assignments);
    }
    fetchAssignments();
  },[classes]);
  return (
    <div>
      <h1>Assignments for class : {classes}</h1>
      {assignments.length > 0 ? (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((value,index) => (
              <tr key={index}>
                <td>{value.taskname}</td>
                <td>{value.description}</td>
                <td>{value.enddate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ):(
        <p>Empty No Assignments</p>
      )}
    </div>
  );
};

export default Assignments;
