const pool = require("../../Config/db");

const UpdateMarks = async (req, res) => {
    try {
        const {studentname,sub1,sub2,sub3,sub4,sub5} = req.body;
        const query=`insert into marks(studentname,sub1,sub2,sub3,sub4,sub5) values (?,?,?,?,?,?)`;
        const [result] = await pool.query(query,[studentname,sub1,sub2,sub3,sub4,sub5]);
        res.status(200).json({ message: "Marks updated successfully" });
    } catch (error) {
        console.error("Error updating marks:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { UpdateMarks };
