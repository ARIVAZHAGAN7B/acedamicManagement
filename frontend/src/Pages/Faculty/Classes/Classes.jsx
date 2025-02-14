import React, { useEffect, useState } from "react";

const Classes = ({ name }) => {
  const [classdata, setClassdata] = useState([]);  
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const res = await fetch(`http://localhost:5050/api/classes/${name}`);
        const data = await res.json();
        console.log("Fetched Data:", data);
        
        const valuesArray = Object.values(data);
        setClassdata(valuesArray);
      } catch (error) {
        console.error("Error fetching classes:", error);
      }
    };

    fetchClasses();
  }, [name]);

  return (
    <div>
      <h1>This is the Classes Component</h1>


      {classdata.length > 0 ? (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Hours</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {classdata.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No classes found</p>
      )}
    </div>
  );
};

export default Classes;
