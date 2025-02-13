const express = require("express");
const router = express.Router()

const { AddFaculty } = require("../Models/Admin/AddFaculty");
const { AddClasses } = require("../Models/Admin/AddClasses");
const { DeleteFaculty } = require("../Models/Admin/DeleteFaculty");
const { AddAssignments } = require("../Models/Faculty/AddAssignment");
const { AllStudents } = require("../Models/Faculty/AllStudents");
const { UpdateMarks } = require("../Models/Faculty/UpdateMarks");
const { Classes } = require("../Models/Faculty/Classes");
const { Marks} = require("../Models/Students/Marks");
const { Assignments } = require("../Models/Students/Assignments");


router.post("/addfaculty",AddFaculty);
router.post("/addclasses",AddClasses);
router.delete("/deletefaculty",DeleteFaculty);
router.put("/addassignments",AddAssignments);
router.put("/updatemarks",UpdateMarks);
router.get("/allstudents",AllStudents);
router.get("/classes",Classes);
router.get("/marks",Marks);
router.get("/assignments",Assignments);

module.exports = router;
