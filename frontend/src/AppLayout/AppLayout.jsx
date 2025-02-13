import { Routes, Route } from "react-router-dom";
import AddFaculty from "../Pages/Admin/AddFaculty/AddFaculty";
import AddClasses from "../Pages/Admin/AddClasses/AddClasses";
import DeleteFaculty from "../Pages/Admin/DeleteFaculty/DeleteFaculty";
import Marks from "../Pages/Student/Marks/Marks";
import Assignments from "../Pages/Student/Assignments/Assignments";
import Classes from "../Pages/Faculty/Classes/Classes";
import AddAssignments from "../Pages/Faculty/AddAssignments/AddAssignments";
import UpdateMarks from "../Pages/Faculty/UpdateMarks/UpdateMarks";
import AllStudents from "../Pages/Faculty/AllStudents/AllStudents";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Student/Home/Home";
const AppLayout = ({ role }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>}/>
      {role === "admin" && (
        <>
          <Route path="/admin/addfaculty" element={<AddFaculty />} />
          <Route path="/admin/addclasses" element={<AddClasses />} />
          <Route path="/admin/deletefaculty" element={<DeleteFaculty />} />
        </>
      )}

      {role === "student" && (
        <>
        <Route path="/student/home" element={<Home/>}/>
          <Route path="/student/marks" element={<Marks />} />
          <Route path="/student/assignments" element={<Assignments />} />
        </>
      )}


      {role === "faculty" && (
        <>
          <Route path="/faculty/classes" element={<Classes />} />
          <Route path="/faculty/addassignments" element={<AddAssignments />} />
          <Route path="/faculty/updatemarks" element={<UpdateMarks />} />
          <Route path="/faculty/allstudents" element={<AllStudents />} />
        </>
      )}
    </Routes>
  );
};

export default AppLayout;
