import React, { useEffect, useState } from "react";

const Marks = ({name="student1"}) => {
  const [markdata,setMarkdata] = useState([]);
  useEffect(()=>{
    const fetchMarks = async() => {
      const res = await fetch (`http://localhost:5050/api/marks/${name}`);
      const data = await res.json();
      const valuesArray = Object.values(data.res);
      setMarkdata(valuesArray);
    }

    fetchMarks();
  },[name]);
  return (
    <div>
      <h1>Marks of Student : {name}</h1>
      {markdata.length > 0 ? (
  <table border="1" cellPadding="10" style={{ borderCollapse: "collapse", width: "50%" }}>
    <thead>
      <tr>
        <th>Tamil</th>
        <th>English</th>
        <th>Physics</th>
        <th>Chemistry</th>
        <th>Maths</th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td>{markdata[0]}</td>
            <td>{markdata[1]}</td>
            <td>{markdata[2]}</td>
            <td>{markdata[3]}</td>
            <td>{markdata[4]}</td>
      </tr>
    </tbody>
  </table>
) : (
  <p>No marks found</p>
)}
    </div>
  );
};

export default Marks;
