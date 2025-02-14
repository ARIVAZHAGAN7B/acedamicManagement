const pool = require("../../Config/db");

const Assignments = async (req, res) => {
    try {
        const { className } = req.params;
        const query = `SELECT classs, taskname, description, enddate FROM assignments WHERE classs = ?`;
        const [result] = await pool.query(query, [className]);
        const data = result;
        if (result.length === 0) {
            return res.status(404).json({ message: "No assignments found for this class." });
        }

        res.status(200).json({ 
            message: "Assignments retrieved successfully", 
            assignments: data,
        });
    } catch (error) {
        console.error("Error fetching assignments:", error);
        res.status(500).json({ 
            message: "Server error", 
            error: error.message 
        });
    }
};

module.exports = { Assignments };
