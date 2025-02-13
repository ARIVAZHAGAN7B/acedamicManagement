import React, { useState } from "react";

const DeleteFaculty = () => {
  const [deleteUser, setDeleteUser] = useState("");

  const handleChange = (e) => {
    setDeleteUser(e.target.value);
  };

  const handleClick = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/deletefaculty", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: deleteUser }), 
      });

      const data = await res.json(); 

      if (res.ok) {
        alert("User deleted successfully");
        setDeleteUser(""); 
      } 
    } catch (error) {
      console.error("Error deleting user:", error);
      console.log("Server error, try again!");
    }
  };

  return (
    <div>
      <h1>Delete Faculty</h1>
      <input 
        type="text" 
        name="deleteUser" 
        onChange={handleChange} 
        value={deleteUser} 
        placeholder="Enter Faculty Name to Delete"
      />
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default DeleteFaculty;
