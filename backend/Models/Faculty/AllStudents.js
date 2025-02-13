const pool = require("../../config/db");
const AllStudents = async (req, res) => {
    try {
        const query = `select student_name,class from students`
        const [result] = await pool.query(query);
        const data = result;
        res.status(200).json({ message: "Students retrieved successfully" , res:data});
    } catch (error) {
        console.error("Error fetching students:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { AllStudents };
