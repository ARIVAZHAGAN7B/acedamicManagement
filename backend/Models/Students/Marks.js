const pool = require("../../Config/db"); 

const Marks = async (req, res) => {
    try {
        const {name} = req.params;
        const query = `select sub1,sub2,sub3,sub4,sub5 from marks where studentname=?`;
        const [result] = await pool.query(query,[name]); 
        const data = result[0];
        res.status(200).json({ message: "Marks retrieved successfully" , res:data});
    } catch (error) {
        console.error("Error fetching marks:", error);
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = { Marks };
