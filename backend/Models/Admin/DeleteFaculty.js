const pool = require("../../Config/db")
const DeleteFaculty = async (req, res) => {
    try {
        const {username} = req.body
        const query = `delete from auth where username=?`;
        const [result] = await pool.query(query,[username]);
        res.status(200).json({ message: "Faculty deleted successfully" });
    } catch (error) {
        console.error("Error deleting faculty:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { DeleteFaculty };
