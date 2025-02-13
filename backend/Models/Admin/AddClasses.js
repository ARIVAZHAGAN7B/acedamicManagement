const pool = require("../../Config/db");
const AddClasses = async (req, res) => {
    try {
        const {name,first,second,third,fourth,fifth} = req.body
        const query =  `insert into classes (faculty_name,first,second,third,fourth,fifth) values (?,?,?,?,?,?)`;
        const [result] = await pool.query(query,[name,first,second,third,fourth,fifth]);
        res.status(200).json({ message: "Class added successfully" });
    } catch (error) {
        console.error("Error adding class:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { AddClasses };
