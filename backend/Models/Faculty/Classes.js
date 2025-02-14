const pool = require("../../Config/db");

const Classes = async (req, res) => {
    const {name} = req.params;
    try {
        if (!name) {
            return res.status(400).json({ message: "Name parameter is required" });
        }

        const query = `SELECT first, second, third, fourth, fifth FROM classes WHERE faculty_name = ?`;
        const [result] = await pool.query(query, [name]);

        if (result.length === 0) {
            return res.status(404).json({ message: "No classes found for this user" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        console.error("Error fetching classes:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Classes };
