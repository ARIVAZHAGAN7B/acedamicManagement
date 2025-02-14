const pool = require("../../Config/db");

const AddAssignments = async (req, res) => {
    try {
        const{classs,taskname,description,date} = req.body;
        const query =   `insert into assignments(classs,taskname,description,enddate) values (?,?,?,?)`
        const [result] = await pool.query(query,[classs,taskname,description,date]);
        res.status(200).json({ message: "Assignment added successfully" });
    } catch (error) {
        console.error("Error adding assignment:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { AddAssignments };
